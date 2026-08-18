export interface BlogTocItem {
  id: string;
  label: string;
}

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogArticleMeta {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  toc: BlogTocItem[];
  aiSummary: string;
  faqs: BlogFaqItem[];
  companies: string[];
}
