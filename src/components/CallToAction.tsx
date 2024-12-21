'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';

interface ParticleProps {
  delay?: number;
}

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface CompanyIconProps {
  icon: string;
  x: number;
  y: number;
  delay: number;
  scale?: number;
}

const CompanyIcon = ({ icon, x, y, delay, scale = 1 }: CompanyIconProps) => (
  <motion.div
    className="absolute text-white/10 mix-blend-plus-lighter"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale
    }}
    transition={{
      duration: 1,
      delay,
      ease: "easeOut"
    }}
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <i className={`${icon} text-6xl`} />
  </motion.div>
);

const Particle = ({ delay = 0 }: ParticleProps) => {
  const randomX = Math.random() * 100 - 50;
  const randomScale = Math.random() * 0.5 + 0.5;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={{ opacity: 0, scale: 0, y: 0, x: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, randomScale, 0],
        y: [0, -100, -200],
        x: [0, randomX, randomX * 2],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );
};

const FloatingCard = ({ children, className = "", delay = 0 }: FloatingCardProps) => (
  <motion.div
    className={`relative ${className}`}
    animate={{
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const companyIcons = [
  { icon: 'ri-slack-fill', x: 15, y: 20, delay: 0, scale: 2 },
  { icon: 'ri-github-fill', x: 85, y: 30, delay: 1, scale: 2.5 },
  { icon: 'ri-cloud-fill', x: 25, y: 70, delay: 2, scale: 2 },
  { icon: 'ri-hub-fill', x: 75, y: 60, delay: 3, scale: 1.8 },
  { icon: 'ri-bank-card-fill', x: 45, y: 85, delay: 4, scale: 2.2 },
];

export default function CallToAction() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonControls = useAnimationControls();

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    buttonControls.start({
      transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
    });
  }, [mousePosition, buttonControls]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Company Icons */}
        {companyIcons.map((icon, index) => (
          <CompanyIcon key={index} {...icon} />
        ))}

        {/* Particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <Particle key={i} delay={i * 0.1} />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-sky-400/30 rounded-full blur-3xl animate-pulse" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff20 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff20 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* 3D Cards */}
            <div className="absolute -top-20 left-10 w-40 h-40">
              <FloatingCard className="bg-gradient-to-br from-indigo-500/20 to-transparent p-6 rounded-2xl backdrop-blur-sm ring-1 ring-white/10" delay={0}>
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-sm text-white/70">Active Users</div>
              </FloatingCard>
            </div>
            <div className="absolute -top-10 right-10 w-40 h-40">
              <FloatingCard className="bg-gradient-to-br from-sky-500/20 to-transparent p-6 rounded-2xl backdrop-blur-sm ring-1 ring-white/10" delay={0.5}>
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-sm text-white/70">Satisfaction</div>
              </FloatingCard>
            </div>

            {/* Main content */}
            <div className="text-center pt-32 pb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-sky-500/20 backdrop-blur-sm ring-1 ring-white/20 text-white mb-8"
              >
                <i className="ri-rocket-line text-sky-400" />
                <span className="text-sm font-medium">Ready for Launch 🚀</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400 animate-gradient bg-300% mb-4 block">
                  Transform Your
                </span>
                <span className="text-white relative">
                  Business Today
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-sky-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/70 mt-8 mb-12 max-w-2xl mx-auto"
              >
                Join the next generation of businesses revolutionizing their industry with our cutting-edge platform.
              </motion.p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="https://example.com/trial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary hover:bg-primary/90 text-white px-8 py-4"
                >
                  <span className="absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <i className="ri-arrow-right-line text-xl" />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    Start free trial
                  </span>
                  <span className="relative invisible">Start free trial</span>
                </Link>

                <Link
                  href="https://example.com/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg btn-secondary px-8 py-4"
                >
                  <span className="absolute flex items-center justify-center w-full h-full text-slate-700 duration-300 translate-x-full group-hover:translate-x-0 ease">
                    <i className="ri-play-circle-line text-xl" />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-slate-700 transition-all duration-300 transform group-hover:-translate-x-full ease">
                    Watch Demo
                  </span>
                  <span className="relative invisible">Watch Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}