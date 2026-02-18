import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { EmpoweringSection } from '../components/EmpoweringSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { NewsSection } from '../components/NewsSection';
import { ImpactSection } from '../components/ImpactSection';
import { FAQSection } from '../components/FAQSection';
import { PartnerSlider } from '../components/PartnerSlider';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      
      
      {/* Empowering Section */}
      <EmpoweringSection />
      
    
      
      {/* Impact Section */}
      <ImpactSection />

      {/* Stats */}
      <Stats />


        {/* Why Choose CNG */}
      <WhyChooseSection />

        {/* Why Choose CNG */}
     

      {/* News Section */}
      <NewsSection />

       <PartnerSlider />
      
      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
