import type { Metadata } from "next";
import {
  AcChallenges,
  AcContact,
  AcDeliver,
  AcDifference,
  AcFaq,
  AC_FAQS,
  AcHero,
  AcIndustries,
  AcProcess,
  AcWhy,
} from "@/components/consulting/ai-consultation";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI Consultation Services for Enterprises | Xorora",
  description:
    "Xorora's AI consultation services help enterprises turn AI into measurable outcomes. Assess readiness, build a roadmap, and deploy AI that scales.",
  keywords: [
    "AI consultation services",
    "AI consulting",
    "AI strategy and roadmap",
    "generative AI and LLM consulting",
    "AI readiness assessment",
    "AI governance and security",
    "AI upskilling",
  ],
  alternates: { canonical: "/consulting/ai-consultation-services" },
  openGraph: {
    title: "AI Consultation Services for Enterprises | Xorora",
    description:
      "Xorora's AI consultation services help enterprises turn AI into measurable outcomes. Assess readiness, build a roadmap, and deploy AI that scales.",
    url: "/consulting/ai-consultation-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultation Services for Enterprises | Xorora",
    description:
      "Xorora's AI consultation services help enterprises turn AI into measurable outcomes.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Consultation Services",
  name: "AI Consultation Services",
  description:
    "Xorora's AI consultation services help enterprises turn AI into measurable outcomes. Assess readiness, build a roadmap, and deploy AI that scales.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/consulting/ai-consultation-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AC_FAQS.map((f) => ({
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
      name: "Consulting",
      item: `${SITE_URL}/consulting`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Consultation Services",
      item: `${SITE_URL}/consulting/ai-consultation-services`,
    },
  ],
};

export default function AiConsultationServicesPage() {
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
      <AcHero />
      <AcChallenges />
      <AcDeliver />
      <AcProcess />
      <AcIndustries />
      <AcWhy />
      <AcDifference />
      <AcFaq />
      <AcContact />
    </div>
  );
}
