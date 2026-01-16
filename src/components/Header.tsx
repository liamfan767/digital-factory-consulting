'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Header({ locale, onLocaleChange }: HeaderProps) {
  const t = getTranslation(locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const servicesMenu = [
    { label: t.nav.digitalization, href: '#digitalization' },
    { label: t.nav.supplyChain, href: '#supply-chain' },
    { label: t.nav.productionPlanning, href: '#production-planning' },
    { label: t.nav.factoryPlanning, href: '#factory-planning' },
    { label: t.nav.operationalExcellence, href: '#operational-excellence' },
  ];

  const companyMenu = [
    { label: t.nav.companyValues, href: '#values' },
    { label: t.nav.ourMotivation, href: '#motivation' },
    { label: t.nav.career, href: '#career' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/logo.png"
              alt="digifactory logo"
              width={180}
              height={48}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation - All Main Menu Items Visible on Right */}
          <div className="hidden md:flex items-center gap-5">
            {/* Leistungen / Services with Dropdown */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-gray-700 hover:text-[hsl(var(--primary))] transition-colors font-medium h-full px-1 text-sm"
              >
                {t.nav.services}
                <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-0 w-80 bg-white border-t-2 border-t-[hsl(var(--primary))] shadow-xl overflow-hidden transition-all duration-200 ${
                activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}>
                {servicesMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-6 py-3.5 text-sm text-gray-700 hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))] transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Unternehmen / Company with Dropdown */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-gray-700 hover:text-[hsl(var(--primary))] transition-colors font-medium h-full px-1 text-sm"
              >
                {t.nav.about}
                <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-0 w-64 bg-white border-t-2 border-t-[hsl(var(--primary))] shadow-xl overflow-hidden transition-all duration-200 ${
                activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}>
                {companyMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-6 py-3.5 text-sm text-gray-700 hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))] transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Referenzen - Regular Link */}
            <Link
              href="#references"
              className="text-gray-700 hover:text-[hsl(var(--primary))] transition-colors font-medium px-1 text-sm"
            >
              {t.nav.references}
            </Link>

            {/* Insights - Regular Link */}
            <Link
              href="#insights"
              className="text-gray-700 hover:text-[hsl(var(--primary))] transition-colors font-medium px-1 text-sm"
            >
              {t.nav.insights}
            </Link>

            {/* Contact Button */}
            <Link
              href="#contact"
              className="bg-[hsl(var(--accent))] text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
            >
              {t.nav.contact}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm font-medium">
              <button
                type="button"
                onClick={() => onLocaleChange('de')}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'de'
                    ? 'text-[hsl(var(--primary))] font-bold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                DE
              </button>
              <span className="text-gray-300">|</span>
              <button
                type="button"
                onClick={() => onLocaleChange('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'en'
                    ? 'text-[hsl(var(--primary))] font-bold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-[hsl(var(--primary))] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              {/* Services Mobile */}
              <div>
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'services-mobile' ? null : 'services-mobile')}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
                >
                  {t.nav.services}
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'services-mobile' && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    {servicesMenu.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-[hsl(var(--primary))] py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Mobile */}
              <div>
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'company-mobile' ? null : 'company-mobile')}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
                >
                  {t.nav.about}
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'company-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'company-mobile' && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    {companyMenu.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-[hsl(var(--primary))] py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="#references"
                className="text-gray-700 hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.references}
              </Link>
              <Link
                href="#insights"
                className="text-gray-700 hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.insights}
              </Link>
              <Link
                href="#contact"
                className="btn-primary text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
