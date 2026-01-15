'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';
import Image from 'next/image';

interface AboutProps {
  locale: Locale;
}

export default function About({ locale }: AboutProps) {
  const t = getTranslation(locale);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Team DigiFactory Consulting"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[hsl(var(--accent))]/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium text-[hsl(var(--primary))] uppercase tracking-wider mb-2">
              {t.about.subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-6">
              {t.about.title}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t.about.description2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-outline text-center">
                {t.about.servicesBtn}
              </a>
              <a
                href="#team"
                className="text-[hsl(var(--primary))] font-medium hover:underline flex items-center justify-center gap-2"
              >
                {t.about.moreBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
