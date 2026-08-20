import { Mail, Phone } from "lucide-react";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONES } from "@/lib/contact";
import { cn } from "@/lib/utils";

type ContactTone = "onDark" | "onLight";

const toneStyles: Record<
  ContactTone,
  { row: string; iconWrap?: string; icon: string; link: string }
> = {
  onDark: {
    row: "font-sans text-[15px] text-white/85",
    iconWrap:
      "flex h-9 w-9 items-center justify-center rounded-(--r-md) border border-white/12 bg-white/6 text-tangerine-400",
    icon: "h-[17px] w-[17px] text-tangerine-400",
    link: "transition-colors hover:text-tangerine-400",
  },
  onLight: {
    row: "font-sans text-[15px] text-fg1",
    iconWrap:
      "flex h-[38px] w-[38px] items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo",
    icon: "h-[18px] w-[18px]",
    link: "transition-colors hover:text-xo-indigo",
  },
};

interface ContactChannelsProps {
  tone?: ContactTone;
  /** Show bordered icon chips (modal / page left rail). */
  withIconWrap?: boolean;
  className?: string;
  itemClassName?: string;
}

/** Email + US phone + Pakistan phone (US first). */
export function ContactChannels({
  tone = "onDark",
  withIconWrap = false,
  className,
  itemClassName,
}: ContactChannelsProps) {
  const styles = toneStyles[tone];

  const items = [
    { key: "email", Icon: Mail, display: SITE_EMAIL, href: SITE_EMAIL_HREF },
    ...SITE_PHONES.map((phone) => ({
      key: phone.display,
      Icon: Phone,
      display: phone.display,
      href: phone.href,
    })),
  ];

  return (
    <div className={cn("flex flex-col gap-3.5", className)}>
      {items.map(({ key, Icon, display, href }) => (
        <div
          key={key}
          className={cn("flex items-center gap-3", styles.row, itemClassName)}
        >
          {withIconWrap ? (
            <span className={styles.iconWrap}>
              <Icon className="h-[17px] w-[17px]" aria-hidden />
            </span>
          ) : (
            <Icon className={styles.icon} aria-hidden />
          )}
          <a href={href} className={styles.link}>
            {display}
          </a>
        </div>
      ))}
    </div>
  );
}

/** Compact horizontal wrap of email + both phones (CTA footers). */
export function ContactChannelsInline({ className }: { className?: string }) {
  const items = [
    { key: "email", Icon: Mail, display: SITE_EMAIL, href: SITE_EMAIL_HREF },
    ...SITE_PHONES.map((phone) => ({
      key: phone.display,
      Icon: Phone,
      display: phone.display,
      href: phone.href,
    })),
  ];

  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-x-[clamp(20px,4vw,40px)] gap-y-5",
        className,
      )}
    >
      {items.map(({ key, Icon, display, href }) => (
        <div
          key={key}
          className="flex items-center gap-2.5 font-sans text-[15px] text-white/82"
        >
          <Icon className="h-[17px] w-[17px] text-tangerine-400" aria-hidden />
          <a href={href} className="transition-colors hover:text-tangerine-400">
            {display}
          </a>
        </div>
      ))}
    </div>
  );
}
