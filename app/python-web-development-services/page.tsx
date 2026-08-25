import type { Metadata } from "next";
import {
  PYTHON_WEB_FAQS,
  PwdArchitecture,
  PwdChoose,
  PwdContact,
  PwdCost,
  PwdDeliver,
  PwdEngage,
  PwdFaq,
  PwdHero,
  PwdIndustries,
  PwdMidCta,
  PwdProcess,
  PwdProof,
  PwdStack,
  PwdWrongFit,
} from "@/components/engineering/python-web-development";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE =
  "Python Web Development Services | Django & FastAPI | Xorora";
const META_DESCRIPTION =
  "Django, FastAPI, and Flask systems engineered for production. Xorora is a Python web development company building custom web apps, APIs, and data platforms.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "python web development services",
    "python web development company",
    "custom python web development company",
    "top python web development company",
    "Django",
    "FastAPI",
    "Flask",
  ],
  alternates: { canonical: "/python-web-development-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/python-web-development-services",
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
  serviceType: "Python Web Development Services",
  name: "Python Web Development Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/python-web-development-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PYTHON_WEB_FAQS.map((f) => ({
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
      name: "Python Web Development Services",
      item: `${SITE_URL}/python-web-development-services`,
    },
  ],
};

export default function PythonWebDevelopmentServicesPage() {
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
      <PwdHero />
      <PwdProof />
      <PwdDeliver />
      <PwdStack />
      <PwdArchitecture />
      <PwdIndustries />
      <PwdMidCta />
      <PwdCost />
      <PwdWrongFit />
      <PwdEngage />
      <PwdProcess />
      <PwdChoose />
      <PwdFaq />
      <PwdContact />
    </div>
  );
}
