import type { Metadata } from "next";
import {
  FmdArchitecture,
  FmdChoose,
  FmdContact,
  FmdCost,
  FmdDeliver,
  FmdEngage,
  FmdFaq,
  FmdHero,
  FmdIndustries,
  FmdMidCta,
  FmdProcess,
  FmdProof,
  FmdStack,
  FmdWrongFit,
  FLUTTER_DEV_FAQS,
} from "@/components/engineering/flutter-mobile-app-development";
import { FLUTTER_DEV_PATH } from "@/lib/flutter-dev";
import { SITE_URL } from "@/lib/site-url";

const META_TITLE =
  "Flutter Mobile App Development Services | iOS & Android | Xorora";
const META_DESCRIPTION =
  "Flutter mobile app development services from Xorora. One codebase for iOS and Android, built with offline handling, staged rollouts, and a real update path.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "flutter mobile app development services",
    "flutter app development services",
    "flutter mobile app development company",
    "flutter app development agency",
    "flutter app development companies",
    "flutter application development company",
    "flutter app development services in usa",
    "iOS",
    "Android",
    "Riverpod",
    "Bloc",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: FLUTTER_DEV_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: FLUTTER_DEV_PATH,
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
  serviceType: "Flutter Mobile App Development Services",
  name: "Flutter Mobile App Development",
  description: META_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  url: `${SITE_URL}${FLUTTER_DEV_PATH}`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FLUTTER_DEV_FAQS.map((f) => ({
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
      name: "Flutter Mobile App Development",
      item: `${SITE_URL}${FLUTTER_DEV_PATH}`,
    },
  ],
};

export default function FlutterMobileAppDevelopmentPage() {
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
      <FmdHero />
      <FmdProof />
      <FmdDeliver />
      <FmdStack />
      <FmdArchitecture />
      <FmdIndustries />
      <FmdMidCta />
      <FmdCost />
      <FmdWrongFit />
      <FmdEngage />
      <FmdProcess />
      <FmdChoose />
      <FmdFaq />
      <FmdContact />
    </div>
  );
}
