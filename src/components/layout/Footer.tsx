import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Harish Mucherla. Built with Next.js & ♥
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
