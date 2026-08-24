import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  ADSP_FAQS,
  AdspApproach,
  AdspChallenge,
  AdspCta,
  AdspFaq,
  AdspHero,
  AdspIncluded,
  AdspJourney,
  AdspProcess,
  AdspWhy,
} from "@/components/amazon-a-to-z/amazon-dsp";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_DSP_SERVICES_PATH } from "@/lib/amazon-a-to-z";
import {
  amazonFaqJsonLd,
  amazonPageMetadata,
  amazonServiceBreadcrumbJsonLd,
  amazonServiceJsonLd,
} from "@/lib/amazon-a-to-z-seo";

const TITLE = "Amazon DSP Services for Brands | Xorora";
const DESCRIPTION =
  "Xorora's Amazon DSP services reach your ideal customers on and off Amazon, with programmatic display, audience strategy, creative, and ROAS-focused management.";
const SERVICE_NAME = "Amazon DSP Services";

export const metadata = amazonPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMAZON_DSP_SERVICES_PATH,
  keywords: [
    "Amazon DSP services",
    "Amazon Demand Side Platform",
    "Amazon programmatic advertising",
    "Amazon DSP agency",
    "Amazon display advertising",
    "Amazon off-Amazon advertising",
  ],
});

const serviceJsonLd = amazonServiceJsonLd({
  name: SERVICE_NAME,
  description: DESCRIPTION,
  path: AMAZON_DSP_SERVICES_PATH,
});
const breadcrumbJsonLd = amazonServiceBreadcrumbJsonLd(
  SERVICE_NAME,
  AMAZON_DSP_SERVICES_PATH,
);
const faqJsonLd = amazonFaqJsonLd(ADSP_FAQS);

export default function AmazonDspServicesPage() {
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
      <AdspHero />
      <AdspChallenge />
      <AdspProcess />
      <AdspIncluded />
      <AmazonCaseStudySection />
      <AdspApproach />
      <AdspWhy />
      <AdspJourney />
      <AdspFaq />
      <AdspCta />
    </div>
  );
}
