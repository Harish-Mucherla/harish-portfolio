"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const links = [
  {
    icon: FaGithub,
    label: "GitHub",
    sub: "github.com/harishmucherla",
    href: personalInfo.github,
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    sub: "linkedin.com/in/harishmucherla",
    href: personalInfo.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    sub: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section">
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
          <h2 className="text-3xl font-bold text-[var(--foreground)]">Contact</h2>
          <div className="flex-1 h-px bg-[var(--border)] ml-2" />
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4"
          >
            Let&apos;s work{" "}
            <span className="gradient-text">together.</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--muted)] mb-10 leading-relaxed"
          >
            I&apos;m currently open to new opportunities.
            Whether it&apos;s a full-time role, contract, or just a conversation —
            feel free to reach out.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-4">
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 flex flex-col items-center gap-3 glass-hover group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent)]/25 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform duration-200">
                    <link.icon size={20} />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-semibold text-[var(--foreground)]">
                      {link.label}
                      <ArrowUpRight size={13} className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[10px] text-[var(--muted)] mt-0.5 font-mono">
                      {link.sub}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
