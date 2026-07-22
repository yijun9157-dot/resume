"use client";

import { motion } from "motion/react";
import GlitchText from "@/components/effects/GlitchText";
import ParticleBackground from "@/components/effects/ParticleBackground";
import GeometricHero from "@/components/effects/GeometricHero";
import { ArrowDown } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <GeometricHero />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-accent mb-6 block">
            AI Full-Stack Developer
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlitchText lines={["He Yijun", "何奕君"]} />
        </motion.div>

        <motion.p
          className="text-text-muted text-lg md:text-xl mt-6 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          23岁 · 浙江金华 · AI全栈应用开发
          <br />
          温州商学院 · 数据科学与大数据技术
        </motion.p>

        <motion.p
          className="text-text-muted/70 text-sm mt-4 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Claude Code · Hermes Agent · LangGraph · RAG · FastAPI · Vue3 · Docker
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 rounded-full text-accent hover:bg-accent/10 transition-colors text-sm"
          >
            了解更多
            <ArrowDown size={16} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
