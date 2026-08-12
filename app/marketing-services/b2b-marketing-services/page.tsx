import type { Metadata } from "next";
import {
  B2B_FAQS,
  B2bApproach,
  B2bChannels,
  B2bContact,
  B2bDeliver,
  B2bDifference,
  B2bFaq,
  B2bHero,
  B2bPerformance,
} from "@/components/marketing-services/b2b";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "B2B Marketing Services for Tech Companies | Xorora";
const META_DESCRIPTION =
  "Xorora's B2B marketing services help hyper-growth tech companies create, scale, and measure revenue, with paid search, SEO, GEO, paid social, and attribution.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "B2B marketing services",
    "B2B digital marketing",
    "B2B paid search",
    "B2B SEO",
    "generative engine optimization",
    "B2B paid social",
    "revenue attribution",
  ],
  alternates: { canonical: "/marketing-services/b2b-marketing-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/marketing-services/b2b-marketing-services",
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
  serviceType: "B2B Marketing Services",
  name: "B2B Marketing Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/marketing-services/b2b-marketing-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: B2B_FAQS.map((f) => ({
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
      name: "B2B Marketing Services",
      item: `${SITE_URL}/marketing-services/b2b-marketing-services`,
    },
  ],
};

export default function B2bMarketingServicesPage() {
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
      <B2bHero />
      <B2bApproach />
      <B2bDeliver />
      <B2bPerformance />
      <B2bDifference />
      <B2bChannels />
      <B2bFaq />
      <B2bContact />
    </div>
  );
}
