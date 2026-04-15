"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const words = ["Crafting scalable,", "high-performance", "UI systems", "for modern", "web applications."];

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <AnimatePresence mode="wait">
      {/* ── Real hero content ── */}
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24"
          >
            <div className="max-w-xl">
              {/* Greeting tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[var(--accent)]/30 text-xs font-mono text-[var(--accent)] mb-6"
              >
                Available for new opportunities
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3 text-[var(--foreground)]"
              >
                {personalInfo.name.split(" ")[0]}{" "}
                <span className="gradient-text">
                  {personalInfo.name.split(" ")[1]}
                </span>
              </motion.h1>

              {/* Animated tagline words */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="text-2xl sm:text-3xl font-light text-[var(--muted)]"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-sm font-mono text-[var(--accent)] tracking-widest uppercase mb-8"
              >
                {personalInfo.tagline} · {personalInfo.yearsOfExperience}+ Years
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  View My Work
                  <ArrowDown size={15} />
                </a>

                <div className="flex items-center gap-3">
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/40 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </Link>
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/40 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
     
      </AnimatePresence>

      {/* Scroll indicator — only after intro */}
      <AnimatePresence>    
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)]"
          >
            <span className="text-xs font-mono tracking-widest">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </motion.div>
      </AnimatePresence>
    </section>
  );
}
