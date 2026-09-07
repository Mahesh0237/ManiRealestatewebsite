import HeroCarousel from '../components/sections/HeroCarousel';
import IntroSection from '../components/sections/IntroSection';
import ServicesSection from '../components/sections/ServicesSection';
import StatsSection from '../components/sections/StatsSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ProjectsGallery from '../components/sections/ProjectsGallery';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <IntroSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <ProjectsGallery />
      <CTASection />
    </>
  );
}
