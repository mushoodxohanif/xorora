import type { Metadata } from "next";
import {
  SEO_FAQS,
  SeoApproach,
  SeoContact,
  SeoDeliver,
  SeoFaq,
  SeoHero,
  SeoIndustries,
  SeoProcess,
} from "@/components/marketing-services/seo";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "SEO Services That Drive Pipeline | Xorora";
const META_DESCRIPTION =
  "Xorora's SEO services build technical, scalable search strategies that connect to revenue, from local SEO and content to AI search visibility and analytics.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "SEO services",
    "local SEO",
    "technical SEO",
    "SEO content services",
    "keyword research",
    "AI search visibility",
    "competitor analysis",
  ],
  alternates: { canonical: "/marketing-services/seo-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/marketing-services/seo-services",
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
  serviceType: "SEO Services",
  name: "SEO Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/marketing-services/seo-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEO_FAQS.map((f) => ({
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
      name: "SEO Services",
      item: `${SITE_URL}/marketing-services/seo-services`,
    },
  ],
};

export default function SeoServicesPage() {
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
      <SeoHero />
      <SeoApproach />
      <SeoDeliver />
      <SeoProcess />
      <SeoIndustries />
      <SeoFaq />
      <SeoContact />
    </div>
  );
}
