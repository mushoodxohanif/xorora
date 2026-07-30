import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "layers",
    name: "Custom CMS development",
    body: "We build custom CMS platforms around your requirements, workflows, and content types with frameworks like Laravel, Node.js, or .NET, so you pay no licensing fees and keep full IP ownership.",
  },
  {
    icon: "cloud",
    name: "Headless CMS development",
    body: "When content needs to reach a website, app, kiosk, or smart display, we build API-first headless CMS on Contentful, Strapi, Sanity, Contentstack, or a custom backend, so your team publishes once and every channel updates.",
  },
  {
    icon: "cpu",
    name: "Enterprise CMS development",
    body: "For enterprise scale, we build CMS that manages thousands of assets across regions, brands, and business units, with role-based access, tiered governance, localization, and deep DAM, CRM, and ERP integrations.",
  },
  {
    icon: "refresh-cw",
    name: "CMS migration",
    body: "We treat every CMS migration as an SEO project as much as a technical one, with full content inventory, URL mapping, 301 redirects, metadata migration, and 90-day post-launch rank monitoring, so nothing gets lost.",
  },
  {
    icon: "workflow",
    name: "CMS integration and API",
    body: "We connect your CMS to the tools your business runs on, whether CRM, ERP, marketing automation, analytics, or payments, with clean, documented integrations your team can maintain and extend.",
  },
  {
    icon: "file-code-2",
    name: "Open source CMS development",
    body: "We customize platforms like WordPress, Drupal, Joomla, and TYPO3 at the architecture level, building custom content types, editorial interfaces, REST and GraphQL APIs, and performance-optimized delivery.",
  },
  {
    icon: "app-window",
    name: "WordPress CMS development",
    body: "Around 43.5% of the web runs on WordPress, but most sites are underbuilt. We build custom post types, Gutenberg blocks, headless configurations, and multisite networks that turn WordPress into a personalized CMS.",
  },
  {
    icon: "bar-chart-3",
    name: "eCommerce CMS development",
    body: "We build CMS for commerce with tight integrations to Shopify, WooCommerce, Magento, or custom backends, sharing content models between merchandising and marketing so your team keeps catalog and content in sync.",
  },
] as const;

export function CmsDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we offer"
        title="CMS development services we offer"
        sub="We deliver end-to-end CMS development, whether you want a CMS built from scratch or your own CMS built on WordPress."
        items={[...CAPABILITIES]}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
