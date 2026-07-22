"use client";

import { motion } from "motion/react";
import HoloDivider from "@/components/effects/HoloDivider";

interface SkillGroup {
  title: string;
  color: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "AI & Agent",
    color: "accent",
    items: ["Claude Code", "Hermes Agent", "LangGraph", "RAG 知识库", "Prompt Engineering", "DeepSeek API"],
  },
  {
    title: "后端开发",
    color: "gold-light",
    items: ["Python", "FastAPI", "Django", "Docker Compose", "PostgreSQL", "Redis", "Milvus 向量库"],
  },
  {
    title: "前端 & 工具",
    color: "coral",
    items: ["Vue3", "TypeScript", "Vite", "ECharts", "GSAP 动画", "Tailwind CSS", "Next.js", "Three.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gold-light mb-12 text-center">
            技术能力
          </h2>
        </motion.div>

        <HoloDivider />

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              className="group relative p-8 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm hover:bg-surface/70 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(6,182,212,0.06), transparent 50%)`,
                }}
                ref={(el) => {
                  if (!el) return;
                  const onMove = (e: MouseEvent) => {
                    const r = el.getBoundingClientRect();
                    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    el.style.setProperty("--my", `${e.clientY - r.top}px`);
                  };
                  el.addEventListener("mousemove", onMove);
                }}
              />
              <h3 className={`text-xl font-bold mb-6 text-${group.color}`}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-full border border-border bg-surface-hover text-text/80 hover:border-accent/30 hover:text-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
