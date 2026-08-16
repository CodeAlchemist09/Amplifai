"use client";
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  Play,
  Layers,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'How much does a website or ad creative cost?',
    a: 'It depends on the scope of your project, so we quote every job individually rather than using fixed packages. Most small business projects are priced to be significantly more affordable than a traditional agency — tell us about your business and we\'ll give you a real number within 24 hours.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most websites are built and ready to launch within 7 to 14 business days, and ad creatives typically turn around within 3–7 days, depending on scope and revisions. We\'ll give you an exact timeline once we understand your project.',
  },
  {
    q: 'Do you work with businesses outside your home country?',
    a: 'Yes — we work with SMBs internationally and are set up to collaborate fully remotely, including calls at time zones that work for you.',
  },
  {
    q: 'Can I see examples in my specific industry?',
    a: 'Likely, yes — check out our Work page, which is filterable by industry. If we don\'t have an example in your exact niche yet, we\'re happy to show comparable work and walk you through our approach.',
  },
  {
    q: "I'm not sure if I need a website, ad creative, or both — can you help me figure that out?",
    a: 'Absolutely — that\'s exactly what the first conversation is for. Tell us where your business is today and where you want it to go, and we\'ll recommend what will actually move the needle rather than upselling everything.',
  },
  {
    q: 'What makes Amplifai different from a freelancer or a big agency?',
    a: 'You get agency-level design thinking and AI-accelerated speed, without freelancer inconsistency or big-agency pricing and bureaucracy — one studio, directly accountable for the result.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-light">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-[family-name:var(--font-display)] font-medium text-ink text-base sm:text-lg">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-mid shrink-0 mt-1 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-mid leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

const services = [
  {
    icon: Globe,
    title: 'Websites Built to Convert, Not Just Look Nice',
    body: "Your website is often the first real impression a customer has of your business — and most small business websites lose that impression in the first five seconds. We design and build fast, mobile-first, conversion-focused websites using AI-accelerated workflows, refined by hand, so every page is built around one question: does this make someone want to book, call, or buy?",
    bestFor: [
      'Salons & med spas booking appointments',
      'Contractors generating quote requests',
      'Furniture & retail showrooms driving in-store visits',
      'E-commerce brands selling online',
    ],
    includes: [
      'Custom design (not a generic template)',
      'Mobile optimization',
      'Fast load times',
      'Clear calls-to-action',
      'Basic on-page SEO setup',
      'A site you can actually update',
    ],
    color: 'indigo',
  },
  {
    icon: Play,
    title: 'Ad Creative Built to Stop the Scroll',
    body: "Great targeting can't save a bad ad. We build video ad creative — educational explainers, UGC-style testimonial-style ads, and platform-native formats — designed and produced with AI, then refined for the hook, pacing, and call-to-action that actually earns a click.",
    bestFor: [
      'Businesses running (or planning to run) Meta or TikTok ad campaigns',
      'Brands that need fresh creative regularly without an in-house video team',
    ],
    includes: [
      'Concept & scripting',
      'AI-assisted production',
      'Platform-correct formatting (9:16 vertical, captions, hook-first structure)',
      'Revisions to get it right',
    ],
    color: 'coral',
  },
  {
    icon: Layers,
    title: 'Your Website and Your Ads, Built as One Brand',
    body: "Most businesses end up with a website from one freelancer and ads from another — and it shows. We build both together, so your site and your ad creative share the same visual language, message, and momentum from the first click to the final sale.",
    bestFor: [
      'Businesses launching or relaunching their online presence from scratch',
      'Brands that want consistency across every touchpoint',
    ],
    includes: [
      'Everything in Website + Ad Creative',
      'Unified brand direction',
      'Coordinated launch timeline',
      'Bundle pricing advantage',
    ],
    color: 'lime',
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
            Services
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight mb-4 max-w-3xl">
            What We Build
          </h1>
          <p className="text-gray-mid text-lg max-w-2xl">
            Two services. One consistent standard: work that makes your business look — and perform — like it belongs at the top of your industry.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-16 sm:py-24 ${i % 2 === 0 ? 'bg-ivory' : 'bg-gray-warm'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === 'indigo' ? 'bg-indigo/10' :
                  service.color === 'coral' ? 'bg-coral/10' :
                  'bg-lime/20'
                }`}>
                  <service.icon className={`w-7 h-7 ${
                    service.color === 'indigo' ? 'text-indigo' :
                    service.color === 'coral' ? 'text-coral' :
                    'text-ink'
                  }`} />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-mid text-lg leading-relaxed mb-8">{service.body}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-7 py-3.5 rounded-full hover:bg-coral/90 transition-all shadow-lg shadow-coral/20"
                >
                  Get a Custom Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-4 text-lg">
                    Best for:
                  </h3>
                  <ul className="space-y-3">
                    {service.bestFor.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo shrink-0 mt-0.5" />
                        <span className="text-gray-mid">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-4 text-lg">
                    What's typically included:
                  </h3>
                  <ul className="space-y-3">
                    {service.includes.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo rounded-full shrink-0 mt-2.5" />
                        <span className="text-gray-mid">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Common Questions
            </h2>
          </div>
          <div>
            {faqs.map(faq => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your business — we'll reply within 24 hours with a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-8 py-4 rounded-full hover:bg-coral/90 transition-all shadow-lg shadow-coral/30"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
