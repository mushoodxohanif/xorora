/**
 * Maps display tech names → icon URLs.
 * Prefer local assets under /assets/tech-stack and /assets/ml-platforms;
 * fall back to custom SVGs, then Simple Icons CDN.
 */

const TECH_LOCAL: Record<string, string> = {
  "node.js": "/assets/tech-stack/nodejs.svg",
  nodejs: "/assets/tech-stack/nodejs.svg",
  node: "/assets/tech-stack/nodejs.svg",
  postgresql: "/assets/tech-stack/postgresql.svg",
  postgres: "/assets/tech-stack/postgresql.svg",
  python: "/assets/tech-stack/python.svg",
  django: "/assets/tech-stack/django.svg",
  flask: "/assets/tech-stack/flask.svg",
  fastapi: "/assets/tech-stack/fastapi.svg",
  aws: "/assets/tech-stack/aws.svg",
  "amazon web services": "/assets/tech-stack/aws.svg",
  docker: "/assets/tech-stack/docker.svg",
  "github actions": "/assets/tech-stack/githubactions.svg",
  github: "/assets/tech-stack/githubactions.svg",
  react: "/assets/tech-stack/react.svg",
  "next.js": "/assets/tech-stack/nextjs.svg",
  nextjs: "/assets/tech-stack/nextjs.svg",
  javascript: "/assets/tech-stack/javascript.svg",
  redis: "/assets/tech-stack/redis.svg",
  elasticsearch: "/assets/tech-stack/elasticsearch.svg",
  graphql: "/assets/tech-stack/graphql.svg",
  azure: "/assets/tech-stack/azure.svg",
  gcp: "/assets/tech-stack/google-cloud.svg",
  "google cloud": "/assets/tech-stack/google-cloud.svg",
  openai: "/assets/tech-stack/openai.svg",
  pytorch: "/assets/tech-stack/pytorch.svg",
  tensorflow: "/assets/tech-stack/tensorflow.svg",
  pandas: "/assets/tech-stack/pandas.svg",
  mongodb: "/assets/tech-stack/mongodb.svg",
  sql: "/assets/tech-stack/sql.svg",
  shopify: "/assets/tech-stack/shopify.svg",
  celery: "/assets/tech-stack/celery.svg",
  rabbitmq: "/assets/tech-stack/rabbitmq.svg",
  go: "/assets/tech-stack/go.svg",
  golang: "/assets/tech-stack/go.svg",
  java: "/assets/tech-stack/java.svg",
  spring: "/assets/tech-stack/spring.svg",
  ".net": "/assets/tech-stack/dotnet.svg",
  "asp.net": "/assets/tech-stack/dotnet.svg",
  csharp: "/assets/tech-stack/csharp.svg",
  "c#": "/assets/tech-stack/csharp.svg",
  vue: "/assets/tech-stack/vue.svg",
  "vue.js": "/assets/tech-stack/vue.svg",
  angular: "/assets/tech-stack/angular.svg",
  kubernetes: "/assets/ml-platforms/kubernetes.svg",
  "scikit-learn": "/assets/ml-platforms/scikit-learn.svg",
  scikit: "/assets/ml-platforms/scikit-learn.svg",
  spark: "/assets/ml-platforms/apache-spark.svg",
  "apache spark": "/assets/ml-platforms/apache-spark.svg",
  snowflake: "/assets/ml-platforms/snowflake.svg",
  databricks: "/assets/ml-platforms/databricks.svg",
  huggingface: "/assets/ml-platforms/huggingface.svg",
  "hugging face": "/assets/ml-platforms/huggingface.svg",
  xgboost: "/assets/ml-platforms/xgboost.png",
  fhir: "/assets/tech/fhir.svg",
  "fhir r4": "/assets/tech/fhir.svg",
  hl7: "/assets/tech/fhir.svg",
  "mirth connect": "/assets/tech/mirth.svg",
  shap: "/assets/tech/shap.svg",
  kafka: "/assets/tech/kafka.svg",
  "apache kafka": "/assets/tech/kafka.svg",
  segment: "/assets/tech/segment.svg",
  vercel: "/assets/tech/vercel.svg",
  stripe: "/assets/tech/stripe.svg",
  flutter: "/assets/tech-stack/flutter.svg",
  dart: "/assets/tech-stack/flutter.svg",
  laravel: "/assets/tech-stack/laravel.svg",
  php: "/assets/tech-stack/php.svg",
  express: "/assets/tech-stack/express.svg",
  sentry: "/assets/tech-stack/sentry.svg",
  pytest: "/assets/tech-stack/pytest.svg",
  kotlin: "/assets/tech-stack/kotlin.svg",
  dotnet: "/assets/tech-stack/dotnet.svg",
};

/** Simple Icons CDN fallbacks for anything without a local file. */
const TECH_CDN_SLUGS: Record<string, string> = {
  typescript: "typescript",
  nestjs: "nestjs",
  fastify: "fastify",
  "socket.io": "socketdotio",
  vitest: "vitest",
  playwright: "playwright",
  eslint: "eslint",
  opentelemetry: "opentelemetry",
  mypy: "mypy",
  ruff: "ruff",
  htmx: "htmx",
  alpine: "alpinejs",
  mysql: "mysql",
  gradle: "gradle",
  maven: "apachemaven",
  bullmq: "bullmq",
  xunit: "xunit",
  oauth: "oauth",
  openid: "openid",
  "openid connect": "openid",
  pest: "pest",
  phpstan: "phpstan",
  codemagic: "codemagic",
  fastlane: "fastlane",
  oracle: "oracle",
  junit: "junit5",
  wagtail: "wagtail",
  livewire: "livewire",
  inertia: "inertia",
  prisma: "prisma",
  drizzle: "drizzle",
  supabase: "supabase",
  firebase: "firebase",
  dart: "dart",
  langchain: "langchain",
  pinecone: "pinecone",
  weaviate: "weaviate",
  terraform: "terraform",
  nginx: "nginx",
  linux: "linux",
  rust: "rust",
  svelte: "svelte",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
};

function resolveLocal(key: string): string | null {
  if (TECH_LOCAL[key]) return TECH_LOCAL[key];
  for (const [alias, path] of Object.entries(TECH_LOCAL)) {
    if (
      key === alias ||
      key.startsWith(`${alias} `) ||
      key.includes(`(${alias}`)
    ) {
      return path;
    }
  }
  return null;
}

export function techIconSlug(name: string): string | null {
  const key = name.trim().toLowerCase();
  if (TECH_CDN_SLUGS[key]) return TECH_CDN_SLUGS[key];
  for (const [alias, slug] of Object.entries(TECH_CDN_SLUGS)) {
    if (key.startsWith(alias) || key.includes(alias)) return slug;
  }
  return null;
}

export function techIconUrl(name: string): string | null {
  const key = name.trim().toLowerCase();
  const local = resolveLocal(key);
  if (local) return local;

  const slug = techIconSlug(name);
  if (!slug) return null;
  return `https://cdn.simpleicons.org/${slug}`;
}
