import { and, asc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
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

export async function listPublishedBlogPosts(): Promise<BlogPost[]> {
  const rows = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.status, "published"))
    .orderBy(asc(blogPosts.sortOrder));

  return rows.map(mapPost);
}

export async function getPublishedBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const rows = await db
    .select()
    .from(blogPosts)
    .where(and(eq(blogPosts.slug, slug), eq(blogPosts.status, "published")))
    .limit(1);

  const row = rows[0];
  return row ? mapPost(row) : null;
}
