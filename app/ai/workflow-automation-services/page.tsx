import type { Metadata } from "next";
import {
  WFA_FAQS,
  WfaContact,
  WfaDeliver,
  WfaFaq,
  WfaHero,
  WfaIndustries,
  WfaProcess,
  WfaStack,
  WfaVelocity,
  WfaWhy,
} from "@/components/ai/workflow-automation";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "AI Workflow Automation Services | Xorora";
const META_DESCRIPTION =
  "Xorora's workflow automation services build AI that reads, decides, and acts, streamlining processes with custom workflows, RPA, and automated approvals.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "workflow automation services",
    "AI workflow automation",
    "robotic process automation",
    "process automation",
    "custom workflow development",
    "document automation",
    "systems integration",
  ],
  alternates: { canonical: "/ai/workflow-automation-services" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/ai/workflow-automation-services",
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
  serviceType: "Workflow Automation Services",
  name: "Workflow Automation Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}/ai/workflow-automation-services`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: WFA_FAQS.map((f) => ({
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
      name: "AI",
      item: `${SITE_URL}/ai`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Workflow Automation Services",
      item: `${SITE_URL}/ai/workflow-automation-services`,
    },
  ],
};

export default function WorkflowAutomationPage() {
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
      <WfaHero />
      <WfaDeliver />
      <WfaProcess />
      <WfaWhy />
      <WfaVelocity />
      <WfaIndustries />
      <WfaStack />
      <WfaFaq />
      <WfaContact />
    </div>
  );
}
