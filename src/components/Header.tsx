'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Analytics', href: '#analytics' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <i className="ri-rocket-line text-primary text-2xl"></i>
            <span className="text-xl font-bold">StartupSaaS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="https://example.com/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              Sign in
            </Link>
            <Link 
              href="https://example.com/signup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-4 py-2"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg md:hidden"
            >
              <div className="container py-4">
                <div className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="border-slate-200 my-2" />
                  <Link 
                    href="https://example.com/signin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900"
                  >
                    Sign in
                  </Link>
                  <Link 
                    href="https://example.com/signup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 text-center"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}