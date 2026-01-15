'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/translations';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Digitalization from '@/components/Digitalization';
import Insights from '@/components/Insights';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('de');

  return (
    <main className="min-h-screen">
      <Header locale={locale} onLocaleChange={setLocale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Clients locale={locale} />
      <Testimonials locale={locale} />
      <Services locale={locale} />
      <Digitalization locale={locale} />
      <Insights locale={locale} />
      <Newsletter locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
