import { useCountUp } from '../../hooks/useCountUp';
import type { Stat } from '../../types';

interface StatCounterProps {
  stat: Stat;
}

export default function StatCounter({ stat }: StatCounterProps) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span
          className="text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[var(--color-primary)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {count}
        </span>
        <span
          className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-sm md:text-base font-medium text-neutral-400 tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}
