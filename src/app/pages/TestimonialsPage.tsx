import { TestimonialsHero } from '../components/TestimonialsHero';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { VideoTestimonialsSection } from '../components/VideoTestimonialsSection';

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <TestimonialsHero />
      
      {/* Customer Testimonials Section */}
      <TestimonialsSection />
      
      {/* Video Testimonies Section */}
      <VideoTestimonialsSection />
    </>
  );
}
