import type { IndustrySlug } from "@/lib/industries/types";

export const SEO_KEYWORDS = {
  brand: [
    "AI development partner",
    "custom software development",
    "production AI",
    "AI software development",
  ],
  engineering: [
    "software product engineering services company",
    "AI software development services",
    "legacy application modernization services",
    "MVP & POC development services",
    "custom mobile app development services",
    "CMS development services",
    "UI/UX design services",
    "python web development services",
  ],
  ai: [
    "AI Agent Development Services",
    "ML & Data Science Services",
    "Workflow Automation Services",
    "RAG Pipelines",
    "Generative AI",
    "Conversational AI",
  ],
  consulting: [
    "IT Consulting Services",
    "Discovery Workshop Services",
    "AI Consulting Services",
    "AI Digital Transformation Services",
  ],
  managed: [
    "IT Managed Services",
    "Managed Cybersecurity Services",
    "Managed Network Services",
    "Managed Server Services",
    "Managed IT Asset Services",
  ],
  marketing: [
    "Digital Marketing Services",
    "Professional SEO Services",
    "B2B Digital Marketing Services",
    "Paid Ads Services",
    "Meta Ads Services",
    "Social Media Marketing Services",
  ],
  engagement: [
    "Engagement Models",
    "IT Staff Augmentation Services",
    "Staff Augmentation Consulting Services",
  ],
  process: [
    "software development process",
    "agile delivery process",
    "dedicated development team",
    "staff augmentation",
    "how we work",
  ],
  losono: [
    "AI agents",
    "conversational AI",
    "voice agents",
    "knowledge base",
    "AI agent lifecycle",
    "embeddable chat widget",
  ],
  leadem: [
    "B2B sales CRM",
    "Google Workspace CRM",
    "AI-powered lead qualification",
    "B2B outreach pipeline",
    "kanban sales pipeline",
  ],
  clearbeam: [
    "real-time SaaS event monitoring",
    "API-first alerts",
    "SaaS event delivery",
    "product event monitoring",
  ],
  industries: {
    "health-tech": "Healthcare Software Development Services",
    "real-estate": "Real Estate Software Development",
    fintech: "Custom Fintech Software Development",
    ecommerce: "E-commerce Software Development Company",
    edtech: "Custom EdTech Software Development",
    logistics: "Logistics Software Development Company",
    saas: "Custom SaaS Development Company",
    startups: "Software Development for Startups",
    "travel-hospitality":
      "Travel and Hospitality Software Development Services",
  } satisfies Record<IndustrySlug, string>,
} as const;

export type PageKeywordContext = keyof typeof SEO_KEYWORDS;

export function stripBrandSuffix(metaTitle: string): string {
  return metaTitle.replace(/\s*\|\s*Xorora\s*$/, "").trim();
}

export function getIndustryKeyword(
  slug: IndustrySlug,
  metaTitle?: string,
): string {
  if (metaTitle) {
    return stripBrandSuffix(metaTitle);
  }
  return SEO_KEYWORDS.industries[slug];
}

export function getCaseStudyKeywords(
  tags: string[],
  metaTitle: string,
): { primary: string; secondary: string } {
  const primary = tags[0] ?? stripBrandSuffix(metaTitle);
  const secondary = stripBrandSuffix(metaTitle);
  return { primary, secondary };
}

export function getPageKeywords(
  context: Exclude<PageKeywordContext, "industries">,
): readonly string[] {
  return SEO_KEYWORDS[context];
}
