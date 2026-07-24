import type { Metadata } from "next";
import {
  SaChallenges,
  SaContact,
  SaDeliver,
  SaDifference,
  SaFaq,
  SA_FAQS,
  SaHero,
  SaKickoff,
  SaProcess,
  SaTech,
  SaWhy,
} from "@/components/consulting/staff-augmentation";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Staff Augmentation Services for Software Teams | Xorora",
  description:
    "Xorora's staff augmentation services embed senior engineers into your team. Fill skill gaps, unblock roadmaps, and scale delivery without the hiring overhead.",
  keywords: [
    "staff augmentation services",
    "team augmentation",
    "dedicated development teams",
    "embedded engineers",
    "IT staff augmentation",
    "software engineering talent",
    "dedicated teams vs outsourcing",
  ],
  alternates: {
    canonical: "/consulting/staff-augmentation-services",
  },
  openGraph: {
    title: "Staff Augmentation Services for Software Teams | Xorora",
    description:
      "Xorora's staff augmentation services embed senior engineers into your team. Fill skill gaps, unblock roadmaps, and scale delivery without the hiring overhead.",
    url: "/consulting/staff-augmentation-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staff Augmentation Services for Software Teams | Xorora",
    description:
      "Xorora's staff augmentation services embed senior engineers into your team.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Staff Augmentation Services",
  name: "Staff Augmentation Services",
  description:
    "Xorora's staff augmentation services embed senior engineers into your team. Fill skill gaps, unblock roadmaps, and scale delivery without the hiring overhead.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/consulting/staff-augmentation-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SA_FAQS.map((f) => ({
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
      name: "Consulting",
      item: `${SITE_URL}/consulting`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Staff Augmentation Services",
      item: `${SITE_URL}/consulting/staff-augmentation-services`,
    },
  ],
};

export default function StaffAugmentationServicesPage() {
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
      <SaHero />
      <SaChallenges />
      <SaDeliver />
      <SaProcess />
      <SaWhy />
      <SaTech />
      <SaDifference />
      <SaKickoff />
      <SaFaq />
      <SaContact />
    </div>
  );
}
