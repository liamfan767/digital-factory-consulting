'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const t = getTranslation(locale);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2074&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--teal-dark))]/90 to-[hsl(var(--primary))]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}{' '}
            <span className="text-[hsl(var(--accent))]">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity text-lg"
            >
              {t.hero.cta}
              <ArrowRight size={20} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[hsl(var(--primary))] transition-colors text-lg"
            >
              {t.hero.learnMore}
            </a>
          </div>
        </div>
      </div>

      {/* CTA Banner at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-[hsl(var(--accent))] py-4">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-lg font-medium">
            {locale === 'de' ? 'Sie möchten mehr erfahren?' : 'Want to learn more?'}
          </p>
          <a
            href="#contact"
            className="bg-white text-[hsl(var(--primary))] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
