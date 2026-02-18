import { DepartmentsHero } from '../components/DepartmentsHero';
import { DepartmentsSection } from '../components/DepartmentsSection';

export default function DepartmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <DepartmentsHero />
      
      {/* Departments Grid */}
      <DepartmentsSection />
    </>
  );
}
