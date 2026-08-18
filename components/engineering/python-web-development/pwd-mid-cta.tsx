import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SignalRule } from "@/components/geometry/signal-rule";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { imageAltTitle } from "@/lib/image-seo";

const photoSeo = imageAltTitle({
  primary: "Python web development services",
  secondary: "Engineers planning a Python web build",
  context: "technical discovery call",
});

export function PwdMidCta() {
  return (
    <section className="bg-indigo-50 px-8 py-[clamp(56px,7vw,88px)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(32px,5vw,64px)] lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-3">
            <SignalRule color="var(--tangerine-500)" />
            <span className="font-mono text-tangerine-600 text-xs uppercase tracking-[0.2em]">
              Discovery
            </span>
          </div>
          <h2 className="mb-5 text-balance font-extrabold font-sans text-[clamp(28px,4vw,44px)] text-fg1 leading-tight tracking-tight">
            Plan your Python web development project
          </h2>
          <p className="mb-4 max-w-[520px] font-sans text-[16.5px] text-fg2 leading-relaxed">
            Bring us the system you&apos;re building or the one that stopped
            scaling. Discovery takes one to two weeks and produces an architecture
            proposal and a fixed estimate.
          </p>
          <p className="mb-8 max-w-[520px] font-sans text-[16.5px] text-fg2 leading-relaxed">
            You keep the document either way.
          </p>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Book a technical call
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
        <div className="relative aspect-[5/4] overflow-hidden rounded-(--r-xl) border border-indigo-100 lg:aspect-auto lg:min-h-[340px]">
          <Image
            src="/assets/home/staff-augmentation.webp"
            alt={photoSeo.alt}
            title={photoSeo.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
