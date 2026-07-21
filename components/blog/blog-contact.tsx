"use client";

import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";
import { SectionHead } from "@/components/case-study/section-head";
import { Button } from "@/components/ui/button";
import { FORM_FIELDS, type FieldErrors, validateForm } from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

const TOPICS = [
  "Start a project",
  "Partnership",
  "Press or media",
  "Careers",
  "Something else",
] as const;

const CONTACT_ITEMS = [
  { icon: Mail, value: "info@xorora.com" },
  { icon: Phone, value: "+92-332-0555328" },
] as const;

const fieldClass =
  "w-full rounded-[var(--r-md)] border border-border-strong bg-slate-50 px-3.5 py-3 font-sans text-[15px] text-fg1 outline-hidden transition-shadow focus:border-tangerine-500 focus:bg-surface focus:shadow-focus";

export function BlogContact() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState("");
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
    <section
      id="blog-contact"
      className="bg-slate-50 px-8 py-[clamp(64px,8vw,104px)]"
    >
      <div className="blog-contact-grid mx-auto grid max-w-[1180px] grid-cols-[0.85fr_1.15fr] items-start gap-[clamp(36px,5vw,64px)]">
        <div className="sticky top-[100px]">
          <SectionHead
            label="Get in touch"
            title="Have a topic or a project in mind?"
            sub="Pitch a guest post, ask a question about something we wrote, or start a conversation about working together."
          />
          <div className="mt-7 flex flex-col gap-3.5">
            {CONTACT_ITEMS.map(({ icon: Icon, value }) => (
              <div
                key={value}
                className="flex items-center gap-3 font-sans text-[15px] text-fg1"
              >
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <a
                  href={
                    value.includes("@")
                      ? `mailto:${value}`
                      : `tel:${value.replace(/[^\d+]/g, "")}`
                  }
                  className="transition-colors hover:text-xo-indigo"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-(--r-xl) border border-border bg-surface p-[clamp(28px,3.5vw,44px)] shadow-sm">
          {sent ? (
            <div className="py-14 text-center">
              <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-success">
                <Check className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mb-2 font-bold font-sans text-[22px] text-fg1">
                Message sent
              </h3>
              <p className="m-0 font-sans text-[15px] text-fg2">
                We will reply within one business day.
              </p>
            </div>
          ) : (
            <form name="blog-contact" noValidate onSubmit={onSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <BlogField
                  name="name"
                  label="Full name"
                  placeholder="Jordan Reyes"
                  error={errors.name}
                />
                <BlogField
                  name="email"
                  label="Work email"
                  placeholder="you@company.com"
                  type="email"
                  error={errors.email}
                />
              </div>
              <input type="hidden" name="topic" value={topic} />
              <div className="mt-4">
                <div className="mb-2 font-sans font-semibold text-[13px] text-fg2">
                  What is this about?
                </div>
                <div className="flex flex-wrap gap-[9px]">
                  {TOPICS.map((t) => {
                    const active = topic === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={cn(
                          "cursor-pointer rounded-pill border px-[15px] py-2 font-medium font-sans text-[13.5px] transition-all duration-150",
                          active
                            ? "border-xo-indigo bg-indigo-50 text-xo-indigo"
                            : "border-border-strong bg-surface text-fg2",
                        )}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4">
                <BlogField
                  name="message"
                  label="Message"
                  placeholder="Tell us what is on your mind"
                  textarea
                />
              </div>
              <div className="mt-[22px] flex flex-wrap items-center justify-between gap-4">
                <label className="flex cursor-pointer items-center gap-[9px] font-sans text-[13px] text-fg2">
                  <input
                    name="subscribe"
                    type="checkbox"
                    value="yes"
                    className="h-4 w-4 accent-xo-indigo"
                  />
                  Subscribe me to the monthly dispatch
                </label>
                <Button type="submit" variant="primary" size="lg">
                  Send message
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function BlogField({
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
  return (
    <label htmlFor={name} className="flex flex-col gap-[7px]">
      <span className="font-sans font-semibold text-[13px] text-fg2">
        {label}
      </span>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={cn(
            fieldClass,
            "resize-none",
            error && "border-[var(--danger)]",
          )}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={cn(fieldClass, error && "border-[var(--danger)]")}
        />
      )}
      {error ? (
        <span className="font-sans text-[12px] text-[var(--danger)]">{error}</span>
      ) : null}
    </label>
  );
}
