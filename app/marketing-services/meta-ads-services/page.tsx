import type { Metadata } from "next";
import {
  META_ADS_FAQS,
  MetaAdsApproach,
  MetaAdsChallenges,
  MetaAdsContact,
  MetaAdsDeliver,
  MetaAdsFaq,
  MetaAdsHero,
  MetaAdsWhy,
} from "@/components/marketing-services/meta-ads";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "Meta Ads Services for Facebook & Instagram | Xorora";
const META_DESCRIPTION =
  "Xorora's Meta Ads services connect your brand with the right audiences on Facebook and Instagram, with audits, creative, precise targeting, and optimization.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "Meta Ads services",
    "Facebook advertising",
    "Instagram ads",
    "Meta Ads agency",
    "audience targeting",
    "ad creative and copy",
    "campaign optimization",
  ],
  alternates: { canonical: "/marketing-services/meta-ads-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/marketing-services/meta-ads-services",
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
  serviceType: "Meta Ads Services",
  name: "Meta Ads Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/marketing-services/meta-ads-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: META_ADS_FAQS.map((f) => ({
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
      name: "Marketing Services",
      item: `${SITE_URL}/marketing-services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Meta Ads Services",
      item: `${SITE_URL}/marketing-services/meta-ads-services`,
    },
  ],
};

export default function MetaAdsServicesPage() {
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
      <MetaAdsHero />
      <MetaAdsDeliver />
      <MetaAdsApproach />
      <MetaAdsChallenges />
      <MetaAdsWhy />
      <MetaAdsFaq />
      <MetaAdsContact />
    </div>
  );
}
