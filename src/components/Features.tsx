'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import SectionTitle from './SectionTitle';

const features = [
  {
    name: 'Smart Automation',
    description: 'Automate repetitive tasks and workflows with AI-powered tools.',
    icon: 'robot-2-line',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Real-time Analytics',
    description: 'Get instant insights with powerful analytics and reporting.',
    icon: 'line-chart-line',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    name: 'Team Collaboration',
    description: 'Work seamlessly with your team in real-time.',
    icon: 'team-line',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Cloud Storage',
    description: 'Secure cloud storage with advanced file management.',
    icon: 'cloud-line',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50'
  },
  {
    name: 'API Integration',
    description: 'Connect with your favorite tools and services.',
    icon: 'code-line',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50'
  },
  {
    name: '24/7 Support',
    description: 'Get help anytime with our dedicated support team.',
    icon: 'customer-service-2-line',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <SectionTitle
          title="Everything you need to succeed"
          subtitle="Powerful features to help you manage, optimize, and scale your business effectively."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={item}
              className="card card-hover p-6"
            >
              <div className="flex flex-col">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`ri-${feature.icon} text-2xl ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.name}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}