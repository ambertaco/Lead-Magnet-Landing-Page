import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // FB Groups redirects
      {
        source: "/fb_groups_for_ai_search",
        destination: "/fb-groups-for-ai-search",
        permanent: true,
      },
      {
        source: "/FB_Groups_For_AI_Search",
        destination: "/fb-groups-for-ai-search",
        permanent: true,
      },
      // Playbook redirects
      {
        source: "/ai_search_playbook",
        destination: "/ai-search-playbook",
        permanent: true,
      },
      {
        source: "/AI_Search_Playbook",
        destination: "/ai-search-playbook",
        permanent: true,
      },
      // Healthcare Checklist redirects
      {
        source: "/healthcare_ai_visibility_checklist",
        destination: "/healthcare-ai-visibility-checklist",
        permanent: true,
      },
      {
        source: "/Healthcare_AI_Visibility_Checklist",
        destination: "/healthcare-ai-visibility-checklist",
        permanent: true,
      },
      {
        source: "/healthcare-checklist",
        destination: "/healthcare-ai-visibility-checklist",
        permanent: true,
      },
      {
        source: "/healthcare-checklist-landing-page",
        destination: "/healthcare-ai-visibility-checklist",
        permanent: true,
      },
      // Case study redirects
      {
        source: "/search_conversions_case_study",
        destination: "/search-conversions-case-study",
        permanent: true,
      },
      {
        source: "/Search_Conversions_Case_Study",
        destination: "/search-conversions-case-study",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
