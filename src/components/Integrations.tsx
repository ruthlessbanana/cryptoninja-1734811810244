'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';
import SectionTitle from './SectionTitle';

const integrations = [
  {
    name: 'Slack',
    description: 'Team communication and collaboration',
    icon: 'slack-line',
    category: 'Communication',
    color: 'text-[#E01E5A]',
    bgColor: 'bg-[#E01E5A]/10',
    hoverEffect: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }
  },
  {
    name: 'GitHub',
    description: 'Code hosting and version control',
    icon: 'github-fill',
    category: 'Development',
    color: 'text-[#2D333B]',
    bgColor: 'bg-[#2D333B]/10',
    hoverEffect: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }
  },
  {
    name: 'Salesforce',
    description: 'Customer relationship management',
    icon: 'cloud-line',
    category: 'Sales',
    color: 'text-[#00A1E0]',
    bgColor: 'bg-[#00A1E0]/10',
    hoverEffect: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }
  },
  {
    name: 'HubSpot',
    description: 'Marketing automation and CRM',
    icon: 'settings-line',
    category: 'Marketing',
    color: 'text-[#FF7A59]',
    bgColor: 'bg-[#FF7A59]/10',
    hoverEffect: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }
  },
  {
    name: 'Stripe',
    description: 'Payment processing and billing',
    icon: 'bank-card-line',
    category: 'Finance',
    color: 'text-[#635BFF]',
    bgColor: 'bg-[#635BFF]/10',
    hoverEffect: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const item = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  show: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5
    }
  }
};

const iconAnimation = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.5
    }
  },
  hover: { 
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export default function Integrations() {
  return (
    <section id="integrations" className="section">
      <div className="container">
        <SectionTitle
          title="Seamless Integrations"
          subtitle="Connect with your favorite tools and services. Our platform works with the tools you already use and love."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              variants={item}
              whileHover={integration.hoverEffect}
              className="card p-6 transition-shadow duration-300 hover:shadow-lg"
              style={{ transformOrigin: "center" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`w-12 h-12 rounded-lg ${integration.bgColor} flex items-center justify-center transform-gpu`}
                  >
                    <i className={`ri-${integration.icon} text-2xl ${integration.color}`}></i>
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-lg font-semibold"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {integration.name}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-slate-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {integration.category}
                    </motion.p>
                  </div>
                </div>
                <motion.p 
                  className="text-slate-600 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {integration.description}
                </motion.p>
                <motion.div 
                  className="mt-4 pt-4 border-t border-slate-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <Link 
                    href="https://example.com/integrations" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200"
                  >
                    Learn more
                    <motion.i 
                      className="ri-arrow-right-line"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}