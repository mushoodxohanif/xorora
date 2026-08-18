"use client";

import { Check, Facebook, Link2, Linkedin, Share2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BlogShareProps {
  url: string;
  title: string;
}

export function BlogShare({ url, title }: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: XLogo,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
    },
  ] as const;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-7 border-border border-t pt-6">
      <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-fg3 uppercase tracking-[0.16em]">
        <Share2 className="h-3.5 w-3.5" aria-hidden />
        Share
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-(--r-md) border border-border bg-surface text-fg2 no-underline transition-colors duration-150 hover:border-border-strong hover:text-xo-indigo"
          >
            <Icon className="h-4 w-4" aria-hidden />
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? "Link copied" : "Copy link"}
          className={cn(
            "flex h-10 w-10 cursor-pointer items-center justify-center rounded-(--r-md) border bg-surface transition-colors duration-150",
            copied
              ? "border-success/40 text-success"
              : "border-border text-fg2 hover:border-border-strong hover:text-xo-indigo",
          )}
        >
          {copied ? (
            <Check className="h-4 w-4" aria-hidden />
          ) : (
            <Link2 className="h-4 w-4" aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <title>X</title>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.726-8.835L1.254 2.25H8.08l4.254 5.672L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
