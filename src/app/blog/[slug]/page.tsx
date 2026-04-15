import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "@/components/MDXRemote";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Harish Mucherla`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-10 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          All posts
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/20 text-[var(--accent)]"
            >
              <Tag size={8} />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted)] mb-10 pb-8 border-b border-[var(--border)]">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readingTime}
          </span>
        </div>

        {/* Content */}
        <article className="prose prose-sm prose-invert max-w-none prose-headings:text-[var(--foreground)] prose-p:text-[var(--muted)] prose-a:text-[var(--accent)] prose-code:text-[var(--accent)] prose-pre:bg-[var(--card)] prose-pre:border prose-pre:border-[var(--border)]">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </main>
  );
}
