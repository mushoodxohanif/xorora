import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  AMAZON_HUB_SERVICES,
  AtzCta,
  AtzHero,
  AtzServices,
} from "@/components/amazon-a-to-z/hub";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_A_TO_Z_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonBreadcrumbJsonLd,
  amazonPageMetadata,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";
import { SITE_URL } from "@/lib/site-url";

const TITLE = "Amazon A to Z Services — Full-Funnel Amazon Growth | Xorora";
const DESCRIPTION =
  "Xorora Amazon A to Z services cover product hunting, listing optimization, product launch, A+ content, SEO, PPC, DSP, Seller Central, account management, and Vendor Central.";
const SERVICE_NAME = "Amazon A to Z Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_A_TO_Z_PATH,
  keywords: [
    "Amazon A to Z services",
    "Amazon agency",
    "Amazon growth services",
    "Amazon seller services",
    "Amazon Vendor Central agency",
    "Amazon PPC management",
    "Amazon listing optimization",
    "Amazon product launch services",
  ],
});

const serviceJsonLd = {
  ...amazonServiceJsonLd({
    name: SERVICE_NAME,
    description: DESCRIPTION,
    path: AMAZON_A_TO_Z_PATH,
  }),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: SERVICE_NAME,
    itemListElement: AMAZON_HUB_SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${SITE_URL}${s.href}`,
      },
    })),
  },
};

const breadcrumbJsonLd = amazonBreadcrumbJsonLd([
  { name: SERVICE_NAME, path: AMAZON_A_TO_Z_PATH },
]);

export default function AmazonAToZHubPage() {
  return (
    <div className="vc-motion bg-surface">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <IndRevealObserver />
      <AtzHero />
      <AtzServices />
      <AmazonCaseStudySection />
      <AtzCta />
    </div>
  );
}
