import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Search Visibility Audit | Taco",
  description:
    "Get the free 10-point AI Search Visibility Audit and discover why your brand is invisible in ChatGPT, Perplexity, and Google AI Overviews. Book a 15-minute call to get a prioritized fix list.",
  keywords: [
    "AI search visibility",
    "ChatGPT SEO",
    "AI Overviews",
    "Perplexity optimization",
    "GEO",
    "generative engine optimization",
    "organic search",
    "AI search audit",
  ],
  authors: [{ name: "Chirag Kulkarni", url: "https://taco.co" }],
  openGraph: {
    title: "AI Search Visibility Audit | Taco",
    description:
      "The exact 10-point audit we run on every brand before we touch a single page. Free, no email wall.",
    url: "https://taco.co",
    siteName: "Taco",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Visibility Audit | Taco",
    description:
      "The exact 10-point audit we run on every brand before we touch a single page. Free, no email wall.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
