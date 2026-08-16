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

const iconsMap: Record<string, any> = {
  Globe, Play, Layers
};

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

export function ServicesClient({ servicesData, faqsData }: { servicesData: any[], faqsData: any[] }) {
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
      {servicesData?.map((service, i) => {
        const Icon = iconsMap[service.icon] || Globe;
        return (
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
                  <Icon className={`w-7 h-7 ${
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
                {service.bestFor && service.bestFor.length > 0 && (
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-4 text-lg">
                      Best for:
                    </h3>
                    <ul className="space-y-3">
                      {service.bestFor.map((item: string) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo shrink-0 mt-0.5" />
                          <span className="text-gray-mid">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.includes && service.includes.length > 0 && (
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-4 text-lg">
                      What's typically included:
                    </h3>
                    <ul className="space-y-3">
                      {service.includes.map((item: string) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-indigo rounded-full shrink-0 mt-2.5" />
                          <span className="text-gray-mid">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )})}

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
            {faqsData?.map(faq => (
              <FAQItem key={faq.question} q={faq.question} a={faq.answer} />
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
