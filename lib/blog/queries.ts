import { and, asc, eq } from "drizzle-orm";
import { BLOG_POSTS } from "@/components/blog/blog-data";
import { db, hasDatabaseUrl } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import type { BlogPost } from "./types";

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function mapPost(row: typeof blogPosts.$inferSelect): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    cat: row.category,
    title: row.title,
    excerpt: row.excerpt,
    read: row.readTime,
    date: formatDate(row.publishedAt),
    img: row.image,
    featured: row.featured === 1,
    publishedAt: row.publishedAt,
    updatedAt: row.updatedAt,
  };
}

function mapSeedPost(post: (typeof BLOG_POSTS)[number]): BlogPost {
  const publishedAt = new Date(post.date);
  return {
    id: `seed-${post.slug}`,
    slug: post.slug,
    cat: post.cat,
    title: post.title,
    excerpt: post.excerpt,
    read: post.read,
    date: post.date,
    img: post.img,
    featured: Boolean(post.featured),
    publishedAt: Number.isNaN(publishedAt.getTime()) ? null : publishedAt,
    updatedAt: Number.isNaN(publishedAt.getTime()) ? new Date() : publishedAt,
  };
}

function seedPosts(): BlogPost[] {
  return BLOG_POSTS.map(mapSeedPost);
}

export async function listPublishedBlogPosts(): Promise<BlogPost[]> {
  if (!hasDatabaseUrl()) {
    return seedPosts();
  }

  const rows = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.status, "published"))
    .orderBy(asc(blogPosts.sortOrder));

  const fromDb = new Map(rows.map((row) => [row.slug, mapPost(row)]));
  const fromSeed = seedPosts();
  const listed = fromSeed.map((post) => fromDb.get(post.slug) ?? post);
  const extras = rows
    .map(mapPost)
    .filter((post) => !fromSeed.some((seed) => seed.slug === post.slug));
  return [...listed, ...extras];
}

export async function getPublishedBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  if (hasDatabaseUrl()) {
    const rows = await db
      .select()
      .from(blogPosts)
      .where(and(eq(blogPosts.slug, slug), eq(blogPosts.status, "published")))
      .limit(1);

    const row = rows[0];
    if (row) return mapPost(row);
  }

  return seedPosts().find((post) => post.slug === slug) ?? null;
}
