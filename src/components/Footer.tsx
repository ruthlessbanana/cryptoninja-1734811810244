'use client';

import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Status', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Security', href: '#' },
  ],
  social: [
    { name: 'X', href: '#', icon: 'ri-twitter-x-line' },
    { name: 'LinkedIn', href: '#', icon: 'ri-linkedin-line' },
    { name: 'GitHub', href: '#', icon: 'ri-github-line' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Social */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <i className="ri-rocket-line text-primary text-2xl"></i>
              <span className="text-xl font-bold">StartupSaaS</span>
            </Link>
            <p className="mt-4 text-slate-600 max-w-sm">
              Empowering businesses with modern solutions for growth and success.
            </p>
            <div className="flex gap-4 mt-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-500"
                >
                  <i className={item.icon}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} StartupSaaS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}