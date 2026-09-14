import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from '../components/ui/SocialIcons';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import ContactForm from '../components/ui/ContactForm';
import CTASection from '../components/sections/CTASection';
import { CONTACT_INFO } from '../data/content';

export default function ContactPage() {
  const contactDetails = [
    { icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
    { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: MapPin, label: 'Address', value: CONTACT_INFO.address, href: undefined },
    { icon: Clock, label: 'Business Hours', value: CONTACT_INFO.hours, href: undefined },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: 'https://www.facebook.com/share/19bDhnEQ4o/', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/my_dream_homes_and_interiors', label: 'Instagram' },
    { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Let's talk about your next project."
        backgroundImage="/images/hero-construction.png"
      />

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <ScrollReveal direction="left">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                GET IN TOUCH
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-800)] leading-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                We'd love to hear from you.
              </h2>
              <p className="text-base md:text-lg text-[var(--color-neutral-400)] leading-relaxed mb-10">
                Have a question or want to discuss a project? Reach out to us and our team will respond within
                24 hours. We're here to help you every step of the way.
              </p>

              <div className="space-y-6 mb-10">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-neutral-300)] mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-base font-medium text-[var(--color-neutral-700)]">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <span className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-neutral-300)] mb-4">
                  FOLLOW US
                </span>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--color-neutral-100)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 group"
                    >
                      <social.icon className="w-4.5 h-4.5 text-[var(--color-neutral-400)] group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal direction="right" delay={0.15}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-100)]">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="w-full"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <CTASection />
    </>
  );
}
