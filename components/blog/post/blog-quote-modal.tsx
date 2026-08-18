"use client";

import { ArrowUpRight, Check, X } from "lucide-react";
import {
  createContext,
  type FormEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { Button } from "@/components/ui/button";
import {
  type FieldErrors,
  FORM_FIELDS,
  validateForm,
} from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

interface BlogQuoteContextValue {
  openFor: (company: string) => void;
}

const BlogQuoteContext = createContext<BlogQuoteContextValue | null>(null);

export function useBlogQuote() {
  const context = useContext(BlogQuoteContext);
  if (!context) {
    throw new Error("useBlogQuote must be used within BlogQuoteModalProvider");
  }
  return context;
}

interface BlogQuoteModalProviderProps {
  source: string;
  children: ReactNode;
}

export function BlogQuoteModalProvider({
  source,
  children,
}: BlogQuoteModalProviderProps) {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");

  const openFor = useCallback((name: string) => {
    setCompany(name);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <BlogQuoteContext.Provider value={{ openFor }}>
      {children}
      <BlogQuoteModal
        open={open}
        onClose={close}
        source={source}
        company={company}
      />
    </BlogQuoteContext.Provider>
  );
}

export function GetQuoteButton({ company }: { company: string }) {
  const { openFor } = useBlogQuote();

  return (
    <Button
      type="button"
      variant="primary"
      size="md"
      onClick={() => openFor(company)}
      aria-haspopup="dialog"
    >
      Get a Quote
      <ArrowUpRight className="h-4 w-4" aria-hidden />
    </Button>
  );
}

interface BlogQuoteModalProps {
  open: boolean;
  onClose: () => void;
  source: string;
  company: string;
}

function BlogQuoteModal({
  open,
  onClose,
  source,
  company,
}: BlogQuoteModalProps) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSent(false);
      setErrors({});
    }
  }, [open]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateForm(event.currentTarget, FORM_FIELDS.quote);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  if (!open) return null;

  return (
    <div className="lt-fade pointer-events-auto fixed inset-0 z-200 flex items-center justify-center bg-[rgba(2,6,15,0.6)] p-[clamp(16px,4vw,48px)] backdrop-blur-[6px]">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default border-0 bg-transparent"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-quote-title"
        className="lt-pop relative z-10 w-full max-w-[520px] overflow-hidden rounded-(--r-xl) border border-white/10 bg-navy-900 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 90% 0%, rgba(70,76,159,0.4), transparent 58%)",
          }}
        />
        <XWatermark
          size={280}
          color="rgba(120,150,240,0.05)"
          className="bottom-[-120px] left-[-80px]"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[18px] right-[18px] z-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-(--r-md) border border-white/14 bg-white/6 text-white/80 transition-colors duration-150 hover:bg-white/12 hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="relative p-[clamp(28px,4vw,40px)] pt-12">
          {sent ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(46,158,107,0.18)] text-success">
                <Check className="h-7 w-7" aria-hidden />
              </div>
              <h3
                id="blog-quote-title"
                className="m-0 mb-2 font-bold font-sans text-[22px] text-white"
              >
                Request received
              </h3>
              <p className="m-0 mb-[22px] font-sans text-[15px] text-white/65">
                We will reply within one business day.
              </p>
              <Button variant="onDark" onClick={onClose}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <h2
                id="blog-quote-title"
                className="m-0 mb-2 font-extrabold font-sans text-[clamp(24px,3vw,32px)] text-white leading-tight tracking-tight"
              >
                Get a quote
              </h2>
              <p className="m-0 mb-6 font-sans text-[15px] text-white/66 leading-relaxed">
                Tell us what you need
                {company ? ` — including work related to ${company}` : ""}. We
                will get back within one business day.
              </p>
              <form name="blog-quote" noValidate onSubmit={onSubmit}>
                <input type="hidden" name="source" value={source} />
                <input type="hidden" name="company" value={company} />
                <div className="flex flex-col gap-3.5">
                  <QuoteField
                    name="name"
                    label="Name"
                    placeholder="Jordan Reyes"
                    error={errors.name}
                  />
                  <QuoteField
                    name="email"
                    label="Email"
                    placeholder="you@company.com"
                    type="email"
                    error={errors.email}
                  />
                  <QuoteField
                    name="requirement"
                    label="Requirement"
                    placeholder="A sentence about the Python project you need quoted"
                    textarea
                    error={errors.requirement}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function QuoteField({
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
          rows={4}
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
