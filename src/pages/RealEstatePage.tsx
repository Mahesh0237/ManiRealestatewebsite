import React from 'react';
import { Home, Search, TrendingUp, Settings, BarChart3 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';

const RealEstatePage: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Property Buying & Selling',
      description: 'End-to-end support for buying and selling residential and commercial properties with ease and confidence.'
    },
    {
      icon: Search,
      title: 'Property Consultation',
      description: 'Expert advice to help you make informed decisions regarding property investments and market trends.'
    },
    {
      icon: TrendingUp,
      title: 'Investment Assistance',
      description: 'Strategic guidance on lucrative real estate investments tailored to your financial goals.'
    },
    {
      icon: Settings,
      title: 'Property Management',
      description: 'Comprehensive property management services ensuring your investment is well-maintained and profitable.'
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      description: 'In-depth real estate market analysis to identify the best opportunities and pricing strategies.'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Consultation', desc: 'Understanding your requirements and budget.' },
    { number: '02', title: 'Property Search', desc: 'Curating the best property options for you.' },
    { number: '03', title: 'Negotiation & Documentation', desc: 'Securing the best deal and handling paperwork.' },
    { number: '04', title: 'Handover', desc: 'Seamless transfer of property ownership.' }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Real Estate" 
        description="Your trusted partner for property buying, selling, and investment." 
        backgroundImage="/images/hero-realestate.png" 
      />
      
      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                <img 
                  src="/images/service-realestate.png" 
                  alt="Real Estate Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <SectionHeading 
                title="Comprehensive Real Estate Solutions" 
                subtitle="Why Choose Us"
                alignment="left"
              />
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Whether you are looking for your dream home, a premium commercial space, or a lucrative investment opportunity, our real estate experts are here to guide you every step of the way. We specialize in matching clients with properties that perfectly align with their vision and goals.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With deep local market knowledge and a commitment to transparency, we simplify the complex real estate process. From property valuation to final handover, we ensure a seamless and rewarding experience for all our clients.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Real Estate Services" 
            subtitle="What We Offer"
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

      {/* Process Section */}
      <section className="py-20 bg-[var(--color-secondary)] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="How We Work" 
            subtitle="Our Process"
            light={true}
          />
          
          <div className="mt-16">
            <div className="flex flex-col md:flex-row justify-between relative">
              <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-white/20 -z-10"></div>
              
              {processSteps.map((step, index) => (
                <ScrollReveal 
                  key={index} 
                  delay={index * 0.1}
                  className="flex flex-col items-center text-center mb-12 md:mb-0 relative"
                >
                  <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-secondary)] flex items-center justify-center text-2xl font-bold mb-6 z-10 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-[var(--font-heading)]">{step.title}</h3>
                  <p className="text-gray-300 max-w-[200px]">{step.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default RealEstatePage;
