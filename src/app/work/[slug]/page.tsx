"use client";
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Play } from 'lucide-react';
import { publishedItems } from '@/data/portfolio';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const item = publishedItems.find(i => i.slug === slug);

  if (!item) {
    return notFound();
  }

  const displayName = item.clientNameVisible && item.clientName
    ? item.clientName
    : `${item.industry} — ${item.country}`;

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime mb-4 block">
                {item.type === 'website' ? 'Website Project' : 'Ad Creative'}
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                {item.title}
              </h1>
              <p className="text-white/50 text-lg">{displayName}</p>

              {/* Quick facts */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
                  <div className="text-white/40 text-xs uppercase tracking-wider">Industry</div>
                  <div className="text-white text-sm font-medium">{item.industry}</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
                  <div className="text-white/40 text-xs uppercase tracking-wider">Country</div>
                  <div className="text-white text-sm font-medium">{item.country}</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
                  <div className="text-white/40 text-xs uppercase tracking-wider">Services</div>
                  <div className="text-white text-sm font-medium">{item.serviceType.join(', ')}</div>
                </div>
                {item.platform && (
                  <div className="bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
                    <div className="text-white/40 text-xs uppercase tracking-wider">Platform</div>
                    <div className="text-white text-sm font-medium">{item.platform}</div>
                  </div>
                )}
                {item.format && (
                  <div className="bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
                    <div className="text-white/40 text-xs uppercase tracking-wider">Format</div>
                    <div className="text-white text-sm font-medium">{item.format}</div>
                  </div>
                )}
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-indigo text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-indigo/80 transition-colors"
                  >
                    View Live <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Metrics cards */}
            {item.metrics.length > 0 && (
              <div className="flex flex-row lg:flex-col gap-4 shrink-0">
                {item.metrics.map((metric, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm text-center min-w-[120px]">
                    <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] text-lime mb-1">
                      {metric.value}
                    </div>
                    <div className="text-white/50 text-xs">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image / Video */}
      <section className="bg-gray-warm py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {item.type === 'ad_creative' && item.videoUrl ? (
            <div className="max-w-sm mx-auto">
              {/* Phone frame for vertical video */}
              <div className="bg-ink rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-gray-mid/30 rounded-[2rem] overflow-hidden aspect-[9/16] flex items-center justify-center relative">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-ink ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-light">
              <img
                src={item.coverImage}
                alt={item.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Challenge */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink mb-4">
              {item.type === 'ad_creative' ? 'The Brief' : 'The Challenge'}
            </h2>
            <p className="text-gray-mid leading-relaxed text-lg">{item.challenge}</p>
          </div>

          {/* The Approach */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink mb-4">
              {item.type === 'ad_creative' ? 'The Creative Approach' : 'The Approach'}
            </h2>
            <p className="text-gray-mid leading-relaxed text-lg">{item.approach}</p>
          </div>

          {/* The Result */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink mb-4">
              The Result
            </h2>
            <p className="text-gray-mid leading-relaxed text-lg mb-6">{item.result}</p>
            
            {item.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {item.metrics.map((metric, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-light text-center">
                    <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] text-indigo mb-1">
                      {metric.value}
                    </div>
                    <div className="text-gray-mid text-xs">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gallery */}
          {item.gallery.length > 0 && item.type === 'website' && (
            <div className="mb-12">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink mb-6">
                Gallery
              </h2>
              <div className="space-y-6">
                {item.gallery.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-gray-light">
                    <img src={img} alt={`${item.title} screenshot ${i + 1}`} className="w-full h-auto" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-indigo relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-coral/20 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Interested in something similar?
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your project — we'd love to help your business look this good online.
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
