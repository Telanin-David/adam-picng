import React from 'react';
import why from "@/assets/images/why.png";
import slash from "@/assets/images/slash.png";
import cleaner from "@/assets/images/cleaner.png";
import safer from "@/assets/images/safer.png";

export function WhyChooseHeader() {
  return (
    <div className="w-full bg-[#F6F6F6] py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative">
        
        {/* Decorative Top Title with Line */}
        <div className="flex items-center justify-center gap-2 mb-16">
          <h3 className="text-[#1BAD50] text-[32px] font-bold font-sans">
            Why Choose CNG
          </h3>
          <div className="w-[43px] h-[1px] bg-[#1BAD50]" />
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[40px]">
          
          {/* Left: Featured Image Box */}
          <div className="w-full max-w-[481px] h-[315px] relative bg-[#080808] overflow-hidden rounded-lg shadow-lg">
            <img 
              src={why} 
              alt="CNG Infrastructure" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full max-w-[424px] flex flex-col gap-4">
            <span className="text-[#1BAD50] text-base font-normal tracking-wide">
              Why Choose CNG
            </span>
            <div className="space-y-1.5">
              <h2 className="text-[#080808] text-3xl lg:text-[40px] font-bold leading-tight">
                Reliable Renewable Energy
              </h2>
            </div>
            <p className="text-[#080808] text-lg font-normal leading-relaxed opacity-90">
              Nigeria’s fuel subsidy removal has sharply increased petrol prices, 
              making CNG a strategic, cost-saving alternative. CNG offers a cleaner, 
              domestically powered fuel source that reduces your transport costs by up to 60%.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper components for those intricate Figma "div-icons"
const IconSlashFuel = () => (
  <div className="w-6 h-6 relative overflow-hidden flex-shrink-0 scale-110">
    <div className="w-[15.94px] h-[7.78px] left-[0.2px] top-[6.36px] absolute bg-[#FFA91A]" />
    <div className="w-[15.08px] h-[7.57px] left-[1.05px] top-[6.57px] absolute bg-[#EF7816]" />
    <div className="w-[4.18px] h-[4.18px] left-[6.08px] top-[8.39px] absolute bg-[#D10028]" />
    <div className="w-[5.8px] h-[2.88px] left-[17.76px] top-[8.11px] absolute bg-[#5E9CF7]" />
  </div>
);

const IconCleanerAlternative = () => (
  <div className="w-6 h-6 relative overflow-hidden flex-shrink-0 scale-110">
    <div className="w-[23.26px] h-[11.99px] left-[0.37px] top-[7.72px] absolute bg-[#01A754]" />
    <div className="w-[14.23px] h-[5.37px] left-[3.6px] top-[7.67px] absolute bg-[#A5DDF8]" />
    <div className="w-[7.63px] h-[7.87px] left-[15.63px] top-[1.79px] absolute bg-[#42C854]" />
  </div>
);

const IconSaferOption = () => (
  <div className="w-6 h-6 relative overflow-hidden flex-shrink-0 scale-110">
    <div className="w-3 h-[13.72px] left-0 top-[1.44px] absolute bg-[#FFDBCC]" />
    <div className="w-[6.12px] h-[5.41px] left-[6.35px] top-[16.21px] absolute bg-[#BDE55E]" />
    <div className="w-[5.65px] h-[5.41px] left-3 top-[16.21px] absolute bg-[#5AC77F]" />
  </div>
);

export function BenefitsGrid() {
  const benefits = [
    {
      title: "Slash Your Fuel Bill",
      description: "Save up to 60% on refueling costs compared to traditional petrol and diesel, providing significant economic relief for vehicle owners.",
      icon: <IconSlashFuel />,
      image: slash
    },
    {
      title: "Cleaner Alternative",
      description: "CNG emits lower carbon and nitrogen oxides, contributing to improved air quality and environmental sustainability.",
      icon: <IconCleanerAlternative />,
      image: cleaner
    },
    {
      title: "Safer Option",
      description: "It dissipates quickly if leaked and poses minimal explosion risk, making it a safer fuel alternative for vehicles.",
      icon: <IconSaferOption />,
      image: safer
    }
  ];

  return (
    <div className="w-full bg-[#F6F6F6] pb-24 pt-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="w-full max-w-[358px] h-[372px] relative bg-white rounded-[24px] overflow-hidden shadow-sm mx-auto"
            >
              {/* Card Image Area (Top 249px) */}
              <div className="w-full h-[249px] bg-[#080808] overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105" 
                />
              </div>

              {/* Floating Content Box (Overlapping Bottom) */}
              <div className="absolute top-[226px] left-0 w-full h-[146px] bg-white rounded-[20px] p-7 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-[#080808] text-base font-bold font-sans tracking-tight">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-[#080808] text-sm font-normal leading-relaxed opacity-80">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export function WhyChooseSection() {
  return (
    <section>
      <WhyChooseHeader />
      <BenefitsGrid />
    </section>
  );
}