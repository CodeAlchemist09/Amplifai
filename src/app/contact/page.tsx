"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Send } from 'lucide-react';
import { testimonials } from '../data/portfolio';

const industries = [
  'Salon & Beauty',
  'Medical/Wellness',
  'Contractor & Home Services',
  'Furniture & Retail',
  'E-commerce',
  'Restaurant/Hospitality',
  'Other',
];

const budgetRanges = [
  'Under $500',
  '$500 – $1,500',
  '$1,500 – $5,000',
  '$5,000+',
  'Not sure yet',
];

const serviceOptions = [
  'Website',
  'Ad Creative',
  'Both / Full Bundle',
  'Not sure yet',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    country: '',
    industry: '',
    services: [] as string[],
    budget: '',
    message: '',
    consent: false,
  });

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Web3Forms Integration
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Add your Web3Forms access key here
          ...formData,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error("Form submission failed:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory px-4">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-indigo" />
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
            Got it — thank you!
          </h1>
          <p className="text-gray-mid text-lg leading-relaxed mb-8">
            We've received your project details and will get back to you within 24 hours with next steps. In the meantime, feel free to browse{' '}
            <Link href="/work" className="text-indigo font-medium">our work</Link> or learn more about{' '}
            <Link href="/about" className="text-indigo font-medium">how we work</Link>.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-indigo font-semibold"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo mb-4 block">
            Contact
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight mb-4 max-w-3xl">
            Let's talk about your business.
          </h1>
          <p className="text-gray-mid text-lg max-w-2xl">
            Tell us a bit about what you need — we reply within 24 hours with real next steps, not a generic sales pitch.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-16 sm:pb-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-light shadow-sm">
                <p className="text-gray-mid text-sm mb-8">
                  No spam, no obligation — just a real conversation about your project.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Business Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                        Your Name <span className="text-coral">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-light bg-ivory/50 text-ink placeholder-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-ink mb-1.5">
                        Business Name <span className="text-coral">*</span>
                      </label>
                      <input
                        id="business"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={e => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-light bg-ivory/50 text-ink placeholder-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors"
                        placeholder="Your Business"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                        Email <span className="text-coral">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-light bg-ivory/50 text-ink placeholder-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
                        Phone / WhatsApp <span className="text-gray-mid text-xs">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-light bg-ivory/50 text-ink placeholder-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Country + Industry */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-ink mb-1.5">
                        Country / Location <span className="text-coral">*</span>
                      </label>
                      <input
                        id="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={e => setFormData(prev => ({ ...prev, country: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-light bg-ivory/50 text-ink placeholder-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-ink mb-1.5">
                        Industry <span className="text-coral">*</span>
                      </label>
                      <select
                        id="industry"
                        required
                        value={formData.industry}
                        onChange={e => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-light bg-ivory/50 text-ink focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors"
                      >
                        <option value="">Select your industry</option>
                        {industries.map(ind => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium text-ink mb-3">
                      What are you interested in? <span className="text-coral">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {serviceOptions.map(service => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                            formData.services.includes(service)
                              ? 'bg-indigo text-white border-indigo'
                              : 'bg-ivory/50 text-gray-mid border-gray-light hover:border-indigo/30'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-ink mb-1.5">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-light bg-ivory/50 text-ink focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors"
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                      Tell us about your project <span className="text-coral">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-light bg-ivory/50 text-ink placeholder-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-indigo/30 focus:border-indigo transition-colors resize-none"
                      placeholder="What does your business do? What are you looking for? Any specific goals or deadlines?"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={e => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                      className="w-5 h-5 rounded border-gray-light text-indigo focus:ring-indigo/30 mt-0.5 shrink-0 accent-indigo"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-mid">
                      I agree to be contacted about my project. No spam — your information stays with us.{' '}
                      <Link href="/privacy" className="text-indigo">Privacy Policy</Link>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-coral text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-coral/90 transition-all shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Request My Free Quote
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Reassurance */}
              <div className="bg-white rounded-2xl p-6 border border-gray-light">
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-4">
                  What happens next?
                </h3>
                <ol className="space-y-4">
                  {[
                    'You tell us about your business and goals',
                    'We review and reply within 24 hours',
                    'We hop on a quick call (if needed) to understand your project',
                    'You get a custom quote — no pressure, no surprises',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-6 h-6 bg-indigo/10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-indigo">
                        {i + 1}
                      </span>
                      <span className="text-gray-mid text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Trust element */}
              <div className="bg-ink rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-lime fill-lime" />
                  ))}
                </div>
                <blockquote className="text-white/80 text-sm italic leading-relaxed mb-3">
                  "{testimonials[0]?.quote}"
                </blockquote>
                <div className="text-white/40 text-xs">{testimonials[0]?.clientName}</div>
              </div>

              {/* Microcopy */}
              <div className="bg-lime/10 rounded-2xl p-6 border border-lime/20">
                <p className="text-ink text-sm font-medium mb-1">⚡ We reply within 24 hours</p>
                <p className="text-gray-mid text-sm">
                  No spam, no obligation — just a real conversation about your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
