export interface ResourceLink {
  title: string;
  description: string;
  url: string;
  isExternal: boolean;
  category: "funnel" | "notion";
}

export const RESOURCES: ResourceLink[] = [
  {
    title: "AI Search Visibility Audit Landing Page",
    description:
      "Main landing page with the 10-Point Audit download and call qualification funnel.",
    url: "/",
    isExternal: false,
    category: "funnel",
  },
  {
    title: "AI Search Playbook Landing Page",
    description:
      "LinkedIn campaign landing page with the AI Search Playbook download and funnel.",
    url: "/AI_Search_Playbook",
    isExternal: false,
    category: "funnel",
  },
  {
    title: "10-Point AI Search Visibility Audit Document",
    description:
      "Direct Notion document containing the 10-point audit checklist.",
    url: "https://innate-target-ea7.notion.site/The-AI-Search-Visibility-Audit-72a6f3cac0cf8372bd5301530bd5436c?pvs=74",
    isExternal: true,
    category: "notion",
  },
  {
    title: "AI Search Playbook Document",
    description:
      "Direct Notion document containing the comprehensive AI Search Playbook.",
    url: "https://innate-target-ea7.notion.site/AI-Search-Playbook-2b16f3cac0cf80a6baa8c64d701fda8e",
    isExternal: true,
    category: "notion",
  },
];
