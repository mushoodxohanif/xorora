"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { Button } from "@/components/ui/button";
import { FORM_FIELDS, type FieldErrors, validateForm } from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    title: "Claim a free audit",
    body: "Tell us your brand, your goals, and where you're stuck. We review the account and tell you honestly whether we can help.",
  },
  {
    n: "02",
    title: "Get a written proposal",
    body: "Exact scope, who would run it, and what it costs — before you pay anything.",
  },
  {
    n: "03",
    title: "Meet your team and execute",
    body: "Meet the people who'll run the account day to day before you sign. Once aligned, we start with the highest-impact work first.",
  },
] as const;

export function AmStart() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateForm(event.currentTarget, FORM_FIELDS.contactWithMessage, {
      message: "Please enter your Amazon store or brand.",
    });
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  return (
    <LightSection id="free-audit" className="scroll-mt-[72px]">
      <SectionHead
        title="How engagements start"
        sub="Before you pay us anything, you'll know exactly what we'd do, who would do it, and what it costs."
        className="ind-reveal mb-12 max-w-[760px]"
      />

      <ol className="vc-stagger mb-12 m-0 grid list-none grid-cols-1 gap-[22px] p-0 md:grid-cols-3">
        {STEPS.map((step) => (
          <li
            key={step.n}
            className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(22px,2.4vw,28px)]"
          >
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 font-mono font-semibold text-sm text-xo-indigo">
              {step.n}
            </span>
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {step.title}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="ind-reveal grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative overflow-hidden rounded-(--r-xl) border border-border bg-navy-900 p-[clamp(24px,3vw,36px)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_80%_0%,rgba(255,140,66,0.22),transparent_55%)]" />
          <p className="relative m-0 font-sans font-semibold text-[clamp(20px,2.2vw,28px)] text-white leading-snug">
            Find out exactly what it takes to scale your brand.
          </p>
        </div>

        <div
          data-form-name="amazon-account-audit"
          className="relative overflow-hidden rounded-(--r-xl) border border-border bg-surface p-[clamp(28px,3vw,40px)] shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-indigo-50/80 to-45% to-transparent" />
          <div className="relative">
            {sent ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mb-2 font-bold font-sans text-2xl text-fg1">
                  Audit request received
                </h3>
                <p className="m-0 font-sans text-[15px] text-fg2">
                  Our Amazon team will reply within one business day.
                </p>
              </div>
            ) : (
              <form name="amazon-account-audit" noValidate onSubmit={onSubmit}>
                <h3 className="mb-6 font-extrabold font-sans text-[clamp(20px,2vw,24px)] text-fg1 leading-tight tracking-[-0.02em]">
                  Get your free audit
                </h3>
                <div className="grid grid-cols-2 gap-[18px] max-[560px]:grid-cols-1">
                  <AuditField
                    name="name"
                    label="Name"
                    placeholder="Jordan Reyes"
                    error={errors.name}
                  />
                  <AuditField
                    name="email"
                    label="Email"
                    placeholder="you@company.com"
                    type="email"
                    error={errors.email}
                  />
                </div>
                <div className="mt-[18px]">
                  <AuditField
                    name="message"
                    label="Amazon store / brand"
                    placeholder="Your Amazon store or brand name"
                    error={errors.message}
                  />
                </div>
                <div className="mt-[26px] flex flex-wrap items-center justify-between gap-4">
                  <span className="max-w-[200px] font-sans text-[12.5px] text-fg3 leading-snug">
                    By sending this form you accept our Privacy Policy.
                  </span>
                  <Button type="submit" variant="primary" size="lg">
                    Get free audit
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </LightSection>
  );
}

function AuditField({
  name,
  label,
  placeholder,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = useId();
  const className = cn(
    "w-full border-0 border-b bg-transparent px-0 py-[11px] font-sans text-[15px] text-fg1 outline-hidden transition-colors",
    error
      ? "border-[var(--danger)]"
      : focused
        ? "border-xo-indigo"
        : "border-border",
  );

  return (
    <label htmlFor={fieldId} className="flex flex-col gap-1.5">
      <span className="font-sans font-semibold text-fg3 text-xs tracking-[0.02em]">
        {label}
      </span>
      <input
        id={fieldId}
        name={name}
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={className}
        aria-invalid={Boolean(error)}
      />
      {error ? (
        <span className="font-sans text-[12px] text-[var(--danger)]">{error}</span>
      ) : null}
    </label>
  );
}
