"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { List } from "@phosphor-icons/react";

const links = [
  { href: "#about", label: "关于" },
  { href: "#skills", label: "技术" },
  { href: "#projects", label: "项目" },
  { href: "#contact", label: "联系" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-bg/70 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" className="text-accent font-bold text-lg tracking-tight">
          HYJ<span className="text-text-muted font-normal">.dev</span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden p-2 text-text-muted hover:text-accent"
          onClick={() => setOpen(!open)}
        >
          <List size={20} weight="bold" />
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-bg/95 backdrop-blur-lg overflow-hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-sm text-text-muted hover:text-accent hover:bg-surface/50 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
