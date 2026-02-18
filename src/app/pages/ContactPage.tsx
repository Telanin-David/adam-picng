import { ContactSupportSection } from '../components/ContactSupportSection';
import { ContactFormSection } from '../components/ContactFormSection';
import { MapSection } from '../components/MapSection';
import { FAQSection } from '../components/FAQSection';
import { ContactHero } from '../components/ContactHero';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Support Section */}
      <ContactSupportSection />
      
      {/* Contact Form Section */}
      <ContactFormSection />
      
      {/* Map Section */}
      <MapSection />
      
      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
