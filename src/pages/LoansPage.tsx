import React from 'react';
import { Home, Building, MessageCircle, Calculator, FileText } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';

const LoansPage: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Competitive interest rates and flexible repayment options for purchasing your dream home.'
    },
    {
      icon: Building,
      title: 'Property Loans',
      description: 'Tailored financing solutions for commercial properties, plots, and construction projects.'
    },
    {
      icon: MessageCircle,
      title: 'Loan Consultation',
      description: 'Expert advisory services to help you navigate loan types, interest structures, and eligibility.'
    },
    {
      icon: Calculator,
      title: 'Financing Assistance',
      description: 'Comprehensive support in calculating EMIs, assessing financial capacity, and restructuring debt.'
    },
    {
      icon: FileText,
      title: 'Documentation Guidance',
      description: 'Streamlined assistance with paperwork, legal checks, and compliance for fast approvals.'
    }
  ];

  const steps = [
    { title: 'Consultation', desc: 'Discuss your property goals and financial situation.' },
    { title: 'Assessment', desc: 'Evaluate eligibility and choose the right loan product.' },
    { title: 'Application', desc: 'Submit required documents and process the application.' },
    { title: 'Disbursement', desc: 'Loan approval and fund disbursement for your property.' }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Loans" 
        description="Making property ownership accessible and affordable." 
        backgroundImage="/images/hero-building.png" 
      />
      
      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <SectionHeading 
                title="Financial Solutions for Your Property Goals" 
                subtitle="Expert Assistance"
                alignment="left"
              />
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Navigating the world of property financing can be complex. We simplify the process by connecting you with trusted financial institutions and guiding you through every step of securing a loan that fits your budget and lifestyle.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are a first-time homebuyer or an experienced investor, our team ensures that you receive the most competitive rates and favorable terms, making your property ownership journey smooth and hassle-free.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                <img 
                  src="/images/service-loans.png" 
                  alt="Loan Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Loan & Financing Services" 
            subtitle="How We Help"
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

      {/* How it Works Section */}
      <section className="py-20 bg-[var(--color-secondary)] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="The Process" 
            subtitle="How It Works"
            light={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="relative">
                <div className="bg-white/5 rounded-2xl p-8 h-full border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-5xl font-bold text-[var(--color-primary)]/50 mb-6 font-[var(--font-heading)]">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-[var(--font-heading)] text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-[var(--color-primary)] z-10"></div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="bg-white border-l-4 border-[var(--color-primary)] p-6 rounded-r-lg shadow-sm max-w-4xl mx-auto">
              <p className="text-gray-600 italic">
                * Important Note: Loan approval is subject to eligibility criteria and documentation requirements of respective financial institutions. We facilitate the process but do not guarantee loan approval.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default LoansPage;
