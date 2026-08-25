import type { Metadata } from "next";
import {
  DoChallenges,
  DoContact,
  DoDeliver,
  DoFaq,
  DO_FAQS,
  DoHero,
  DoMidCta,
  DoProcess,
  DoTech,
  DoWhy,
} from "@/components/managed-services/devops";
import { RelatedCaseStudies } from "@/components/case-study/related-case-studies";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Managed DevOps Services & Consulting | Xorora",
  description:
    "Xorora's DevOps services streamline your pipeline, from cloud and microservices to automation. Ship faster, recover quicker, and cut cloud waste.",
  keywords: [
    "DevOps services",
    "managed DevOps services",
    "DevOps consulting",
    "cloud services",
    "microservices",
    "process automation",
    "CI/CD pipeline",
  ],
  alternates: { canonical: "/managed-services/devops-services" },
  openGraph: {
    title: "Managed DevOps Services & Consulting | Xorora",
    description:
      "Xorora's DevOps services streamline your pipeline, from cloud and microservices to automation. Ship faster, recover quicker, and cut cloud waste.",
    url: "/managed-services/devops-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed DevOps Services & Consulting | Xorora",
    description:
      "Xorora's DevOps services streamline your pipeline, from cloud and microservices to automation.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "DevOps Services",
  name: "DevOps Services",
  description:
    "Xorora's DevOps services streamline your pipeline, from cloud and microservices to automation. Ship faster, recover quicker, and cut cloud waste.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/managed-services/devops-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DO_FAQS.map((f) => ({
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
      name: "DevOps Services",
      item: `${SITE_URL}/managed-services/devops-services`,
    },
  ],
};

export default function DevOpsServicesPage() {
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
      <DoHero />
      <DoChallenges />
      <DoDeliver />
      <DoProcess />
      <DoMidCta />
      <DoWhy />
      <DoTech />
      <RelatedCaseStudies
        servicePath="/managed-services/devops-services"
        title="DevOps case studies"
        sub="Pipelines and platforms that shipped faster — one study at a time."
      />
      <DoFaq />
      <DoContact />
    </div>
  );
}
