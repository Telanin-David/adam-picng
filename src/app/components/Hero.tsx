import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import slider1 from "@/assets/images/slider1.png";
import slider2 from "@/assets/images/slider2.png";
import slider3 from "@/assets/images/slider3.png";


// Slider Content Data from your provided snippets
const SLIDES = [
  {
    id: 1,
    title: "Fuels That Works For Nigerians",
    description: "CNG is affordable, reliable, and made for today’s Nigeria. It helps drivers and businesses reduce fuel costs without sacrificing performance.",
    image: slider1,
    progress: "w-1/3"
  },
  {
    id: 2,
    title: "Affordable. Cleaner. Safer.",
    description: "CNG helps you spend less on fuel, protect the environment with lower emissions, and offers a safer option for vehicles. It is a practical step towards cleaner transportation and a more sustainable Nigeria.",
    image: slider2,
    progress: "w-2/3"
  },
  {
    id: 3,
    title: "A Smarter Fuel Choice",
    description: "CNG is a cost-effective alternative to petrol and diesel. It reduces daily transportation expenses and supports Nigeria’s move towards cleaner energy.",
    image: slider3,
    progress: "w-full"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-[600px] lg:h-[740px] mt-20 lg:mt-24 overflow-hidden group">
      {/* Background Images with Crossfade */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[#080808]/70" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative container mx-auto px-6 lg:px-16 h-full flex items-center">
        <div className="max-w-3xl space-y-10 lg:space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
          
          <div className="space-y-6">
            <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              {SLIDES[current].title}
            </h1>
            <p className="text-white text-lg lg:text-xl font-normal leading-relaxed opacity-90 max-w-2xl">
              {SLIDES[current].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-12">
            {/* Action Button styled as per Figma "White button" */}
            <Link 
              to="/who-we-are"
              className="inline-flex h-12 bg-white rounded-none shadow-xl hover:bg-gray-100 transition-all group/btn"
            >
              <span className="px-8 flex items-center justify-center text-[#080808] text-sm font-bold tracking-wider">
                WHO WE ARE
              </span>
              <span className="px-4 flex items-center justify-center border-l border-gray-200">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover/btn:translate-x-1 transition-transform">
                  <path d="M7 15l5-5-5-5" stroke="#080808" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>

            {/* Slider Controls Container */}
            <div className="flex items-center gap-6">
              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-[#F9E745] hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-[#F9E745] hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar (Figma spec: 334px width) */}
              <div className="relative w-48 lg:w-[334px] h-[6px] bg-white/30 rounded-full overflow-hidden">
                <div 
                  className={`absolute top-0 left-0 h-full bg-[#F9E745] transition-all duration-700 ease-out ${SLIDES[current].progress}`}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}