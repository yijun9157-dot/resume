"use client";

import { motion } from "motion/react";
import HoloDivider from "@/components/effects/HoloDivider";
import { GithubLogo, EnvelopeSimple, WechatLogo } from "@phosphor-icons/react";
import { useState } from "react";

export default function Contact() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gold-light mb-6">
            联系我
          </h2>
        </motion.div>

        <HoloDivider />

        <motion.p
          className="text-text-muted mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          期待与您交流，共同探索AI技术的无限可能
        </motion.p>

        <div className="flex items-center justify-center gap-8">
          <motion.a
            href="https://github.com/yijun9157-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="w-14 h-14 rounded-2xl border border-border bg-surface flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
              <GithubLogo size={24} weight="duotone" />
            </div>
            <span className="text-xs">GitHub</span>
          </motion.a>

          <motion.a
            href="mailto:15258060106@163.com"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="w-14 h-14 rounded-2xl border border-border bg-surface flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
              <EnvelopeSimple size={24} weight="duotone" />
            </div>
            <span className="text-xs">Email</span>
          </motion.a>

          <motion.button
            onClick={() => setShowQR(!showQR)}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="w-14 h-14 rounded-2xl border border-border bg-surface flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
              <WechatLogo size={24} weight="duotone" />
            </div>
            <span className="text-xs">微信</span>
          </motion.button>
        </div>

        {showQR && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              className="bg-surface border border-border rounded-3xl p-10 max-w-[90vw]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-gold-light text-lg font-bold mb-4">微信扫码联系</p>
              <div className="w-72 h-72 border border-border rounded-2xl flex items-center justify-center text-text-muted text-sm">
                [二维码]
              </div>
              <p className="text-text-muted text-xs mt-3">请将微信二维码放在 public/qrcode.jpg</p>
            </motion.div>
          </motion.div>
        )}

        <motion.p
          className="text-text-muted/50 text-xs mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Built with Next.js + Tailwind CSS + Motion + GSAP · Deployed on GitHub Pages
        </motion.p>
      </div>
    </section>
  );
}
