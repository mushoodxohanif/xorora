import type { Metadata } from "next";
import {
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

export const metadata: Metadata = {
  title: "Amazon DSP Services for Brands | Xorora",
  description:
    "Xorora's Amazon DSP services reach your ideal customers on and off Amazon, with programmatic display, audience strategy, creative, and ROAS-focused management.",
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
  alternates: { canonical: AMAZON_DSP_SERVICES_PATH },
  openGraph: {
    title: "Amazon DSP Services for Brands | Xorora",
    description:
      "Xorora's Amazon DSP services reach your ideal customers on and off Amazon, with programmatic display, audience strategy, creative, and ROAS-focused management.",
    url: AMAZON_DSP_SERVICES_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon DSP Services for Brands | Xorora",
    description:
      "Xorora's Amazon DSP services reach your ideal customers on and off Amazon, with programmatic display, audience strategy, creative, and ROAS-focused management.",
  },
};

export default function AmazonDspServicesPage() {
  return (
    <div className="vc-motion bg-surface">
      <IndRevealObserver />
      <AdspHero />
      <AdspChallenge />
      <AdspProcess />
      <AdspIncluded />
      <AdspApproach />
      <AdspWhy />
      <AdspJourney />
      <AdspFaq />
      <AdspCta />
    </div>
  );
}
