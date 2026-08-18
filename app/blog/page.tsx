import type { Metadata } from "next";
import {
  BlogBody,
  BlogContact,
  BlogHeader,
  BlogNewsletter,
} from "@/components/blog";
import { listPublishedBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Xorora",
  description:
    "Engineering notes on software development, Python, and production AI from the Xorora team. Comparisons, practices, and lessons from the systems we build.",
  keywords: [
    "software development blog",
    "python development companies",
    "top python web development company",
  ],
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await listPublishedBlogPosts();

  return (
    <div className="bg-surface">
      <BlogHeader />
      <BlogBody posts={posts} />
      <BlogNewsletter />
      <BlogContact />
    </div>
  );
}
