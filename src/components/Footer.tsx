'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslation(locale);

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-[hsl(var(--accent))]">digi</span>
                <span className="text-[hsl(var(--primary))]">factory</span>
              </span>
            </Link>
            <div className="text-gray-600 text-sm leading-relaxed">
              <p className="font-semibold text-[hsl(var(--primary))]">DigiFactory Consulting GmbH</p>
              <p>Institut für digitale Produktion</p>
              <p className="mt-2">Industriestraße 42</p>
              <p>D-80333 München</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[hsl(var(--accent))] font-semibold mb-4">
              {t.footer.services}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
                  Smart Factory
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
                  IoT & Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
                  Digital Twin
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
                  {locale === 'de' ? 'Produktionsoptimierung' : 'Production Optimization'}
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-[hsl(var(--accent))] font-semibold mb-4">
              {t.footer.information}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
                  {t.footer.company}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
                  {t.footer.values}
                </a>
              </li>
              <li>
                <a href="#insights" className="text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
                  {t.footer.insights}
                </a>
              </li>
            </ul>
          </div>

          {/* Career */}
          <div>
            <h3 className="text-[hsl(var(--accent))] font-semibold mb-4">
              {t.footer.career}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--primary))] transition-colors">
                  {t.footer.jobs}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">
                {t.footer.imprint}
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">
                {t.footer.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
