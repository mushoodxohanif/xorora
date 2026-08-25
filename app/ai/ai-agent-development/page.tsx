import type { Metadata } from "next";
import {
  AadContact,
  AadDeliver,
  AadFaq,
  AAD_FAQS,
  AadHero,
  AadIndustries,
  AadPillars,
  AadProcess,
  AadTech,
  AadWhy,
} from "@/components/ai/ai-agent-development";
import { RelatedCaseStudies } from "@/components/case-study/related-case-studies";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "AI Agent Development Services | Xorora";
const META_DESCRIPTION =
  "Xorora's AI agent development builds agents and copilots that automate workflows, connect your tools, and ship to production, not just demos. Discovery to scale.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "AI agent development",
    "AI agent development services",
    "agentic AI",
    "AI copilots",
    "workflow automation agents",
    "multi-agent systems",
    "generative AI agents",
  ],
  alternates: { canonical: "/ai/ai-agent-development" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/ai/ai-agent-development",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Agent Development Services",
  name: "AI Agent Development Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/ai/ai-agent-development`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AAD_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI",
      item: `${SITE_URL}/ai`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Agent Development",
      item: `${SITE_URL}/ai/ai-agent-development`,
    },
  ],
};

export default function AiAgentDevelopmentPage() {
  return (
    <div className="bg-surface">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AadHero />
      <AadDeliver />
      <AadProcess />
      <AadWhy />
      <AadPillars />
      <AadIndustries />
      <AadTech />
      <RelatedCaseStudies
        servicePath="/ai/ai-agent-development"
        title="AI agent development case studies"
        sub="Agents and copilots that reached production — one study at a time."
      />
      <AadFaq />
      <AadContact />
    </div>
  );
}
