import type { Metadata } from "next";
import {
  CdnArchitecture,
  CdnChoose,
  CdnContact,
  CdnCost,
  CdnDeliver,
  CdnEngage,
  CdnFaq,
  CdnHero,
  CdnIndustries,
  CdnMidCta,
  CdnPortfolio,
  CdnProcess,
  CdnProof,
  CdnStack,
  CdnWrongFit,
  CUSTOM_DOTNET_FAQS,
} from "@/components/engineering/custom-dotnet-development";
import { CUSTOM_DOTNET_PATH } from "@/lib/dotnet-custom";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE = "Custom .NET Development Company | ASP.NET & Azure | Xorora";
const META_DESCRIPTION =
  "Custom net software development from Xorora. We build ASP.NET Core applications, enterprise APIs, and .NET Framework migrations for teams that need systems to last.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "custom .net development company",
    "custom net development company",
    "custom .net development",
    "custom .net development services",
    "custom net development",
    "custom net software development",
    ".net custom development",
    "custom .net software development",
    "ASP.NET Core",
    "Azure",
    "C#",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: CUSTOM_DOTNET_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CUSTOM_DOTNET_PATH,
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
  serviceType: "Custom .NET Development Services",
  name: "Custom .NET Development Company",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}${CUSTOM_DOTNET_PATH}`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CUSTOM_DOTNET_FAQS.map((f) => ({
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
      name: "Custom .NET Development Company",
      item: `${SITE_URL}${CUSTOM_DOTNET_PATH}`,
    },
  ],
};

export default function CustomDotnetDevelopmentPage() {
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
      <CdnHero />
      <CdnProof />
      <CdnDeliver />
      <CdnStack />
      <CdnArchitecture />
      <CdnPortfolio />
      <CdnIndustries />
      <CdnMidCta />
      <CdnCost />
      <CdnWrongFit />
      <CdnEngage />
      <CdnProcess />
      <CdnChoose />
      <CdnFaq />
      <CdnContact />
    </div>
  );
}
