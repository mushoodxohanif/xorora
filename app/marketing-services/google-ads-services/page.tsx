import type { Metadata } from "next";
import {
  GOOGLE_ADS_FAQS,
  GoogleAdsApproach,
  GoogleAdsChallenge,
  GoogleAdsContact,
  GoogleAdsDeliver,
  GoogleAdsFaq,
  GoogleAdsHero,
  GoogleAdsMethodology,
  GoogleAdsProcess,
} from "@/components/marketing-services/google-ads";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "Google Ads & PPC Management Services | Xorora";
const META_DESCRIPTION =
  "Xorora's Google Ads services turn high-intent demand into profitable growth, with search, Performance Max, Shopping, and disciplined ongoing optimization.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "Google Ads services",
    "Google Ads management",
    "PPC management",
    "Performance Max",
    "Google Shopping ads",
    "paid search agency",
    "PPC optimization",
  ],
  alternates: { canonical: "/marketing-services/google-ads-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/marketing-services/google-ads-services",
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
  serviceType: "Google Ads Services",
  name: "Google Ads Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/marketing-services/google-ads-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GOOGLE_ADS_FAQS.map((f) => ({
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
      name: "Google Ads Services",
      item: `${SITE_URL}/marketing-services/google-ads-services`,
    },
  ],
};

export default function GoogleAdsServicesPage() {
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
      <GoogleAdsHero />
      <GoogleAdsDeliver />
      <GoogleAdsProcess />
      <GoogleAdsApproach />
      <GoogleAdsChallenge />
      <GoogleAdsMethodology />
      <GoogleAdsFaq />
      <GoogleAdsContact />
    </div>
  );
}
