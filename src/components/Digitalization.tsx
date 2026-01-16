'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';

interface DigitalizationProps {
  locale: Locale;
}

export default function Digitalization({ locale }: DigitalizationProps) {
  const t = getTranslation(locale);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--teal-dark))]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-3xl">
          <p className="text-[hsl(var(--accent))] font-medium mb-3">
            {t.digitalization.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.digitalization.title}
          </h2>
          <p className="text-white/80 leading-relaxed mb-8 text-lg">
            {t.digitalization.description}
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            {t.digitalization.cta}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
