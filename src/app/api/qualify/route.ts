import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add unique ID and timestamp
    const submission = {
      id: Math.random().toString(36).substring(2, 11),
      timestamp: new Date().toISOString(),
      ...data,
    };

    // 1. Save locally to src/data/submissions.json (always active as backup)
    const filePath = path.join(process.cwd(), "src", "data", "submissions.json");
    let submissions = [];
    
    try {
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf-8");
        submissions = JSON.parse(fileData);
      }
    } catch (e) {
      console.error("Failed to read existing submissions file:", e);
    }

    submissions.push(submission);
    
    try {
      const dirPath = path.dirname(filePath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), "utf-8");
    } catch (e) {
      console.error("Failed to write local submission file:", e);
    }

    // 2. Direct Google Sheets Integration
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (spreadsheetId && clientEmail && privateKey) {
      try {
        const auth = new google.auth.JWT({
          email: clientEmail,
          key: privateKey.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });
        
        // Append row: ID, Timestamp, Role, RoleOther, Revenue, Spend, Industry, IndustryOther, Pain, Timeline, Email, Website, Notes, Qualified
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: "Sheet1!A:N",
          valueInputOption: "RAW",
          requestBody: {
            values: [
              [
                submission.id,
                submission.timestamp,
                submission.role || "",
                submission.roleOther || "",
                submission.revenue || "",
                submission.paidSpend || "",
                submission.industry || "",
                submission.industryOther || "",
                submission.pain || "",
                submission.timeline || "",
                submission.email || "",
                submission.website || "",
                submission.notes || "",
                submission.qualified ? "TRUE" : "FALSE",
              ],
            ],
          },
        });
        console.log("Successfully appended row to Google Sheet");
      } catch (err) {
        console.error("Failed to write to Google Sheet API:", err);
      }
    } else {
      console.warn("Google Sheets credentials are not fully configured in environment variables.");
    }

    // 3. Webhook forwarding fallback (if configured)
    const webhookUrl = process.env.QUALIFY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission),
        });
      } catch (err) {
        console.error("Webhook forwarding failed:", err);
      }
    }

    return NextResponse.json({ success: true, qualified: submission.qualified });
  } catch (error) {
    console.error("Submit qualify error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
