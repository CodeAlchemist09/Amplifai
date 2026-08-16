"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';

type FilterType = 'all' | 'website' | 'ad_creative';

const typeFilters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'website', label: 'Websites' },
  { value: 'ad_creative', label: 'Ad Creatives' },
];

const allIndustries = [
  'Salon & Beauty',
  'Medical/Wellness',
  'Contractor & Home Services',
  'Furniture & Retail',
  'E-commerce',
  'Restaurant/Hospitality',
];

export function WorkClient({ publishedItems }: { publishedItems: any[] }) {
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const [industryFilter, setIndustryFilter] = useState<string>('all');

  const filteredItems = useMemo(() => {
    return publishedItems
      .filter(item => typeFilter === 'all' || item.type === typeFilter)
      .filter(item => industryFilter === 'all' || item.industry === industryFilter)
      .sort((a, b) => a.order - b.order);
  }, [typeFilter, industryFilter, publishedItems]);

  const usedIndustries = useMemo(() => {
    const set = new Set(publishedItems.map(i => i.industry));
    return allIndustries.filter(i => set.has(i));
  }, [publishedItems]);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
            Portfolio
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight mb-4">
            Our Work
          </h1>
          <p className="text-gray-mid text-lg max-w-2xl">
            Browse real website builds and ad creative campaigns we've produced for small businesses across multiple industries.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 sm:top-20 z-30 bg-ivory/90 backdrop-blur-xl border-b border-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Type filter */}
            <div className="flex gap-2">
              {typeFilters.map(f => (
                <button
                  key={f.value}
                  onClick={() => setTypeFilter(f.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    typeFilter === f.value
                      ? 'bg-ink text-white'
                      : 'bg-white text-gray-mid border border-gray-light hover:border-ink/20'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Industry filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setIndustryFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  industryFilter === 'all'
                    ? 'bg-indigo text-white'
                    : 'bg-white text-gray-mid border border-gray-light hover:border-indigo/30'
                }`}
              >
                All Industries
              </button>
              {usedIndustries.map(ind => (
                <button
                  key={ind}
                  onClick={() => setIndustryFilter(ind)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    industryFilter === ind
                      ? 'bg-indigo text-white'
                      : 'bg-white text-gray-mid border border-gray-light hover:border-indigo/30'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-mid text-lg">No projects match the current filters.</p>
              <button
                onClick={() => { setTypeFilter('all'); setIndustryFilter('all'); }}
                className="mt-4 text-indigo font-medium text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className={`grid gap-6 lg:gap-8 ${
              filteredItems.length <= 3
                ? 'sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
                : 'sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {filteredItems.map(item => (
                <Link
                  key={item.id}
                  href={`/work/${item.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-light card-hover"
                >
                  <div className={`relative overflow-hidden ${item.type === 'ad_creative' ? 'aspect-[9/12]' : 'aspect-[4/3]'}`}>
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {item.type === 'ad_creative' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-ink/20 group-hover:bg-ink/30 transition-colors">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-ink ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      <span className="bg-ink/80 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {item.industry}
                      </span>
                      <span className="bg-white/80 text-ink text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {item.country}
                      </span>
                      {item.platform && (
                        <span className="bg-indigo/80 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                          {item.platform}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-2 group-hover:text-indigo transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-mid text-sm mb-3 line-clamp-2">{item.challenge}</p>
                    {item.metrics && item.metrics[0] && (
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold font-[family-name:var(--font-display)] text-indigo">
                          {item.metrics[0].value}
                        </span>
                        <span className="text-gray-mid text-xs">{item.metrics[0].label}</span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {filteredItems.length > 0 && filteredItems.length < 6 && (
            <p className="text-center text-gray-mid text-sm mt-12 italic">
              More work added regularly — check back soon or{' '}
              <Link href="/contact" className="text-indigo font-medium not-italic">get in touch</Link>{' '}
              to see industry-specific examples.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Want something like this for your business?
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your project and we'll reply within 24 hours with a custom quote.
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
