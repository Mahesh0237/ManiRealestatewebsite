import React from 'react';
import { Home, Building2, ClipboardList, HardHat, Hammer } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';

const ConstructionPage: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Building custom homes and residential complexes with uncompromised quality and attention to detail.'
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Developing state-of-the-art commercial spaces, offices, and retail establishments.'
    },
    {
      icon: ClipboardList,
      title: 'Project Planning',
      description: 'Meticulous planning, scheduling, and resource allocation to ensure successful project execution.'
    },
    {
      icon: HardHat,
      title: 'Construction Management',
      description: 'Expert oversight of construction sites, prioritizing safety, efficiency, and quality control.'
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transforming existing structures with modern upgrades and functional enhancements.'
    }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Construction" 
        description="Building excellence from foundation to finish." 
        backgroundImage="/images/hero-construction.png" 
      />
      
      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <SectionHeading 
                title="Expert Construction Services" 
                subtitle="Building The Future"
                alignment="left"
              />
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                With a legacy of excellence, our construction division delivers projects that stand the test of time. We combine innovative engineering with superior craftsmanship to bring architectural visions to life, whether it's a cozy residential home or a sprawling commercial complex.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach is rooted in precision, transparency, and timely delivery. From laying the first brick to the final finishing touches, our dedicated team ensures that every structural element meets the highest standards of safety and aesthetic appeal.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                <img 
                  src="/images/service-construction.png" 
                  alt="Construction Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Construction Capabilities" 
            subtitle="What We Do"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal 
                  key={index} 
                  delay={index * 0.1}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-[var(--font-heading)] text-[var(--color-secondary)]">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-[var(--color-secondary)] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-heading)]">
                Why Choose Us for Your Construction Needs?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We don't just build structures; we build trust. Our commitment to excellence sets us apart in the construction industry.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex-shrink-0 flex items-center justify-center text-xl font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-[var(--font-heading)]">Premium Quality Materials</h4>
                    <p className="text-gray-400">We source only the highest grade materials to ensure durability, sustainability, and visual appeal in every project.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex-shrink-0 flex items-center justify-center text-xl font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-[var(--font-heading)]">Experienced Team</h4>
                    <p className="text-gray-400">Our crew consists of seasoned architects, engineers, and builders who bring decades of combined experience to the site.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex-shrink-0 flex items-center justify-center text-xl font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-[var(--font-heading)]">On-Time Delivery</h4>
                    <p className="text-gray-400">Through rigorous planning and agile project management, we guarantee that your project will be completed within the agreed timeline.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Our Work"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { img: '/images/project-villa.png', title: 'Modern Villa' },
              { img: '/images/project-residence.png', title: 'Luxury Residence' },
              { img: '/images/hero-construction.png', title: 'Commercial Plaza' }
            ].map((project, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold font-[var(--font-heading)] translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ConstructionPage;
