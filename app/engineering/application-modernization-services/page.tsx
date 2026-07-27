import type { Metadata } from "next";
import {
  AmsChallenges,
  AmsContact,
  AmsDeliver,
  AmsFaq,
  AMS_FAQS,
  AmsHero,
  AmsIndustries,
  AmsProcess,
  AmsTech,
  AmsWhy,
} from "@/components/engineering/application-modernization";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Application Modernization Services | Xorora",
  description:
    "Xorora's application modernization services upgrade and migrate legacy software with minimal disruption to your data and business processes.",
  keywords: [
    "application modernization services",
    "legacy software modernization",
    "cloud migration",
    "technical debt assessment",
    "microservices",
    "API development",
    "mainframe modernization",
  ],
  alternates: { canonical: "/engineering/application-modernization-services" },
  openGraph: {
    title: "Application Modernization Services | Xorora",
    description:
      "Xorora's application modernization services upgrade and migrate legacy software with minimal disruption to your data and business processes.",
    url: "/engineering/application-modernization-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Modernization Services | Xorora",
    description:
      "Xorora's application modernization services upgrade and migrate legacy software with minimal disruption to your data and business processes.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Application Modernization Services",
  name: "Application Modernization Services",
  description:
    "Xorora's application modernization services upgrade and migrate legacy software with minimal disruption to your data and business processes.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/engineering/application-modernization-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AMS_FAQS.map((f) => ({
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
      name: "Application Modernization Services",
      item: `${SITE_URL}/engineering/application-modernization-services`,
    },
  ],
};

export default function ApplicationModernizationServicesPage() {
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
      <AmsHero />
      <AmsChallenges />
      <AmsDeliver />
      <AmsProcess />
      <AmsWhy />
      <AmsTech />
      <AmsIndustries />
      <AmsFaq />
      <AmsContact />
    </div>
  );
}
