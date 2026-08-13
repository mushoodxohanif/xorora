import type { Metadata } from "next";
import {
  AseoChallenge,
  AseoCta,
  AseoFaq,
  AseoHero,
  AseoProcess,
  AseoResults,
  AseoWhy,
} from "@/components/amazon-a-to-z/amazon-seo";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_SEO_SERVICES_PATH } from "@/lib/amazon-a-to-z";

export const metadata: Metadata = {
  title: "Amazon SEO Services for Brands | Xorora",
  description:
    "Xorora's Amazon SEO services put your products in front of ready-to-buy shoppers, with listing optimization, structured data, and continuous ranking gains.",
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
  alternates: { canonical: AMAZON_SEO_SERVICES_PATH },
  openGraph: {
    title: "Amazon SEO Services for Brands | Xorora",
    description:
      "Xorora's Amazon SEO services put your products in front of ready-to-buy shoppers, with listing optimization, structured data, and continuous ranking gains.",
    url: AMAZON_SEO_SERVICES_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon SEO Services for Brands | Xorora",
    description:
      "Xorora's Amazon SEO services put your products in front of ready-to-buy shoppers, with listing optimization, structured data, and continuous ranking gains.",
  },
};

export default function AmazonSeoServicesPage() {
  return (
    <div className="vc-motion bg-surface">
      <IndRevealObserver />
      <AseoHero />
      <AseoResults />
      <AseoProcess />
      <AseoChallenge />
      <AseoWhy />
      <AseoFaq />
      <AseoCta />
    </div>
  );
}
