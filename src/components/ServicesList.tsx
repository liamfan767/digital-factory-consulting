'use client';

import { Factory, Cpu, Box, TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Service {  
  title: string;
  description: string;
  icon?: 'factory' | 'cpu' | 'box' | 'trendingUp';
  image?: string;
}

interface ServicesListProps {
  services: Service[];
  viewServiceText: string;
  className?: string;
}

const iconMap = {
  factory: Factory,
  cpu: Cpu,
  box: Box,
  trendingUp: TrendingUp,
};

const defaultImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
];

export default function ServicesList({ services, viewServiceText, className = '' }: ServicesListProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 ${className}`}>
      {services.map((service, index) => {
        const IconComponent = service.icon 
          ? iconMap[service.icon] 
          : Object.values(iconMap)[index % Object.values(iconMap).length];
        
        const imageSrc = service.image || defaultImages[index % defaultImages.length];

        return (
          <div
            key={index}
            className="card-service group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={imageSrc}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <IconComponent className="w-10 h-10 text-white" />
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
                {viewServiceText}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}