import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from '../ui/SocialIcons';
import { COMPANY_NAME, CONTACT_INFO } from '../../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Real Estate', href: '/services/real-estate' },
    { label: 'Construction', href: '/services/construction' },
    { label: 'Interior Design', href: '/services/interior-design' },
    { label: 'Loans', href: '/services/loans' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/my_dream_homes_and_interiors', label: 'Instagram' },
    { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[var(--color-secondary)] text-white/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/Logo.png" 
                alt={COMPANY_NAME} 
                className="h-12 md:h-16 w-auto object-contain drop-shadow-md" 
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/50">
              Building better spaces. Creating better futures. Your trusted partner for real estate,
              construction, interior design, and financial solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold text-white tracking-wide uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/50 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold text-white tracking-wide uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/50 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold text-white tracking-wide uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-white/50 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-white/50 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
