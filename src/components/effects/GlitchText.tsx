"use client";

import { useEffect, useState } from "react";

interface GlitchTextProps {
  lines: string[];
}

export default function GlitchText({ lines }: GlitchTextProps) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150 + Math.random() * 200);
    };
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const delay = 2500 + Math.random() * 4000;
      timer = setTimeout(() => { trigger(); schedule(); }, delay);
    };
    schedule();
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
      {lines.map((line, li) => (
        <span key={li} className="block">
          <span className="relative inline-block">
            <span className={`block ${li === lines.length - 1 ? "text-gold-light" : "text-text"}`}>
              {line}
            </span>
            <span
              className={`absolute inset-0 block text-gold-light transition-opacity duration-75 ${glitch ? "opacity-70" : "opacity-0"}`}
              style={{ clipPath: glitch ? "inset(20% 0 40% 0)" : "inset(0)", transform: glitch ? "translate(-3px, -2px)" : "none" }}
              aria-hidden="true"
            >{line}</span>
            <span
              className={`absolute inset-0 block text-accent-glow transition-opacity duration-75 ${glitch ? "opacity-60" : "opacity-0"}`}
              style={{ clipPath: glitch ? "inset(50% 0 10% 0)" : "inset(0)", transform: glitch ? "translate(3px, 3px)" : "none" }}
              aria-hidden="true"
            >{line}</span>
          </span>
        </span>
      ))}
    </h1>
  );
}
