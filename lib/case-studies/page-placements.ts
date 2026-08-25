/**
 * Maps industry and service pages to case-study slugs for related-work
 * placements. A study can appear on both its industry page and each of its
 * service pages.
 */

export const INDUSTRY_CASE_STUDIES: Record<string, string[]> = {
  logistics: [
    "legacy-tms-modernization-logistics",
    "carrier-rate-automation-logistics",
  ],
  fintech: [
    "fintech-compliance-automation",
    "ml-credit-risk-scoring-fintech",
  ],
  "health-tech": [
    "ehr-interoperability-fhir-migration",
    "ai-clinical-documentation-healthcare",
  ],
  "real-estate": [
    "property-management-workflow-automation",
    "ai-maintenance-triage-multifamily",
  ],
  ecommerce: [
    "headless-commerce-migration",
    "ai-personalization-ecommerce",
  ],
  edtech: [
    "adaptive-learning-platform-edtech",
    "edtech-pilot-to-production",
  ],
  saas: ["multi-tenant-saas-migration", "saas-onboarding-automation"],
  startups: [
    "startup-mvp-spreadsheet-to-saas",
    "startup-staff-augmentation",
  ],
  "travel-hospitality": [
    "independent-hotel-pms-modernization",
    "hotel-direct-booking-recovery",
  ],
};

export const SERVICE_CASE_STUDIES: Record<string, string[]> = {
  "/consulting/discovery-workshop-services": [
    "legacy-tms-modernization-logistics",
    "ml-credit-risk-scoring-fintech",
    "ehr-interoperability-fhir-migration",
    "property-management-workflow-automation",
    "adaptive-learning-platform-edtech",
    "multi-tenant-saas-migration",
    "startup-mvp-spreadsheet-to-saas",
    "independent-hotel-pms-modernization",
  ],
  "/engineering/application-modernization-services": [
    "legacy-tms-modernization-logistics",
    "ehr-interoperability-fhir-migration",
    "headless-commerce-migration",
    "multi-tenant-saas-migration",
    "independent-hotel-pms-modernization",
  ],
  "/ai/ai-agent-development": [
    "legacy-tms-modernization-logistics",
    "fintech-compliance-automation",
    "ai-clinical-documentation-healthcare",
    "ai-maintenance-triage-multifamily",
    "adaptive-learning-platform-edtech",
    "startup-mvp-spreadsheet-to-saas",
    "hotel-direct-booking-recovery",
  ],
  "/managed-services/devops-services": [
    "legacy-tms-modernization-logistics",
    "ai-clinical-documentation-healthcare",
    "property-management-workflow-automation",
    "headless-commerce-migration",
    "edtech-pilot-to-production",
    "saas-onboarding-automation",
    "startup-staff-augmentation",
  ],
  "/consulting/ai-consultation-services": [
    "carrier-rate-automation-logistics",
    "fintech-compliance-automation",
    "ai-clinical-documentation-healthcare",
    "ai-maintenance-triage-multifamily",
    "ai-personalization-ecommerce",
    "saas-onboarding-automation",
    "hotel-direct-booking-recovery",
  ],
  "/engineering/custom-app-development-services": [
    "carrier-rate-automation-logistics",
    "fintech-compliance-automation",
    "ml-credit-risk-scoring-fintech",
    "ai-clinical-documentation-healthcare",
    "property-management-workflow-automation",
    "ai-maintenance-triage-multifamily",
    "ai-personalization-ecommerce",
    "edtech-pilot-to-production",
    "saas-onboarding-automation",
    "independent-hotel-pms-modernization",
  ],
  "/managed-services/cybersecurity-services": [
    "carrier-rate-automation-logistics",
    "fintech-compliance-automation",
    "ehr-interoperability-fhir-migration",
    "ai-personalization-ecommerce",
    "multi-tenant-saas-migration",
    "independent-hotel-pms-modernization",
  ],
  "/ai/ml-data-science-services": [
    "ml-credit-risk-scoring-fintech",
    "ai-personalization-ecommerce",
    "adaptive-learning-platform-edtech",
    "hotel-direct-booking-recovery",
  ],
  "/ai/workflow-automation-services": [
    "carrier-rate-automation-logistics",
    "property-management-workflow-automation",
    "saas-onboarding-automation",
  ],
  "/consulting/staff-augmentation-services": ["startup-staff-augmentation"],
  "/engineering/mvp-poc-development-services": [
    "edtech-pilot-to-production",
    "startup-mvp-spreadsheet-to-saas",
    "startup-staff-augmentation",
  ],
  "/consulting/digital-transformation-services": [
    "headless-commerce-migration",
  ],
  "/engineering/cms-development-services": ["hotel-direct-booking-recovery"],
  "/engineering/ui-ux-services": [
    "headless-commerce-migration",
    "adaptive-learning-platform-edtech",
    "startup-staff-augmentation",
  ],
  "/engineering/ai-software-development-services": [
    "ai-clinical-documentation-healthcare",
    "ai-personalization-ecommerce",
    "saas-onboarding-automation",
    "hotel-direct-booking-recovery",
  ],
  "/managed-services/it-infrastructure-services": [
    "ml-credit-risk-scoring-fintech",
    "ehr-interoperability-fhir-migration",
    "ai-maintenance-triage-multifamily",
    "edtech-pilot-to-production",
    "multi-tenant-saas-migration",
    "startup-mvp-spreadsheet-to-saas",
  ],
};
