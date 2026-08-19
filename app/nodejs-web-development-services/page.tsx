import type { Metadata } from "next";
import {
  NODEJS_WEB_FAQS,
  NwdArchitecture,
  NwdChoose,
  NwdContact,
  NwdCost,
  NwdDeliver,
  NwdEngage,
  NwdFaq,
  NwdHero,
  NwdIndustries,
  NwdMidCta,
  NwdPortfolio,
  NwdProcess,
  NwdProof,
  NwdStack,
  NwdWrongFit,
} from "@/components/engineering/nodejs-web-development";
import { NODEJS_WEB_PATH } from "@/lib/nodejs-web";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "Node.js Web Development Services | Express & NestJS | Xorora";
const META_DESCRIPTION =
  "Node JS web development services from Xorora. We build real-time applications, APIs, and event-driven backends in TypeScript, Express, NestJS, and Fastify.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "node js web development services",
    "node.js web development services",
    "node js web development company",
    "node.js web development company",
    "node js web application development services",
    "Express",
    "NestJS",
    "Fastify",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: NODEJS_WEB_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: NODEJS_WEB_PATH,
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
  serviceType: "Node.js Web Development Services",
  name: "Node.js Web Development Services",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}${NODEJS_WEB_PATH}`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NODEJS_WEB_FAQS.map((f) => ({
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
      name: "Node.js Web Development Services",
      item: `${SITE_URL}${NODEJS_WEB_PATH}`,
    },
  ],
};

export default function NodejsWebDevelopmentServicesPage() {
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
      <NwdHero />
      <NwdProof />
      <NwdDeliver />
      <NwdStack />
      <NwdArchitecture />
      <NwdPortfolio />
      <NwdIndustries />
      <NwdMidCta />
      <NwdCost />
      <NwdWrongFit />
      <NwdEngage />
      <NwdProcess />
      <NwdChoose />
      <NwdFaq />
      <NwdContact />
    </div>
  );
}
