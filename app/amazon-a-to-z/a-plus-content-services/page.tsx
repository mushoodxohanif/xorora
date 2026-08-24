import type { Metadata } from "next";
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

const TITLE = "Amazon A+ Enhanced Brand Content Services | Xorora";
const DESCRIPTION =
  "Xorora's Amazon A+ Content services turn plain product pages into rich brand experiences, with hero banners, comparison tables, and interactive media that convert.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: { canonical: AMAZON_A_PLUS_CONTENT_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: AMAZON_A_PLUS_CONTENT_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AmazonAPlusContentServicesPage() {
  return (
    <div className="vc-motion bg-surface">
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
