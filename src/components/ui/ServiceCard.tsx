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
      className="service-card group block bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100/80"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="service-card-image w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span
            className="inline-block px-3 py-1.5 text-xs font-bold tracking-wider text-white rounded-md"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {service.number}
          </span>
        </div>
      </div>
      <div className="p-7">
        <h3
          className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors duration-300"
          style={{ fontFamily: 'var(--font-heading)', color: undefined }}
        >
          <span className="group-hover:text-[var(--color-primary)] transition-colors duration-300">
            {service.title}
          </span>
        </h3>
        <p className="text-neutral-400 text-[15px] leading-relaxed mb-5">
          {service.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all duration-300">
          Learn More
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
