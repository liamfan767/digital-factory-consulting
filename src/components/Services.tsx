'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';
import { Factory, Cpu, Box, TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ServicesProps {
  locale: Locale;
}

const serviceImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
];

const icons = [Factory, Cpu, Box, TrendingUp];

export default function Services({ locale }: ServicesProps) {
  const t = getTranslation(locale);

  const services = [
    { title: t.services.service1.title, description: t.services.service1.description },
    { title: t.services.service2.title, description: t.services.service2.description },
    { title: t.services.service3.title, description: t.services.service3.description },
    { title: t.services.service4.title, description: t.services.service4.description },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-medium text-[hsl(var(--primary))] uppercase tracking-wider mb-2">
            {t.services.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="card-service group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={serviceImages[index]}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[hsl(var(--primary))] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-medium border border-[hsl(var(--primary))] px-4 py-2 rounded hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
                  >
                    {t.services.viewService}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
