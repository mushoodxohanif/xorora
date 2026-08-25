import type { Metadata } from "next";
import {
  MDS_FAQS,
  MdsAccelerators,
  MdsContact,
  MdsDeliver,
  MdsEcosystem,
  MdsFaq,
  MdsHero,
  MdsProcess,
} from "@/components/ai/ml-data-science";
import { RelatedCaseStudies } from "@/components/case-study/related-case-studies";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "Machine Learning & Data Science Services | Xorora";
const META_DESCRIPTION =
  "Xorora's ML and data science services apply advanced analytics and AI to predict outcomes, automate insights, and optimize performance across your operations.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "ML and data science services",
    "machine learning services",
    "data science consulting",
    "predictive analytics",
    "business intelligence",
    "big data consulting",
    "MLOps",
  ],
  alternates: { canonical: "/ai/ml-data-science-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/ai/ml-data-science-services",
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
  serviceType: "ML & Data Science Services",
  name: "ML & Data Science Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/ai/ml-data-science-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MDS_FAQS.map((f) => ({
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
      name: "AI",
      item: `${SITE_URL}/ai`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ML & Data Science Services",
      item: `${SITE_URL}/ai/ml-data-science-services`,
    },
  ],
};

export default function MlDataSciencePage() {
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
      <MdsHero />
      <MdsDeliver />
      <MdsProcess />
      <MdsAccelerators />
      <MdsEcosystem />
      <RelatedCaseStudies
        servicePath="/ai/ml-data-science-services"
        title="ML & data science case studies"
        sub="Models and analytics that drove decisions — one study at a time."
      />
      <MdsFaq />
      <MdsContact />
    </div>
  );
}
