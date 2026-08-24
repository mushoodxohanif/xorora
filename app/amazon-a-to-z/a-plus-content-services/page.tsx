import {
  ApcBenefits,
  ApcBespoke,
  ApcByXorora,
  ApcCompare,
  ApcContact,
  ApcCta,
  ApcEligibility,
  ApcExperts,
  ApcGrow,
  ApcHero,
  ApcInclusions,
  ApcPremium,
  ApcVisuals,
  ApcWhy,
} from "@/components/amazon-a-to-z/a-plus-content";
import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_A_PLUS_CONTENT_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon A+ Enhanced Brand Content Services | Xorora";
const DESCRIPTION =
  "Xorora's Amazon A+ Content services turn plain product pages into rich brand experiences, with hero banners, comparison tables, and interactive media that convert.";
const SERVICE_NAME = "Amazon A+ Content Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_A_PLUS_CONTENT_PATH,
  keywords: [
    "Amazon A+ Content services",
    "Amazon Enhanced Brand Content",
    "A+ Content agency",
    "Amazon Brand Registry A+",
    "Amazon product page design",
    "Amazon comparison chart A+",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_A_PLUS_CONTENT_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_A_PLUS_CONTENT_PATH,
);

export default function AmazonAPlusContentServicesPage() {
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
      <ApcHero />
      <ApcByXorora />
      <ApcExperts />
      <ApcInclusions />
      <AmazonCaseStudySection />
      <ApcVisuals />
      <ApcBespoke />
      <ApcBenefits />
      <ApcEligibility />
      <ApcPremium />
      <ApcCompare />
      <ApcWhy />
      <ApcGrow />
      <ApcContact />
      <ApcCta />
    </div>
  );
}
