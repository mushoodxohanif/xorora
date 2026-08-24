import type { Metadata } from "next";
import {
  DdcArchitecture,
  DdcChoose,
  DdcContact,
  DdcCost,
  DdcDeliver,
  DdcEngage,
  DdcFaq,
  DdcHero,
  DdcIndustries,
  DdcMidCta,
  DdcPortfolio,
  DdcProcess,
  DdcProof,
  DdcStack,
  DdcWrongFit,
  DJANGO_DEV_FAQS,
} from "@/components/engineering/django-development-company";
import { DJANGO_DEV_PATH } from "@/lib/django-dev";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE =
  "Django Development Company | DRF, Wagtail & Celery | Xorora";
const META_DESCRIPTION =
  "Django development services from Xorora. We build Django platforms, DRF APIs, and version upgrades for teams that need the system to survive its fifth year.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "django development company",
    "django development services",
    "django development agency",
    "django development agencies",
    "django development companies",
    "DRF",
    "Django Ninja",
    "Wagtail",
    "Celery",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: DJANGO_DEV_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: DJANGO_DEV_PATH,
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
  serviceType: "Django Development Services",
  name: "Django Development Company",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}${DJANGO_DEV_PATH}`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DJANGO_DEV_FAQS.map((f) => ({
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
      name: "Django Development Company",
      item: `${SITE_URL}${DJANGO_DEV_PATH}`,
    },
  ],
};

export default function DjangoDevelopmentCompanyPage() {
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
      <DdcHero />
      <DdcProof />
      <DdcDeliver />
      <DdcStack />
      <DdcArchitecture />
      <DdcPortfolio />
      <DdcIndustries />
      <DdcMidCta />
      <DdcCost />
      <DdcWrongFit />
      <DdcEngage />
      <DdcProcess />
      <DdcChoose />
      <DdcFaq />
      <DdcContact />
    </div>
  );
}
