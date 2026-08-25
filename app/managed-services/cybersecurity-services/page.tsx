import type { Metadata } from "next";
import {
  CyContact,
  CyDeliver,
  CyFaq,
  CY_FAQS,
  CyHero,
  CyIndustries,
  CyProcess,
  CyTech,
  CyThreatLandscape,
  CyWhy,
} from "@/components/managed-services/cybersecurity";
import { RelatedCaseStudies } from "@/components/case-study/related-case-studies";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Managed Cybersecurity Services for Business | Xorora",
  description:
    "Xorora's cybersecurity services help you identify, protect, detect, and respond. 24/7 threat detection, pen testing, and compliance from senior engineers.",
  keywords: [
    "cybersecurity services",
    "managed cybersecurity",
    "threat detection and response",
    "penetration testing",
    "compliance and risk assessment",
    "zero trust security",
    "identity and access management",
  ],
  alternates: { canonical: "/managed-services/cybersecurity-services" },
  openGraph: {
    title: "Managed Cybersecurity Services for Business | Xorora",
    description:
      "Xorora's cybersecurity services help you identify, protect, detect, and respond. 24/7 threat detection, pen testing, and compliance from senior engineers.",
    url: "/managed-services/cybersecurity-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Cybersecurity Services for Business | Xorora",
    description:
      "Xorora's cybersecurity services help you identify, protect, detect, and respond.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cybersecurity Services",
  name: "Cybersecurity Services",
  description:
    "Xorora's cybersecurity services help you identify, protect, detect, and respond. 24/7 threat detection, pen testing, and compliance from senior engineers.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/managed-services/cybersecurity-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CY_FAQS.map((f) => ({
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
      name: "Cybersecurity Services",
      item: `${SITE_URL}/managed-services/cybersecurity-services`,
    },
  ],
};

export default function CybersecurityServicesPage() {
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
      <CyHero />
      <CyThreatLandscape />
      <CyDeliver />
      <CyProcess />
      <CyWhy />
      <CyTech />
      <CyIndustries />
      <RelatedCaseStudies
        servicePath="/managed-services/cybersecurity-services"
        title="Cybersecurity case studies"
        sub="Security and compliance work in production systems — one study at a time."
      />
      <CyFaq />
      <CyContact />
    </div>
  );
}
