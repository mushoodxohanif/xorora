import type { Metadata } from "next";
import {
  AMAZON_ACCOUNT_MANAGEMENT_PATH,
  AMAZON_A_PLUS_CONTENT_PATH,
  AMAZON_A_TO_Z_PATH,
  AMAZON_DSP_SERVICES_PATH,
  AMAZON_LISTING_OPTIMIZATION_PATH,
  AMAZON_PPC_ADVERTISING_PATH,
  AMAZON_PRODUCT_HUNTING_PATH,
  AMAZON_PRODUCT_LAUNCH_PATH,
  AMAZON_SELLER_CENTRAL_PATH,
  AMAZON_SEO_SERVICES_PATH,
  AMAZON_VENDOR_CENTRAL_PATH,
} from "@/lib/amazon-a-to-z";
import { SITE_URL } from "@/lib/site-url";

/** All publicly indexable Amazon A to Z routes (hub + services). */
export const AMAZON_INDEXED_PATHS = [
  AMAZON_A_TO_Z_PATH,
  AMAZON_PRODUCT_HUNTING_PATH,
  AMAZON_LISTING_OPTIMIZATION_PATH,
  AMAZON_PRODUCT_LAUNCH_PATH,
  AMAZON_A_PLUS_CONTENT_PATH,
  AMAZON_SEO_SERVICES_PATH,
  AMAZON_PPC_ADVERTISING_PATH,
  AMAZON_DSP_SERVICES_PATH,
  AMAZON_SELLER_CENTRAL_PATH,
  AMAZON_ACCOUNT_MANAGEMENT_PATH,
  AMAZON_VENDOR_CENTRAL_PATH,
] as const;

export function amazonPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Xorora",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function amazonServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceType ?? name,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Xorora",
      url: SITE_URL,
    },
    areaServed: ["North America", "Europe", "Asia", "Australia"],
    url: `${SITE_URL}${path}`,
  };
}

export function amazonBreadcrumbJsonLd(
  crumbs: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...crumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
      })),
    ],
  };
}

export function amazonServiceBreadcrumbJsonLd(
  serviceName: string,
  servicePath: string,
) {
  return amazonBreadcrumbJsonLd([
    { name: "Amazon A to Z Services", path: AMAZON_A_TO_Z_PATH },
    { name: serviceName, path: servicePath },
  ]);
}

export function amazonFaqJsonLd(
  faqs: ReadonlyArray<{ q: string; a: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
