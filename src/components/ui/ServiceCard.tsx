import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link
      to={service.link}
      className="service-card group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-56 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[var(--color-primary)]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img
          src={service.image}
          alt={service.title}
          className="service-card-image w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          loading="lazy"
        />
        <div className="absolute top-6 left-6 z-20">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm"
          >
            <span className="text-sm font-bold tracking-widest text-[var(--color-primary)]">
              {service.number}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-8 relative flex flex-col grow">
        <div className="absolute -top-6 right-8 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
        
        <h3
          className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {service.title}
        </h3>
        
        <p className="text-neutral-500 text-base leading-relaxed mb-8 font-light grow">
          {service.description}
        </p>
        
        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-800 uppercase group-hover:text-[var(--color-primary)] transition-colors duration-300 mt-auto">
          <span className="relative">
            Explore Service
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
      </div>
    </Link>
  );
}
