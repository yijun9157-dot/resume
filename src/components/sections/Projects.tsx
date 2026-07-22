"use client";

import { motion } from "motion/react";
import HoloDivider from "@/components/effects/HoloDivider";

interface Project {
  name: string;
  role: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: "智舆通",
    role: "AI全栈独立开发",
    description: "12平台实时舆情采集 + DeepSeek 8维情绪分析 + LangGraph智能体决策 + Milvus向量RAG知识库。覆盖微博/抖音/B站/小红书/GitHub等，实现7个可视化仪表盘、85+条情感标注数据、10源全自动管道。",
    tech: ["FastAPI", "Vue3", "PostgreSQL", "Redis", "Docker", "LangGraph", "DeepSeek", "Milvus"],
  },
  {
    name: "风险交易监控系统",
    role: "全栈开发",
    description: "封装10+可复用ECharts图表组件，设计5张核心表优化索引使查询提速70%，WebSocket实现200+并发实时预警推送，仪表盘展示误差率低于0.1%。",
    tech: ["Python", "Vue3", "Vite", "Django", "MySQL", "ECharts", "WebSocket"],
  },
  {
    name: "股票融合模型预测",
    role: "算法与全栈",
    description: "构建CNN-LSTM-Attention混合模型，验证集MSE降低25%，测试MAE=0.018优于ARIMA基准(0.025)。SHAP量化特征重要性，滚动预测方向准确性达68%。",
    tech: ["Python", "Flask", "Vue3", "PyTorch", "CNN-LSTM", "SHAP"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gold-light mb-12 text-center">
            项目经历
          </h2>
        </motion.div>

        <HoloDivider />

        <div className="space-y-8 mt-10">
          {projects.map((project, pi) => (
            <motion.div
              key={project.name}
              className="group relative p-8 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pi * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* flowing border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(240,192,64,0.4), rgba(6,182,212,0.4), transparent)",
                  backgroundSize: "200% 100%",
                  animation: "borderFlow 3s linear infinite",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  padding: "1px",
                  WebkitMaskComposite: "xor",
                }}
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent">{project.name}</h3>
                  <span className="text-text-muted text-sm mt-1 block">{project.role}</span>
                </div>
              </div>

              <p className="text-text/80 leading-relaxed mb-5 max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full border border-gold-border bg-gold-border/20 text-gold/80"
                  >
                    {t}
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
