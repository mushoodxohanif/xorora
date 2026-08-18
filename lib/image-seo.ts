import { getPageKeywords, stripBrandSuffix } from "@/lib/seo-keywords";

function ensureDistinct(
  alt: string,
  title: string,
): { alt: string; title: string } {
  if (alt === title && process.env.NODE_ENV === "development") {
    console.warn(`[image-seo] alt and title are identical: "${alt}"`);
  }
  return { alt, title };
}

export function imageAltTitle(opts: {
  primary: string;
  secondary: string;
  context?: string;
}): { alt: string; title: string } {
  const alt = opts.context ? `${opts.primary} — ${opts.context}` : opts.primary;
  const title = opts.secondary;
  return ensureDistinct(alt, title);
}

export function caseStudyCardAlt(metaTitle: string, tag: string): string {
  return `${stripBrandSuffix(metaTitle)} — ${tag}`;
}

export function caseStudyCardTitle(statLabel: string, detail: string): string {
  const trimmed = detail.length > 80 ? `${detail.slice(0, 77)}...` : detail;
  return `${statLabel} — ${trimmed}`;
}

export function caseStudyHeroAlt(metaTitle: string, tag: string): string {
  return `${stripBrandSuffix(metaTitle)} — ${tag} platform dashboard`;
}

export function caseStudyHeroTitle(title: string): string {
  return `${title.replace(/\.$/, "")} — custom software development case study`;
}

export function caseStudySectionTitle(
  sectionTitle: string | undefined,
  tag: string,
): string {
  const heading = sectionTitle ?? "Case study";
  return `${heading} — ${tag} by Xorora`;
}

export function industryTileAlt(metaTitle: string): string {
  return stripBrandSuffix(metaTitle);
}

export function industryTileTitle(name: string, desc: string): string {
  return `${name} — ${desc}`;
}

export function brandLogoAlt(variant: "full" | "icon" | "wordmark"): {
  alt: string;
  title: string;
} {
  const [primary, secondary] = getPageKeywords("brand");
  switch (variant) {
    case "full":
      return ensureDistinct(
        `${primary} — Xorora`,
        `${secondary} — production AI and custom software`,
      );
    case "icon":
      return ensureDistinct(
        "Xorora logo icon",
        `${primary} — AI software development`,
      );
    case "wordmark":
      return ensureDistinct("Xorora", `${primary} — ${secondary}`);
  }
}

export function featuredCaseAlt(metaTitle: string): string {
  return `${stripBrandSuffix(metaTitle)} — case study by Xorora`;
}

export function blogImageAlt(title: string): string {
  return title;
}

export function blogImageTitle(excerpt: string, category: string): string {
  const trimmed = excerpt.length > 80 ? `${excerpt.slice(0, 77)}...` : excerpt;
  return trimmed || `${category} — Xorora engineering blog`;
}

export function processStepAlt(stepNum: string, stepTitle: string): string {
  return `Step ${stepNum}: ${stepTitle} — software development process`;
}

export function processStepTitle(stepTitle: string): string {
  return `${stepTitle} — agile delivery process`;
}

export function losonoImageAltTitle(
  variant:
    | "dashboard-hero"
    | "dashboard-overview"
    | "prompt-config"
    | "pre-chat"
    | "chat-widget"
    | "voice-widget",
): { alt: string; title: string } {
  const pairs: Record<typeof variant, { alt: string; title: string }> = {
    "dashboard-hero": {
      alt: "AI agent platform dashboard — usage and agent performance",
      title: "Conversational AI and workflow automation — Losono by Xorora",
    },
    "dashboard-overview": {
      alt: "AI agents monitoring — activity, seats, and traffic",
      title: "Production AI agent lifecycle management",
    },
    "prompt-config": {
      alt: "Generative AI prompt configuration with live preview",
      title: "RAG Pipelines and agent training interface",
    },
    "pre-chat": {
      alt: "Conversational AI pre-chat lead capture forms",
      title: "Lead qualification integrated with Lead'em CRM",
    },
    "chat-widget": {
      alt: "Embeddable conversational AI chat widget",
      title: "AI Agent Development — website embed widget",
    },
    "voice-widget": {
      alt: "AI voice agent widget for phone and web",
      title: "Conversational AI voice interface — Losono",
    },
  };
  return pairs[variant];
}

export function leademImageAltTitle(variant: "kanban" | "dashboard"): {
  alt: string;
  title: string;
} {
  const pairs: Record<typeof variant, { alt: string; title: string }> = {
    kanban: {
      alt: "B2B sales CRM kanban pipeline — drag-and-drop stages",
      title: "AI-powered lead qualification for Google Workspace",
    },
    dashboard: {
      alt: "Lead'em CRM dashboard — full outreach workspace",
      title: "B2B Digital Marketing pipeline management",
    },
  };
  return pairs[variant];
}
