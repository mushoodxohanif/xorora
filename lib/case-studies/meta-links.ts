import { ROUTES } from "@/lib/navigation";

const INDUSTRY_HREFS: Record<string, string> = {
  logistics: ROUTES.industry("logistics"),
  fintech: ROUTES.industry("fintech"),
  healthcare: ROUTES.industry("health-tech"),
  "health-tech": ROUTES.industry("health-tech"),
  "health tech": ROUTES.industry("health-tech"),
  "real estate": ROUTES.industry("real-estate"),
  ecommerce: ROUTES.industry("ecommerce"),
  "e-commerce": ROUTES.industry("ecommerce"),
  edtech: ROUTES.industry("edtech"),
  saas: ROUTES.industry("saas"),
  startups: ROUTES.industry("startups"),
  "travel & hospitality": ROUTES.industry("travel-hospitality"),
  "travel and hospitality": ROUTES.industry("travel-hospitality"),
  hospitality: ROUTES.industry("travel-hospitality"),
};

const SERVICE_HREFS: Record<string, string> = {
  "discovery workshop": ROUTES.discoveryWorkshop,
  "application modernization": ROUTES.applicationModernization,
  "ai agent development": ROUTES.aiAgentDevelopment,
  devops: ROUTES.devops,
  "ai consulting": ROUTES.aiConsultation,
  "ai consultation": ROUTES.aiConsultation,
  "custom app development": ROUTES.customAppDevelopment,
  cybersecurity: ROUTES.cybersecurity,
  "workflow automation": ROUTES.workflowAutomation,
  "workflow automation services": ROUTES.workflowAutomation,
  "ml & data science": ROUTES.mlDataScience,
  "ml & data science services": ROUTES.mlDataScience,
  "it infrastructure": ROUTES.itInfrastructure,
  "digital transformation": ROUTES.digitalTransformation,
  "ui/ux": ROUTES.uiUxServices,
  "ui/ux services": ROUTES.uiUxServices,
  "ai software development": ROUTES.aiSoftwareDevelopment,
  "cms development": ROUTES.cmsDevelopment,
  "cms development services": ROUTES.cmsDevelopment,
  "staff augmentation": ROUTES.staffAugmentation,
  "mvp/poc development": ROUTES.mvpPocDevelopment,
  "mvp development": ROUTES.mvpPocDevelopment,
  "mvp / poc development": ROUTES.mvpPocDevelopment,
};

export function industryHref(name: string): string | null {
  return INDUSTRY_HREFS[name.trim().toLowerCase()] ?? null;
}

export function serviceHref(name: string): string | null {
  return SERVICE_HREFS[name.trim().toLowerCase()] ?? null;
}

/** Split a comma-separated services string into individual names. */
export function splitServiceNames(value: string): string[] {
  return value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}
