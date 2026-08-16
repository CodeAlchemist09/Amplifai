"use client";
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  Play,
  Layers,
  Sparkles,
  Zap,
  DollarSign,
  Palette,
  BarChart3,
  Star,
  ChevronLeft,
  ChevronRight,
  Scissors,
  HeartPulse,
  Hammer,
  Sofa,
  ShoppingBag,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const iconsMap: Record<string, any> = {
  Globe, Play, Layers, Zap, DollarSign, Palette, BarChart3,
  Scissors, HeartPulse, Hammer, Sofa, ShoppingBag
};

const industries = [
  { icon: Scissors, label: 'Salon & Beauty' },
  { icon: HeartPulse, label: 'Medical & Wellness' },
  { icon: Hammer, label: 'Contractors' },
  { icon: Sofa, label: 'Furniture & Retail' },
  { icon: ShoppingBag, label: 'E-commerce' },
];

export function HomeClient({ 
  homePageData, 
  servicesData, 
  portfolioData, 
  testimonialsData 
}: { 
  homePageData: any, 
  servicesData: any[], 
  portfolioData: any[], 
  testimonialsData: any[] 
}) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (!testimonialsData || testimonialsData.length === 0) return;
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonialsData]);

  if (!homePageData) return null;

  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center bg-ink overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute inset-0 grid-pattern" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-indigo/20 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-coral/10 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
          {/* Eyebrow */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-lime mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4" />
              {homePageData.heroEyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.05] tracking-tight mb-6 sm:mb-8 max-w-5xl animate-fade-in-up"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              animationDelay: '0.3s',
              animationFillMode: 'both',
            }}
          >
            {homePageData.heroHeadline}
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            {homePageData.heroSubheadline}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-coral text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-coral/90 transition-all duration-200 shadow-lg shadow-coral/30 hover:shadow-xl hover:shadow-coral/40 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-white/10 transition-all duration-200"
            >
              See Our Work
            </Link>
          </div>

          {/* Trust stats row */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
          >
            {homePageData.trustStats?.map((stat: any) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] text-white">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" />
        </div>
      </section>

      {/* ========== SOCIAL PROOF STRIP ========== */}
      <section className="py-12 sm:py-16 border-b border-gray-light bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-mid text-sm sm:text-base mb-8">
            Trusted by small businesses that compete with the big guys — without a big-agency budget.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {industries.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-mid/70">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
              What We Do
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
              Three ways we grow your business
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {servicesData?.map(card => {
              const Icon = iconsMap[card.icon] || Globe;
              return (
              <Link
                key={card.title}
                href="/services"
                className="group bg-white rounded-2xl p-8 lg:p-10 border border-gray-light card-hover"
              >
                <div className="w-12 h-12 bg-indigo/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-indigo" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-mid leading-relaxed mb-6 line-clamp-4">{card.body}</p>
                <span className="inline-flex items-center gap-1.5 text-indigo text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* ========== FEATURED WORK ========== */}
      <section className="py-20 sm:py-28 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
                Selected Work
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                Real businesses. Real builds.<br className="hidden sm:block" /> Real results.
              </h2>
              <p className="text-gray-mid mt-4 max-w-xl">
                A look at recent websites and ad campaigns we've built — with the strategy and results behind each one.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-indigo font-semibold text-sm hover:gap-3 transition-all shrink-0"
            >
              View All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioData?.slice(0, 6).map(item => (
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
                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-ink/80 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {item.industry}
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
                  {item.metrics && item.metrics[0] && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-[family-name:var(--font-display)] text-indigo">
                        {item.metrics[0].value}
                      </span>
                      <span className="text-gray-mid text-sm">{item.metrics[0].label}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
              How We Work
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
              From idea to launch, faster than you'd expect.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homePageData.processSteps?.map((item: any, i: number) => (
              <div key={item.step} className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gray-light to-transparent -translate-x-4 z-0" />
                )}
                <div className="relative z-10">
                  <div className="text-5xl font-bold font-[family-name:var(--font-display)] text-indigo/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-mid leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      {testimonialsData && testimonialsData.length > 0 && (
        <section className="py-20 sm:py-28 bg-ink relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime mb-4 block">
                What Clients Say
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Don't just take our word for it.
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative min-h-[200px]">
                {testimonialsData.map((t, i) => (
                  <div
                    key={t.id || i}
                    className={`transition-all duration-500 ${
                      i === currentTestimonial
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    {/* Stars */}
                    {t.rating && (
                      <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-5 h-5 text-lime fill-lime" />
                        ))}
                      </div>
                    )}
                    <blockquote className="text-xl sm:text-2xl text-white/90 leading-relaxed text-center font-light italic mb-8">
                      "{t.quote}"
                    </blockquote>
                    <div className="text-center">
                      <div className="text-white/60 text-sm font-medium">{t.clientName}</div>
                      <div className="text-white/30 text-xs mt-1">{t.industry}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-10">
                <button
                  onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {testimonialsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentTestimonial ? 'bg-lime scale-125' : 'bg-white/20'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
                <button
                  onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length)}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== WHY AMPLIFAI ========== */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
              Why Amplifai
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
              What makes us different
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {homePageData.whyUs?.map((item: any) => {
              const Icon = iconsMap[item.icon] || Zap;
              return (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-light card-hover">
                <div className="w-12 h-12 bg-lime/20 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-ink" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-mid leading-relaxed text-sm">{item.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 sm:py-28 bg-indigo relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Let's build something that actually grows your business.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your business — we'll reply within 24 hours with real ideas, not a generic sales pitch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-coral/90 transition-all shadow-lg shadow-coral/30 hover:shadow-xl hover:shadow-coral/40 hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
