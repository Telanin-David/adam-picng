import { WhoWeAreHero } from '../components/WhoWeAreHero';
import { AboutSection } from '../components/AboutSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { StrategicProgrammeSection } from '../components/StrategicProgrammeSection';
import { FAQSection } from '../components/FAQSection';

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero Section */}
      <WhoWeAreHero />
      
      {/* About Us Section */}
      <AboutSection />
      
      {/* Vision and Mission */}
      <VisionMissionSection />
      
      {/* Strategic Implementation Programme */}
      <StrategicProgrammeSection />
      
       {/* FAQ Section */}
            <FAQSection />
    </>
  );
}
