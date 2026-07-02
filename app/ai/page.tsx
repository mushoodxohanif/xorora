import type { Metadata } from "next";
import {
  DaiChallenges,
  DaiContact,
  DaiDeliver,
  DaiEvolve,
  DaiFAQ,
  DaiHero,
  DaiServices,
  DaiTools,
} from "@/components/data-ai";
import { DAI_FAQS } from "@/components/data-ai/dai-data";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI Services — Agents, ML & Automation | Xorora",
  description:
    "AI agent development, ML, workflow automation, RAG, generative AI, and conversational AI — production-ready solutions by Xorora.",
  keywords: [
    "AI Services",
    "AI Agent Development Services",
    "ML & Data Science Services",
    "Workflow Automation Services",
    "RAG Pipelines",
    "Generative AI",
    "Conversational AI",
  ],
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "AI Services | Xorora",
    description:
      "AI agent development, ML, workflow automation, RAG, generative AI, and conversational AI — production-ready solutions by Xorora.",
    url: "/ai",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services | Xorora",
    description:
      "AI agents, ML, workflow automation, RAG, generative AI, and conversational AI — engineered for production.",
  },
};

const SERVICE_CATALOG = [
  "AI Agent Development Services",
  "ML & Data Science Services",
  "Workflow Automation Services",
  "RAG Pipelines",
  "Generative AI",
  "Conversational AI",
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Services",
  name: "AI Services",
  description:
    "AI services from Xorora: agent development, ML, workflow automation, RAG pipelines, generative AI, and conversational AI.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["United States", "North America", "Europe", "Asia"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: SERVICE_CATALOG.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DAI_FAQS.map((f) => ({
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
      name: "AI Services",
      item: `${SITE_URL}/ai`,
    },
  ],
};

export default function AiPage() {
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
      <DaiHero />
      <DaiChallenges />
      <DaiServices />
      <DaiEvolve />
      <DaiDeliver />
      <DaiTools />
      <DaiFAQ />
      <DaiContact />
    </div>
  );
}
