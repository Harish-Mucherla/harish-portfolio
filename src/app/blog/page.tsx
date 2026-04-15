import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Harish Mucherla",
  description: "Thoughts on full-stack development, React, Node.js, design systems, and engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-10 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back home
        </Link>

        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">Blog</h1>
        <p className="text-[var(--muted)] mb-12">
          Thoughts on full-stack development, UI engineering, and lessons from 9 years in the field.
        </p>

        {posts.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center text-[var(--muted)] text-sm">
            Posts coming soon.
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 glass-hover group block"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/20 text-[var(--accent)]"
                      >
                        <Tag size={8} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-1">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[var(--muted)] line-clamp-1">{post.excerpt}</p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1.5 flex-shrink-0">
                  <span className="text-[10px] font-mono text-[var(--muted)]">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-[var(--muted)]">
                    <Clock size={10} />
                    {post.readingTime}
                  </span>
                  <ArrowUpRight size={14} className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
