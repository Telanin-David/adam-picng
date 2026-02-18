import React from 'react';

// Helper for complex Figma icons
const ProgramIcon = ({ type }: { type: string }) => {
  const containerClass = "w-[34px] h-[34px] relative overflow-hidden";
  
  switch (type) {
    case 'incentive': return (
      <div className={containerClass}>
        <div className="w-[30.94px] h-[21.89px] left-[1.53px] top-[8.32px] absolute bg-[#35A880]" />
        <div className="w-[28.86px] h-[11.44px] left-[3.61px] top-[14.42px] absolute bg-[#1FC091]" />
        <div className="w-[5.01px] h-[5.02px] left-[20.24px] top-[0.53px] absolute bg-[#53BBF3]" />
      </div>
    );
    case 'deployment': return (
      <div className={containerClass}>
        <div className="w-[21.96px] h-[19.11px] left-0 top-[4.55px] absolute bg-[#FFD15C]" />
        <div className="w-[11.5px] h-[12.72px] left-[21.96px] top-[10.94px] absolute bg-[#FF7058]" />
        <div className="w-[34px] h-[4.89px] left-0 top-[21.17px] absolute bg-[#334A5E]" />
      </div>
    );
    case 'expansion': return (
      <div className={containerClass}>
        <div className="w-[25.3px] h-[20.04px] left-[0.5px] top-[5.7px] absolute bg-[#707DD3]" />
        <div className="w-[15.01px] h-[8.76px] left-[10.77px] top-[5.61px] absolute bg-[#5766CB]" />
        <div className="w-[8.03px] h-[9.36px] left-[10.03px] top-[21.5px] absolute bg-[#5E6B75]" />
      </div>
    );
    case 'training': return (
      <div className={containerClass}>
        <div className="w-[29.36px] h-[14.1px] left-[2.32px] top-[19.91px] absolute bg-[#3C5174]" />
        <div className="w-[16.43px] h-[11.28px] left-[8.79px] top-[7.63px] absolute bg-[#FEC9A3]" />
        <div className="w-[13.89px] h-[8.44px] left-[10.06px] top-[-0.01px] absolute bg-[#3C5174]" />
      </div>
    );
    case 'infrastructure': return (
      <div className={containerClass}>
        <div className="w-[18.15px] h-[30.89px] left-[3.67px] top-[0.77px] absolute bg-[#FF8C01]" />
        <div className="w-[12.62px] h-[8.61px] left-[6.44px] top-[3.41px] absolute bg-[#C8E5FC]" />
        <div className="w-[25.49px] h-[2.06px] left-0 top-[31.66px] absolute bg-[#636570]" />
      </div>
    );
    case 'transport': return (
      <div className={containerClass}>
        <div className="w-[20.36px] h-[29.3px] left-[6.74px] top-0 absolute bg-[#FFC477]" />
        <div className="w-[17.36px] h-[22.57px] left-[16.6px] top-[11.43px] absolute bg-[#4CBA68]" />
        <div className="w-[12.17px] h-[4.33px] left-[19.19px] top-[13.63px] absolute bg-[#1E81CE]" />
      </div>
    );
    case 'emissions': return (
      <div className={containerClass}>
        <div className="w-[29.75px] h-[10.63px] left-[2.13px] top-[10.63px] absolute bg-[#3CC8B4]" />
        <div className="w-[21.25px] h-[8.5px] left-[6.38px] top-[2.13px] absolute bg-[#F0F0F0]" />
        <div className="w-[7.44px] h-[3.19px] left-[3.19px] top-[12.75px] absolute bg-[#FA6450]" />
      </div>
    );
    case 'employment': return (
      <div className={containerClass}>
        <div className="w-[32.04px] h-[11.15px] left-[0.98px] top-[11.28px] absolute bg-[#0ED290]" />
        <div className="w-[6.14px] h-[6.14px] left-[19.59px] top-0 absolute bg-[#C96E59]" />
        <div className="w-[5.7px] h-[6.11px] left-[20.04px] top-[0.04px] absolute bg-[#BB5D4C]" />
      </div>
    );
    case 'investment': return (
      <div className={containerClass}>
        <div className="w-[23.23px] h-[20.72px] left-[1.06px] top-[12.21px] absolute bg-[#2D9739]" />
        <div className="w-[20.04px] h-[20.22px] left-[4.25px] top-[12.71px] absolute bg-[#44BC59]" />
        <div className="w-[14.63px] h-[18.82px] left-[17px] top-[1.38px] absolute bg-[#F3A606]" />
      </div>
    );
    default: return null;
  }
};

export function StrategicProgrammeSection() {
  const programs = [
    { type: 'incentive', title: "Conversion Incentive Programme", desc: "Offers free conversion (labor inclusive) for eligible union-registered commercial vehicles and ride-share fleets. Operators like Uber/Bolt can access 50% subsidized conversions." },
    { type: 'deployment', title: "Platform Deployment Programme", desc: "Launching thousands of CNG or bi-fuel buses and tricycles on major national transit corridors." },
    { type: 'expansion', title: "Conversion Centre Expansion Programme", desc: "Scaling from pilot workshops to an expansive network." },
    { type: 'training', title: "Training & Capacity Building", desc: "Training 1,000 technicians and support staff in pilot phase; targeting 10,000 by 2027 to build local skills." },
    { type: 'infrastructure', title: "Refuelling & Gas Infrastructure", desc: "Rolling out both traditional refuelling stations and gas distribution hubs to support an expanding CNG ecosystem." },
    { type: 'transport', title: "Lower Transport Costs", desc: "Drive down expenses for drivers and commuters by providing low-cost, locally sourced CNG." },
    { type: 'emissions', title: "Clean Emissions", desc: "Cut harmful CO₂ and NOₓ emissions to support Nigeria's climate goals and improve air quality." },
    { type: 'employment', title: "Generate Employment", desc: "Create jobs in conversion workshops, fuel distribution, and allied services. Empower technicians with necessary skills." },
    { type: 'investment', title: "Attract Investments", desc: "Mobilize public and private capital into Nigeria's gas economy, funding infrastructure and mass vehicle deployment." }
  ];

  return (
    <section className="py-20 bg-[#F7F8FA] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-[796px] mx-auto">
          <div className="flex items-center gap-4">
            <h2 className="text-[#080808] text-2xl lg:text-[32px] font-bold">
              Strategic Implementation programme
            </h2>
            <div className="w-[43px] h-[1px] bg-[#080808]" />
          </div>
          <p className="text-[#080808] text-lg font-normal leading-relaxed opacity-80">
            Comprehensive programme designed to accelerate CNG adoption across Nigeria's transportation sector.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 items-stretch">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className="bg-white p-8 lg:p-10 rounded-[24px] shadow-sm flex flex-col gap-4 transition-all hover:shadow-md border border-transparent hover:border-gray-100"
            >
              <div className="w-[60px] h-[60px] bg-[#FEFDEC] rounded-[24px] flex items-center justify-center flex-shrink-0">
                <ProgramIcon type={prog.type} />
              </div>
              
              <div className="flex flex-col gap-3 flex-grow">
                <h3 className="text-[#080808] text-base lg:text-lg font-bold leading-tight">
                  {prog.title}
                </h3>
                <p className="text-[#080808] text-sm font-normal leading-relaxed opacity-70">
                  {prog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}