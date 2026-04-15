"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-[var(--accent)] text-sm">03.</span>
          <h2 className="text-3xl font-bold text-[var(--foreground)]">Projects</h2>
          <div className="flex-1 h-px bg-[var(--border)] ml-2" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-[var(--muted)] mb-12 ml-8"
        >
          All projects were built for enterprise clients — descriptions reflect scope and impact.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "glass rounded-2xl overflow-hidden glass-hover group relative flex flex-col",
                i === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Abstract gradient header */}
              <div
                className={cn(
                  "h-24 w-full bg-gradient-to-br relative overflow-hidden flex-shrink-0",
                  project.gradient
                )}
              >
                {/* Decorative blurred circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[var(--accent)]/20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-purple-500/15 blur-xl" />

                {/* Domain badge */}
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono text-white/60 bg-black/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {project.domain}
                  </span>
                </div>

                {/* Current badge */}
                {project.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono bg-[var(--accent)] text-white px-2 py-0.5 rounded-full">
                      {project.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-wider mb-1">
                    {project.client}
                  </p>
                  <h3 className="text-base font-semibold text-[var(--foreground)] leading-snug">
                    {project.name}
                  </h3>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent)]/20">
                  <span className="text-[var(--accent)] text-base mt-0.5">→</span>
                  <p className="text-xs text-[var(--foreground)] leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)] bg-[var(--card)] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
