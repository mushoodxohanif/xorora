import type { Metadata } from "next";
import {
  AmCta,
  AmFaq,
  AmHero,
  AmHow,
  AmProblem,
  AmStart,
  AmWho,
} from "@/components/amazon-a-to-z/account-management";
import { IndRevealObserver } from "@/components/industries/ind-reveal-observer";
import { AMAZON_ACCOUNT_MANAGEMENT_PATH } from "@/lib/amazon-a-to-z";

export const metadata: Metadata = {
  title: "Amazon Account Management Services | Xorora",
  description:
    "Xorora acts as your Amazon operations arm, handling Seller and Vendor Central, listings, advertising, inventory, and compliance so your account runs smoothly.",
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
  alternates: { canonical: AMAZON_ACCOUNT_MANAGEMENT_PATH },
  openGraph: {
    title: "Amazon Account Management Services | Xorora",
    description:
      "Xorora acts as your Amazon operations arm, handling Seller and Vendor Central, listings, advertising, inventory, and compliance so your account runs smoothly.",
    url: AMAZON_ACCOUNT_MANAGEMENT_PATH,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Account Management Services | Xorora",
    description:
      "Xorora acts as your Amazon operations arm, handling Seller and Vendor Central, listings, advertising, inventory, and compliance so your account runs smoothly.",
  },
};

export default function AmazonAccountManagementServicesPage() {
  return (
    <div className="vc-motion bg-surface">
      <IndRevealObserver />
      <AmHero />
      <AmProblem />
      <AmWho />
      <AmHow />
      <AmStart />
      <AmFaq />
      <AmCta />
    </div>
  );
}
