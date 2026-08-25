import type { Metadata } from "next";
import {
  CmsContact,
  CmsDeliver,
  CmsFaq,
  CMS_FAQS,
  CmsHero,
  CmsIndustries,
  CmsProcess,
  CmsTech,
  CmsWhy,
} from "@/components/engineering/cms-development";
import { RelatedCaseStudies } from "@/components/case-study/related-case-studies";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "Custom CMS Development Services | Xorora";
const META_DESCRIPTION =
  "Xorora's CMS development services build custom, headless, and enterprise CMS platforms, so you manage and publish content across every channel from one place.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "CMS development services",
    "custom CMS development",
    "headless CMS development",
    "enterprise CMS",
    "CMS migration",
    "WordPress CMS development",
    "eCommerce CMS",
  ],
  alternates: { canonical: "/engineering/cms-development-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/engineering/cms-development-services",
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
  serviceType: "CMS Development Services",
  name: "CMS Development Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/engineering/cms-development-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CMS_FAQS.map((f) => ({
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
      name: "CMS Development Services",
      item: `${SITE_URL}/engineering/cms-development-services`,
    },
  ],
};

export default function CmsDevelopmentServicesPage() {
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
      <CmsHero />
      <CmsDeliver />
      <CmsProcess />
      <CmsWhy />
      <CmsIndustries />
      <CmsTech />
      <RelatedCaseStudies
        servicePath="/engineering/cms-development-services"
        title="CMS development case studies"
        sub="Content platforms that scale across channels — one study at a time."
      />
      <CmsFaq />
      <CmsContact />
    </div>
  );
}
