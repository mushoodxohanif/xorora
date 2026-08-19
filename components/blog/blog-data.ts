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
    slug: "top-nodejs-development-companies-2026",
    cat: "Software Development",
    title: "Top Node.js Development Companies (2026)",
    excerpt:
      "A vetted shortlist of the top Node.js development companies for 2026 — evaluated on production track record, architecture depth, and full-stack ownership.",
    read: "12 min",
    date: "Aug 19, 2026",
    img: "/assets/blog/top-nodejs-development-companies-2026.png",
    featured: true,
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
