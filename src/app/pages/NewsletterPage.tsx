import { NewsletterHero } from '../components/NewsletterHero';
import { NewsletterSection } from '../components/NewsletterSection';

export default function NewsletterPage() {
  return (
    <>
      {/* Hero Section */}
      <NewsletterHero />
      
      {/* Newsletter Subscription Form */}
      <NewsletterSection />
    </>
  );
}
