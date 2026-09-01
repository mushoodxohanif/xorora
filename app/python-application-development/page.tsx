import type { Metadata } from "next";
import {
  PadArchitecture,
  PadChoose,
  PadContact,
  PadCost,
  PadDeliver,
  PadEngage,
  PadFaq,
  PadHero,
  PadIndustries,
  PadMidCta,
  PadProcess,
  PadProof,
  PadStack,
  PadWrongFit,
  PYTHON_APP_FAQS,
} from "@/components/engineering/python-application-development";
import { PYTHON_APP_DEV_PATH } from "@/lib/python-app-dev";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE =
  "Python Application Development: A Complete Guide for 2026 | Xorora";
const META_DESCRIPTION =
  "A practical guide to Python application development, frameworks, use cases, cost factors, and how to choose the right Python app development company.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "python application development",
    "python app development company",
    "python application development services",
    "python app development services",
    "python application development company",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: PYTHON_APP_DEV_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PYTHON_APP_DEV_PATH,
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
  serviceType: "Python Application Development Services",
  name: "Python Application Development",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}${PYTHON_APP_DEV_PATH}`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PYTHON_APP_FAQS.map((f) => ({
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
      name: "Python Application Development",
      item: `${SITE_URL}${PYTHON_APP_DEV_PATH}`,
    },
  ],
};

export default function PythonApplicationDevelopmentPage() {
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
      <PadHero />
      <PadProof />
      <PadDeliver />
      <PadStack />
      <PadArchitecture />
      <PadIndustries />
      <PadMidCta />
      <PadCost />
      <PadWrongFit />
      <PadEngage />
      <PadProcess />
      <PadChoose />
      <PadFaq />
      <PadContact />
    </div>
  );
}
