import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating?: number;
}

export function TestimonialCard({ quote, name, location, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-5 items-center w-full">
      {/* Card */}
      <div className="relative h-[365px] w-full rounded-3xl border border-gray-200 bg-white p-8 flex flex-col items-center justify-center">
        {/* Large Quote Mark */}
        <p className="absolute top-3 text-[120px] leading-none text-gray-900 font-normal">"</p>
        
        {/* Quote Text */}
        <p className="text-center text-gray-600 text-base leading-relaxed max-w-[280px] z-10 mb-8">
          {quote}
        </p>
        
        {/* Star Rating */}
        <div className="flex gap-2 items-center">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#f9e745] text-[#f9e745]" />
          ))}
        </div>
      </div>
      
      {/* Name and Location */}
      <div className="text-center">
        <p className="font-bold text-lg text-gray-900">{name}</p>
        <p className="text-base text-gray-900">{location}</p>
      </div>
    </div>
  );
}
