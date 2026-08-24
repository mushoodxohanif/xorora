import { ServiceCardGrid } from "@/components/services";
import {
  AMAZON_ACCOUNT_MANAGEMENT_PATH,
  AMAZON_A_PLUS_CONTENT_PATH,
  AMAZON_DSP_SERVICES_PATH,
  AMAZON_LISTING_OPTIMIZATION_PATH,
  AMAZON_PPC_ADVERTISING_PATH,
  AMAZON_PRODUCT_HUNTING_PATH,
  AMAZON_PRODUCT_LAUNCH_PATH,
  AMAZON_SELLER_CENTRAL_PATH,
  AMAZON_SEO_SERVICES_PATH,
  AMAZON_VENDOR_CENTRAL_PATH,
} from "@/lib/amazon-a-to-z";

export const AMAZON_HUB_SERVICES = [
  {
    icon: "search",
    name: "Product Hunting & Sourcing",
    body: "Demand-validated product research and supplier sourcing so you launch SKUs that can actually win.",
    href: AMAZON_PRODUCT_HUNTING_PATH,
  },
  {
    icon: "scan-text",
    name: "Listing Optimization Services",
    body: "Conversion-ready titles, bullets, images, and backend keywords tuned to Amazon search intent.",
    href: AMAZON_LISTING_OPTIMIZATION_PATH,
  },
  {
    icon: "rocket",
    name: "Product Launch Services",
    body: "Structured launch plans that combine listing readiness, review velocity, and early PPC discipline.",
    href: AMAZON_PRODUCT_LAUNCH_PATH,
  },
  {
    icon: "file-text",
    name: "A+ Content Services",
    body: "Brand Registry storytelling modules that lift conversion and reinforce brand trust on-page.",
    href: AMAZON_A_PLUS_CONTENT_PATH,
  },
  {
    icon: "search-check",
    name: "Amazon SEO Services",
    body: "Keyword architecture and indexation work that compounds organic rank alongside paid demand.",
    href: AMAZON_SEO_SERVICES_PATH,
  },
  {
    icon: "target",
    name: "Amazon PPC Advertising",
    body: "Sponsored Products, Brands, and Display structured for profitable ROAS — not vanity spend.",
    href: AMAZON_PPC_ADVERTISING_PATH,
  },
  {
    icon: "bar-chart-3",
    name: "Amazon DSP Services",
    body: "Programmatic reach and retargeting that keeps your brand in consideration beyond the search box.",
    href: AMAZON_DSP_SERVICES_PATH,
  },
  {
    icon: "layers",
    name: "Seller Central Management",
    body: "Day-to-day catalog, inventory, and account health ops so your storefront stays compliant and live.",
    href: AMAZON_SELLER_CENTRAL_PATH,
  },
  {
    icon: "handshake",
    name: "Account Management Services",
    body: "A dedicated growth partner who owns priorities, reporting, and cross-channel execution.",
    href: AMAZON_ACCOUNT_MANAGEMENT_PATH,
  },
  {
    icon: "cloud",
    name: "Vendor Central Services",
    body: "1P margin protection, chargeback control, and advertising support for established Vendor brands.",
    href: AMAZON_VENDOR_CENTRAL_PATH,
  },
] as const;

export function AtzServices() {
  return (
    <div id="amazon-services">
      <ServiceCardGrid
        label="Full-funnel Amazon"
        title="Amazon A to Z services."
        sub="Every capability below is a dedicated practice page — pick where you need help, or run the stack as one system."
        items={[...AMAZON_HUB_SERVICES]}
        showLearnMore
      />
    </div>
  );
}
