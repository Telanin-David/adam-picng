import { useState, useEffect } from 'react';
import im1 from "@/assets/images/im1.png";
import im2 from "@/assets/images/im2.png";
import im3 from "@/assets/images/im3.png";
import im4 from "@/assets/images/im4.png";
import im5 from "@/assets/images/im5.png";
import im6 from "@/assets/images/im6.png";

const IMPACT_DATA = [
  { value: "15,000+", label: "Vehicle Converted", image: im1 },
  { value: "300+", label: "Conversion Centres", image: im2 },
  { value: "6,000+", label: "Technicians Trained", image: im3 },
  { value: "30,000+", label: "Jobs Projected", image: im4 },
  { value: "40+", label: "Refuelling Station", image: im5 },
  { value: "$2billion+", label: "Investment Mobilized", image: im6 }
];

export function ImpactSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === IMPACT_DATA.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === IMPACT_DATA.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? IMPACT_DATA.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[500px] lg:h-[661px] overflow-hidden bg-[#080808]">
      {/* Background Layer */}
      {IMPACT_DATA.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[#080808]/75" />
        </div>
      ))}

      {/* Header Content */}
      <div className="absolute top-12 lg:top-20 left-1/2 -translate-x-1/2 flex items-center gap-3 lg:gap-4 z-10 w-full justify-center px-4">
        <h2 className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold tracking-tight whitespace-nowrap">
          Impact So Far
        </h2>
        <div className="w-8 lg:w-[43px] h-[1px] bg-white mt-1 lg:mt-4 opacity-80" />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center container mx-auto px-6 z-10">
        <div className="text-center space-y-2 md:space-y-4 max-w-[90vw]">
          {/* Responsive Heading: 48px on mobile, scaling up to 120px on desktop */}
          <h3 className="text-white text-5xl md:text-7xl lg:text-[120px] font-bold leading-none tracking-tighter transition-all duration-500">
            {IMPACT_DATA[current].value}
          </h3>
          {/* Responsive Label: 18px on mobile, 32px on desktop */}
          <p className="text-white text-lg md:text-2xl lg:text-[32px] font-medium opacity-90 transition-all duration-500">
            {IMPACT_DATA[current].label}
          </p>
        </div>

        {/* Navigation Arrows - Hidden on small mobile, visible from tablet up */}
        <button 
          onClick={prev}
          className="hidden md:flex absolute left-4 lg:left-24 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-20 lg:h-20 items-center justify-center group hover:bg-white/10 rounded-full transition-all"
        >
          <svg className="w-6 h-6 lg:w-[30px] lg:h-[55px] text-[#BBBBBB] rotate-180 group-hover:text-white" viewBox="0 0 30 55" fill="none">
            <path d="M5 5l20 22.5L5 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button 
          onClick={next}
          className="hidden md:flex absolute right-4 lg:right-24 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-20 lg:h-20 items-center justify-center group hover:bg-white/10 rounded-full transition-all"
        >
          <svg className="w-6 h-6 lg:w-[30px] lg:h-[55px] text-[#BBBBBB] group-hover:text-white" viewBox="0 0 30 55" fill="none">
            <path d="M5 5l20 22.5L5 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-10 lg:bottom-16 flex items-center gap-3">
          {IMPACT_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current 
                ? "w-3 h-3 bg-[#F9E745] ring-2 lg:ring-4 ring-[#F9E745]/20" 
                : "w-2 h-2 bg-[#6B6B6B] hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}