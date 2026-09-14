import { SERVICES } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import ScrollReveal from '../ui/ScrollReveal';

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50" id="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Expertise"
          heading="Complete solutions for every stage of your property journey."
          description="From finding the perfect property to designing your dream interior, we offer end-to-end services."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
