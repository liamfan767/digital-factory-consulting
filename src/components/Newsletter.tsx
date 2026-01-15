'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';

interface NewsletterProps {
  locale: Locale;
}

export default function Newsletter({ locale }: NewsletterProps) {
  const t = getTranslation(locale);

  return (
    <section className="bg-[hsl(var(--accent))] py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {t.newsletter.title}
        </h2>
        <a
          href="#contact"
          className="bg-white text-[hsl(var(--primary))] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          {t.newsletter.cta}
        </a>
      </div>
    </section>
  );
}
