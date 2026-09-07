import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-building.png"
          alt="Modern architecture"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/95 via-[var(--color-secondary)]/85 to-[var(--color-secondary)]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
            GET STARTED
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let's build something remarkable together.
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Have a project in mind? Let's turn your vision into reality with our comprehensive property solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon>
              Plan Your Project
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Our Services
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
