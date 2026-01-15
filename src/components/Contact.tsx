'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/translations';
import { getTranslation } from '@/lib/translations';

interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  const t = getTranslation(locale);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(locale === 'de' ? 'Vielen Dank für Ihre Nachricht!' : 'Thank you for your message!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] text-center mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {t.contact.description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.firstName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.lastName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.email} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.company} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.message} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-[hsl(var(--primary))] border-gray-300 rounded focus:ring-[hsl(var(--primary))]"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                {t.contact.privacy} <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[hsl(var(--accent))] text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                {t.contact.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
