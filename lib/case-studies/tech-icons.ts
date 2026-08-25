/**
 * Maps display tech names to Simple Icons slugs (cdn.simpleicons.org).
 * Fallback: generic "code" glyph via Lucide in the UI.
 */

const TECH_ICON_SLUGS: Record<string, string> = {
  "node.js": "nodedotjs",
  nodejs: "nodedotjs",
  node: "nodedotjs",
  postgresql: "postgresql",
  postgres: "postgresql",
  python: "python",
  django: "django",
  flask: "flask",
  fastapi: "fastapi",
  aws: "amazonaws",
  "amazon web services": "amazonaws",
  docker: "docker",
  "github actions": "githubactions",
  github: "github",
  react: "react",
  "next.js": "nextdotjs",
  nextjs: "nextdotjs",
  typescript: "typescript",
  javascript: "javascript",
  redis: "redis",
  kafka: "apachekafka",
  "apache kafka": "apachekafka",
  elasticsearch: "elasticsearch",
  graphql: "graphql",
  rest: "fastapi",
  "rest api": "fastapi",
  terraform: "terraform",
  kubernetes: "kubernetes",
  azure: "microsoftazure",
  gcp: "googlecloud",
  "google cloud": "googlecloud",
  openai: "openai",
  langchain: "langchain",
  pytorch: "pytorch",
  tensorflow: "tensorflow",
  scikit: "scikitlearn",
  "scikit-learn": "scikitlearn",
  pandas: "pandas",
  spark: "apachespark",
  "apache spark": "apachespark",
  mongodb: "mongodb",
  mysql: "mysql",
  prisma: "prisma",
  drizzle: "drizzle",
  vercel: "vercel",
  stripe: "stripe",
  firebase: "firebase",
  supabase: "supabase",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  vue: "vuedotjs",
  "vue.js": "vuedotjs",
  angular: "angular",
  ".net": "dotnet",
  "asp.net": "dotnet",
  csharp: "csharp",
  "c#": "csharp",
  java: "openjdk",
  spring: "spring",
  "spring boot": "springboot",
  fhir: "hl7fhir",
  hl7: "hl7fhir",
  celery: "celery",
  rabbitmq: "rabbitmq",
  nginx: "nginx",
  linux: "linux",
  go: "go",
  golang: "go",
  rust: "rust",
  svelte: "svelte",
  shopify: "shopify",
  snowflake: "snowflake",
  databricks: "databricks",
  huggingface: "huggingface",
  "hugging face": "huggingface",
  pinecone: "pinecone",
  weaviate: "weaviate",
  "ci/cd": "githubactions",
  edi: "apachekafka",
};

export function techIconSlug(name: string): string | null {
  const key = name.trim().toLowerCase();
  if (TECH_ICON_SLUGS[key]) return TECH_ICON_SLUGS[key];

  // Match when tech name is a prefix of a longer bullet ("Python (Django)")
  for (const [alias, slug] of Object.entries(TECH_ICON_SLUGS)) {
    if (key.startsWith(alias) || key.includes(` ${alias}`) || key.includes(`(${alias}`)) {
      return slug;
    }
  }
  return null;
}

export function techIconUrl(name: string): string | null {
  const slug = techIconSlug(name);
  if (!slug) return null;
  return `https://cdn.simpleicons.org/${slug}`;
}
