import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // FB Groups redirects
      {
        source: "/fb_groups_for_ai_search",
        destination: "/FB_Groups_For_AI_Search",
        permanent: true,
      },
      {
        source: "/fb-groups-for-ai-search",
        destination: "/FB_Groups_For_AI_Search",
        permanent: true,
      },
      // Playbook redirects
      {
        source: "/ai_search_playbook",
        destination: "/AI_Search_Playbook",
        permanent: true,
      },
      {
        source: "/ai-search-playbook",
        destination: "/AI_Search_Playbook",
        permanent: true,
      },
      // Healthcare Checklist redirects
      {
        source: "/healthcare_ai_visibility_checklist",
        destination: "/Healthcare_AI_Visibility_Checklist",
        permanent: true,
      },
      {
        source: "/healthcare-checklist",
        destination: "/Healthcare_AI_Visibility_Checklist",
        permanent: true,
      },
      {
        source: "/healthcare-checklist-landing-page",
        destination: "/Healthcare_AI_Visibility_Checklist",
        permanent: true,
      },
      // Case study redirects
      {
        source: "/search_conversions_case_study",
        destination: "/Search_Conversions_Case_Study",
        permanent: true,
      },
      {
        source: "/search-conversions-case-study",
        destination: "/Search_Conversions_Case_Study",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
