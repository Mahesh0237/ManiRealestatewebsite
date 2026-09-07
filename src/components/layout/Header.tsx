import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS, COMPANY_NAME, CONTACT_INFO } from '../../data/content';
import Button from '../ui/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import SiteVisitDrawer from '../ui/SiteVisitDrawer';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerBg = isScrolled || !isHome
    ? 'bg-[var(--color-secondary)]/95 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.5)] border-b border-white/5'
    : 'bg-transparent';

  const textColor = 'text-white/90';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50 py-2">
            <img 
              src="/Logo.png" 
              alt={COMPANY_NAME} 
              className="h-12 md:h-16 w-auto object-contain drop-shadow-md" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="nav-item relative">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium transition-colors duration-300 rounded-lg hover:bg-white/10 ${textColor}`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-[15px] font-medium transition-colors duration-300 rounded-lg hover:bg-white/10 ${textColor} ${
                        isActive ? '!text-[var(--color-primary)]' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div className="nav-dropdown absolute top-full left-0 pt-2">
                    <div className="bg-[var(--color-secondary-light)] rounded-xl shadow-xl border border-white/10 py-2 min-w-[220px] overflow-hidden">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.href}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-sm font-medium transition-all duration-200 ${
                              isActive
                                ? 'text-[var(--color-primary)] bg-white/5'
                                : 'text-neutral-300 hover:text-[var(--color-primary)] hover:bg-white/5'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button onClick={() => setIsDrawerOpen(true)} variant="primary" size="sm" icon>
                Request Site Visit
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden z-50 p-2 rounded-lg transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 bg-[var(--color-secondary)] z-40 lg:hidden overflow-y-auto"
          >
            <div className="pt-24 px-6 pb-8">
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold text-white rounded-xl hover:bg-white/5 transition-colors"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {item.label}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 space-y-0.5 pb-2">
                                {item.children.map((child) => (
                                  <NavLink
                                    key={child.label}
                                    to={child.href}
                                    className={({ isActive }) =>
                                      `block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                                        isActive
                                          ? 'text-[var(--color-primary)] bg-white/5'
                                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                      }`
                                    }
                                  >
                                    {child.label}
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `block px-4 py-4 text-lg font-semibold rounded-xl transition-colors ${
                            isActive
                              ? 'text-[var(--color-primary)] bg-white/5'
                              : 'text-white hover:bg-white/5'
                          }`
                        }
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-white/10">
                <Button onClick={() => { setIsDrawerOpen(true); setMobileOpen(false); }} variant="primary" size="lg" icon className="w-full justify-center">
                  Request Site Visit
                </Button>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 mt-4 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Site Visit Drawer */}
      <SiteVisitDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
}
