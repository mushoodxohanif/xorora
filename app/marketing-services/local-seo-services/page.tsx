import type { Metadata } from "next";
import {
  LOCAL_SEO_FAQS,
  LocalSeoContact,
  LocalSeoDeliver,
  LocalSeoFaq,
  LocalSeoHero,
  LocalSeoIndustries,
  LocalSeoPillars,
  LocalSeoProcess,
  LocalSeoWhy,
} from "@/components/marketing-services/local-seo";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "Local SEO Services That Win Customers | Xorora";
const META_DESCRIPTION =
  "Xorora's local SEO services turn nearby searches into loyal customers, with Google Business Profile management, local content, citations, and clear reporting.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "local SEO services",
    "Google Business Profile optimization",
    "local search optimization",
    "local citations and link building",
    "near me SEO",
    "multi-location SEO",
    "local content marketing",
  ],
  alternates: { canonical: "/marketing-services/local-seo-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/marketing-services/local-seo-services",
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
  serviceType: "Local SEO Services",
  name: "Local SEO Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/marketing-services/local-seo-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LOCAL_SEO_FAQS.map((f) => ({
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
      name: "Local SEO Services",
      item: `${SITE_URL}/marketing-services/local-seo-services`,
    },
  ],
};

export default function LocalSeoServicesPage() {
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
      <LocalSeoHero />
      <LocalSeoDeliver />
      <LocalSeoWhy />
      <LocalSeoPillars />
      <LocalSeoProcess />
      <LocalSeoIndustries />
      <LocalSeoFaq />
      <LocalSeoContact />
    </div>
  );
}
