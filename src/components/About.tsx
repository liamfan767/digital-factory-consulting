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
              src="/images/ifplconsulting_leadership team.jpg"
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
              Wer wir sind
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-6">
              Über ifpl consulting
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gemeinsam mit uns meistern Sie Ihre Herausforderungen in Produktion und Logistik. Als Ihr Sparringspartner gehen wir bei der Beratung in allen strategischen Themen der Produktion und Logistik immer einen Schritt voraus und optimieren die Wertschöpfungsprozesse in Ihrem Unternehmen.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mit unserem pragmatischen und lösungsorientierten Beratungsansatz setzen die Experten von ifp consulting Projekte in den Bereichen Produktions- und Logistikplanung, Supply-Chain-Management, OperationalExcellence, Fabrikplanung (Brownfieldplanung, Greenfieldplanung, Werkstrukturplanung) sowie Digitalisierung und Automatisierung in kürzester Zeit erfolgreich um.
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
