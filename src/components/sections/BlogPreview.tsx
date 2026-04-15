"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogPreviewProps {
  posts: Omit<BlogPost, "content">[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section id="blog" className="section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-[var(--accent)] text-sm">04.</span>
          <h2 className="text-3xl font-bold text-[var(--foreground)]">Blog</h2>
          <div className="flex-1 h-px bg-[var(--border)] ml-2" />
          <Link
            href="/blog"
            className="text-xs text-[var(--accent)] font-mono hover:underline flex items-center gap-1"
          >
            All posts <ArrowUpRight size={12} />
          </Link>
        </motion.div>

        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center text-[var(--muted)] text-sm"
          >
            Blog posts coming soon.
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass rounded-2xl p-6 flex flex-col h-full glass-hover group block"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
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
                  <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors flex-1">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-[10px] text-[var(--muted)] font-mono pt-3 border-t border-[var(--border)]">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readingTime}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
