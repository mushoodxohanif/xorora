import type { Metadata } from "next";
import {
  AphCta,
  AphFaq,
  AphFit,
  AphHero,
  AphIncluded,
  AphInventory,
  AphNeeds,
  AphProcess,
  AphTrust,
  AphWhat,
  AphWhy,
} from "@/components/amazon-a-to-z/product-hunting";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_PRODUCT_HUNTING_PATH } from "@/lib/amazon-a-to-z";

const TITLE = "Amazon Product Hunting & Sourcing Services | Xorora";
const DESCRIPTION =
  "Xorora's Amazon product hunting and sourcing services uncover high-demand, low-competition private-label products and reliable suppliers to scale your business.";

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
  alternates: { canonical: AMAZON_PRODUCT_HUNTING_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: AMAZON_PRODUCT_HUNTING_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AmazonProductHuntingServicesPage() {
  return (
    <div className="vc-motion bg-surface">
      <IndRevealObserver />
      <AphHero />
      <AphWhat />
      <AphWhy />
      <AphIncluded />
      <AphInventory />
      <AphProcess />
      <AphTrust />
      <AphFit />
      <AphNeeds />
      <AphFaq />
      <AphCta />
    </div>
  );
}
