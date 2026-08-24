import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  AM_FAQS,
  AmCta,
  AmFaq,
  AmHero,
  AmHow,
  AmProblem,
  AmStart,
  AmWho,
} from "@/components/amazon-a-to-z/account-management";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_ACCOUNT_MANAGEMENT_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonFaqJsonLd,
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon Account Management Services | Xorora";
const DESCRIPTION =
  "Xorora acts as your Amazon operations arm, handling Seller and Vendor Central, listings, advertising, inventory, and compliance so your account runs smoothly.";
const SERVICE_NAME = "Amazon Account Management Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_ACCOUNT_MANAGEMENT_PATH,
  keywords: [
    "Amazon account management services",
    "Amazon account manager",
    "outsourced Amazon management",
    "Amazon seller account management",
    "Amazon Vendor Central management",
    "full-service Amazon agency",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_ACCOUNT_MANAGEMENT_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_ACCOUNT_MANAGEMENT_PATH,
);
const faqJsonLd = amazonFaqJsonLd(AM_FAQS);

export default function AmazonAccountManagementServicesPage() {
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
      <AmHero />
      <AmProblem />
      <AmWho />
      <AmHow />
      <AmazonCaseStudySection />
      <AmStart />
      <AmFaq />
      <AmCta />
    </div>
  );
}
