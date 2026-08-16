import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Zap, Target } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime mb-4 block">
            About
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl">
            We started Amplifai because small businesses deserved better options.
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            A boutique AI studio on a mission to close the gap between what small businesses need and what they can actually afford.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-mid text-lg leading-[1.8] mb-6">
              Small businesses — salons, med spas, contractors, furniture showrooms, local e-commerce brands — have always been stuck choosing between two bad options: cheap freelancers delivering generic, forgettable work, or traditional agencies charging enterprise prices for a website and a handful of ad creatives.
            </p>
            <p className="text-gray-mid text-lg leading-[1.8] mb-6">
              At the same time, AI tools were making it possible to design and build faster and better than ever — but almost exclusively in the hands of people charging <em>more</em> for it, not less.
            </p>
            <p className="text-ink text-xl leading-[1.8] font-medium mb-6">
              Amplifai exists to close that gap.
            </p>
            <p className="text-gray-mid text-lg leading-[1.8]">
              We combine senior-level design and marketing judgment with AI-accelerated production, so a local business — not just a funded startup — can get a website and ad creative that actually look and perform like they belong at the top of their industry. No bloated retainers. No generic templates. Just work built specifically for your business, priced fairly, and delivered fast.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              What drives us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'AI as a tool, not a gimmick',
                desc: 'We use AI to move faster and work smarter — not as a marketing buzzword. Every AI-assisted decision is reviewed and refined by a human with real design judgment.',
              },
              {
                icon: Users,
                title: 'Built for real businesses',
                desc: 'Our clients are salon owners, contractors, and shop managers — not VC-funded startups. We speak their language and build for their reality.',
              },
              {
                icon: Zap,
                title: 'Speed without shortcuts',
                desc: 'AI lets us deliver in days what used to take months. But speed never means cutting corners — every project is finished to a standard we\'re proud of.',
              },
              {
                icon: Target,
                title: 'Outcomes over aesthetics',
                desc: 'Beautiful design matters — but only because it drives results. Every page and every ad is built with a specific business outcome in mind.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-light">
                <div className="w-12 h-12 bg-indigo/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-indigo" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-mid leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
              Our Process
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              From idea to launch, step by step.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'We start with a conversation — not a questionnaire. We learn about your business, your customers, your competition, and what success looks like for you. This isn\'t a formality; it shapes every decision that follows.',
              },
              {
                step: '02',
                title: 'Design & Build',
                desc: 'Using AI-accelerated workflows, we design and build your website or ad creative significantly faster than a traditional process — but with a real designer reviewing and refining every decision. Nothing goes live half-baked.',
              },
              {
                step: '03',
                title: 'Launch',
                desc: 'Your website goes live, or your ad creative ships ready to run. Everything is tested across devices, optimized for speed, and prepared for the platforms it needs to perform on.',
              },
              {
                step: '04',
                title: 'Grow',
                desc: 'We don\'t disappear after launch. We check in on results, share what we\'re seeing, and help you decide what to build, test, or improve next. Your success is how we grow too.',
              },
            ].map(item => (
              <div key={item.step} className="flex gap-6 sm:gap-8">
                <div className="text-4xl font-bold font-[family-name:var(--font-display)] text-indigo/15 shrink-0 w-16 text-right">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-mid leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 sm:py-24 bg-gray-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-light">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-indigo/10 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-3xl font-bold font-[family-name:var(--font-display)] text-indigo">A</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mb-1">
                  From the Founder
                </h3>
                <p className="text-indigo text-sm font-medium mb-4">Founder, Amplifai</p>
                <p className="text-gray-mid leading-relaxed">
                  I started Amplifai after seeing how many great small businesses were being underserved online: either ignored by agencies that only wanted enterprise clients, or let down by rushed, generic freelance work. I build every project personally, using AI to move fast without cutting corners on design or strategy. If you're a small business owner who wants your online presence to actually reflect the quality of what you do — that's exactly who I built this studio for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-indigo relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-coral/20 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Let's build something great together.
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your business — we'll reply within 24 hours.
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
