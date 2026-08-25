import type { Metadata } from "next";
import {
  AsdChallenges,
  AsdContact,
  AsdDeliver,
  AsdFaq,
  ASD_FAQS,
  AsdHero,
  AsdIndustries,
  AsdProcess,
  AsdTech,
  AsdWhy,
} from "@/components/engineering/ai-software-development";
import { RelatedCaseStudies } from "@/components/case-study/related-case-studies";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI Software Development Services | Xorora",
  description:
    "Xorora's AI software development services ship production systems, from agents and RAG to computer vision, NLP, and MLOps. Vendor-neutral across leading models.",
  keywords: [
    "AI software development services",
    "AI agents development",
    "RAG development",
    "NLP development",
    "computer vision solutions",
    "generative AI",
    "LLM fine-tuning",
    "MLOps",
  ],
  alternates: { canonical: "/engineering/ai-software-development-services" },
  openGraph: {
    title: "AI Software Development Services | Xorora",
    description:
      "Xorora's AI software development services ship production systems, from agents and RAG to computer vision, NLP, and MLOps. Vendor-neutral across leading models.",
    url: "/engineering/ai-software-development-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Development Services | Xorora",
    description:
      "Xorora's AI software development services ship production systems, from agents and RAG to computer vision, NLP, and MLOps.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Software Development Services",
  name: "AI Software Development Services",
  description:
    "Xorora's AI software development services ship production systems, from agents and RAG to computer vision, NLP, and MLOps. Vendor-neutral across leading models.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/engineering/ai-software-development-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ASD_FAQS.map((f) => ({
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
      name: "Engineering",
      item: `${SITE_URL}/engineering`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Software Development Services",
      item: `${SITE_URL}/engineering/ai-software-development-services`,
    },
  ],
};

export default function AiSoftwareDevelopmentServicesPage() {
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
      <AsdHero />
      <AsdChallenges />
      <AsdDeliver />
      <AsdTech />
      <AsdWhy />
      <RelatedCaseStudies
        servicePath="/engineering/ai-software-development-services"
        title="AI software development case studies"
        sub="Production AI systems we shipped — one study at a time."
      />
      <AsdProcess />
      <AsdIndustries />
      <AsdFaq />
      <AsdContact />
    </div>
  );
}
