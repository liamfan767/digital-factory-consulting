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
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Image_8pet6f8pet6f8pet.jpg)',
          }}
        />

        {/* Content - Centered */}
        <div className="relative z-10 section-container w-full text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Beratung für Produktion und Logistik
            </h1>
            <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
              Als technische Unternehmensberatung steht ifp consulting bei Herausforderungen in Fabrikplanung, Supply Chain Management, Operational Excellence, Digitalisierung sowie Produktions- und Logistikplanung an Ihrer Seite.
            </p>
          </div>
        </div>
      </section>

      {/* Orange CTA Banner - Below Background Image */}
      <div className="bg-[hsl(var(--accent))] py-4 md:py-5">
        <div className="section-container flex items-center justify-center">
          <div className="flex-1 max-w-[50%] flex justify-end pr-4">
            <p className="text-white text-2xl md:text-3xl font-bold text-left">
              Sie möchten mehr erfahren?
            </p>
          </div>
          <a
            href="#contact"
            className="bg-white text-[hsl(var(--accent))] px-5 py-2.5 rounded font-medium hover:bg-gray-100 transition-colors text-sm whitespace-nowrap ml-4 md:ml-6"
          >
            Kontakt
          </a>
        </div>
      </div>
    </>
  );
}
