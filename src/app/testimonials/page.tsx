import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/portfolio';

export default function Testimonials() {
  const published = testimonials.filter(t => t.published);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
            Testimonials
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight mb-4">
            What Our Clients Say
          </h1>
          <p className="text-gray-mid text-lg max-w-2xl">
            Real feedback from real businesses we've worked with.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {published.map(t => (
              <div key={t.id} className="bg-white rounded-2xl p-8 border border-gray-light card-hover">
                {t.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-coral fill-coral" />
                    ))}
                  </div>
                )}
                <blockquote className="text-ink leading-relaxed mb-6 text-lg italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-ink text-sm">{t.clientName}</div>
                    <div className="text-gray-mid text-xs mt-0.5">{t.industry}</div>
                  </div>
                  {t.relatedPortfolioId && (
                    <Link
                      href="/work"
                      className="text-indigo text-xs font-medium hover:underline"
                    >
                      View project →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Ready to become our next success story?
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your business and let's build something great together.
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
