"use client";

import { Check } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { FORM_FIELDS, type FieldErrors, validateForm } from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateForm(event.currentTarget, FORM_FIELDS.newsletter);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  if (sent) {
    return (
      <span className="flex items-center gap-2 font-sans text-[15px] text-tangerine-400">
        <Check className="h-[18px] w-[18px]" aria-hidden />
        Subscribed — thank you.
      </span>
    );
  }

  return (
    <form
      name="footer-newsletter"
      noValidate
      className="flex flex-col gap-2"
      onSubmit={onSubmit}
    >
      <div className="flex flex-wrap gap-2.5">
        <input
          name="email"
          type="email"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (errors.email) setErrors({});
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Your work email"
          aria-invalid={Boolean(errors.email)}
          className={cn(
            "min-w-[180px] flex-1 rounded-(--r-md) border bg-white/5 px-[15px] py-3 font-sans text-[14.5px] text-white outline-hidden transition-shadow",
            errors.email
              ? "border-[var(--danger)]"
              : focused
                ? "border-tangerine-500 shadow-focus"
                : "border-white/18",
          )}
        />
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </div>
      {errors.email ? (
        <span className="font-sans text-[12px] text-[var(--danger)]">
          {errors.email}
        </span>
      ) : null}
    </form>
  );
}
