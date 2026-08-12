import type { Metadata } from "next";
import {
  VcApproach,
  VcChallenge,
  VcCta,
  VcFaq,
  VcHero,
  VcIncluded,
  VcPortfolio,
  VcProcess,
  VcWhy,
} from "@/components/amazon-a-to-z/vendor-central";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_VENDOR_CENTRAL_PATH } from "@/lib/amazon-a-to-z";

export const metadata: Metadata = {
  title: "Amazon Vendor Central Services | Xorora",
  description:
    "Xorora manages Amazon Vendor Central end to end, protecting margins through negotiation, A+ content, advertising, and inventory strategy for first-party brands.",
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
  alternates: { canonical: AMAZON_VENDOR_CENTRAL_PATH },
  openGraph: {
    title: "Amazon Vendor Central Services | Xorora",
    description:
      "Xorora manages Amazon Vendor Central end to end, protecting margins through negotiation, A+ content, advertising, and inventory strategy for first-party brands.",
    url: AMAZON_VENDOR_CENTRAL_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Vendor Central Services | Xorora",
    description:
      "Xorora manages Amazon Vendor Central end to end, protecting margins through negotiation, A+ content, advertising, and inventory strategy for first-party brands.",
  },
};

export default function AmazonVendorCentralServicesPage() {
  return (
    <div className="vc-motion bg-surface">
      <IndRevealObserver />
      <VcHero />
      <VcChallenge />
      <VcProcess />
      <VcIncluded />
      <VcApproach />
      <VcWhy />
      <VcPortfolio />
      <VcFaq />
      <VcCta />
    </div>
  );
}
