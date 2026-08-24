import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  PPC_FAQS,
  PpcAuditBanner,
  PpcCta,
  PpcDominate,
  PpcEngagement,
  PpcFaq,
  PpcHarder,
  PpcHero,
  PpcIntro,
  PpcMarketplaces,
  PpcSpectrum,
  PpcUnderperform,
  PpcWho,
  PpcWhy,
} from "@/components/amazon-a-to-z/ppc-advertising";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_PPC_ADVERTISING_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonFaqJsonLd,
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon PPC & Advertising Services | Xorora";
const DESCRIPTION =
  "Xorora's Amazon PPC and advertising services grow sales, not just spend, with Sponsored Products, Brands, Display, and DSP managed to your ACoS and revenue goals.";
const SERVICE_NAME = "Amazon PPC Advertising Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_PPC_ADVERTISING_PATH,
  keywords: [
    "Amazon PPC services",
    "Amazon advertising agency",
    "Sponsored Products management",
    "Amazon Sponsored Brands",
    "Amazon ACoS optimization",
    "Amazon PPC management",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_PPC_ADVERTISING_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_PPC_ADVERTISING_PATH,
);
const faqJsonLd = amazonFaqJsonLd(PPC_FAQS);

export default function AmazonPpcAdvertisingServicesPage() {
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
      <PpcHero />
      <PpcIntro />
      <PpcUnderperform />
      <PpcSpectrum />
      <AmazonCaseStudySection />
      <PpcHarder />
      <PpcAuditBanner />
      <PpcWho />
      <PpcEngagement />
      <PpcMarketplaces />
      <PpcWhy />
      <PpcDominate />
      <PpcFaq />
      <PpcCta />
    </div>
  );
}
