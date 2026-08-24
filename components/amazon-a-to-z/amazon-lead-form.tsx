"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  type FieldErrors,
  FORM_FIELDS,
  validateForm,
} from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

interface AmazonLeadFormProps {
  formName?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  variant?: "glass" | "surface";
  className?: string;
  id?: string;
}

export function AmazonLeadForm({
  formName = "amazon-lead",
  title = "Schedule a call",
  description,
  submitLabel = "Submit",
  variant = "glass",
  className,
  id,
}: AmazonLeadFormProps) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const isGlass = variant === "glass";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateForm(event.currentTarget, FORM_FIELDS.amazonLead);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  return (
    <div
      id={id}
      data-form-name={formName}
      className={cn(
        "relative scroll-mt-[88px] rounded-(--r-xl) p-[clamp(24px,2.8vw,36px)]",
        isGlass
          ? "border border-white/22 bg-white/9 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-[18px]"
          : "border border-border bg-surface shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)]",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-(--r-xl)",
          isGlass
            ? "bg-linear-to-br from-white/14 to-45% to-transparent"
            : "bg-linear-to-br from-indigo-50/80 to-45% to-transparent",
        )}
      />
      <div className="relative">
        {sent ? (
          <div className="py-10 text-center">
            <div
              className={cn(
                "mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full",
                isGlass
                  ? "bg-success/20 text-success"
                  : "bg-success/15 text-success",
              )}
            >
              <Check className="h-7 w-7" aria-hidden />
            </div>
            <h3
              className={cn(
                "mb-2 font-bold font-sans text-2xl",
                isGlass ? "text-white" : "text-fg1",
              )}
            >
              Request received
            </h3>
            <p
              className={cn(
                "m-0 font-sans text-[15px]",
                isGlass ? "text-white/70" : "text-fg2",
              )}
            >
              Our Amazon team will reply within one business day.
            </p>
          </div>
        ) : (
          <form name={formName} noValidate onSubmit={onSubmit}>
            <h2
              className={cn(
                "font-extrabold font-sans text-[clamp(20px,2.2vw,28px)] leading-tight tracking-[-0.02em]",
                isGlass ? "text-white" : "text-fg1",
                description ? "mb-3" : "mb-5",
              )}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={cn(
                  "mb-5 m-0 font-sans text-[14px] leading-relaxed",
                  isGlass ? "text-white/70" : "text-fg2",
                )}
              >
                {description}
              </p>
            ) : null}

            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[14px] max-[560px]:grid-cols-1">
              <LeadField
                name="name"
                label="Name"
                placeholder="Jordan Reyes"
                error={errors.name}
                variant={variant}
              />
              <LeadField
                name="email"
                label="Email"
                placeholder="you@company.com"
                type="email"
                error={errors.email}
                variant={variant}
              />
              <LeadField
                name="company"
                label="Company"
                placeholder="Your company"
                error={errors.company}
                variant={variant}
              />
              <LeadField
                name="phone"
                label="Phone"
                placeholder="+1 555 000 0000"
                type="tel"
                error={errors.phone}
                variant={variant}
              />
              <LeadField
                name="amazonStore"
                label="Amazon store (URL)"
                placeholder="https://amazon.com/shops/…"
                className="col-span-2 max-[560px]:col-span-1"
                error={errors.amazonStore}
                variant={variant}
              />
              <LeadField
                name="budget"
                label="Monthly marketing budget"
                placeholder="e.g. $5,000–$10,000"
                className="col-span-2 max-[560px]:col-span-1"
                error={errors.budget}
                variant={variant}
              />
              <LeadField
                name="message"
                label="Message"
                placeholder="Tell us about your launch goals"
                textarea
                className="col-span-2 max-[560px]:col-span-1"
                error={errors.message}
                variant={variant}
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <span
                className={cn(
                  "max-w-[200px] font-sans text-[12.5px] leading-snug",
                  isGlass ? "text-white/65" : "text-fg3",
                )}
              >
                By sending this form you accept our Privacy Policy.
              </span>
              <Button
                type="submit"
                variant={isGlass ? "light" : "primary"}
                size="lg"
              >
                {submitLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function LeadField({
  name,
  label,
  placeholder,
  textarea,
  type = "text",
  error,
  variant,
  className,
}: {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
  type?: string;
  error?: string;
  variant: "glass" | "surface";
  className?: string;
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = useId();
  const isGlass = variant === "glass";
  const inputClass = cn(
    "w-full resize-none border-0 border-b bg-transparent px-0 py-[10px] font-sans text-[14.5px] outline-hidden transition-colors",
    isGlass ? "text-white" : "text-fg1",
    error
      ? "border-[var(--danger)]"
      : focused
        ? isGlass
          ? "border-tangerine-400"
          : "border-xo-indigo"
        : isGlass
          ? "border-white/34"
          : "border-border",
  );

  return (
    <label htmlFor={fieldId} className={cn("flex flex-col gap-1", className)}>
      <span
        className={cn(
          "font-sans font-semibold text-xs tracking-[0.02em]",
          isGlass ? "text-white/60" : "text-fg3",
        )}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          id={fieldId}
          name={name}
          rows={2}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClass}
          aria-invalid={Boolean(error)}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClass}
          aria-invalid={Boolean(error)}
        />
      )}
      {error ? (
        <span className="font-sans text-[12px] text-[var(--danger)]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
