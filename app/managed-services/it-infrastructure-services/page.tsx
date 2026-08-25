import type { Metadata } from "next";
import {
  IiBenefits,
  IiContact,
  IiDeliver,
  IiFaq,
  II_FAQS,
  IiHero,
  IiProcess,
  IiShift,
  IiWhy,
} from "@/components/managed-services/it-infrastructure";
import { RelatedCaseStudies } from "@/components/case-study/related-case-studies";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Managed IT Infrastructure Services & Cloud | Xorora",
  description:
    "Xorora's IT infrastructure services modernize your workforce and multicloud setup, with consultancy, integration, management, and cloud from senior engineers.",
  keywords: [
    "IT infrastructure services",
    "multicloud solutions",
    "IT infrastructure consultancy",
    "IT infrastructure integration",
    "IT infrastructure management",
    "cloud setup and management",
    "hybrid cloud",
  ],
  alternates: { canonical: "/managed-services/it-infrastructure-services" },
  openGraph: {
    title: "Managed IT Infrastructure Services & Cloud | Xorora",
    description:
      "Xorora's IT infrastructure services modernize your workforce and multicloud setup, with consultancy, integration, management, and cloud from senior engineers.",
    url: "/managed-services/it-infrastructure-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed IT Infrastructure Services & Cloud | Xorora",
    description:
      "Xorora's IT infrastructure services modernize your workforce and multicloud setup.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT Infrastructure Services",
  name: "IT Infrastructure Services",
  description:
    "Xorora's IT infrastructure services modernize your workforce and multicloud setup, with consultancy, integration, management, and cloud from senior engineers.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/managed-services/it-infrastructure-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: II_FAQS.map((f) => ({
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
      name: "Managed Services",
      item: `${SITE_URL}/managed-services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IT Infrastructure Services",
      item: `${SITE_URL}/managed-services/it-infrastructure-services`,
    },
  ],
};

export default function ItInfrastructureServicesPage() {
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
      <IiHero />
      <IiShift />
      <IiDeliver />
      <IiProcess />
      <IiWhy />
      <IiBenefits />
      <RelatedCaseStudies
        servicePath="/managed-services/it-infrastructure-services"
        title="IT infrastructure case studies"
        sub="Infrastructure and cloud setups that held under load — one study at a time."
      />
      <IiFaq />
      <IiContact />
    </div>
  );
}
