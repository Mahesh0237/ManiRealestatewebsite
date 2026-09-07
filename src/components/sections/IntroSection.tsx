import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function IntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <ScrollReveal direction="left">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              WHO WE ARE
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-800 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Everything you need to create the space you've always imagined.
            </h2>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal direction="right" delay={0.2}>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-6">
              With over a decade of expertise across real estate, construction, interior design, and financial
              solutions, we provide a comprehensive approach to property development. Our integrated services
              ensure seamless execution from concept to completion.
            </p>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-8">
              We believe that every space has the potential to inspire. Whether you're looking for your dream
              home, planning a construction project, designing an interior, or need financing guidance —
              we're here to make it happen.
            </p>
            <Button href="/about" variant="outline" icon>
              Learn About Us
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
