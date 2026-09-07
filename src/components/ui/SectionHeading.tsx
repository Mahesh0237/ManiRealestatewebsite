import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  eyebrow?: string;
  subtitle?: string;
  heading?: string;
  title?: string;
  description?: string;
  align?: 'left' | 'center';
  alignment?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  subtitle,
  heading,
  title,
  description,
  align,
  alignment,
  light = false,
  className = '',
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const resolvedEyebrow = eyebrow || subtitle;
  const resolvedHeading = heading || title;
  const resolvedAlign = align || alignment || 'center';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${resolvedAlign === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl mb-14 ${className}`}
    >
      {resolvedEyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${
            light ? 'text-[var(--color-primary-light)]/80' : 'text-[var(--color-primary)]'
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {resolvedEyebrow}
        </span>
      )}
      {resolvedHeading && (
        <h2
          className={`text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight ${
            light ? 'text-white' : 'text-[var(--color-neutral-800)]'
          }`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {resolvedHeading}
        </h2>
      )}
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-[var(--color-neutral-400)]'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
