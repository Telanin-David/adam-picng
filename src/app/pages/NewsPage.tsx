import { NewsHero } from '../components/NewsHero';
import { NewsFilters } from '../components/NewsFilters';
import { NewsGrid } from '../components/NewsGrid';

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <NewsHero />
      
      {/* Filter Tabs */}
      <NewsFilters />
      
      {/* News Grid */}
      <NewsGrid />
    </>
  );
}
