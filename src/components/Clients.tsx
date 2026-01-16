'use client';

import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';

interface ClientsProps {
  locale: Locale;
}

// Using placeholder logos with company names
const clientLogos = [
  { name: 'SIEMENS', className: 'text-[#009999]' },
  { name: 'BOSCH', className: 'text-[#e30613]' },
  { name: 'BMW', className: 'text-[#0066b1]' },
  { name: 'VOLKSWAGEN', className: 'text-[#001e50]' },
  { name: 'SAP', className: 'text-[#0071c5]' },
  { name: 'BASF', className: 'text-[#21458c]' },
];

export default function Clients({ locale }: ClientsProps) {
  const t = getTranslation(locale);

  return (
    <section id="references" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-medium text-[hsl(var(--primary))] uppercase tracking-wider mb-2">
            {t.clients.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            {t.clients.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t.clients.description}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-8">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className={`text-xl md:text-2xl font-bold ${client.className}`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="btn-outline inline-block">
            {t.clients.moreBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
