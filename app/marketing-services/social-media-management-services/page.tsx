import type { Metadata } from "next";
import {
  SMM_FAQS,
  SmmContact,
  SmmDeliver,
  SmmDifference,
  SmmFaq,
  SmmHero,
} from "@/components/marketing-services/social-media";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "Social Media Management Services | Xorora";
const META_DESCRIPTION =
  "Xorora's social media management services grow your audience and drive engagement, with strategy, content, community management, paid social, and reporting.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "social media management services",
    "social media strategy",
    "social media content creation",
    "community management",
    "paid social advertising",
    "influencer marketing",
    "social media reporting",
  ],
  alternates: {
    canonical: "/marketing-services/social-media-management-services",
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/marketing-services/social-media-management-services",
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
  serviceType: "Social Media Management Services",
  name: "Social Media Management Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/marketing-services/social-media-management-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SMM_FAQS.map((f) => ({
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
      name: "Social Media Management Services",
      item: `${SITE_URL}/marketing-services/social-media-management-services`,
    },
  ],
};

export default function SocialMediaManagementServicesPage() {
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
      <SmmHero />
      <SmmDeliver />
      <SmmDifference />
      <SmmFaq />
      <SmmContact />
    </div>
  );
}
