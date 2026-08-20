import type { Metadata } from "next";
import { ContactFormPanel } from "@/components/contact/contact-form-panel";
import { XWatermark } from "@/components/geometry/x-watermark";
import { SITE_EMAIL, SITE_OFFICES, SITE_PHONES } from "@/lib/contact";
import { ROUTES } from "@/lib/navigation";
import { listIndustryNames } from "@/lib/navigation/server";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Xorora — Tell Us About Your Project",
  description:
    "Contact Xorora to discuss your software or AI project. Reach us by email or phone in the US and Pakistan, or send a project brief — we respond within one business day.",
  keywords: [
    "contact Xorora",
    "software development contact",
    "AI development partner",
    "start a project",
  ],
  alternates: { canonical: ROUTES.contact },
  openGraph: {
    title: "Contact Xorora — Tell Us About Your Project",
    description:
      "Share a few project details and our team will get back within one business day. Offices in Austin and Lahore.",
    url: ROUTES.contact,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Xorora — Tell Us About Your Project",
    description:
      "Share a few project details and our team will get back within one business day.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Xorora",
  url: `${SITE_URL}${ROUTES.contact}`,
  description:
    "Contact Xorora to discuss custom software and AI development projects.",
  mainEntity: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
    email: SITE_EMAIL,
    telephone: SITE_PHONES.map((p) => p.display),
    address: SITE_OFFICES.map((office) => ({
      "@type": "PostalAddress",
      name: office.city,
      streetAddress: office.addr,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE_URL}${ROUTES.contact}`,
    },
  ],
};

export default async function ContactPage() {
  const industryNames = await listIndustryNames();

  return (
    <div className="bg-surface">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="bg-navy-950 px-8 py-[clamp(56px,8vw,104px)]">
        <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-(--r-xl) border border-white/10 bg-navy-900 p-[clamp(32px,4.5vw,60px)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_90%_0%,rgba(70,76,159,0.4),transparent_58%)]" />
          <XWatermark
            size={420}
            color="rgba(120,150,240,0.05)"
            className="bottom-[-180px] left-[-120px]"
          />
          <div className="relative">
            <ContactFormPanel
              industryNames={industryNames}
              formName="contact-page"
              titleId="contact-page-title"
              showOffices
            />
          </div>
        </div>
      </section>
    </div>
  );
}
