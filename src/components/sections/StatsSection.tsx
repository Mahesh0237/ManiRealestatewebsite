import { STATS } from '../../data/content';
import StatCounter from '../ui/StatCounter';
import ScrollReveal from '../ui/ScrollReveal';

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
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
  );
}
