"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "typing" | "complete" | "revealed";

interface Token {
  text: string;
  color: string;
}

const LINES: Token[][] = [
  [
    { text: "interface ", color: "#818cf8" },
    { text: "Developer", color: "#e2e8f0" },
    { text: " {", color: "#94a3b8" },
  ],
  [
    { text: "  name", color: "#7dd3fc" },
    { text: ": ", color: "#94a3b8" },
    { text: '"Harish Mucherla"', color: "#86efac" },
    { text: ",", color: "#94a3b8" },
  ],
  [
    { text: "  role", color: "#7dd3fc" },
    { text: ": ", color: "#94a3b8" },
    { text: '"Senior Full-Stack Developer"', color: "#86efac" },
    { text: ",", color: "#94a3b8" },
  ],
  [
    { text: "  experience", color: "#7dd3fc" },
    { text: ": ", color: "#94a3b8" },
    { text: '"9+ years"', color: "#86efac" },
    { text: ",", color: "#94a3b8" },
  ],
  [
    { text: "  stack", color: "#7dd3fc" },
    { text: ": ", color: "#94a3b8" },
    { text: "[", color: "#94a3b8" },
    { text: '"React"', color: "#86efac" },
    { text: ", ", color: "#94a3b8" },
    { text: '"Node.js"', color: "#86efac" },
    { text: ", ", color: "#94a3b8" },
    { text: '"TypeScript"', color: "#86efac" },
    { text: "]", color: "#94a3b8" },
    { text: ",", color: "#94a3b8" },
  ],
  [
    { text: "  openTo", color: "#7dd3fc" },
    { text: ": ", color: "#94a3b8" },
    { text: '"New opportunities"', color: "#86efac" },
    { text: ",", color: "#94a3b8" },
  ],
  [
    { text: "}", color: "#94a3b8" },
  ],
];

const CHAR_SPEED = 18; // ms per character

function lineText(tokens: Token[]) {
  return tokens.map((t) => t.text).join("");
}

function renderPartialLine(tokens: Token[], visibleChars: number) {
  let remaining = visibleChars;
  return tokens.map((token, i) => {
    if (remaining <= 0) return null;
    const visible = token.text.slice(0, remaining);
    remaining -= token.text.length;
    return (
      <span key={i} style={{ color: token.color }}>
        {visible}
      </span>
    );
  });
}

interface Props {
  onDone: () => void;
}

export function HeroTypewriter({ onDone }: Props) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [cursorBlink, setCursorBlink] = useState(true);

  // Typing engine
  useEffect(() => {
    if (phase !== "typing") return;

    const lineLen = lineText(LINES[currentLine]).length;

    const timer = setInterval(() => {
      setCurrentChar((prev) => {
        if (prev < lineLen) {
          return prev + 1;
        } else {
          clearInterval(timer);
          // Move to next line after a short pause
          setTimeout(() => {
            if (currentLine < LINES.length - 1) {
              setCurrentLine((l) => l + 1);
              setCurrentChar(0);
            } else {
              setPhase("complete");
            }
          }, 120);
          return prev;
        }
      });
    }, CHAR_SPEED);

    return () => clearInterval(timer);
  }, [currentLine, phase]);

  // Blink cursor after complete
  useEffect(() => {
    if (phase !== "complete") return;
    const blink = setInterval(() => setCursorBlink((b) => !b), 500);
    const done = setTimeout(() => {
      clearInterval(blink);
      setPhase("revealed");
      setTimeout(onDone, 200);
    }, 500);
    return () => {
      clearInterval(blink);
      clearTimeout(done);
    };
  }, [phase, onDone]);

  return (
    <AnimatePresence>
      {phase !== "revealed" && (
        <motion.div
          key="typewriter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center min-h-screen w-full px-6"
        >
          <div className="glass rounded-2xl p-8 sm:p-10 w-full max-w-xl shadow-2xl shadow-indigo-500/10 border border-[var(--card-border)]">
            {/* Window chrome dots */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs font-mono text-[var(--muted)]">
                developer.ts
              </span>
            </div>

            {/* Line number + code */}
            <div className="font-mono text-sm sm:text-base leading-7 select-none">
              {LINES.map((tokens, lineIdx) => {
                const isCurrentLine = lineIdx === currentLine && phase === "typing";
                const isVisible = lineIdx < currentLine || phase === "complete";

                if (!isVisible && !isCurrentLine) return null;

                return (
                  <motion.div
                    key={lineIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-4"
                  >
                    {/* Line number */}
                    <span className="w-5 text-right text-[var(--muted)] opacity-40 flex-shrink-0 text-xs mt-0.5">
                      {lineIdx + 1}
                    </span>

                    {/* Code */}
                    <span>
                      {isVisible
                        ? tokens.map((token, i) => (
                            <span key={i} style={{ color: token.color }}>
                              {token.text}
                            </span>
                          ))
                        : renderPartialLine(tokens, currentChar)}

                      {/* Cursor on current line */}
                      {isCurrentLine && (
                        <span className="inline-block w-0.5 h-[1.1em] bg-[var(--accent)] align-middle ml-px animate-pulse" />
                      )}

                      {/* Blinking cursor at end after complete */}
                      {phase === "complete" && lineIdx === LINES.length - 1 && (
                        <span
                          className="inline-block w-0.5 h-[1.1em] bg-[var(--accent)] align-middle ml-px transition-opacity"
                          style={{ opacity: cursorBlink ? 1 : 0 }}
                        />
                      )}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
