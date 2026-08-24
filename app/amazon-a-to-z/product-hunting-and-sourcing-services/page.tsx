import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  APH_FAQS,
  AphCta,
  AphFaq,
  AphFit,
  AphHero,
  AphIncluded,
  AphInventory,
  AphNeeds,
  AphProcess,
  AphTrust,
  AphWhat,
  AphWhy,
} from "@/components/amazon-a-to-z/product-hunting";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_PRODUCT_HUNTING_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonFaqJsonLd,
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon Product Hunting & Sourcing Services | Xorora";
const DESCRIPTION =
  "Xorora's Amazon product hunting and sourcing services uncover high-demand, low-competition private-label products and reliable suppliers to scale your business.";
const SERVICE_NAME = "Amazon Product Hunting & Sourcing Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_PRODUCT_HUNTING_PATH,
  keywords: [
    "Amazon product hunting",
    "Amazon product sourcing",
    "Amazon private label sourcing",
    "Amazon product research services",
    "Amazon supplier sourcing",
    "high demand Amazon products",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_PRODUCT_HUNTING_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_PRODUCT_HUNTING_PATH,
);
const faqJsonLd = amazonFaqJsonLd(APH_FAQS);

export default function AmazonProductHuntingServicesPage() {
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
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <IndRevealObserver />
      <AphHero />
      <AphWhat />
      <AphWhy />
      <AphIncluded />
      <AmazonCaseStudySection />
      <AphInventory />
      <AphProcess />
      <AphTrust />
      <AphFit />
      <AphNeeds />
      <AphFaq />
      <AphCta />
    </div>
  );
}
