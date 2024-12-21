'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import SectionTitle from './SectionTitle';

const testimonials = [
  {
    content: "This platform has transformed how we work. The efficiency gains are remarkable.",
    author: "Sarah Johnson",
    role: "CEO at TechCorp",
    icon: "building-4-line",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    rating: 5
  },
  {
    content: "The best investment we've made for our team's productivity.",
    author: "Michael Chen",
    role: "CTO at StartupX",
    icon: "code-box-line",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    rating: 5
  },
  {
    content: "Outstanding support team and feature-rich platform. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Product Manager at Scale",
    icon: "rocket-2-line",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    rating: 5
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-slate-50/50">
      <div className="container">
        <SectionTitle
          title="Loved by thousands"
          subtitle="Don't just take our word for it. Here's what our customers have to say about their experience."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={item}
              className="card card-hover p-6"
            >
              <div className="flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="flex-grow">
                  <p className="text-slate-600 mb-6">
                    "{testimonial.content}"
                  </p>
                </blockquote>

                {/* Author with Animated Icon */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-full ${testimonial.iconBg} flex items-center justify-center`}
                  >
                    <i className={`ri-${testimonial.icon} text-2xl ${testimonial.iconColor}`}></i>
                  </motion.div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50"
                  >
                    <i className="ri-verified-badge-line text-primary"></i>
                    <span className="text-sm font-medium text-slate-600">Verified</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}