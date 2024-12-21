'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';
import SectionTitle from './SectionTitle';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    price: {
      monthly: 29,
      annual: 290
    },
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
      'API access'
    ],
    cta: 'Start free trial',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Best for growing businesses',
    price: {
      monthly: 99,
      annual: 990
    },
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team training'
    ],
    cta: 'Start free trial',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: {
      monthly: 299,
      annual: 2990
    },
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'API access',
      'Custom integrations',
      'Team training',
      'Custom deployment',
      'SLA guarantee'
    ],
    cta: 'Contact sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionTitle
          title="Simple, transparent pricing"
          subtitle="Choose the perfect plan for your team. All plans include a 14-day free trial."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`card card-hover p-8 relative ${
                plan.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-8">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">
                    <i className="ri-star-line"></i>
                    Most Popular
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      ${plan.price.monthly}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    ${plan.price.annual}/year (save 17%)
                  </div>
                </div>

                <Link 
                  href="https://example.com/trial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full mb-8 ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  } py-3 block text-center`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <i className="ri-check-line text-green-500"></i>
                      <span className="text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600">
            Need a custom plan? {' '}
            <Link 
              href="https://example.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark font-medium"
            >
              Contact our sales team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}