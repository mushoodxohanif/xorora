import { ServiceFaq } from "@/components/services";

export const APH_FAQS = [
  {
    q: "What exactly is Amazon product hunting, and why is it important?",
    a: "Amazon product hunting is the research process of identifying products with genuine demand, competition you can realistically enter, and margins that survive Amazon fees, freight, and advertising. It matters because the product decision sets the ceiling on everything that follows: no amount of listing optimization or ad spend can rescue a product in a saturated category with thin margins.",
  },
  {
    q: "What kind of products will you find for me?",
    a: "Private-label products that fit your budget, your target marketplaces, and any category preferences you have. In practice that usually means items with consistent year-round demand, manageable size and weight, no unnecessary compliance complexity, and enough margin to fund advertising while still being profitable. Every shortlisted product comes with the data behind it so you can judge it yourself.",
  },
  {
    q: "How do I hunt products on Amazon?",
    a: "The core method is filtering the catalogue by demand and competition, then validating the survivors. We use Helium 10's Black Box to filter on criteria like price, review count, and sales volume, and Cerebro to reverse-engineer the keywords competing products rank for. The 999 technique estimates a competitor's real inventory and sales velocity, and BSR analysis across the category shows whether a product sells consistently or only spikes seasonally. Together these turn a hunch into a number you can check.",
  },
  {
    q: "How do you ensure the suppliers you source are reliable?",
    a: "We confirm that a supplier is an actual manufacturer rather than a trading company, verify business licences, production capability, export history, and relevant certifications, and compare multiple quotes rather than accepting a single source. We also assess samples before any bulk order and document the quality criteria the supplier is expected to meet on production runs.",
  },
  {
    q: "What's involved in the quality assurance process?",
    a: "We coordinate samples from shortlisted suppliers and assess them against your specification: materials, build quality, dimensions, finish, and packaging integrity. We document how suppliers compare, flag anything likely to cause returns or negative reviews, and help you set the inspection standard that applies to production orders so quality is defined in writing rather than assumed.",
  },
  {
    q: "Can you guarantee success?",
    a: "No, and you should be cautious of anyone who does. Amazon outcomes depend on factors outside any agency's control, including competitor behaviour, pricing pressure, marketplace policy changes, and how you run the business day to day. What we commit to is rigorous research with the data shown, suppliers we have genuinely verified, and compliance checks before you spend on inventory.",
  },
  {
    q: "What happens if I'm not satisfied with the product recommendations?",
    a: "We refine the shortlist with you until it fits your brief and the data. Tell us what doesn't work about the recommendations, whether that's the category, the margin profile, the order quantity, or the competitive landscape, and we adjust the research criteria and go again.",
  },
  {
    q: "Do you work with suppliers outside China?",
    a: "Yes. We source globally and will recommend the region that best fits your product, budget, and lead-time requirements. Depending on the category that could mean China, India, Vietnam, Turkey, Eastern Europe, or domestic manufacturing in your target market.",
  },
  {
    q: "Can you help with branding and packaging?",
    a: "Yes. Branding and private-label setup is part of the service: brand naming direction, logo application, packaging and insert design, and the labelling requirements your category demands, so the product arrives ready to sell under your own label.",
  },
  {
    q: "Do you handle shipping and logistics?",
    a: "We advise on shipping and launch logistics as part of setup, including freight options, incoterms, lead-time planning, and what your supplier should be responsible for. Dedicated freight forwarding or 3PL management can be scoped separately when you need it.",
  },
] as const;

export function AphFaq() {
  return (
    <div className="ind-reveal">
      <ServiceFaq
        label="Questions"
        title="Frequently asked questions"
        items={[...APH_FAQS]}
      />
    </div>
  );
}
