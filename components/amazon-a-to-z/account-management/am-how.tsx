import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const STEPS = [
  {
    n: "01",
    title: "We start by understanding your Amazon channel",
    body: "Before any work begins, we take the time to understand how your account is performing today. This initial review spots operational gaps, account-health risks, and areas that need immediate attention.",
  },
  {
    n: "02",
    title: "You get a dedicated operations team",
    body: "You work with a dedicated team that owns your channel, not a rotating cast of contacts.",
  },
  {
    n: "03",
    title: "Every task is owned end to end",
    body: "Each task is owned from start to finish, so nothing falls between the cracks.",
  },
  {
    n: "04",
    title: "Support that continues as you scale",
    body: "Support scales with you, so the operation keeps pace as your business grows.",
  },
] as const;

const CASE_TYPES = [
  "Flat Files",
  "Reinstatements",
  "Suspensions",
  "Verification Issues",
  "IP Issues",
  "Brand Registry",
] as const;

export function AmHow() {
  return (
    <LightSection
      id="how-it-works"
      bg="var(--slate-50)"
      className="scroll-mt-[72px]"
    >
      <SectionHead
        label="How it works"
        title="How our channel management service works"
        sub="Good Amazon channel management isn't about quick fixes. It's about having the right systems, people, and oversight in place so problems don't pile up in the first place."
        className="ind-reveal mb-12 max-w-[760px]"
      />

      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <ol className="vc-stagger m-0 flex list-none flex-col gap-0 p-0">
          {STEPS.map((step, index) => (
            <li
              key={step.n}
              className="ind-reveal grid grid-cols-[72px_1fr] gap-[clamp(16px,2.4vw,28px)] md:grid-cols-[88px_1fr]"
            >
              <div className="flex flex-col items-center">
                <span className="vc-step-node flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 font-mono font-semibold text-sm text-xo-indigo">
                  {step.n}
                </span>
                {index < STEPS.length - 1 ? (
                  <span
                    className="vc-step-line mt-2 w-px flex-1 bg-border"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className={index < STEPS.length - 1 ? "pb-10" : "pb-2"}>
                <h3 className="mb-2 font-sans font-semibold text-[clamp(18px,1.7vw,22px)] text-fg1 leading-snug">
                  {step.title}
                </h3>
                <p className="m-0 max-w-[620px] font-sans text-[15.5px] text-fg2 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="ind-reveal relative overflow-hidden rounded-(--r-xl) border border-border bg-navy-900 p-[clamp(24px,3vw,36px)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_80%_0%,rgba(255,140,66,0.22),transparent_55%)]" />
          <div className="relative">
            <p className="mb-2 font-mono text-[11px] text-tangerine-400 uppercase tracking-[0.14em]">
              Case types we handle
            </p>
            <h3 className="mb-5 font-sans font-semibold text-[22px] text-white leading-snug">
              Operational ownership across your Amazon channel
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {CASE_TYPES.map((type) => (
                <li
                  key={type}
                  className="rounded-(--r-md) border border-white/14 bg-white/8 px-3 py-2 font-sans font-medium text-[13px] text-white/88"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </LightSection>
  );
}
