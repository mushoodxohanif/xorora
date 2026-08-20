"use client";

import { ArrowUpRight, Check, ChevronDown, MapPin } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { ContactChannels } from "@/components/contact/contact-channels";
import { Button } from "@/components/ui/button";
import { SITE_OFFICES } from "@/lib/contact";
import {
  type FieldErrors,
  FORM_FIELDS,
  validateForm,
} from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

const BUDGETS = [
  "up to $25k",
  "$25k – $50k",
  "$50k – $100k",
  "> $100k",
] as const;

export interface ContactFormPanelProps {
  industryNames: string[];
  /** Form name attribute for analytics / identification. */
  formName?: string;
  /** Heading element id (modal dialog labelling). */
  titleId?: string;
  /** Show US + Pakistan office addresses under phones. */
  showOffices?: boolean;
  /** Optional action after successful submit (e.g. modal Close). */
  onSuccessAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/**
 * Shared Let’s Talk left rail + budget/industry form.
 * Used by the modal and the /contact page.
 */
export function ContactFormPanel({
  industryNames,
  formName = "lets-talk",
  titleId = "lets-talk-title",
  showOffices = false,
  onSuccessAction,
  className,
}: ContactFormPanelProps) {
  const [sent, setSent] = useState(false);
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateForm(event.currentTarget, FORM_FIELDS.contact);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  return (
    <div
      className={cn(
        "lt-grid relative grid grid-cols-[0.92fr_1.08fr] gap-[clamp(32px,5vw,64px)]",
        className,
      )}
    >
      <div className="flex flex-col">
        <h2
          id={titleId}
          className="m-0 mb-[22px] font-extrabold font-sans text-[clamp(30px,3.8vw,46px)] text-white leading-[1.04] tracking-tight"
        >
          Tell us about your project.
        </h2>
        <p className="m-0 mb-7 max-w-[420px] font-sans text-base text-white/66 leading-[1.7]">
          Share a few details and our team will get back within one business day
          with next steps and a preliminary estimate.
        </p>
        <div className="mt-auto flex flex-col gap-6">
          <ContactChannels tone="onDark" withIconWrap />
          {showOffices ? (
            <div className="flex flex-col gap-4">
              {SITE_OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="flex items-start gap-3 font-sans text-[15px] text-white/85"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-(--r-md) border border-white/12 bg-white/6 text-tangerine-400">
                    <MapPin className="h-[17px] w-[17px]" aria-hidden />
                  </span>
                  <div>
                    <div className="mb-1 font-semibold text-white">
                      {office.city}
                    </div>
                    <div className="text-white/66 leading-snug">
                      {office.addr}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="rounded-(--r-lg) border border-white/10 bg-white/3 p-[clamp(24px,3vw,32px)]">
        {sent ? (
          <div className="py-14 text-center">
            <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(46,158,107,0.18)] text-success">
              <Check className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="m-0 mb-2 font-bold font-sans text-[22px] text-white">
              Request received
            </h3>
            <p className="m-0 mb-[22px] font-sans text-[15px] text-white/65">
              We will reach out within one business day.
            </p>
            {onSuccessAction ? (
              <Button variant="onDark" onClick={onSuccessAction.onClick}>
                {onSuccessAction.label}
              </Button>
            ) : null}
          </div>
        ) : (
          <form name={formName} noValidate onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-3.5">
              <LtField
                name="name"
                label="Full name"
                placeholder="Jordan Reyes"
                error={errors.name}
              />
              <LtField
                name="email"
                label="Work email"
                placeholder="you@company.com"
                type="email"
                error={errors.email}
              />
            </div>
            <div className="mt-3.5 grid grid-cols-2 gap-3.5">
              <LtField
                name="company"
                label="Company"
                placeholder="Company name"
              />
              <LtSelect
                value={industry}
                onChange={setIndustry}
                options={industryNames}
              />
            </div>
            <input type="hidden" name="budget" value={budget ?? ""} />
            <LtChipRow
              label="Project budget"
              options={[...BUDGETS]}
              value={budget}
              onPick={setBudget}
            />
            <div className="mt-3.5">
              <LtField
                name="message"
                label="How can we help?"
                placeholder="A sentence about your project"
                textarea
              />
            </div>
            <div className="mt-6">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Submit request
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function LtField({
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
    "box-border w-full resize-none rounded-[var(--r-md)] border bg-white/4 px-3.5 py-3 font-sans text-[15px] text-white outline-hidden",
    error
      ? "border-[var(--danger)]"
      : focused
        ? "border-tangerine-500 shadow-focus"
        : "border-white/16",
  );

  return (
    <div className="flex flex-col gap-[7px]">
      <label
        htmlFor={fieldId}
        className="font-sans font-semibold text-[12.5px] text-white/70"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={fieldId}
          name={name}
          rows={3}
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
        <span className="font-sans text-[12px] text-[var(--danger)]">
          {error}
        </span>
      ) : null}
    </div>
  );
}

function LtSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);
  const selectId = useId();

  return (
    <div className="flex flex-col gap-[7px]">
      <label
        htmlFor={selectId}
        className="font-sans font-semibold text-[12.5px] text-white/70"
      >
        Industry
      </label>
      <div className="relative">
        <select
          id={selectId}
          name="industry"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "box-border w-full cursor-pointer appearance-none rounded-(--r-md) border bg-white/4 py-3 pr-[38px] pl-3.5 font-sans text-[15px] outline-hidden",
            focused ? "border-tangerine-500 shadow-focus" : "border-white/16",
            value ? "text-white" : "text-white/50",
          )}
        >
          <option value="" className="text-xo-ink">
            Select industry
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-xo-ink">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-[13px] h-4 w-4 text-white/50"
          aria-hidden
        />
      </div>
    </div>
  );
}

function LtChipRow({
  label,
  options,
  value,
  onPick,
}: {
  label: string;
  options: string[];
  value: string | null;
  onPick: (value: string) => void;
}) {
  return (
    <div className="mt-[18px]">
      <div className="mb-2.5 font-sans font-semibold text-[12.5px] text-white/70">
        {label}
      </div>
      <div className="flex flex-wrap gap-[9px]">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onPick(option)}
              className={cn(
                "cursor-pointer rounded-pill border px-[15px] py-2 font-medium font-sans text-[13.5px] transition-all duration-150",
                active
                  ? "border-tangerine-500 bg-[rgba(242,107,33,0.14)] text-tangerine-400"
                  : "border-white/16 bg-white/3 text-white/75",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
