import { Metadata } from 'next'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Analytics from '@/components/Analytics';
import Integrations from '@/components/Integrations';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'StartupSaaS - Transform Your Business with Modern Solutions',
  description: 'Empower your business with StartupSaaS. Our platform offers streamlined operations, enhanced productivity, and tools for sustainable growth.',
}

// Structured data for rich results
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'StartupSaaS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '29',
    priceCurrency: 'USD',
    priceValidUntil: '2024-12-31',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="relative">
        {/* Hero Section Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100/90 to-slate-50/80" />
          <div className="absolute -top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        {/* Features Section Background */}
        <div className="absolute top-[80vh] inset-x-0 h-screen -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/80" />
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </div>

        {/* Analytics Section Background */}
        <div className="absolute top-[160vh] inset-x-0 h-screen -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-100 to-white/90" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <Header />
        
        <main id="main-content">
          <Hero />
          
          <article>
            <Features />
            <Analytics />
            <Integrations />
            <Testimonials />
            <Pricing />
          </article>
          
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  )
}