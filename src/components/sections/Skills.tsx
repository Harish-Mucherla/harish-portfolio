"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-[var(--accent)] text-sm">02.</span>
          <h2 className="text-3xl font-bold text-[var(--foreground)]">Skills</h2>
          <div className="flex-1 h-px bg-[var(--border)] ml-2" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <h3 className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-4">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.07 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="inline-block px-3 py-1 text-xs rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/20 text-[var(--foreground)] font-medium cursor-default transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
