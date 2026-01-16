'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface InsightsProps {
  locale: Locale;
}

const articles = {
  de: [
    {
      title: 'Smart Factory: Der Weg zur vernetzten Produktion',
      description: 'Wie Sie mit IoT, KI und Automatisierung Ihre Fabrik der Zukunft gestalten können.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Digitaler Zwilling in der Industrie 4.0',
      description: 'Virtuelle Abbilder von Maschinen und Anlagen ermöglichen präzise Simulationen und Optimierungen.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'KI-gestützte Qualitätskontrolle',
      description: 'Machine Learning revolutioniert die Qualitätssicherung in der Fertigung.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    },
  ],
  en: [
    {
      title: 'Smart Factory: The Path to Connected Production',
      description: 'How you can design your factory of the future with IoT, AI and automation.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Digital Twin in Industry 4.0',
      description: 'Virtual replicas of machines and systems enable precise simulations and optimizations.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'AI-Powered Quality Control',
      description: 'Machine Learning is revolutionizing quality assurance in manufacturing.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    },
  ],
};

export default function Insights({ locale }: InsightsProps) {
  const t = getTranslation(locale);
  const items = articles[locale];

  return (
    <section id="insights" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-medium text-[hsl(var(--primary))] uppercase tracking-wider mb-2">
            {t.insights.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            {t.insights.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t.insights.description}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((article, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[hsl(var(--primary))] mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-medium text-sm border border-[hsl(var(--primary))] px-4 py-2 rounded hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
                >
                  {t.insights.readMore}
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
