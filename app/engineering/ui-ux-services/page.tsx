import type { Metadata } from "next";
import {
  UiuxContact,
  UiuxDeliver,
  UiuxFaq,
  UIUX_FAQS,
  UiuxHero,
  UiuxIndustries,
  UiuxProcess,
  UiuxResults,
  UiuxTech,
  UiuxWhy,
} from "@/components/engineering/ui-ux-design";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "UI/UX Design Services | Xorora";
const META_DESCRIPTION =
  "Xorora's UI/UX services craft human-centered design that puts the user first, from research and wireframing to prototypes, design systems, and usability testing.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "UI/UX services",
    "UI/UX design services",
    "mobile app UI/UX design",
    "web application UI/UX",
    "UX research and usability testing",
    "wireframing and prototyping",
    "design systems",
  ],
  alternates: { canonical: "/engineering/ui-ux-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/engineering/ui-ux-services",
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
  serviceType: "UI/UX Design Services",
  name: "UI/UX Design Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/engineering/ui-ux-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: UIUX_FAQS.map((f) => ({
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
      name: "UI/UX Design Services",
      item: `${SITE_URL}/engineering/ui-ux-services`,
    },
  ],
};

export default function UiUxServicesPage() {
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
      <UiuxHero />
      <UiuxDeliver />
      <UiuxProcess />
      <UiuxWhy />
      <UiuxResults />
      <UiuxTech />
      <UiuxIndustries />
      <UiuxFaq />
      <UiuxContact />
    </div>
  );
}
