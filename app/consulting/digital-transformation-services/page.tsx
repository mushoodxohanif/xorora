import type { Metadata } from "next";
import {
  DtChallenges,
  DtContact,
  DtDeliver,
  DtFaq,
  DT_FAQS,
  DtHero,
  DtProcess,
  DtResults,
  DtScenarios,
  DtTech,
  DtWhy,
} from "@/components/consulting/digital-transformation";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI-Led Digital Transformation Services | Xorora",
  description:
    "Xorora's AI digital transformation services help enterprises modernize, adopt AI, and move faster, with strategy, engineering, and delivery in one partner.",
  keywords: [
    "digital transformation services",
    "AI digital transformation services",
    "digital transformation consulting",
    "application modernization",
    "platform engineering",
    "data and AI",
    "business agility",
  ],
  alternates: { canonical: "/consulting/digital-transformation-services" },
  openGraph: {
    title: "AI-Led Digital Transformation Services | Xorora",
    description:
      "Xorora's AI digital transformation services help enterprises modernize, adopt AI, and move faster, with strategy, engineering, and delivery in one partner.",
    url: "/consulting/digital-transformation-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Led Digital Transformation Services | Xorora",
    description:
      "Xorora's AI digital transformation services help enterprises modernize, adopt AI, and move faster.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Transformation Services",
  name: "Digital Transformation Services",
  description:
    "Xorora's AI digital transformation services help enterprises modernize, adopt AI, and move faster, with strategy, engineering, and delivery in one partner.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/consulting/digital-transformation-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DT_FAQS.map((f) => ({
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
      name: "Digital Transformation Services",
      item: `${SITE_URL}/consulting/digital-transformation-services`,
    },
  ],
};

export default function DigitalTransformationServicesPage() {
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
      <DtHero />
      <DtChallenges />
      <DtDeliver />
      <DtProcess />
      <DtTech />
      <DtWhy />
      <DtScenarios />
      <DtResults />
      <DtFaq />
      <DtContact />
    </div>
  );
}
