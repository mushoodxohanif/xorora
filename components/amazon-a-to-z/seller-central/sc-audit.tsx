"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { Button } from "@/components/ui/button";
import {
  type FieldErrors,
  FORM_FIELDS,
  validateForm,
} from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

export function ScAudit() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateForm(
      event.currentTarget,
      FORM_FIELDS.contactWithMessage,
      {
        message: "Please enter your Amazon store or brand.",
      },
    );
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  return (
    <LightSection id="free-audit" className="scroll-mt-[72px]">
      <div className="ind-reveal grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="max-w-[520px]">
          <h2 className="mb-4 font-extrabold font-sans text-[clamp(28px,3.2vw,40px)] text-fg1 leading-[1.12] tracking-[-0.03em]">
            Free Seller Central account audit
          </h2>
          <p className="m-0 font-sans text-[16px] text-fg2 leading-relaxed">
            Our free audit reviews your Seller Central account health, inventory
            performance, listings, compliance risks, and reporting gaps,
            uncovering issues that could be costing you time or revenue.
            You&apos;ll get a clear picture of where your account stands and
            what needs attention next.
          </p>
        </div>

        <div
          data-form-name="seller-central-audit"
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
              <form name="seller-central-audit" noValidate onSubmit={onSubmit}>
                <h3 className="mb-6 font-extrabold font-sans text-[clamp(20px,2vw,24px)] text-fg1 leading-tight tracking-[-0.02em]">
                  Claim your free audit
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
                    Claim my free audit
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
        <span className="font-sans text-[12px] text-[var(--danger)]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
