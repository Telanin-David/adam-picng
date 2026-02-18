import imgVision from "@/assets/images/vision.png";
import imgMission from "@/assets/images/mission.png";

// Icons remain the same...
const IconVision = () => (
  <div className="w-6 h-6 relative overflow-hidden">
    <div className="w-[4.84px] h-[3.5px] left-[5.16px] top-[4px] absolute bg-[#292E34]" />
    <div className="w-[4.86px] h-[3.5px] left-[13.99px] top-[4px] absolute bg-[#292E34]" />
    <div className="w-[10.5px] h-[10.5px] left-[1px] top-[10px] absolute bg-[#4D5258]" />
    <div className="w-[6.94px] h-[6.94px] left-[2.78px] top-[11.78px] absolute bg-[#DEF3FF]" />
  </div>
);

const IconMission = () => (
  <div className="w-6 h-6 relative overflow-hidden">
    <div className="w-[19.02px] h-[19.02px] left-[2.49px] top-[2.49px] absolute bg-[#F05458]" />
    <div className="w-[15.81px] h-[15.81px] left-[4.1px] top-[4.1px] absolute bg-[#F4F4F3]" />
    <div className="w-[4.6px] h-[7.15px] left-[11.53px] top-[5.33px] absolute bg-[#F2B895]" />
  </div>
);

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center gap-12 lg:gap-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-[#080808] text-2xl lg:text-[32px] font-bold">
            Our Vision and Mission
          </h2>
          <div className="w-[43px] h-[1px] bg-[#080808]" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-[886px] items-start">
          
          {/* Vision Card */}
          <div className="w-full relative bg-[#F6F6F6] rounded-[24px] overflow-hidden min-h-[400px]">
            {/* Image Container */}
            <div className="w-full h-[249px] bg-[#080808] overflow-hidden">
              <img 
                src={imgVision} 
                alt="Vision" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Overlapping Content Box - Changed h-[156px] to min-h-[160px] */}
            <div className="absolute top-[205px] left-0 w-full min-h-[160px] bg-[#FEFDEC] rounded-[20px] p-6 lg:p-8 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-2">
                <IconVision />
                <h3 className="text-[#080808] text-base font-bold">Vision</h3>
              </div>
              <p className="text-[#080808] text-sm font-normal leading-relaxed">
                To achieve universal access to affordable, reliable and sustainable gas and EV infrastructure, enabling cleaner, safer and more inclusive transportation for all.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="w-full relative bg-[#F6F6F6] rounded-[24px] overflow-hidden min-h-[400px]">
            {/* Image Container */}
            <div className="w-full h-[249px] bg-[#080808] overflow-hidden">
              <img 
                src={imgMission} 
                alt="Mission" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Overlapping Content Box - Changed h-[156px] to min-h-[160px] and added padding-bottom */}
            <div className="absolute top-[215px] left-0 w-full min-h-[160px] bg-[#E8F7EE] rounded-[20px] p-6 lg:p-8 flex flex-col gap-2 shadow-sm pb-10">
              <div className="flex items-center gap-2">
                <IconMission />
                <h3 className="text-[#080808] text-base font-bold">Mission</h3>
              </div>
              <p className="text-[#080808] text-sm font-normal leading-relaxed">
                To drive gas and EV adoption rate for every Nigerian by 30% through ensuring acceptability, availability, and affordability through strategic partnerships, innovative financing, and sustained public awareness and capacity-building initiatives.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}