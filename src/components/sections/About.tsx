"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { personalInfo, timeline } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-[var(--accent)] text-sm">01.</span>
          <h2 className="text-3xl font-bold text-[var(--foreground)]">About</h2>
          <div className="flex-1 h-px bg-[var(--border)] ml-2" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 glass-hover"
          >
            {/* Avatar placeholder — initials */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 shadow-lg shadow-indigo-500/25">
                HM
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--foreground)]">
                  {personalInfo.name}
                </h3>
                <p className="text-sm text-[var(--accent)] font-mono">
                  {personalInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-[var(--muted)] leading-relaxed text-sm mb-6">
              {personalInfo.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { value: "9+", label: "Years Exp." },
                { value: "5+", label: "Clients" },
                { value: "2", label: "Industries" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent)]/20"
                >
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-[var(--muted)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]">
                <Code2 size={12} className="text-[var(--accent)]" />
                Full-Stack
              </span>
            </div>
          </motion.div>

          {/* Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest mb-6"
            >
              Career Timeline
            </motion.h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-5 pl-6 relative"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] flex-shrink-0" />

                    <div className="flex-1 pb-2">
                      <p className="font-mono text-xs text-[var(--accent)] mb-0.5">
                        {item.period}
                      </p>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {item.role}
                      </p>
                      <p className="text-xs text-[var(--muted)]">{item.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
