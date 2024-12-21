'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const DemoAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full max-w-3xl mx-auto h-80 mb-16"
    >
      {/* Dashboard Demo Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/80 backdrop-blur rounded-2xl shadow-lg border border-white/20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-4 h-4 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-3 w-32 bg-slate-200 rounded-full" />
          </div>
          <div className="flex gap-3">
            <div className="h-3 w-16 bg-slate-200 rounded-full" />
            <div className="h-3 w-16 bg-slate-200 rounded-full" />
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-6 grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-40 bg-slate-100 rounded-xl p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
            >
              <div className="h-full flex flex-col justify-center items-center">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                >
                  <i className={`ri-${['line-chart', 'user', 'stack'][i]}-line text-2xl text-primary`} />
                </motion.div>
                <div className="w-20 h-2 bg-slate-200 rounded-full" />
                <div className="w-16 h-2 bg-slate-200 rounded-full mt-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-flex items-center gap-3 bg-slate-50/95 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] border border-slate-200/60"
          >
            <div className="relative flex items-center justify-center w-6 h-6">
              <motion.div
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-primary/30"
              />
              <i className="ri-rocket-line text-primary text-base relative z-10"></i>
            </div>
            <span className="text-[13px] font-medium text-slate-600">Start your journey today</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative mb-12"
          >
            <span className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              Empower your business with{' '}
              <span className="relative inline-block bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent">
                modern solutions
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-500 origin-left"
                />
              </span>
            </span>
          </motion.h1>

          {/* Demo Animation */}
          <DemoAnimation />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-12"
          >
            Transform the way you work with our cutting-edge platform. Streamline operations,
            boost productivity, and drive growth with our innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="https://example.com/trial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4"
            >
              Start free trial
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
            <Link 
              href="https://example.com/demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4"
            >
              Book a demo
              <i className="ri-calendar-line ml-2"></i>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}