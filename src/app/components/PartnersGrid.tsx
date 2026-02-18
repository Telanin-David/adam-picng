import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
import imgPartner12 from "@/assets/images/531b3d0317b8bb8b2d269ca6e6df23ff2b085504.png";
import imgPartner13 from "@/assets/images/e921fe1d510c57b98f2be1d5edb8e97bbceb7f82.png";
import imgPartner14 from "@/assets/images/886286fa40b4972d976d5e814d0ac993a30356da.png";
import imgPartner15 from "@/assets/images/b4671d513f1ec10f937f55ca75d2f3df3747cfda.png";
import imgPartner16 from "@/assets/images/104a5e65d013f752b738b1495c7ddbf70a0fa1fa.png";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

export function PartnersGrid() {
  const partners: Partner[] = [
    { id: 1, name: "FIRS", logo: imgPartner1 },
    { id: 2, name: "NNPC", logo: imgPartner2 },
    { id: 3, name: "Holland Energy", logo: imgPartner3 },
    { id: 4, name: "Nationals", logo: imgPartner4 },
    { id: 5, name: "NCDMB", logo: imgPartner5 },
    { id: 6, name: "NEITI", logo: imgPartner6 },
    { id: 7, name: "Finance Ministry", logo: imgPartner7 },
    { id: 8, name: "SDF", logo: imgPartner8 },
    { id: 9, name: "GACN", logo: imgPartner9 },
    { id: 10, name: "Finance Group", logo: imgPartner10 },
    { id: 11, name: "Bolt", logo: imgPartner11 },
    { id: 12, name: "MOFI", logo: imgPartner12 },
    { id: 13, name: "PCF", logo: imgPartner13 },
    { id: 14, name: "DPR", logo: imgPartner14 },
    { id: 15, name: "LASG", logo: imgPartner15 },
    { id: 16, name: "NRTC", logo: imgPartner16 },
  ];

  // Group partners into rows of 4
  const rows = [];
  for (let i = 0; i < partners.length; i += 4) {
    rows.push(partners.slice(i, i + 4));
  }

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Building Strong Relationships
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="space-y-8 lg:space-y-12">
          {rows.map((row, rowIndex) => (
            <PartnerRow key={rowIndex} partners={row} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PartnerRowProps {
  partners: Partner[];
}

function PartnerRow({ partners }: PartnerRowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // For simplicity, we'll show all 4 on desktop, 2 on tablet, 1 on mobile
  // Mobile navigation uses simple left/right
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < partners.length - 1;

  const handlePrevious = () => {
    if (canGoLeft) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoRight) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="relative">
      {/* Desktop Grid - Shows all partners */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>

      {/* Tablet Grid - Shows 2 at a time */}
      <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-6">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>

      {/* Mobile Carousel - Shows 1 at a time */}
      <div className="sm:hidden relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {partners.map((partner) => (
              <div key={partner.id} className="w-full flex-shrink-0">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {partners.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              disabled={!canGoLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg transition-all ${
                canGoLeft
                  ? 'hover:bg-gray-50 cursor-pointer'
                  : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Previous partner"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900" />
            </button>

            <button
              onClick={handleNext}
              disabled={!canGoRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg transition-all ${
                canGoRight
                  ? 'hover:bg-gray-50 cursor-pointer'
                  : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Next partner"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>
          </>
        )}

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#1bad50] w-8'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to partner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PartnerCardProps {
  partner: Partner;
}

function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center aspect-square">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
