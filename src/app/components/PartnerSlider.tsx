import { useRef } from 'react';
import imgPartner1 from "@/assets/images/3e2e1731540f2a6ef01d6bbbd6b2c7b3c93dde13.png";
import imgPartner2 from "@/assets/images/5d0f6644c9f5ac812fa8c185c0f3ac668adb4e7d.png";
import imgPartner3 from "@/assets/images/af84c8ea73b44915ca6a5fa72bf99a91dc1e808f.png";
import imgPartner4 from "@/assets/images/32bd6399a281fab39caae9e41371c7054d9fcca7.png";
import imgPartner5 from "@/assets/images/54a0872c10e5fb982b0528f088cb6da17571c588.png";
import imgPartner6 from "@/assets/images/430d0145363fb4497a66a17bc25ca5bb32f3c467.png";
import imgPartner7 from "@/assets/images/fe0d9e08401bfdcdb11f472d4876a0bfd517c0f9.png";
import imgPartner8 from "@/assets/images/d9fa4dbc73cb025ea02ac7303cd3c8eeda3288bf.png";
import imgPartner9 from "@/assets/images/a4eabb35d5c9389e0ae6ae11dab2e3d306eddde9.png";
import imgPartner10 from "@/assets/images/638406634158444867364d1b65baed8d0830db9d.png";
import imgPartner11 from "@/assets/images/0c58bf7a3cf793e6651490d2888c1fc0d9a5a91b.png";

export function PartnerSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partnerLogos = [
    imgPartner1, imgPartner2, imgPartner3, imgPartner4, imgPartner5,
    imgPartner6, imgPartner7, imgPartner8, imgPartner9, imgPartner10, imgPartner11
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Logic to scroll by the width of approximately two cards
      const scrollAmount = 400; 
      const scrollTo = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#F6F6F6] py-12">
      <div className="container mx-auto px-6 lg:px-16 relative">
        
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#F9E745] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform active:scale-95"
        >
          <svg className="w-5 h-5 rotate-180" viewBox="0 0 20 20" fill="none">
            <path d="M7 4l6 6-6 6" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Logo Container - Plain and Hidden Scrollbar */}
        <div 
          ref={scrollRef}
          className="flex items-center gap-5 overflow-x-hidden scroll-smooth py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {partnerLogos.map((logo, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[187px] h-[175px] bg-white rounded-[20px] flex items-center justify-center p-6"
            >
              <img 
                src={logo} 
                alt="Partner" 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#F9E745] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform active:scale-95"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M7 4l6 6-6 6" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </section>
  );
}