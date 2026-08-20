import type { Metadata } from "next";
import {
  LARAVEL_WEB_FAQS,
  LwdArchitecture,
  LwdChoose,
  LwdContact,
  LwdCost,
  LwdDeliver,
  LwdEngage,
  LwdFaq,
  LwdHero,
  LwdIndustries,
  LwdMidCta,
  LwdPortfolio,
  LwdProcess,
  LwdProof,
  LwdStack,
  LwdWrongFit,
} from "@/components/engineering/laravel-website-development";
import { LARAVEL_WEB_PATH } from "@/lib/laravel-web";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE =
  "Laravel Website Development Services | Livewire & Filament | Xorora";
const META_DESCRIPTION =
  "Laravel website development services from Xorora. Custom Laravel web development for SaaS platforms, marketplaces, and business applications, built to upgrade cleanly.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "laravel website development services",
    "custom laravel web development",
    "laravel web development agency",
    "laravel website development company",
    "Livewire",
    "Filament",
    "Laravel Cashier",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: LARAVEL_WEB_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: LARAVEL_WEB_PATH,
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
  serviceType: "Laravel Website Development Services",
  name: "Laravel Website Development Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}${LARAVEL_WEB_PATH}`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LARAVEL_WEB_FAQS.map((f) => ({
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
      name: "Laravel Website Development Services",
      item: `${SITE_URL}${LARAVEL_WEB_PATH}`,
    },
  ],
};

export default function LaravelWebsiteDevelopmentServicesPage() {
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
      <LwdHero />
      <LwdProof />
      <LwdDeliver />
      <LwdStack />
      <LwdArchitecture />
      <LwdPortfolio />
      <LwdIndustries />
      <LwdMidCta />
      <LwdCost />
      <LwdWrongFit />
      <LwdEngage />
      <LwdProcess />
      <LwdChoose />
      <LwdFaq />
      <LwdContact />
    </div>
  );
}
