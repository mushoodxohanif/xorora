/**
 * Unique Unsplash assets for industry case studies.
 * No photo ID is reused across any study or section (hero / overview / why).
 */

const q = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type CaseStudyImageSet = {
  hero: { src: string; alt: string };
  overview: { src: string; alt: string };
  why: { src: string; alt: string };
};

export const INDUSTRY_CASE_IMAGES: Record<string, CaseStudyImageSet> = {
  "legacy-tms-modernization-logistics": {
    hero: {
      src: q("photo-1586528116311-ad8dd3c8310d"),
      alt: "Warehouse logistics and freight operations",
    },
    overview: {
      src: q("photo-1605745340209-9f4d543cdeda"),
      alt: "Logistics team coordinating shipments in a depot",
    },
    why: {
      src: q("photo-1578574577315-52ac87545dbd", 1200),
      alt: "Freight trucks staged at a logistics depot",
    },
  },
  "carrier-rate-automation-logistics": {
    hero: {
      src: q("photo-1494412574643-ff11b0a5c1c3"),
      alt: "Cargo ship and port freight operations",
    },
    overview: {
      src: q("photo-1590674899484-d5640e854936"),
      alt: "Shipping containers stacked at a freight terminal",
    },
    why: {
      src: q("photo-1494412685616-a5d310fbb07d", 1200),
      alt: "Container crane loading freight at the docks",
    },
  },
  "fintech-compliance-automation": {
    hero: {
      src: q("photo-1563986768609-322da13575f3"),
      alt: "Digital banking and compliance systems",
    },
    overview: {
      src: q("photo-1554224155-6726b3ff858f"),
      alt: "Financial documents and lending review workspace",
    },
    why: {
      src: q("photo-1450101499163-c8848c66ca85", 1200),
      alt: "Compliance paperwork and audit review",
    },
  },
  "ml-credit-risk-scoring-fintech": {
    hero: {
      src: q("photo-1551288049-bebda4e38f71"),
      alt: "Analytics dashboard for credit risk scoring",
    },
    overview: {
      src: q("photo-1563013544-824ae1b704d3"),
      alt: "Secure digital payments and credit decisioning",
    },
    why: {
      src: q("photo-1611974789855-9c2a0a7236a3", 1200),
      alt: "Market and risk data on trading screens",
    },
  },
  "ehr-interoperability-fhir-migration": {
    hero: {
      src: q("photo-1519494026892-80bbd2d6fd0d"),
      alt: "Hospital corridor and clinical systems environment",
    },
    overview: {
      src: q("photo-1579684385127-1ef15d508118"),
      alt: "Healthcare professionals in a modern hospital wing",
    },
    why: {
      src: q("photo-1666214280557-f1b5022eb634", 1200),
      alt: "Clinician using connected medical technology",
    },
  },
  "ai-clinical-documentation-healthcare": {
    hero: {
      src: q("photo-1576091160399-112ba8d25d1d"),
      alt: "Physician reviewing electronic health records",
    },
    overview: {
      src: q("photo-1631217868264-e5b90bb7e133"),
      alt: "Doctor documenting care on a tablet at bedside",
    },
    why: {
      src: q("photo-1584820927498-cfe5211fd8bf", 1200),
      alt: "Clinical team collaborating on patient documentation",
    },
  },
  "property-management-workflow-automation": {
    hero: {
      src: q("photo-1560518883-ce09059eeffa"),
      alt: "Multifamily residential property exterior",
    },
    overview: {
      src: q("photo-1560448204-e02f11c3d0e2"),
      alt: "Modern apartment interior managed by property ops",
    },
    why: {
      src: q("photo-1484154218962-a197022b5858", 1200),
      alt: "Property keys and leasing operations desk",
    },
  },
  "ai-maintenance-triage-multifamily": {
    hero: {
      src: q("photo-1486406146926-c627a92ad1ab"),
      alt: "Commercial multifamily buildings skyline",
    },
    overview: {
      src: q("photo-1581578731548-c64695cc6952"),
      alt: "Building maintenance technician at work",
    },
    why: {
      src: q("photo-1504307651254-35680f356dfd", 1200),
      alt: "Facilities maintenance tools and work site",
    },
  },
  "headless-commerce-migration": {
    hero: {
      src: q("photo-1556742049-0cfed4f6a45d"),
      alt: "Customer checking out on a commerce device",
    },
    overview: {
      src: q("photo-1472851294608-062f824d29cc"),
      alt: "Retail shopping bags and storefront commerce",
    },
    why: {
      src: q("photo-1556740758-90de374c12ad", 1200),
      alt: "Card payment at a modern retail checkout",
    },
  },
  "ai-personalization-ecommerce": {
    hero: {
      src: q("photo-1441986300917-64674bd600d8"),
      alt: "Retail apparel storefront for personalized shopping",
    },
    overview: {
      src: q("photo-1483985988355-763728e1935b"),
      alt: "Shopper browsing personalized fashion recommendations",
    },
    why: {
      src: q("photo-1607082348824-0a96f2a4b9da", 1200),
      alt: "Curated retail products ready for purchase",
    },
  },
  "adaptive-learning-platform-edtech": {
    hero: {
      src: q("photo-1503676260728-1c00da094a0b"),
      alt: "Students learning with digital classroom tools",
    },
    overview: {
      src: q("photo-1509062522246-3755977927d7"),
      alt: "Classroom instruction supporting adaptive learning",
    },
    why: {
      src: q("photo-1427504494785-3a9ca7044f45", 1200),
      alt: "Students working on computers in a learning lab",
    },
  },
  "edtech-pilot-to-production": {
    hero: {
      src: q("photo-1522202176988-66273c2fd55f"),
      alt: "Edtech team collaborating on a product launch",
    },
    overview: {
      src: q("photo-1523240795612-9a054b0db644"),
      alt: "University students collaborating around laptops",
    },
    why: {
      src: q("photo-1516321318423-f06f85e504b3", 1200),
      alt: "Online learning session on a laptop",
    },
  },
  "multi-tenant-saas-migration": {
    hero: {
      src: q("photo-1460925895917-afdab827c52f"),
      alt: "SaaS analytics and multi-tenant product metrics",
    },
    overview: {
      src: q("photo-1451187580459-43490279c0fa"),
      alt: "Cloud infrastructure and global SaaS systems",
    },
    why: {
      src: q("photo-1558494949-ef010cbdcc31", 1200),
      alt: "Data center servers powering multi-tenant platforms",
    },
  },
  "saas-onboarding-automation": {
    hero: {
      src: q("photo-1551434678-e076c223a692"),
      alt: "Product team reviewing SaaS onboarding metrics",
    },
    overview: {
      src: q("photo-1552664730-d307ca884978"),
      alt: "Workshop mapping customer activation journeys",
    },
    why: {
      src: q("photo-1600880292203-757bb62b4baf", 1200),
      alt: "Product managers aligning on onboarding flows",
    },
  },
  "startup-mvp-spreadsheet-to-saas": {
    hero: {
      src: q("photo-1522071820081-009f0129c71c"),
      alt: "Startup founders collaborating on an early build",
    },
    overview: {
      src: q("photo-1517245386807-bb43f82c33c4"),
      alt: "Early-stage team planning an MVP roadmap",
    },
    why: {
      src: q("photo-1559136555-9303baea8ebd", 1200),
      alt: "Founder coding the first SaaS prototype",
    },
  },
  "startup-staff-augmentation": {
    hero: {
      src: q("photo-1519389950473-47ba0277781c"),
      alt: "Engineering team shipping in a studio workspace",
    },
    overview: {
      src: q("photo-1600880292089-90a7e086ee0c"),
      alt: "Augmented product team working side by side",
    },
    why: {
      src: q("photo-1521737711867-e3b97375f902", 1200),
      alt: "Partners aligning on staff-augmented delivery",
    },
  },
  "independent-hotel-pms-modernization": {
    hero: {
      src: q("photo-1566073771259-6a8506099945"),
      alt: "Independent hotel lobby and guest experience",
    },
    overview: {
      src: q("photo-1618773928121-c32242e63f39"),
      alt: "Boutique hotel room managed through a modern PMS",
    },
    why: {
      src: q("photo-1564501049412-61c2a3083791", 1200),
      alt: "Hotel exterior welcoming arriving guests",
    },
  },
  "hotel-direct-booking-recovery": {
    hero: {
      src: q("photo-1551882547-ff40c63fe5fa"),
      alt: "Guest booking a hotel stay on a digital device",
    },
    overview: {
      src: q("photo-1590490360182-c33d57733427"),
      alt: "Hotel front desk handling direct reservations",
    },
    why: {
      src: q("photo-1445019980597-93fa8acb246c", 1200),
      alt: "Resort pool and direct-booking guest experience",
    },
  },
};

export function industryCaseImages(slug: string): CaseStudyImageSet | null {
  return INDUSTRY_CASE_IMAGES[slug] ?? null;
}
