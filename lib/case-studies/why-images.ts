/**
 * Industry-relevant stock images for the "Why this matters" section.
 * Keyed by case-study slug so each page gets a distinct visual.
 */
export const WHY_MATTERS_IMAGES: Record<string, { src: string; alt: string }> =
  {
    "legacy-tms-modernization-logistics": {
      src: "https://images.unsplash.com/photo-1578574577315-52ac87545dbd?auto=format&fit=crop&w=1200&q=80",
      alt: "Freight trucks at a logistics depot",
    },
    "carrier-rate-automation-logistics": {
      src: "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1200&q=80",
      alt: "Shipping containers at a freight terminal",
    },
    "fintech-compliance-automation": {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "Financial analytics dashboard on a laptop",
    },
    "ml-credit-risk-scoring-fintech": {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      alt: "Credit and banking data on a digital screen",
    },
    "ehr-interoperability-fhir-migration": {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      alt: "Clinician reviewing electronic health records",
    },
    "ai-clinical-documentation-healthcare": {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80",
      alt: "Doctor documenting patient care on a tablet",
    },
    "property-management-workflow-automation": {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern multifamily residential buildings",
    },
    "ai-maintenance-triage-multifamily": {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      alt: "Building maintenance technician at work",
    },
    "headless-commerce-migration": {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      alt: "Online shopping and checkout experience",
    },
    "ai-personalization-ecommerce": {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      alt: "Retail storefront and personalized shopping",
    },
    "adaptive-learning-platform-edtech": {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      alt: "Students learning with digital devices",
    },
    "edtech-pilot-to-production": {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      alt: "Edtech team collaborating on a product launch",
    },
    "multi-tenant-saas-migration": {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      alt: "Cloud infrastructure and multi-tenant systems",
    },
    "saas-onboarding-automation": {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      alt: "Product team reviewing SaaS onboarding metrics",
    },
    "startup-mvp-spreadsheet-to-saas": {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      alt: "Startup founders building an early product",
    },
    "startup-staff-augmentation": {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "Engineering team collaborating in a studio",
    },
    "independent-hotel-pms-modernization": {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      alt: "Independent hotel lobby and guest experience",
    },
    "hotel-direct-booking-recovery": {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      alt: "Hotel guest booking a room online",
    },
  };

export function whyMattersImage(
  slug: string,
): { src: string; alt: string } | null {
  return WHY_MATTERS_IMAGES[slug] ?? null;
}
