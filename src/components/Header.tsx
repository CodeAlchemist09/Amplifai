"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { path: '/work', label: 'Work' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.usePathname() === '/';
  const showDark = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/90 backdrop-blur-xl shadow-sm border-b border-gray-light'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="relative z-10">
            <Logo color={showDark && !mobileOpen ? '#ffffff' : '#12111F'} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.usePathname() === link.path
                    ? showDark ? 'text-white' : 'text-indigo'
                    : showDark ? 'text-white/70 hover:text-white' : 'text-gray-mid hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
                isScrolled
                  ? 'bg-coral text-white hover:bg-coral/90 shadow-lg shadow-coral/20'
                  : 'bg-coral text-white hover:bg-coral/90'
              }`}
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-ink" />
            ) : (
              <Menu className={`w-6 h-6 ${showDark ? 'text-white' : 'text-ink'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-ivory z-40 pt-20">
          <nav className="flex flex-col items-center gap-6 p-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-xl font-medium font-[family-name:var(--font-display)] ${
                  location.usePathname() === link.path ? 'text-indigo' : 'text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 bg-coral text-white font-semibold px-8 py-3.5 rounded-full text-lg"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
