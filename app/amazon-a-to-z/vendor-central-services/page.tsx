import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  VC_FAQS,
  VcApproach,
  VcChallenge,
  VcCta,
  VcFaq,
  VcHero,
  VcIncluded,
  VcPortfolio,
  VcProcess,
  VcWhy,
} from "@/components/amazon-a-to-z/vendor-central";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_VENDOR_CENTRAL_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonFaqJsonLd,
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon Vendor Central Services | Xorora";
const DESCRIPTION =
  "Xorora manages Amazon Vendor Central end to end, protecting margins through negotiation, A+ content, advertising, and inventory strategy for first-party brands.";
const SERVICE_NAME = "Amazon Vendor Central Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_VENDOR_CENTRAL_PATH,
  keywords: [
    "Amazon Vendor Central services",
    "Vendor Central management",
    "Amazon 1P vendor agency",
    "Amazon Vendor Central advertising",
    "Amazon chargeback management",
    "Amazon Vendor Central negotiation",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_VENDOR_CENTRAL_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_VENDOR_CENTRAL_PATH,
);
const faqJsonLd = amazonFaqJsonLd(VC_FAQS);

export default function AmazonVendorCentralServicesPage() {
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
      <VcHero />
      <VcChallenge />
      <VcProcess />
      <VcIncluded />
      <AmazonCaseStudySection />
      <VcApproach />
      <VcWhy />
      <VcPortfolio />
      <VcFaq />
      <VcCta />
    </div>
  );
}
