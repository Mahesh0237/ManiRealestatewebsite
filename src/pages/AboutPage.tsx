import { Shield, Award, Eye, Heart, Lightbulb, Star } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import StatCounter from '../components/ui/StatCounter';
import CTASection from '../components/sections/CTASection';
import Button from '../components/ui/Button';
import { CORE_VALUES, WHY_CHOOSE_US, STATS } from '../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  award: Award,
  eye: Eye,
  heart: Heart,
  lightbulb: Lightbulb,
  star: Star,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Discover the team behind your dream spaces — over a decade of trusted expertise."
        backgroundImage="/images/hero-building.png"
      />

      {/* Company Introduction */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/service-construction.png"
                  alt="Our Team"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-secondary)]/80 to-transparent p-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                      12+
                    </span>
                    <span className="text-white/70 text-sm font-medium">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                OUR STORY
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[var(--color-neutral-800)] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Building trust through exceptional service.
              </h2>
              <p className="text-base md:text-lg text-[var(--color-neutral-400)] leading-relaxed mb-5">
                For over 12 years, Oculis has been a trusted name in real estate, construction, interior design,
                and financial services. Our integrated approach allows us to serve as a single point of contact for
                all your property-related needs.
              </p>
              <p className="text-base md:text-lg text-[var(--color-neutral-400)] leading-relaxed mb-8">
                We believe that every project is unique, and we bring a personalized touch to every engagement.
                Our team of experts works collaboratively to deliver solutions that exceed expectations, on time
                and within budget.
              </p>
              <Button href="/contact" variant="outline" icon>
                Work With Us
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-[var(--color-neutral-50)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR PURPOSE"
            heading="Guided by vision. Grounded in values."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-10 border border-[var(--color-neutral-100)] shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[var(--color-neutral-800)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Mission
                </h3>
                <p className="text-[var(--color-neutral-400)] leading-relaxed">
                  To provide integrated property solutions that simplify the journey from dream to reality.
                  We are committed to delivering exceptional quality, transparent processes, and personalized
                  service at every step — making property ownership accessible and rewarding for all.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-2xl p-10 border border-[var(--color-neutral-100)] shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[var(--color-neutral-800)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Vision
                </h3>
                <p className="text-[var(--color-neutral-400)] leading-relaxed">
                  To be the most trusted and respected name in property solutions — known for our innovation,
                  reliability, and the positive impact we create in the lives of our clients, communities,
                  and the built environment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="CORE VALUES"
            heading="The principles that drive everything we do."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value, index) => {
              const Icon = iconMap[value.icon] || Shield;
              return (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="bg-[var(--color-neutral-50)] rounded-2xl p-8 border border-[var(--color-neutral-100)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] transition-colors">
                      <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <h3
                      className="text-lg font-bold text-[var(--color-neutral-800)] mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-sm text-[var(--color-neutral-400)] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Split */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[550px]">
          <ScrollReveal direction="left" className="relative overflow-hidden">
            <img
              src="/images/project-luxury-interior.png"
              alt="Why Choose Oculis"
              className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
              loading="lazy"
            />
          </ScrollReveal>

          <div className="bg-[var(--color-secondary)] p-10 md:p-14 lg:p-20 flex flex-col justify-center">
            <ScrollReveal direction="right">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                WHY OCULIS
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight mb-10"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Your success is our commitment.
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-24 bg-[var(--color-neutral-50)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <StatCounter stat={stat} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
