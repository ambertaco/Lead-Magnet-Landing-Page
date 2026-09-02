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
    url: "/ai-search-playbook",
    isExternal: false,
    category: "funnel",
  },
  {
    title: "Healthcare AI Visibility Checklist Landing Page",
    description:
      "Campaign landing page with the 70-Point Healthcare AI Visibility Checklist download and funnel.",
    url: "/healthcare-ai-visibility-checklist",
    isExternal: false,
    category: "funnel",
  },
  {
    title: "Search Conversions Video Case Study Landing Page",
    description:
      "Campaign landing page with the embedded case study video and qualifying call funnel.",
    url: "/search-conversions-case-study",
    isExternal: false,
    category: "funnel",
  },
  {
    title: "Facebook Groups for AI Search Landing Page",
    description:
      "Campaign landing page with the embedded strategy walkthrough video and qualifying call funnel.",
    url: "/fb-groups-for-ai-search",
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
  {
    title: "70-Point Healthcare AI Visibility Checklist Document",
    description:
      "Direct Notion document containing the 70-point AI Visibility Checklist for Healthcare Websites.",
    url: "https://tacochiragkulkarni.notion.site/70-Point-AI-Visibility-Checklist-for-Healthcare-Websites-f8035979c84248c98bc2e7f20051a953",
    isExternal: true,
    category: "notion",
  },
  {
    title: "15 to 48 Search Conversions Loom Video",
    description:
      "Direct Loom video case study: 15 to 48 Search Conversions and 3 to 74 AIOs in 5 Months.",
    url: "https://www.loom.com/share/8507657907a841a8b1c9eeef2932c280",
    isExternal: true,
    category: "notion",
  },
  {
    title: "FB Groups for AI Search Loom Video",
    description:
      "Direct Loom walkthrough video: FB Groups for AI Search strategy guide.",
    url: "https://www.loom.com/share/c06765bd98834da8ba23607126e044c1",
    isExternal: true,
    category: "notion",
  },
];
