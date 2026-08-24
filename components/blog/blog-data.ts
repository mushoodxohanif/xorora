export interface BlogSeedPost {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  img: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogSeedPost[] = [
  {
    slug: "net-vs-java-comparison-use-cases-pros-and-cons",
    cat: "Software Development",
    title: ".NET vs Java: Comparison, use cases, pros and cons",
    excerpt:
      ".NET vs Java compared on performance, cost, use cases, and AI integration. A practical, no-hype guide to help you pick the right stack for your next project.",
    read: "12 min",
    date: "Aug 24, 2026",
    img: "/assets/blog/net-vs-java-comparison.png",
    featured: true,
  },
  {
    slug: "top-5-laravel-development-companies-2026",
    cat: "Software Development",
    title: "Top 5 Laravel Development Companies for 2026",
    excerpt:
      "A region-by-region comparison of 5 Laravel development companies for 2026 — evaluated on Laravel expertise, client reputation, and delivery track record.",
    read: "11 min",
    date: "Aug 20, 2026",
    img: "/assets/blog/top-5-laravel-development-companies-2026.png",
  },
  {
    slug: "top-nodejs-development-companies-2026",
    cat: "Software Development",
    title: "Top Node.js Development Companies (2026)",
    excerpt:
      "A vetted shortlist of the top Node.js development companies for 2026 — evaluated on production track record, architecture depth, and full-stack ownership.",
    read: "12 min",
    date: "Aug 19, 2026",
    img: "/assets/blog/top-nodejs-development-companies-2026.png",
  },
  {
    slug: "top-10-python-development-companies-in-usa-2026",
    cat: "Software Development",
    title: "Top 10 Python Development Companies in USA (2026)",
    excerpt:
      "Compare the top 10 Python development companies in USA for 2026 on rates, services, specializations, and project experience — including Xorora.",
    read: "14 min",
    date: "Aug 18, 2026",
    img: "/assets/blog/top-10-python-development-companies-usa-2026.png",
  },
];
