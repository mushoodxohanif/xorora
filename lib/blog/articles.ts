import type { ComponentType } from "react";
import {
  TOP_10_PYTHON_META,
  TOP_10_PYTHON_SLUG,
  Top10PythonArticle,
} from "@/components/blog/posts/top-10-python-development-companies";
import type { BlogArticleMeta } from "./article-types";

export type {
  BlogArticleMeta,
  BlogFaqItem,
  BlogTocItem,
} from "./article-types";

export interface BlogArticleDefinition extends BlogArticleMeta {
  Article: ComponentType;
}

const BLOG_ARTICLES: Record<string, BlogArticleDefinition> = {
  [TOP_10_PYTHON_SLUG]: {
    ...TOP_10_PYTHON_META,
    Article: Top10PythonArticle,
  },
};

export function getBlogArticle(slug: string): BlogArticleDefinition | null {
  return BLOG_ARTICLES[slug] ?? null;
}
