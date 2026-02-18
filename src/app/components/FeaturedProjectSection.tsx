import imgImage5 from "@/assets/images/32040281f3eaf43e4f2a928025185e2eb1daa24a.png";

export function FeaturedProjectSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#f6f6f6]">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Project Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-black rounded-3xl overflow-hidden h-[280px] lg:h-[315px]">
              <img
                src={imgImage5}
                alt="Electrifying Mobility Fair 2025"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Content */}
          <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
            {/* Project Category */}
            <p className="text-[#1bad50] text-base font-medium">
              Our Projects
            </p>

            {/* Project Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Electrifying Mobility Fair 2025
            </h2>

            {/* Project Description */}
            <p className="text-gray-900 text-base lg:text-lg leading-relaxed">
              Today's event showcased how far Nigeria has come. A big thank you to all the 
              partners, media houses, and stakeholders who showed up in full force. The future 
              of mobility in Nigeria is here… and it's electric!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
