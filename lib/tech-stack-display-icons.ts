import { techIconUrl } from "@/lib/case-studies/tech-icons";

/**
 * Exact display labels used on SEO landing stack grids → icon URL.
 * Prefer local SVGs; Simple Icons CDN via techIconUrl when no local file exists.
 */
const EXACT: Record<string, string> = {
  // Python / Django ecosystem
  "Django REST Framework": "/assets/tech-stack/django.svg",
  "Django Ninja": "/assets/tech-stack/django.svg",
  Wagtail: "/assets/tech-stack/django.svg",
  "Django templates": "/assets/tech-stack/django.svg",
  "Django Channels": "/assets/tech-stack/django.svg",
  "django-storages": "/assets/tech-stack/django.svg",
  asyncio: "/assets/tech-stack/python.svg",
  ASGI: "/assets/tech-stack/python.svg",
  factory_boy: "/assets/tech-stack/python.svg",
  "pytest-django": "/assets/tech-stack/pytest.svg",
  "Python 3.12+": "/assets/tech-stack/python.svg",
  "Django LTS": "/assets/tech-stack/django.svg",

  // Node.js ecosystem
  "Node.js LTS": "/assets/tech-stack/nodejs.svg",
  ws: "/assets/tech-stack/nodejs.svg",
  "Server-Sent Events": "/assets/tech-stack/api.svg",
  "Redis pub/sub": "/assets/tech-stack/redis.svg",
  "AWS Lambda": "/assets/tech-stack/aws.svg",
  Vercel: "/assets/tech/vercel.svg",
  REST: "/assets/tech-stack/api.svg",

  // Laravel ecosystem
  "Laravel LTS": "/assets/tech-stack/laravel.svg",
  "PHP 8.3+": "/assets/tech-stack/php.svg",
  Livewire: "/assets/tech-stack/laravel.svg",
  Inertia: "/assets/tech-stack/laravel.svg",
  Blade: "/assets/tech-stack/laravel.svg",
  Eloquent: "/assets/tech-stack/laravel.svg",
  "Laravel Scout": "/assets/tech-stack/laravel.svg",
  Horizon: "/assets/tech-stack/laravel.svg",
  SQS: "/assets/tech-stack/aws.svg",
  "Scheduled tasks": "/assets/tech-stack/laravel.svg",
  Cashier: "/assets/tech/stripe.svg",
  Sanctum: "/assets/tech-stack/laravel.svg",
  Filament: "/assets/tech-stack/laravel.svg",
  Reverb: "/assets/tech-stack/laravel.svg",
  Octane: "/assets/tech-stack/laravel.svg",
  Forge: "/assets/tech-stack/laravel.svg",
  Vapor: "/assets/tech-stack/laravel.svg",
  "Laravel Pint": "/assets/tech-stack/laravel.svg",
  Telescope: "/assets/tech-stack/laravel.svg",
  Pulse: "/assets/tech-stack/laravel.svg",

  // .NET ecosystem
  ".NET 10 LTS": "/assets/tech-stack/dotnet.svg",
  "C#": "/assets/tech-stack/csharp.svg",
  "SQL Server": "/assets/tech-stack/sql.svg",
  "ASP.NET Core": "/assets/tech-stack/dotnet.svg",
  Blazor: "/assets/tech-stack/dotnet.svg",
  MAUI: "/assets/tech-stack/dotnet.svg",
  "EF Core": "/assets/tech-stack/dotnet.svg",
  Dapper: "/assets/tech-stack/dotnet.svg",
  "Azure Service Bus": "/assets/tech-stack/azure.svg",
  MassTransit: "/assets/tech-stack/dotnet.svg",
  SignalR: "/assets/tech-stack/dotnet.svg",
  "Entra ID": "/assets/tech-stack/azure.svg",
  IdentityServer: "/assets/tech-stack/dotnet.svg",
  "Azure DevOps": "/assets/tech-stack/azure.svg",
  "Roslyn analyzers": "/assets/tech-stack/csharp.svg",
  Testcontainers: "/assets/tech-stack/docker.svg",
  Kafka: "/assets/tech/kafka.svg",
  "Java LTS": "/assets/tech-stack/java.svg",
  "Java 25 LTS": "/assets/tech-stack/java.svg",
  "Spring Boot by default": "/assets/tech-stack/spring.svg",
  "Spring Boot": "/assets/tech-stack/spring.svg",
  "Spring Data": "/assets/tech-stack/spring.svg",
  "Spring Cloud Stream": "/assets/tech-stack/spring.svg",
  Hibernate: "/assets/tech-stack/spring.svg",
  Flyway: "/assets/tech-stack/spring.svg",
  "Jakarta EE": "/assets/tech-stack/java.svg",
  "JUnit 5": "/assets/tech-stack/java.svg",
  ArchUnit: "/assets/tech-stack/java.svg",
  Micrometer: "/assets/tech-stack/spring.svg",

  // Flutter / mobile ecosystem
  "Dart 3": "https://cdn.simpleicons.org/dart",
  Firebase: "https://cdn.simpleicons.org/firebase",
  Codemagic: "https://cdn.simpleicons.org/codemagic",
  Fastlane: "https://cdn.simpleicons.org/fastlane",
  "Flutter stable": "/assets/tech-stack/flutter.svg",
  Impeller: "/assets/tech-stack/flutter.svg",
  Riverpod: "/assets/tech-stack/flutter.svg",
  Bloc: "/assets/tech-stack/flutter.svg",
  freezed: "/assets/tech-stack/flutter.svg",
  get_it: "/assets/tech-stack/flutter.svg",
  Drift: "/assets/tech-stack/flutter.svg",
  Isar: "/assets/tech-stack/flutter.svg",
  Hive: "/assets/tech-stack/flutter.svg",
  "Secure Storage": "/assets/tech-stack/secure-storage.svg",
  flutter_secure_storage: "/assets/tech-stack/secure-storage.svg",
  "Firebase App Distribution": "/assets/tech-stack/flutter.svg",
  flutter_test: "/assets/tech-stack/flutter.svg",
  integration_test: "/assets/tech-stack/flutter.svg",
  Patrol: "/assets/tech-stack/flutter.svg",
  Crashlytics: "/assets/tech-stack/flutter.svg",
  "FCM and APNs": "/assets/tech-stack/flutter.svg",

  // Node / Python quality & data tools (no reliable CDN slug)
  TypeScript: "https://cdn.simpleicons.org/typescript",
  NestJS: "https://cdn.simpleicons.org/nestjs",
  Fastify: "https://cdn.simpleicons.org/fastify",
  "Socket.IO": "https://cdn.simpleicons.org/socketdotio",
  Prisma: "https://cdn.simpleicons.org/prisma",
  Drizzle: "https://cdn.simpleicons.org/drizzle",
  BullMQ: "/assets/tech-stack/rabbitmq.svg",
  Vitest: "https://cdn.simpleicons.org/vitest",
  Playwright: "/assets/tech-stack/nodejs.svg",
  ESLint: "https://cdn.simpleicons.org/eslint",
  OpenTelemetry: "https://cdn.simpleicons.org/opentelemetry",
  mypy: "/assets/tech-stack/python.svg",
  ruff: "https://cdn.simpleicons.org/ruff",
  HTMX: "https://cdn.simpleicons.org/htmx",
  Alpine: "https://cdn.simpleicons.org/alpine.js",
  MySQL: "https://cdn.simpleicons.org/mysql",
  Gradle: "https://cdn.simpleicons.org/gradle",
  Maven: "https://cdn.simpleicons.org/apachemaven",
  xUnit: "/assets/tech-stack/dotnet.svg",
  OAuth: "https://cdn.simpleicons.org/openid",
  "OpenID Connect": "https://cdn.simpleicons.org/openid",
  Pest: "/assets/tech-stack/php.svg",
  PHPStan: "/assets/tech-stack/php.svg",
  Oracle: "/assets/tech-stack/sql.svg",
};

const ALIASES: Record<string, string> = {
  typescript: "TypeScript",
  nestjs: "NestJS",
  fastify: "Fastify",
  "socket.io": "Socket.IO",
  prisma: "Prisma",
  drizzle: "Drizzle",
  bullmq: "BullMQ",
  vitest: "Vitest",
  playwright: "Playwright",
  eslint: "ESLint",
  opentelemetry: "OpenTelemetry",
  mypy: "mypy",
  ruff: "ruff",
  htmx: "HTMX",
  alpine: "Alpine",
  firebase: "Firebase",
  dart: "Dart 3",
  mysql: "MySQL",
  gradle: "Gradle",
  maven: "Maven",
  xunit: "xUnit",
  oauth: "OAuth",
  pest: "Pest",
  phpstan: "PHPStan",
  codemagic: "Codemagic",
  fastlane: "Fastlane",
  oracle: "Oracle",
  kubernetes: "Kubernetes",
};

export function techStackDisplayIcon(name: string): string {
  if (EXACT[name]) return EXACT[name];

  const resolved = techIconUrl(name);
  if (resolved) return resolved;

  const aliasKey = name.trim().toLowerCase();
  if (ALIASES[aliasKey]) {
    const aliasName = ALIASES[aliasKey];
    if (EXACT[aliasName]) return EXACT[aliasName];
    const aliased = techIconUrl(aliasName);
    if (aliased) return aliased;
  }

  const stripped = name
    .replace(/\s+LTS\b/i, "")
    .replace(/\s+\d+(\.\d+)*\+?$/i, "")
    .trim();
  if (stripped !== name) {
    const fromStripped = techStackDisplayIcon(stripped);
    if (fromStripped !== "/assets/tech-stack/api.svg") return fromStripped;
  }

  return "/assets/tech-stack/api.svg";
}
