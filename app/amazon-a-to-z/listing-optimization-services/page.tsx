import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  ALO_FAQS,
  AloAdvantage,
  AloBenefits,
  AloCta,
  AloFaq,
  AloFoundation,
  AloHero,
  AloIncluded,
  AloOptimize,
  AloStandout,
} from "@/components/amazon-a-to-z/listing-optimization";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_LISTING_OPTIMIZATION_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonFaqJsonLd,
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon Listing Optimization Services | Xorora";
const DESCRIPTION =
  "Xorora's Amazon listing optimization turns browsers into buyers, with SEO keyword research, A+ Content, image and video optimization, and front and back-end tuning.";
const SERVICE_NAME = "Amazon Listing Optimization Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_LISTING_OPTIMIZATION_PATH,
  keywords: [
    "Amazon listing optimization",
    "Amazon listing SEO",
    "Amazon product listing services",
    "Amazon keyword research",
    "Amazon image optimization",
    "Amazon conversion rate optimization",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_LISTING_OPTIMIZATION_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_LISTING_OPTIMIZATION_PATH,
);
const faqJsonLd = amazonFaqJsonLd(ALO_FAQS);

export default function AmazonListingOptimizationServicesPage() {
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
      <AloHero />
      <AloStandout />
      <AloBenefits />
      <AloAdvantage />
      <AmazonCaseStudySection />
      <AloIncluded />
      <AloFoundation />
      <AloOptimize />
      <AloFaq />
      <AloCta />
    </div>
  );
}
