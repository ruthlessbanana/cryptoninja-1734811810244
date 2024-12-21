'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-slate-600">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}