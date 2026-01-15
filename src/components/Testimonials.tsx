'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  locale: Locale;
}

const testimonials = {
  de: [
    {
      name: 'Dr. Thomas Müller',
      company: 'Siemens AG',
      quote: 'Die Zusammenarbeit mit DigiFactory Consulting war ausgezeichnet. Die Experten haben uns bei der digitalen Transformation unserer Produktion hervorragend unterstützt und messbare Ergebnisse geliefert.',
    },
    {
      name: 'Anna Schmidt',
      company: 'BMW Group',
      quote: 'Zusätzlich zu ihrem umfangreichen Fachwissen haben die Berater ihre Fähigkeit unter Beweis gestellt, individuelle Lösungen für unsere spezifischen Anforderungen zu entwickeln.',
    },
    {
      name: 'Michael Weber',
      company: 'Bosch GmbH',
      quote: 'Unsere Partnerschaft mit DigiFactory Consulting ist mehr als nur Beratung - es ist eine gemeinsame Reise in Richtung Industrie 4.0, auf der wir uns auf die Zukunft vorbereiten.',
    },
  ],
  en: [
    {
      name: 'Dr. Thomas Müller',
      company: 'Siemens AG',
      quote: 'The collaboration with DigiFactory Consulting was excellent. The experts supported us outstandingly in the digital transformation of our production and delivered measurable results.',
    },
    {
      name: 'Anna Schmidt',
      company: 'BMW Group',
      quote: 'In addition to their extensive expertise, the consultants demonstrated their ability to develop individual solutions for our specific requirements.',
    },
    {
      name: 'Michael Weber',
      company: 'Bosch GmbH',
      quote: 'Our partnership with DigiFactory Consulting is more than just consulting - it is a shared journey towards Industry 4.0, preparing us for the future.',
    },
  ],
};

export default function Testimonials({ locale }: TestimonialsProps) {
  const t = getTranslation(locale);
  const items = testimonials[locale];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[hsl(var(--primary))] uppercase tracking-wider mb-2">
            {t.testimonials.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))]">
            {t.testimonials.title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">
                  {item.name}
                </h3>
                <p className="text-[hsl(var(--accent))] font-medium text-sm">
                  {item.company}
                </p>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                <p className="text-gray-600 leading-relaxed pl-4">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
