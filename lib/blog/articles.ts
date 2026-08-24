import type { ComponentType } from "react";
import {
  NET_VS_JAVA_META,
  NET_VS_JAVA_SLUG,
  NetVsJavaArticle,
} from "@/components/blog/posts/net-vs-java-comparison";
import {
  TOP_5_LARAVEL_META,
  TOP_5_LARAVEL_SLUG,
  Top5LaravelArticle,
} from "@/components/blog/posts/top-5-laravel-development-companies";
import {
  TOP_10_PYTHON_META,
  TOP_10_PYTHON_SLUG,
  Top10PythonArticle,
} from "@/components/blog/posts/top-10-python-development-companies";
import {
  TOP_NODEJS_META,
  TOP_NODEJS_SLUG,
  TopNodejsArticle,
} from "@/components/blog/posts/top-nodejs-development-companies";
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
  [NET_VS_JAVA_SLUG]: {
    ...NET_VS_JAVA_META,
    Article: NetVsJavaArticle,
  },
  [TOP_5_LARAVEL_SLUG]: {
    ...TOP_5_LARAVEL_META,
    Article: Top5LaravelArticle,
  },
  [TOP_NODEJS_SLUG]: {
    ...TOP_NODEJS_META,
    Article: TopNodejsArticle,
  },
  [TOP_10_PYTHON_SLUG]: {
    ...TOP_10_PYTHON_META,
    Article: Top10PythonArticle,
  },
};

export function getBlogArticle(slug: string): BlogArticleDefinition | null {
  return BLOG_ARTICLES[slug] ?? null;
}
