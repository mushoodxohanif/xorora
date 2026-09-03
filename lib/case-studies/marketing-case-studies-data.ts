import type {
  CaseStudyCategory,
  CaseStudySectionContent,
  CaseStudySectionType,
} from "@/lib/case-studies/types";

const unsplash = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

interface SeedMetric {
  value: string;
  label: string;
  note?: string;
}

interface SeedSection {
  type: CaseStudySectionType;
  content: CaseStudySectionContent;
}

export interface MarketingSeedCaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  category: CaseStudyCategory;
  lead: string;
  heroImage: string;
  headerBg: string;
  heroUrl: string;
  featured: boolean;
  sortOrder: number;
  metaTitle: string;
  metaDescription: string;
  metrics: SeedMetric[];
  sections: SeedSection[];
}

export const seedMarketingCaseStudies: MarketingSeedCaseStudy[] = [
  {
    slug: "meta-ads-sugar-free-dessert-cold-start",
    title: "From zero to Pakistan's best-selling sugar-free dessert brand online.",
    subtitle: "Meta Ads · D2C Food & Desserts · Cold Start",
    tags: ["Meta Ads", "D2C", "Cold Start"],
    category: "marketing",
    lead: "A premium coconut dessert brand with no paid social history. Xorora built the Meta account from a blank Ads Manager and drove 10,732 purchases at 5.27x average purchase ROAS.",
    heroImage: unsplash("photo-1481391319762-47dff72954d9"),
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "meta.com",
    featured: false,
    sortOrder: 6,
    metaTitle: "Meta Ads Cold Start — Sugar-Free Dessert Brand | Xorora",
    metaDescription:
      "How Xorora built a Meta Ads account from zero for a Pakistani D2C dessert brand — 10,732 purchases and 5.27x average purchase ROAS with no prior paid social history.",
    metrics: [
      { value: "5.27x", label: "Average purchase ROAS" },
      { value: "10,732", label: "Website purchases generated" },
      { value: "Rs 35.7M", label: "Purchase value driven" },
      { value: "Rs 6.8M", label: "Ad spend across the account" },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "One of Pakistan's largest direct-to-consumer dessert brands, known for a single hero category: coconut-based sweets sold in sugar-free, chocolate, and strawberry variants. The product is premium, gifting-led, and shipped nationwide from a single production base. Before Xorora, the brand had no paid social history to build from.",
            "There was no account to optimize and no past data to lean on. Every campaign, every audience, and every piece of creative had to be built from a blank Ads Manager. In a category where traditional Pakistani sweets are usually sold through word of mouth and physical sweet shops, there was no precedent for what a cold digital funnel would even look like.",
          ],
          meta: [
            { label: "Industry", value: "D2C food & desserts" },
            { label: "Engagement", value: "Meta Ads, cold-start account" },
            { label: "Headline", value: "5.27x avg purchase ROAS" },
            { label: "Live campaigns", value: "14" },
          ],
          image: {
            src: unsplash("photo-1481391319762-47dff72954d9"),
            alt: "Premium dessert products representing a D2C sweets brand Meta Ads case study",
            url: "meta.com",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "What made it hard",
          lead: "Desserts are impulse-adjacent but not impulse-cheap — and festive gifting is crowded.",
          bullets: [
            "A single order regularly runs into the thousands of rupees, so the audience has to be convinced fast on a platform built for scrolling past things fast.",
            "A crowded festive-gifting category where dozens of local sweet brands fight for the same Eid and wedding-season spend.",
            "The account needed to earn trust before it could earn a sale — with zero pixel history to lean on.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "What Xorora built",
          subtitle:
            "Product-specific campaigns, lookalikes as soon as the pixel could support them, and continuous retargeting.",
          paragraphs: [
            "Xorora structured the account around product-specific campaigns rather than one generic push, splitting sugar-free, chocolate, and strawberry lines into their own ad sets so each could be measured and scaled on its own merit. Coconut barfi, the flagship product, got its own dedicated budget once early data showed it converting fastest.",
            "Lookalike audiences were built the moment the pixel had enough purchase data to support them, and a standing rotation of broad and interest-based campaigns kept the account from plateauing on a single audience. Retargeting ran continuously against site visitors and cart abandoners, closing the loop on a purchase decision that customers often needed a second nudge to make.",
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The outcome",
          subtitle:
            "An account with no history now runs 14 live campaigns and returns more than five rupees for every rupee spent — across a full product catalog, not one lucky campaign.",
          bullets: [
            {
              title: "Rs 6,766,780.90 spent",
              body: "Total Meta Ads spend across the cold-start account.",
            },
            {
              title: "10,732 website purchases",
              body: "Purchase volume generated with zero starting pixel data.",
            },
            {
              title: "5.27x average purchase ROAS",
              body: "Held across the catalog rather than a single hero campaign.",
            },
            {
              title: "Rs 35,660,099.02 purchase value",
              body: "Revenue driven from campaigns built with zero starting data.",
            },
          ],
          quote: "Zero history. 5.27x ROAS. 14 live campaigns.",
        },
      },
    ],
  },
  {
    slug: "meta-ads-organic-nutrition-cold-start",
    title: "Building a first-time digital audience for an organic nutrition brand.",
    subtitle: "Meta Ads · Organic Health & Nutrition · Cold Start",
    tags: ["Meta Ads", "Nutrition", "Cold Start"],
    category: "marketing",
    lead: "No pixel, no purchase history, and a trust-heavy category. Xorora crossed 5,047 purchases in seven months at 4.01x average purchase ROAS.",
    heroImage: unsplash("photo-1512621776951-a57141f2eefd"),
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "meta.com",
    featured: false,
    sortOrder: 7,
    metaTitle: "Meta Ads Cold Start — Organic Nutrition Brand | Xorora",
    metaDescription:
      "How Xorora launched Meta Ads for a Pakistani organic nutrition brand — 5,047 purchases and 4.01x ROAS in seven months from a cold-start account.",
    metrics: [
      { value: "4.01x", label: "Average purchase ROAS" },
      { value: "5,047", label: "Purchases in seven months" },
      { value: "Rs 19.8M", label: "Purchase value driven" },
      { value: "Rs 4.9M", label: "Spend, Jan–Jul 2025" },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A Pakistani organic nutrition brand selling traditional food-based remedies: daily wellness blends, immunity support, and nutrient-dense staples positioned as chemical-free alternatives to standard supplements. The category depends on trust, since customers are being asked to believe in a product before they can feel a result.",
            "The account started with no pixel, no purchase history, and no sense of which audience would actually convert. Organic and wellness products carry a specific problem: the market is full of both credible brands and questionable ones, and a first-time visitor has no easy way to tell them apart from an ad alone.",
          ],
          meta: [
            { label: "Industry", value: "D2C organic health & nutrition" },
            { label: "Engagement", value: "Meta Ads, cold-start account" },
            { label: "Headline", value: "4.01x avg purchase ROAS" },
            { label: "Window", value: "Jan–Jul 2025" },
          ],
          image: {
            src: unsplash("photo-1512621776951-a57141f2eefd"),
            alt: "Fresh organic ingredients representing an organic nutrition Meta Ads case study",
            url: "meta.com",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "What made it hard",
          lead: "Nutrition sells on belief, not just want — and results show up slowly.",
          bullets: [
            "Cold audiences arrive skeptical; the ad has to do more work than a typical product ad.",
            "Results from a nutrition product show up over days or weeks rather than instantly.",
            "Usual urgency levers (limited stock, flash sales) carry less weight than they would for fashion or food.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "What Xorora built",
          subtitle:
            "Education-first creative, product-line split testing, and social-proof retargeting.",
          paragraphs: [
            "Xorora leaned into education-first creative, building ads that led with what the product actually contains and what problem it solves, rather than generic wellness imagery. Campaigns were split by product line so the account could see which offer — daily nutrition, targeted remedies, or bundled packages — resonated with which audience, then reallocated budget weekly toward whichever line was converting.",
            "Broad targeting was paired with interest-based testing to find the actual buying audience rather than assuming it, and a retargeting layer served social proof and specific product benefits to anyone who had visited but not purchased.",
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The outcome",
          subtitle:
            "In seven months, an account with no prior digital presence crossed five thousand purchases at a return over four times spend — in a category where trust has to be earned before a sale happens.",
          bullets: [
            {
              title: "Rs 4,943,760.75 spent",
              body: "Meta Ads spend from January to July 2025.",
            },
            {
              title: "5,047 website purchases",
              body: "First-time digital audience converted into paying customers.",
            },
            {
              title: "4.01x average purchase ROAS",
              body: "Sustained return in a trust-heavy wellness category.",
            },
            {
              title: "Rs 19,814,613.08 purchase value",
              body: "Revenue driven from a cold-start Meta account.",
            },
          ],
          quote: "Trust first. Then scale. 4.01x ROAS.",
        },
      },
    ],
  },
  {
    slug: "meta-ads-home-bakery-nationwide",
    title: "Turning a traditional home bakery into a nationwide online order engine.",
    subtitle: "Meta Ads · D2C Bakery · Cold Start",
    tags: ["Meta Ads", "Bakery", "WhatsApp"],
    category: "marketing",
    lead: "A local bakery with no online funnel. Xorora built purchase and WhatsApp conversion campaigns in parallel and drove Rs 7.18M in purchase value at 4.03x ROAS.",
    heroImage: unsplash("photo-1509440159596-0249088772ff"),
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "meta.com",
    featured: false,
    sortOrder: 8,
    metaTitle: "Meta Ads Cold Start — Home Bakery Nationwide Orders | Xorora",
    metaDescription:
      "How Xorora built Meta Ads and WhatsApp conversion campaigns for a Pakistani home bakery — 4.03x ROAS and Rs 7.18M in purchase value from a cold start.",
    metrics: [
      { value: "4.03x", label: "Average purchase ROAS" },
      { value: "Rs 7.18M", label: "Purchase value driven" },
      { value: "Rs 1.78M", label: "Spend, Jul 2024–Feb 2025" },
      { value: "2 channels", label: "Website + WhatsApp conversions" },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A well-known Pakistani home bakery brand, recognized for traditional recipes such as badam khatai, basin khatai, and cake rusk, made with pure desi ghee and baked fresh to order. The brand's reputation was built locally, on word of mouth and repeat family customers, with no meaningful digital ordering system in place before Xorora came on.",
            "The bakery had a loyal offline following but no online ordering funnel. There was no pixel, no purchase data, and no existing customer list to retarget. Every campaign had to introduce the brand to a cold audience and convince them to order a perishable, made-to-order product sight unseen.",
          ],
          meta: [
            { label: "Industry", value: "D2C bakery & baked goods" },
            { label: "Engagement", value: "Meta Ads, cold-start account" },
            { label: "Headline", value: "4.03x avg purchase ROAS" },
            { label: "Window", value: "Jul 2024–Feb 2025" },
          ],
          image: {
            src: unsplash("photo-1509440159596-0249088772ff"),
            alt: "Fresh baked goods representing a home bakery Meta Ads case study",
            url: "meta.com",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "What made it hard",
          lead: "Fresh, made-to-order product — trust and delivery confidence matter as much as the ad.",
          bullets: [
            "The product is perishable and needs to arrive in a specific window — unlike most D2C catalogs.",
            "The brand had built its name locally and had to establish credibility with buyers who had never heard of it.",
            "No physical presence in the cities the account needed to convert.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "What Xorora built",
          subtitle:
            "Purchase and WhatsApp conversion campaigns in parallel, plus freshness-led creative.",
          paragraphs: [
            "Xorora ran purchase and WhatsApp conversion campaigns in parallel, meeting customers however they preferred to order. For a traditional food brand, many customers wanted to confirm freshness or ask about delivery timing before buying, so WhatsApp campaigns captured that audience while purchase campaigns handled customers ready to check out directly on-site.",
            'Creative leaned on the "baked fresh every time you order" promise, using process and product close-ups to build the trust a cold audience needed before committing to a perishable order from a brand they hadn\'t bought from before.',
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The outcome",
          subtitle:
            "A brand that built its reputation over a counter now runs a nationwide order funnel that converts cold traffic into paying customers — built entirely from scratch.",
          bullets: [
            {
              title: "Rs 1,783,229.66 spent",
              body: "Meta Ads spend from July 2024 to February 2025.",
            },
            {
              title: "Rs 7,183,665.21 purchase value",
              body: "Revenue driven across website purchases and WhatsApp conversions.",
            },
            {
              title: "4.03x average purchase ROAS",
              body: "Demand captured across both channels rather than lost at the point of hesitation.",
            },
          ],
          quote: "Counter to nationwide. Built from scratch.",
        },
      },
    ],
  },
  {
    slug: "meta-ads-wellness-supplements-26x-roas",
    title: "Scaling a wellness supplement brand to a 26x return with zero starting data.",
    subtitle: "Meta Ads · Health & Wellness · Cold Start",
    tags: ["Meta Ads", "Supplements", "Compliance"],
    category: "marketing",
    lead: "Xorora's strongest Meta return: 26.69x average purchase ROAS and Rs 156M in purchase value — built category by category in one of Meta's most tightly regulated ad classes.",
    heroImage: unsplash("photo-1556228720-195a672e8a03"),
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "meta.com",
    featured: false,
    sortOrder: 9,
    metaTitle: "Meta Ads 26.69x ROAS — Wellness Supplements | Xorora",
    metaDescription:
      "How Xorora scaled Meta Ads for a Pakistani wellness supplement brand to 26.69x average purchase ROAS and Rs 156M purchase value from a cold-start account.",
    metrics: [
      { value: "26.69x", label: "Average purchase ROAS" },
      { value: "Rs 156M", label: "Purchase value driven" },
      { value: "3,459", label: "Purchases" },
      { value: "Rs 5.8M", label: "Spend, Jan–Jul 2025" },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "One of Pakistan's leading health and wellness supplement brands, manufacturing weight-management packages, hormonal wellness bundles, and skincare lines under a single umbrella. The catalog spans higher-ticket consultation-led packages as well as smaller standalone products, which meant the account had to serve very different buying journeys at once.",
            "The brand entered paid social with no existing account history and no conversion data to guide early decisions. Supplements and wellness packages are also a heavily scrutinized category on Meta, meaning compliant, evidence-based creative was non-negotiable from day one.",
          ],
          meta: [
            { label: "Industry", value: "D2C health, wellness & supplements" },
            { label: "Engagement", value: "Meta Ads, cold-start account" },
            { label: "Headline", value: "26.69x avg purchase ROAS" },
            { label: "Window", value: "Jan–Jul 2025" },
          ],
          image: {
            src: unsplash("photo-1556228720-195a672e8a03"),
            alt: "Wellness and skincare products representing a supplements Meta Ads case study",
            url: "meta.com",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "What made it hard",
          lead: "Higher bar for compliance and trust — and a wide catalog with different buying journeys.",
          bullets: [
            "Claims have to be carefully worded; targeting must respect Meta's health-content restrictions.",
            "Customers make a more personal, considered decision than they would buying a bag or a dessert.",
            "Weight-loss packages, hormonal wellness bundles, and skincare kits each needed their own audience logic.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "What Xorora built",
          subtitle:
            "Category-by-category campaign structures, longer decision windows, and aggressive budget reallocation.",
          paragraphs: [
            "Xorora built the account category by category, running separate campaign structures for weight-management packages, wellness bundles, and skincare, each with its own creative angle and audience. Because several products were higher-consideration purchases, campaigns were built to support a longer decision window, with retargeting sequences that moved a visitor from initial interest to purchase across several touchpoints rather than expecting a single-ad conversion.",
            "As purchase data accumulated, Xorora shifted spend aggressively toward the highest-converting packages, concentrating budget where the account was already proving it could return value.",
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The outcome",
          subtitle:
            "The strongest return in Xorora's portfolio: nearly 27 rupees back for every rupee spent, built on disciplined budget reallocation in one of Meta's most tightly regulated ad categories.",
          bullets: [
            {
              title: "Rs 5,846,825.69 spent",
              body: "Meta Ads spend from January to July 2025.",
            },
            {
              title: "3,459 purchases",
              body: "Conversions across packages and standalone products.",
            },
            {
              title: "26.69x average purchase ROAS",
              body: "Portfolio-leading return from a cold-start account.",
            },
            {
              title: "Rs 156,028,933.81 purchase value",
              body: "Revenue driven by reallocating spend toward proven converters.",
            },
          ],
          quote: "Nearly 27x back. Compliance first. Data next.",
        },
      },
    ],
  },
  {
    slug: "meta-ads-fashion-accessories-launch",
    title: "Launching a fashion accessories brand with no prior digital footprint.",
    subtitle: "Meta Ads · Fashion & Accessories · Cold Start",
    tags: ["Meta Ads", "Fashion", "Efficiency"],
    category: "marketing",
    lead: "A modest budget and no pixel history. Xorora proved the model with product-led creative and delivered 6.33x average purchase ROAS.",
    heroImage: unsplash("photo-1590874103328-eac38a683ce7"),
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "meta.com",
    featured: false,
    sortOrder: 10,
    metaTitle: "Meta Ads Launch — Fashion Accessories Brand | Xorora",
    metaDescription:
      "How Xorora launched Meta Ads for a Pakistani fashion accessories brand on a limited budget — 6.33x average purchase ROAS from a cold-start account.",
    metrics: [
      { value: "6.33x", label: "Average purchase ROAS" },
      { value: "Rs 1.32M", label: "Purchase value driven" },
      { value: "Rs 208K", label: "Ad spend" },
      { value: "0→1", label: "Paid acquisition from cold start" },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A Pakistani women's accessories brand designing bags built to be both functional and fashionable, for everyday carry rather than occasion-only use. The brand had a growing organic following but no paid acquisition strategy and no purchase data to build campaigns from.",
            "The account started cold: no pixel history, no past campaigns to learn from, and a modest initial budget to prove the model with before scaling further. Fashion accessories are a highly visual, highly competitive category on Meta, where a brand with no ad history is competing directly against established players with years of retargeting data behind them.",
          ],
          meta: [
            { label: "Industry", value: "D2C fashion & accessories" },
            { label: "Engagement", value: "Meta Ads, cold-start account" },
            { label: "Headline", value: "6.33x avg purchase ROAS" },
            { label: "Budget profile", value: "Lean / efficiency-first" },
          ],
          image: {
            src: unsplash("photo-1590874103328-eac38a683ce7"),
            alt: "Fashion handbag representing a fashion accessories Meta Ads case study",
            url: "meta.com",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "What made it hard",
          lead: "Little room for inefficient testing — creative had to do the persuasion work.",
          bullets: [
            "A small starting budget meant every inefficient rupee delayed finding what worked.",
            "A category driven almost entirely by product photography and styling.",
            "Creative quality had to do more of the persuasion work than copy or offers could.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "What Xorora built",
          subtitle:
            "Tight testing, product-led creative, and early concentration on winners.",
          paragraphs: [
            "Xorora prioritized tight, efficient testing over broad spend, using product-led creative that put the bags themselves, styled and in use, at the center of every ad. Budget was concentrated on the best-performing creative and audience combinations early, rather than spreading thin across many untested ideas, so the account could find a working formula fast on a limited budget.",
            "As performance data built up, the same disciplined structure used on larger accounts — purchase-optimized campaigns paired with retargeting — was applied here at a scale that matched the brand's actual budget.",
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The outcome",
          subtitle:
            "A smaller account by spend, and still a return over six times investment. Proof that Xorora's approach to media buying doesn't depend on a large budget to work: it depends on discipline.",
          bullets: [
            {
              title: "Rs 207,675.68 spent",
              body: "Lean Meta Ads spend to prove the model.",
            },
            {
              title: "Rs 1,315,261.77 purchase value",
              body: "Revenue driven from product-led creative and tight testing.",
            },
            {
              title: "6.33x average purchase ROAS",
              body: "Efficient return without a large media budget.",
            },
          ],
          quote: "Discipline over budget. 6.33x ROAS.",
        },
      },
    ],
  },
  {
    slug: "google-ads-supplements-search-two-years",
    title: "Sustaining a supplements brand's search performance over two years.",
    subtitle: "Google Ads · Supplements · Search",
    tags: ["Google Ads", "Search", "Supplements"],
    category: "marketing",
    lead: "Eight product-family Search campaigns over two years: Rs 82.8M in tracked conversion value against Rs 790K spent.",
    heroImage: unsplash("photo-1584308666744-24d5c474f2ae"),
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "ads.google.com",
    featured: false,
    sortOrder: 11,
    metaTitle: "Google Ads Search — Supplements Brand Two-Year Results | Xorora",
    metaDescription:
      "How Xorora ran eight Google Search campaigns for a Pakistani supplements brand over two years — Rs 82.8M conversion value against Rs 790K spend.",
    metrics: [
      { value: "Rs 82.8M", label: "Tracked conversion value" },
      { value: "Rs 790K", label: "Spend, Sep 2023–Oct 2025" },
      { value: "5.12M", label: "Impressions generated" },
      { value: "103K", label: "Clicks generated" },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A Pakistani D2C supplements and multivitamins brand selling nationwide through its own online store. The catalog spans a flagship multi-nutrient multivitamin, a natural performance and testosterone booster, imported fish oil, biotin-based hair care, calcium and vitamin D3, magnesium glycinate, and topical pain relief, positioned as one of Pakistan's most trusted supplements brands.",
            "The brand needed its Search account to keep performing as it scaled from a handful of hero products into a full catalog spanning immunity, men's health, hair care, bone health, and pain relief. Two years of live campaigns meant the account had to hold its return steady through changing search competition, not just deliver one strong opening quarter.",
          ],
          meta: [
            { label: "Industry", value: "D2C health, wellness & supplements" },
            { label: "Engagement", value: "Google Ads Search" },
            { label: "Headline", value: "Rs 82.8M conversion value" },
            { label: "Window", value: "Sep 2023–Oct 2025" },
          ],
          image: {
            src: unsplash("photo-1584308666744-24d5c474f2ae"),
            alt: "Supplement capsules representing a Google Ads supplements search case study",
            url: "ads.google.com",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "What made it hard",
          lead: "A regulated category and a catalog that sends buyers into very different search intent.",
          bullets: [
            "Supplements sit in a tightly regulated ad category.",
            'Someone typing "best multivitamin Pakistan" is nowhere near the same purchase decision as someone searching for a testosterone booster or a pain relief cream.',
            "Blending everything into one generic campaign would bury the best-performing lines under the weakest.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "What Xorora built",
          subtitle:
            "Eight concurrent Search campaigns — one per product family — with bids guided by two years of conversion data.",
          paragraphs: [
            "Xorora split the account into eight concurrent Search campaigns, one per product family, so multivitamins, men's health, hair care, and pain relief each ran against their own keyword set and landing page rather than competing inside a single generic campaign.",
            "Bids were adjusted as two years of conversion data built up, shifting spend toward the search terms and product lines converting fastest.",
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The outcome",
          subtitle:
            "Sustained Search performance across a full supplements catalog — not a one-quarter spike.",
          bullets: [
            {
              title: "5.12M impressions and 103K clicks",
              body: "Account-wide Search reach across two years.",
            },
            {
              title: "Rs 790,000 spent",
              body: "Total Google Ads spend from September 2023 to October 2025.",
            },
            {
              title: "Rs 82.8M tracked conversion value",
              body: "Conversion value held as the catalog and competition evolved.",
            },
          ],
          quote: "Eight campaigns. Two years. Rs 82.8M value.",
        },
      },
    ],
  },
  {
    slug: "google-ads-b2b-wholesale-marketplace-growth",
    title: "Growing a B2B wholesale marketplace's revenue 6.5x in one quarter.",
    subtitle: "Google Ads · B2B Marketplace · Search",
    tags: ["Google Ads", "B2B", "Marketplace"],
    category: "marketing",
    lead: "Intent-matched Search and category landing pages: revenue up 649.83% and transactions up 633.88% period-over-period.",
    heroImage: unsplash("photo-1454165804606-c3d57bc86b40"),
    headerBg: "/assets/header-bg.jpg",
    heroUrl: "ads.google.com",
    featured: false,
    sortOrder: 12,
    metaTitle: "Google Ads B2B Marketplace — 6.5x Revenue Growth | Xorora",
    metaDescription:
      "How Xorora grew a Middle East B2B wholesale marketplace with Google Ads — 649.83% revenue growth and 633.88% more transactions in one quarter.",
    metrics: [
      { value: "+649.83%", label: "Revenue period-over-period" },
      { value: "+633.88%", label: "Transactions period-over-period" },
      { value: "AED 525K", label: "Revenue in the quarter" },
      { value: "AED 33.85", label: "Revenue per user (+55.13%)" },
    ],
    sections: [
      {
        type: "overview",
        content: {
          label: "Overview",
          title: "The big picture",
          paragraphs: [
            "A business-to-business digital marketplace serving the Middle East. The platform connects local businesses with wholesale suppliers worldwide, letting local buyers cut their margins on stock while giving international sellers a single channel to reach them.",
            "The marketplace needed to prove it could convert search traffic into real wholesale transactions, not just visits, within a single quarter. B2B buyers move slower and need more convincing than typical consumer shoppers, which made the quarter-over-quarter revenue target a genuine test of traffic quality, not just traffic volume.",
          ],
          meta: [
            { label: "Industry", value: "B2B wholesale marketplace" },
            { label: "Engagement", value: "Google Ads + GA4 ecommerce" },
            { label: "Headline", value: "Revenue +649.83%" },
            { label: "Market", value: "Middle East" },
          ],
          image: {
            src: unsplash("photo-1454165804606-c3d57bc86b40"),
            alt: "Business planning representing a B2B wholesale marketplace Google Ads case study",
            url: "ads.google.com",
          },
        },
      },
      {
        type: "challenge",
        content: {
          label: "The challenge",
          title: "What made it hard",
          lead: "Wholesale is a bigger trust leap than a single retail order.",
          bullets: [
            "A business buyer must trust a new platform with a bulk purchase, often before speaking to a supplier directly.",
            "Traffic had to carry buying intent rather than casual interest.",
            "Clicks without transactions would fail the quarter — quality over volume.",
          ],
        },
      },
      {
        type: "solution",
        content: {
          label: "How Xorora solved it",
          title: "What Xorora built",
          subtitle:
            "B2B-intent Search terms and category-matched landing pages.",
          paragraphs: [
            "Xorora built the account around Search terms that carry real B2B intent — sourcing and wholesale language specific to the product categories the platform serves — rather than broad marketplace terms that mostly draw browsers.",
            "Landing pages were matched to campaign intent, so a buyer searching for a specific product category landed on that category page rather than a generic homepage, shortening the path from click to transaction.",
          ],
        },
      },
      {
        type: "results",
        content: {
          label: "The result",
          title: "The outcome",
          subtitle:
            "One quarter that proved search traffic could become wholesale transactions — not just visits.",
          bullets: [
            {
              title: "AED 524,862 revenue",
              body: "A 649.83% increase over the comparison period.",
            },
            {
              title: "1,340 transactions",
              body: "Up 633.88% period-over-period.",
            },
            {
              title: "AED 33.85 revenue per user",
              body: "Up 55.13% — quality of traffic, not just volume.",
            },
          ],
          quote: "Intent over browsers. 6.5x revenue.",
        },
      },
    ],
  },
];
