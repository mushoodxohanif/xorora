import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS = [
  {
    title: "Frameworks & languages",
    logos: [
      { name: ".NET", src: "/assets/tech-stack/dotnet.svg" },
      { name: "Angular", src: "/assets/tech-stack/angular.svg" },
      { name: "Vue.js", src: "/assets/tech-stack/vue.svg" },
      { name: "Python", src: "/assets/tech-stack/python.svg" },
      { name: "Rails", src: "/assets/tech-stack/rails.svg" },
      { name: "Next.js", src: "/assets/tech-stack/nextjs.svg" },
      { name: "PHP", src: "/assets/tech-stack/php.svg" },
      { name: "Laravel", src: "/assets/tech-stack/laravel.svg" },
      { name: "React", src: "/assets/tech-stack/react.svg" },
      { name: "Django", src: "/assets/tech-stack/django.svg" },
      { name: "JavaScript", src: "/assets/tech-stack/javascript.svg" },
      { name: "Express.js", src: "/assets/tech-stack/express.svg" },
      { name: "Node.js", src: "/assets/tech-stack/nodejs.svg" },
    ],
  },
  {
    title: "CMS platforms",
    logos: [
      { name: "WordPress", src: "/assets/tech-stack/wordpress.svg" },
      { name: "Drupal", src: "/assets/tech-stack/drupal.svg" },
      { name: "Joomla", src: "/assets/tech-stack/joomla.svg" },
      { name: "TYPO3", src: "/assets/tech-stack/typo3.svg" },
      { name: "Contentful", src: "/assets/tech-stack/contentful.svg" },
      { name: "Strapi", src: "/assets/tech-stack/strapi.svg" },
      { name: "Sanity", src: "/assets/tech-stack/sanity.svg" },
      { name: "Contentstack", src: "/assets/tech-stack/contentstack.svg" },
      { name: "Shopify", src: "/assets/tech-stack/shopify.svg" },
      { name: "WooCommerce", src: "/assets/tech-stack/woocommerce.svg" },
      { name: "Magento", src: "/assets/tech-stack/magento.svg" },
    ],
  },
] as const;

export function CmsTech() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Tech & tools"
        title="Technology stack for CMS web development"
        sub="We build with frameworks and CMS platforms chosen for your content model, channels, and team."
        className="mb-12 max-w-[720px]"
      />
      <div className="flex flex-col gap-8">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
              {group.title}
            </h3>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.logos.map((logo) => (
                <li
                  key={logo.name}
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-slate-50 px-5 py-4"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      title={logo.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                      unoptimized
                    />
                  </span>
                  <span className="font-sans font-semibold text-[14.5px] text-fg1">
                    {logo.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
