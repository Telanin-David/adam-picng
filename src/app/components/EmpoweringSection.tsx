import imgEmpowering1 from "@/assets/images/slash.png";
import imgEmpowering2 from "@/assets/images/cleaner.png";

export function EmpoweringSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F6F6F6] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Heading & Large Main Image */}
          <div className="flex flex-col gap-10">
            <div className="space-y-4 max-w-xl">
              <span className="text-[#1BAD50] font-medium tracking-wide uppercase text-sm">
                ABOUT US
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#080808] leading-tight">
                Empowering a Cleaner, Cheaper Future Together
              </h2>
              <p className="text-[#080808] text-lg opacity-80 leading-relaxed">
                Driving affordability, environmental sustainability, and local empowerment 
                through a nationally-led CNG vehicle conversion and deployment programme.
              </p>
            </div>
            
            {/* Main Featured Image */}
            <div className="rounded-[20px] overflow-hidden bg-black aspect-[4/3] shadow-lg">
              <img 
                src={imgEmpowering1} 
                alt="CNG Empowerment" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Vision & Mission Stacked Cards */}
          <div className="flex flex-col gap-10 lg:pt-8">
            
            {/* Vision Card */}
            <div className="relative group rounded-[24px] overflow-hidden bg-white shadow-sm h-[320px]">
              {/* Image background (top part) */}
              <div className="h-2/3 bg-gray-200 overflow-hidden">
                <img 
                  src={imgEmpowering2} 
                  alt="Our Vision" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Overlapping Content Box */}
              <div className="absolute bottom-0 left-0 w-full bg-[#FEFDEC] p-6 lg:p-8 rounded-t-[20px] h-[160px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {/* Simplified Vision Icon based on your raw SVG */}
                    <div className="w-5 h-4 bg-[#292E34] rounded-sm relative">
                      <div className="absolute inset-1 bg-blue-100 rounded-full scale-50" />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#080808] text-lg">Vision</h3>
                </div>
                <p className="text-sm lg:text-base text-[#080808] leading-relaxed">
                  To achieve universal access to affordable, reliable and sustainable gas and EV infrastructure, 
                  enabling cleaner, safer and more inclusive transportation for all.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative group rounded-[24px] overflow-hidden bg-white shadow-sm h-[320px]">
              <div className="h-2/3 bg-gray-200 overflow-hidden">
                {/* Reusing imgEmpowering1 or a relevant asset for Mission */}
                <img 
                  src={imgEmpowering1} 
                  alt="Our Mission" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Overlapping Content Box */}
              <div className="absolute bottom-0 left-0 w-full bg-[#E8F7EE] p-6 lg:p-8 rounded-t-[20px] h-[160px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[#F05458] flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <h3 className="font-bold text-[#080808] text-lg">Mission</h3>
                </div>
                <p className="text-sm lg:text-base text-[#080808] leading-relaxed">
                  To drive gas and EV adoption rate for every Nigerian by 30% through ensuring acceptability, 
                  availability, and affordability through strategic partnerships and innovative financing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}