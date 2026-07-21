import type { Metadata } from "next";
import {
  DwChallenges,
  DwContact,
  DwDeliver,
  DwFaq,
  DW_FAQS,
  DwHero,
  DwMidCta,
  DwProcess,
  DwResults,
  DwWhy,
} from "@/components/consulting/discovery-workshop";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Discovery Workshop Services for Software Teams | Xorora",
  description:
    "Xorora's discovery workshop services turn early ideas into a costed, validated plan. Align goals, scope requirements, and de-risk the build before any code.",
  keywords: [
    "discovery workshop services",
    "software discovery workshop",
    "product scoping",
    "requirements gathering",
    "technical roadmap",
    "software design specifications",
    "MVP planning",
  ],
  alternates: { canonical: "/consulting/discovery-workshop-services" },
  openGraph: {
    title: "Discovery Workshop Services for Software Teams | Xorora",
    description:
      "Xorora's discovery workshop services turn early ideas into a costed, validated plan. Align goals, scope requirements, and de-risk the build before any code.",
    url: "/consulting/discovery-workshop-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discovery Workshop Services for Software Teams | Xorora",
    description:
      "Xorora's discovery workshop services turn early ideas into a costed, validated plan before any code.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Discovery Workshop Services",
  name: "Discovery Workshop Services",
  description:
    "Xorora's discovery workshop services turn early ideas into a costed, validated plan. Align goals, scope requirements, and de-risk the build before any code.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/consulting/discovery-workshop-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DW_FAQS.map((f) => ({
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
      name: "Discovery Workshop Services",
      item: `${SITE_URL}/consulting/discovery-workshop-services`,
    },
  ],
};

export default function DiscoveryWorkshopServicesPage() {
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
      <DwHero />
      <DwChallenges />
      <DwDeliver />
      <DwMidCta />
      <DwProcess />
      <DwResults />
      <DwWhy />
      <DwFaq />
      <DwContact />
    </div>
  );
}
