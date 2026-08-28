import type { Metadata } from "next";
import {
  JAVA_WEB_DEV_FAQS,
  JwdArchitecture,
  JwdChoose,
  JwdContact,
  JwdCost,
  JwdDeliver,
  JwdEngage,
  JwdFaq,
  JwdHero,
  JwdIndustries,
  JwdMidCta,
  JwdPortfolio,
  JwdProcess,
  JwdProof,
  JwdStack,
  JwdWrongFit,
} from "@/components/engineering/java-web-development";
import { JAVA_WEB_DEV_PATH } from "@/lib/java-web-dev";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE =
  "Java Web Development Services | Spring Boot & JVM | Xorora";
const META_DESCRIPTION =
  "Java web development services from Xorora. Spring Boot applications, enterprise APIs, and Jakarta EE migrations built for systems that run for a decade.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "java web development services",
    "java web development company",
    "java web application development services",
    "java web application development company",
    "Spring Boot",
    "Jakarta EE",
    "JVM",
    "Kafka",
    "Hibernate",
    "Java migration",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: JAVA_WEB_DEV_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: JAVA_WEB_DEV_PATH,
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
  serviceType: "Java Web Development Services",
  name: "Java Web Development",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}${JAVA_WEB_DEV_PATH}`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: JAVA_WEB_DEV_FAQS.map((f) => ({
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
      name: "Java Web Development",
      item: `${SITE_URL}${JAVA_WEB_DEV_PATH}`,
    },
  ],
};

export default function JavaWebDevelopmentPage() {
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
      <JwdHero />
      <JwdProof />
      <JwdDeliver />
      <JwdStack />
      <JwdArchitecture />
      <JwdPortfolio />
      <JwdIndustries />
      <JwdMidCta />
      <JwdCost />
      <JwdWrongFit />
      <JwdEngage />
      <JwdProcess />
      <JwdChoose />
      <JwdFaq />
      <JwdContact />
    </div>
  );
}
