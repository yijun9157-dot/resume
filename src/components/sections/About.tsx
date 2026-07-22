"use client";

import { motion } from "motion/react";
import SonarRings from "@/components/effects/SonarRings";
import HoloDivider from "@/components/effects/HoloDivider";
import NeuralNetwork from "@/components/effects/NeuralNetwork";

const highlights = [
  { label: "年龄", value: "23" },
  { label: "所在地", value: "浙江金华" },
  { label: "学历", value: "本科在读" },
  { label: "方向", value: "AI全栈开发" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <SonarRings />

      <div className="relative z-10 max-w-4xl mx-auto">
        <NeuralNetwork />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gold-light mb-12 text-center">
            关于我
          </h2>
        </motion.div>

        <HoloDivider />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center p-6 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-3xl font-bold text-accent mb-1">{item.value}</div>
              <div className="text-text-muted text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-text-muted text-center max-w-2xl mx-auto mt-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          温州商学院数据科学与大数据技术专业在读。
          热爱AI应用开发，从LangGraph智能体到全栈系统架构，追求用AI重新定义软件的可能性。
        </motion.p>
      </div>
    </section>
  );
}
