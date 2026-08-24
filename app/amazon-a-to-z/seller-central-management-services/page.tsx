import type { Metadata } from "next";
import { AmazonCaseStudySection } from "@/components/amazon-a-to-z/amazon-case-study-section";
import {
  ScAudit,
  ScChallenge,
  ScCta,
  ScFaq,
  ScHero,
  ScHow,
  ScIncluded,
  ScWho,
} from "@/components/amazon-a-to-z/seller-central";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_SELLER_CENTRAL_PATH } from "@/lib/amazon-a-to-z";

export const metadata: Metadata = {
  title: "Amazon Seller Central Management Services | Xorora",
  description:
    "Xorora manages Amazon Seller Central end to end, from catalog and FBA inventory to advertising, compliance, and reporting, to protect margins and grow revenue.",
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
  alternates: { canonical: AMAZON_SELLER_CENTRAL_PATH },
  openGraph: {
    title: "Amazon Seller Central Management Services | Xorora",
    description:
      "Xorora manages Amazon Seller Central end to end, from catalog and FBA inventory to advertising, compliance, and reporting, to protect margins and grow revenue.",
    url: AMAZON_SELLER_CENTRAL_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Seller Central Management Services | Xorora",
    description:
      "Xorora manages Amazon Seller Central end to end, from catalog and FBA inventory to advertising, compliance, and reporting, to protect margins and grow revenue.",
  },
};

export default function AmazonSellerCentralManagementServicesPage() {
  return (
    <div className="vc-motion bg-surface">
      <IndRevealObserver />
      <ScHero />
      <ScChallenge />
      <ScIncluded />
      <ScHow />
      <AmazonCaseStudySection />
      <ScAudit />
      <ScWho />
      <ScFaq />
      <ScCta />
    </div>
  );
}
