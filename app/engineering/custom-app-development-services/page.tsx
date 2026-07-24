import type { Metadata } from "next";
import {
  CadAi,
  CadChallenges,
  CadContact,
  CadDeliver,
  CadFaq,
  CAD_FAQS,
  CadHero,
  CadIndustries,
  CadPlatforms,
  CadProcess,
  CadTech,
  CadWhy,
} from "@/components/engineering/custom-app-development";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Custom App Development Services | Xorora",
  description:
    "Xorora's custom app development services build Android, iOS, and cross-platform apps around your business requirements, from architecture to long-term support.",
  keywords: [
    "custom app development services",
    "custom mobile app development",
    "Android app development",
    "iOS app development",
    "cross-platform apps",
    "enterprise mobile applications",
    "UX/UI design and development",
  ],
  alternates: { canonical: "/engineering/custom-app-development-services" },
  openGraph: {
    title: "Custom App Development Services | Xorora",
    description:
      "Xorora's custom app development services build Android, iOS, and cross-platform apps around your business requirements, from architecture to long-term support.",
    url: "/engineering/custom-app-development-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom App Development Services | Xorora",
    description:
      "Xorora's custom app development services build Android, iOS, and cross-platform apps around your business requirements, from architecture to long-term support.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom App Development Services",
  name: "Custom App Development Services",
  description:
    "Xorora's custom app development services build Android, iOS, and cross-platform apps around your business requirements, from architecture to long-term support.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/engineering/custom-app-development-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CAD_FAQS.map((f) => ({
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
      name: "Custom App Development Services",
      item: `${SITE_URL}/engineering/custom-app-development-services`,
    },
  ],
};

export default function CustomAppDevelopmentServicesPage() {
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
      <CadHero />
      <CadChallenges />
      <CadDeliver />
      <CadPlatforms />
      <CadAi />
      <CadProcess />
      <CadWhy />
      <CadTech />
      <CadIndustries />
      <CadFaq />
      <CadContact />
    </div>
  );
}
