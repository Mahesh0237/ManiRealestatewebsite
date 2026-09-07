import { WHY_CHOOSE_US } from '../../data/content';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function WhyChooseUs() {
  return (
    <section className="py-0 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left - Image */}
        <ScrollReveal direction="left" className="relative overflow-hidden">
          <img
            src="/images/hero-interior.png"
            alt="Premium Interior Design"
            className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
            loading="lazy"
          />
        </ScrollReveal>

        {/* Right - Content */}
        <div className="bg-[var(--color-secondary)] p-10 md:p-14 lg:p-20 flex flex-col justify-center">
          <ScrollReveal direction="right">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              WHY CHOOSE US
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-10"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Built on trust.<br />Driven by excellence.
            </h2>

            <div className="space-y-8">
              {WHY_CHOOSE_US.map((item, index) => (
                <ScrollReveal key={item.number} delay={index * 0.15} direction="up">
                  <div className="flex gap-5">
                    <span
                      className="text-sm font-bold text-[var(--color-primary)] shrink-0 mt-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className="text-lg font-bold text-white mb-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/contact" variant="primary" icon>
                Start a Conversation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
