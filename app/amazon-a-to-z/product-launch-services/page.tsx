import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  PLS_FAQS,
  PlsAdsExpertise,
  PlsBanner,
  PlsBuild,
  PlsCta,
  PlsFaq,
  PlsHero,
  PlsProcess,
  PlsServices,
  PlsUnlock,
  PlsWhy,
} from "@/components/amazon-a-to-z/product-launch";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_PRODUCT_LAUNCH_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonFaqJsonLd,
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon Product Launch Services | Xorora";
const DESCRIPTION =
  "Xorora's Amazon product launch services position new products to sell from day one, with market research, listing optimization, keyword strategy, and PPC.";
const SERVICE_NAME = "Amazon Product Launch Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_PRODUCT_LAUNCH_PATH,
  keywords: [
    "Amazon product launch services",
    "Amazon product launch agency",
    "new product launch on Amazon",
    "Amazon ASIN launch",
    "Amazon launch PPC",
    "Amazon listing launch strategy",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_PRODUCT_LAUNCH_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_PRODUCT_LAUNCH_PATH,
);
const faqJsonLd = amazonFaqJsonLd(PLS_FAQS);

export default function AmazonProductLaunchServicesPage() {
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
      <PlsHero />
      <PlsServices />
      <PlsBanner />
      <PlsBuild />
      <AmazonCaseStudySection />
      <PlsProcess />
      <PlsAdsExpertise />
      <PlsWhy />
      <PlsFaq />
      <PlsUnlock />
      <PlsCta />
    </div>
  );
}
