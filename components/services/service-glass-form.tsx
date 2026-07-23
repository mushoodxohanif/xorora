"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { FORM_FIELDS, type FieldErrors, validateForm } from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

interface ServiceGlassFormProps {
  title: string;
  description?: string;
  formName?: string;
  nameLabel?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  showNda?: boolean;
  submitLabel?: string;
  buttonVariant?: "light" | "primary";
}

export function ServiceGlassForm({
  title,
  description,
  formName = "service-glass",
  nameLabel = "Full Name",
  messageLabel = "What do you want to solve?",
  messagePlaceholder = "A sentence about your goal",
  showNda = true,
  submitLabel = "Send Message",
  buttonVariant = "light",
}: ServiceGlassFormProps) {
  const [sent, setSent] = useState(false);
  const [nda, setNda] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateForm(event.currentTarget, FORM_FIELDS.contactWithMessage);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  return (
    <div
      data-form-name={formName}
      className="relative rounded-(--r-xl) border border-white/22 bg-white/9 p-[clamp(28px,3vw,40px)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-[18px]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-(--r-xl) bg-linear-to-br from-white/14 to-45% to-transparent" />
      <div className="relative">
        {sent ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-success/20 text-success">
              <Check className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="mb-2 font-bold font-sans text-2xl text-white">
              Message sent
            </h3>
            <p className="m-0 font-sans text-[15px] text-white/70">
              Our team will reply within one business day.
            </p>
          </div>
        ) : (
          <form name={formName} noValidate onSubmit={onSubmit}>
            <h2
              className={cn(
                "font-extrabold font-sans text-[clamp(24px,2.4vw,32px)] text-white leading-tight tracking-[-0.02em]",
                description ? "mb-3" : "mb-6",
              )}
            >
              {title}
            </h2>
            {description ? (
              <p className="mb-6 m-0 font-sans text-[14.5px] text-white/70 leading-relaxed">
                {description}
              </p>
            ) : null}
            <div className="grid grid-cols-2 gap-[18px] max-[560px]:grid-cols-1">
              <HeroField
                name="name"
                label={nameLabel}
                placeholder="Jordan Reyes"
                error={errors.name}
              />
              <HeroField
                name="email"
                label="Email"
                placeholder="you@company.com"
                type="email"
                error={errors.email}
              />
            </div>
            <div className="mt-[18px]">
              <HeroField
                name="message"
                label={messageLabel}
                placeholder={messagePlaceholder}
                textarea
                error={errors.message}
              />
            </div>
            {showNda && (
              <label className="mt-5 flex cursor-pointer items-center gap-2.5">
                <input
                  type="checkbox"
                  name="nda"
                  value="yes"
                  checked={nda}
                  onChange={() => setNda((v) => !v)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-(--r-sm) border transition-all duration-150",
                    nda
                      ? "border-tangerine-400 bg-tangerine-500"
                      : "border-white/40 bg-transparent",
                  )}
                  aria-hidden
                >
                  {nda && <Check className="h-[13px] w-[13px] text-white" />}
                </span>
                <span className="font-sans text-sm text-white/85">
                  Send me an NDA first
                </span>
              </label>
            )}
            <div className="mt-[26px] flex flex-wrap items-center justify-between gap-4">
              <span className="max-w-[200px] font-sans text-[12.5px] text-white/65 leading-snug">
                By sending this form you accept our Privacy Policy.
              </span>
              <Button type="submit" variant={buttonVariant} size="lg">
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

function HeroField({
  name,
  label,
  placeholder,
  textarea,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
  type?: string;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = useId();
  const className = cn(
    "w-full resize-none border-0 border-b bg-transparent px-0 py-[11px] font-sans text-[15px] text-white outline-hidden transition-colors",
    error
      ? "border-[var(--danger)]"
      : focused
        ? "border-tangerine-400"
        : "border-white/34",
  );

  return (
    <label htmlFor={fieldId} className="flex flex-col gap-1.5">
      <span className="font-sans font-semibold text-white/60 text-xs tracking-[0.02em]">
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
          className={className}
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
          className={className}
          aria-invalid={Boolean(error)}
        />
      )}
      {error ? (
        <span className="font-sans text-[12px] text-[var(--danger)]">{error}</span>
      ) : null}
    </label>
  );
}
