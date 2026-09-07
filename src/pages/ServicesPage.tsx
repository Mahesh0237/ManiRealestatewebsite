import { Check } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTASection from '../components/sections/CTASection';
import Button from '../components/ui/Button';
import { SERVICES } from '../data/content';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Complete property solutions designed around your needs."
        backgroundImage="/images/hero-realestate.png"
      />

      {/* Service Sections */}
      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 1;
        const bgColor = isEven ? 'bg-[var(--color-neutral-50)]' : 'bg-white';

        return (
          <section key={service.id} className={`py-20 lg:py-28 ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                {/* Image */}
                <ScrollReveal
                  direction={isEven ? 'right' : 'left'}
                  className={isEven ? 'lg:order-2' : ''}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover aspect-[4/3]"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6">
                      <span
                        className="inline-block px-4 py-2 text-sm font-bold tracking-wider text-white rounded-lg"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      >
                        {service.number}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal
                  direction={isEven ? 'left' : 'right'}
                  className={isEven ? 'lg:order-1' : ''}
                >
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-3">
                    SERVICE {service.number}
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-800)] leading-tight mb-5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-[var(--color-neutral-400)] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[var(--color-primary)]" />
                          </div>
                          <span className="text-[15px] text-[var(--color-neutral-500)] font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Button href={service.link} variant="outline" icon>
                    Learn More
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
