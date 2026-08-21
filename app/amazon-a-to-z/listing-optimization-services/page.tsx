import type { Metadata } from "next";
import {
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

export const metadata: Metadata = {
  title: "Amazon Listing Optimization Services | Xorora",
  description:
    "Xorora's Amazon listing optimization turns browsers into buyers, with SEO keyword research, A+ Content, image and video optimization, and front and back-end tuning.",
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
  alternates: { canonical: AMAZON_LISTING_OPTIMIZATION_PATH },
  openGraph: {
    title: "Amazon Listing Optimization Services | Xorora",
    description:
      "Xorora's Amazon listing optimization turns browsers into buyers, with SEO keyword research, A+ Content, image and video optimization, and front and back-end tuning.",
    url: AMAZON_LISTING_OPTIMIZATION_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Listing Optimization Services | Xorora",
    description:
      "Xorora's Amazon listing optimization turns browsers into buyers, with SEO keyword research, A+ Content, image and video optimization, and front and back-end tuning.",
  },
};

export default function AmazonListingOptimizationServicesPage() {
  return (
    <div className="vc-motion bg-surface">
      <IndRevealObserver />
      <AloHero />
      <AloStandout />
      <AloBenefits />
      <AloAdvantage />
      <AloIncluded />
      <AloFoundation />
      <AloOptimize />
      <AloFaq />
      <AloCta />
    </div>
  );
}
