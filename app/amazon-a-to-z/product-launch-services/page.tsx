import type { Metadata } from "next";
import {
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

const TITLE = "Amazon Product Launch Services | Xorora";
const DESCRIPTION =
  "Xorora's Amazon product launch services position new products to sell from day one, with market research, listing optimization, keyword strategy, and PPC.";

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
  alternates: { canonical: AMAZON_PRODUCT_LAUNCH_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: AMAZON_PRODUCT_LAUNCH_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AmazonProductLaunchServicesPage() {
  return (
    <div className="vc-motion bg-surface">
      <IndRevealObserver />
      <PlsHero />
      <PlsServices />
      <PlsBanner />
      <PlsBuild />
      <PlsProcess />
      <PlsAdsExpertise />
      <PlsWhy />
      <PlsFaq />
      <PlsUnlock />
      <PlsCta />
    </div>
  );
}
