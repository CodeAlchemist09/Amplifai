import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo color="#ffffff" className="mb-4" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Boutique AI studio building high-converting websites and ad creatives for small businesses worldwide.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Pages</h4>
            <ul className="space-y-3">
              {[
                { to: '/work', label: 'Our Work' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/testimonials', label: 'Testimonials' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link href={link.to} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'Website Design & Build',
                'Ad Creative Production',
                'Full AI Solution Bundle',
              ].map(service => (
                <li key={service}>
                  <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Get in Touch</h4>
            <p className="text-white/60 text-sm mb-4">
              Ready to start? We reply within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-coral text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-coral/90 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Amplifai. All rights reserved.
          </p>
          <p className="text-white/30 text-xs italic">
            Built with AI. Crafted by humans.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
