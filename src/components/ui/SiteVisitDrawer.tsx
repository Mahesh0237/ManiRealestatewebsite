import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ContactForm from './ContactForm';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface SiteVisitDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteVisitDrawer({ isOpen, onClose }: SiteVisitDrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-neutral-50)] z-[9999] shadow-2xl overflow-y-auto"
          >
            <div className="p-6 md:p-8 flex flex-col min-h-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[var(--color-secondary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Request Site Visit
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-[var(--color-neutral-100)] text-[var(--color-secondary)] transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1">
                <p className="text-[var(--color-neutral-500)] mb-8 leading-relaxed">
                  Schedule a visit to our project sites or arrange a meeting with our experts to discuss your requirements.
                </p>
                
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
