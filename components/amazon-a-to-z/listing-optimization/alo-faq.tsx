import { ServiceFaq } from "@/components/services";

export const ALO_FAQS = [
  {
    q: "What is Amazon listing optimization?",
    a: "It's the work of improving a product detail page so it ranks for the right searches and converts the shoppers who land on it. That covers keyword research, the title, bullets and description, images and video, A+ Content, and the backend fields Amazon uses to index your product.",
  },
  {
    q: "What's included in a listing optimization engagement?",
    a: "SEO keyword research, copywriting for titles, bullets and descriptions, enhanced A+ Content, image and video optimization, and performance monitoring after launch. We scope the mix to your catalog, since a five-ASIN brand and a five-hundred-ASIN catalog need different plans.",
  },
  {
    q: "Do I need Brand Registry to work with you?",
    a: "No, but it helps. Without Brand Registry we can still optimize titles, bullets, descriptions, images, and backend keywords. Brand Registry is what unlocks A+ Content, Stores, and Sponsored Brands, so if you're eligible and not enrolled, we'll help you get set up first.",
  },
  {
    q: "Is A+ Content actually worth it?",
    a: "For most brands, yes. A+ Content replaces the plain description with modules that can carry comparison charts, feature callouts, and lifestyle imagery, which is where objections get answered. It's most valuable on considered purchases and on products that need explaining.",
  },
  {
    q: "What's the difference between front-end and back-end optimization?",
    a: "Front-end is everything the shopper sees and reads. Back-end is the hidden fields, including search terms, subject matter, and product attributes, that affect which queries you're indexed for. Both matter: strong copy that isn't indexed won't get found, and good indexing on a weak page won't convert.",
  },
  {
    q: "How long before I see results?",
    a: "Indexing changes can show up within days, and conversion-rate movement is often visible in the first few weeks once enough sessions accumulate. Ranking gains build over the following months as sales velocity feeds back into the algorithm. We report on rank, conversion, and ad efficiency so you can see what's moving.",
  },
] as const;

export function AloFaq() {
  return (
    <div className="ind-reveal">
      <ServiceFaq
        label="Questions"
        title="Frequently asked questions"
        items={[...ALO_FAQS]}
      />
    </div>
  );
}
