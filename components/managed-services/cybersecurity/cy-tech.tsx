import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS = [
  {
    title: "Testing & scanning",
    items: ["Burp Suite", "OWASP ZAP", "Semgrep", "Snyk"],
  },
  {
    title: "Auth standards",
    items: ["OAuth 2.0", "OIDC", "JWT / JWKS", "FIDO2 / WebAuthn"],
  },
  {
    title: "Compliance frameworks",
    items: ["GDPR", "HIPAA", "SOC 2 Type II", "OWASP Top 10"],
  },
  {
    title: "Infrastructure",
    items: ["AWS Security Hub", "Vault", "Cloudflare WAF", "Datadog"],
  },
] as const;

export function CyTech() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Tools and standards we work with"
        sub="The platforms, frameworks, and standards we use to test, harden, and operate secure systems."
        className="mb-12 max-w-[720px]"
      />
      <div className="ind-page-2grid grid grid-cols-2 gap-[22px]">
        {GROUPS.map((group) => (
          <div
            key={group.title}
            className="overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
          >
            <h3 className="mb-4 font-sans font-semibold text-[17px] text-fg1 leading-snug">
              {group.title}
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {group.items.map((name) => (
                <li
                  key={name}
                  className="rounded-(--r-md) border border-border bg-slate-50 px-4 py-2 font-sans font-semibold text-[14px] text-fg1"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
