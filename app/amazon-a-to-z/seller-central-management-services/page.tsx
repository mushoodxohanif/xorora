import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  SC_FAQS,
  ScAudit,
  ScChallenge,
  ScCta,
  ScFaq,
  ScHero,
  ScHow,
  ScIncluded,
  ScWho,
} from "@/components/amazon-a-to-z/seller-central";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_SELLER_CENTRAL_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonFaqJsonLd,
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon Seller Central Management Services | Xorora";
const DESCRIPTION =
  "Xorora manages Amazon Seller Central end to end, from catalog and FBA inventory to advertising, compliance, and reporting, to protect margins and grow revenue.";
const SERVICE_NAME = "Amazon Seller Central Management Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_SELLER_CENTRAL_PATH,
  keywords: [
    "Amazon Seller Central management",
    "Seller Central agency",
    "Amazon FBA management",
    "Amazon seller account management",
    "Amazon catalog management",
    "Amazon seller compliance",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_SELLER_CENTRAL_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_SELLER_CENTRAL_PATH,
);
const faqJsonLd = amazonFaqJsonLd(SC_FAQS);

export default function AmazonSellerCentralManagementServicesPage() {
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
      <ScHero />
      <ScChallenge />
      <ScIncluded />
      <ScHow />
      <AmazonCaseStudySection />
      <ScAudit />
      <ScWho />
      <ScFaq />
      <ScCta />
    </div>
  );
}
