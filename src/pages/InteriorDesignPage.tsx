import React from 'react';
import { Sofa, Store, Layout, Armchair, Palette } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';

const InteriorDesignPage: React.FC = () => {
  const services = [
    {
      icon: Sofa,
      title: 'Residential Interiors',
      description: 'Creating personalized, comfortable, and aesthetically pleasing living spaces that reflect your unique lifestyle.'
    },
    {
      icon: Store,
      title: 'Commercial Interiors',
      description: 'Designing professional and inspiring workspaces, retail outlets, and hospitality venues.'
    },
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Optimizing spatial layouts to maximize functionality, flow, and utilization of available square footage.'
    },
    {
      icon: Armchair,
      title: 'Furniture Selection',
      description: 'Curating bespoke furniture pieces and decor elements that complement your overall design narrative.'
    },
    {
      icon: Palette,
      title: 'Custom Design Solutions',
      description: 'Tailored interior styling, color consultation, and custom cabinetry to bring your vision to life.'
    }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Interior Design" 
        description="Transform your space into an experience." 
        backgroundImage="/images/hero-interior.png" 
      />
      
      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                <img 
                  src="/images/service-interior.png" 
                  alt="Interior Design Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <SectionHeading 
                title="Design That Speaks to You" 
                subtitle="Our Philosophy"
                alignment="left"
              />
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We believe that interior design is more than just arranging furniture—it is about creating environments that evoke emotion, enhance well-being, and tell your unique story. Our design philosophy centers around a harmonious blend of aesthetics, functionality, and sustainability.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From conceptualization to the final styling, our team of passionate designers collaborates closely with you to transform empty rooms into breathtaking spaces. We pay meticulous attention to light, texture, and color to curate spaces that are truly extraordinary.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Design Services" 
            subtitle="Tailored For You"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Design Portfolio" 
            subtitle="Inspirations"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12 h-auto md:h-[600px]">
            <ScrollReveal className="md:col-span-8 group relative rounded-2xl overflow-hidden h-[300px] md:h-full">
              <img src="/images/project-luxury-interior.png" alt="Luxury Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold font-[var(--font-heading)] tracking-wide">Luxury Living</h3>
              </div>
            </ScrollReveal>
            
            <div className="md:col-span-4 grid grid-cols-1 gap-6 h-[600px] md:h-full">
              <ScrollReveal delay={0.2} className="group relative rounded-2xl overflow-hidden h-[300px] md:h-auto">
                <img src="/images/project-lounge.png" alt="Modern Lounge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold font-[var(--font-heading)] tracking-wide">Modern Lounge</h3>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4} className="group relative rounded-2xl overflow-hidden h-[300px] md:h-auto">
                <img src="/images/hero-interior.png" alt="Minimalist Space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold font-[var(--font-heading)] tracking-wide">Minimalist</h3>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[var(--color-secondary)] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="The Design Journey" 
            subtitle="Process"
            light={true}
          />
          
          <div className="relative mt-20 max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-gray-700 hidden md:block"></div>
            
            {[
              { step: '01', title: 'Discovery', desc: 'Initial consultation to understand your style, needs, and budget.' },
              { step: '02', title: 'Concept', desc: 'Presenting mood boards, layout options, and 3D visualizations.' },
              { step: '03', title: 'Implementation', desc: 'Procurement, construction, and managing the design execution.' },
              { step: '04', title: 'Reveal', desc: 'Final styling and the exciting reveal of your transformed space.' }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`flex items-center justify-between mb-16 md:mb-24 w-full flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="w-full md:w-5/12 mb-8 md:mb-0"></div>
                  
                  <div className="z-20 w-16 h-16 rounded-full bg-[var(--color-primary)] border-4 border-gray-900 shadow flex items-center justify-center mb-8 md:mb-0 relative">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-left md:text-right md:pr-12' : 'text-left md:pl-12'}`}>
                    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                      <h3 className="text-2xl font-bold mb-3 font-[var(--font-heading)] text-[var(--color-primary)]">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
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

export default InteriorDesignPage;
