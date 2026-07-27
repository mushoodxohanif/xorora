import type { Metadata } from "next";
import {
  MvpChallenges,
  MvpContact,
  MvpDeliver,
  MvpFaq,
  MVP_FAQS,
  MvpHero,
  MvpPrinciples,
  MvpProcess,
  MvpScenarios,
  MvpWhy,
} from "@/components/engineering/mvp-poc-development";
import { SITE_URL } from "@/lib/site-url";

const META_DESCRIPTION =
  "Xorora's MVP and POC development services validate ideas fast with lean MVPs and proofs of concept that gather user data, attract investors, and cut time-to-market.";

export const metadata: Metadata = {
  title: "MVP & POC Development Services | Xorora",
  description: META_DESCRIPTION,
  keywords: [
    "MVP and POC development services",
    "MVP development",
    "proof of concept development",
    "AI PoC",
    "prototype development",
    "rapid prototyping",
    "product validation",
  ],
  alternates: { canonical: "/engineering/mvp-poc-development-services" },
  openGraph: {
    title: "MVP & POC Development Services | Xorora",
    description: META_DESCRIPTION,
    url: "/engineering/mvp-poc-development-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP & POC Development Services | Xorora",
    description: META_DESCRIPTION,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "MVP & POC Development Services",
  name: "MVP & POC Development Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/engineering/mvp-poc-development-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MVP_FAQS.map((f) => ({
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
      name: "MVP & POC Development Services",
      item: `${SITE_URL}/engineering/mvp-poc-development-services`,
    },
  ],
};

export default function MvpPocDevelopmentServicesPage() {
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
      <MvpHero />
      <MvpChallenges />
      <MvpDeliver />
      <MvpScenarios />
      <MvpWhy />
      <MvpProcess />
      <MvpPrinciples />
      <MvpFaq />
      <MvpContact />
    </div>
  );
}
