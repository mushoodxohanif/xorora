import Image from "next/image";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const MARKETPLACES = [
  { domain: "amazon.com", country: "United States", code: "us" },
  { domain: "amazon.co.uk", country: "United Kingdom", code: "gb" },
  { domain: "amazon.ca", country: "Canada", code: "ca" },
  { domain: "amazon.com.mx", country: "Mexico", code: "mx" },
  { domain: "amazon.com.br", country: "Brazil", code: "br" },
  { domain: "amazon.de", country: "Germany", code: "de" },
  { domain: "amazon.es", country: "Spain", code: "es" },
  { domain: "amazon.ae", country: "United Arab Emirates", code: "ae" },
  { domain: "amazon.com.au", country: "Australia", code: "au" },
  { domain: "amazon.it", country: "Italy", code: "it" },
  { domain: "amazon.fr", country: "France", code: "fr" },
  { domain: "amazon.nl", country: "Netherlands", code: "nl" },
  { domain: "amazon.co.jp", country: "Japan", code: "jp" },
  { domain: "amazon.sg", country: "Singapore", code: "sg" },
  { domain: "amazon.com.sg", country: "Singapore", code: "sg" },
  { domain: "amazon.cz", country: "Czechia", code: "cz" },
] as const;

export function PpcMarketplaces() {
  return (
    <LightSection>
      <SectionHead
        title="Supported Amazon marketplaces"
        sub="Cross-region campaign scaling across major Amazon marketplaces — with structure and reporting that stay consistent as you expand."
        className="ind-reveal mb-10 max-w-[760px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="ind-reveal mb-6 flex items-center gap-3">
        <AmazonLogo className="h-7" />
        <span className="font-mono text-[12px] text-fg3 uppercase tracking-[0.12em]">
          Marketplace coverage
        </span>
      </div>
      <ul className="ind-reveal m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4">
        {MARKETPLACES.map((market) => (
          <li
            key={market.domain}
            className="flex items-center gap-3 rounded-(--r-md) border border-border bg-slate-50 px-3.5 py-3.5"
          >
            <span className="relative h-5 w-7 shrink-0 overflow-hidden rounded-[3px] border border-border/80 bg-white shadow-sm">
              <Image
                src={`https://flagcdn.com/w80/${market.code}.png`}
                alt=""
                title={market.country}
                width={40}
                height={30}
                className="h-full w-full object-cover"
                unoptimized
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-mono text-[13px] text-fg1 tracking-[-0.01em]">
                {market.domain}
              </span>
              <span className="sr-only">{market.country}</span>
            </span>
          </li>
        ))}
      </ul>
    </LightSection>
  );
}
