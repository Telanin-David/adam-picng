import imgAboutImage from "@/assets/images/cng-car-structure.png";

export function AboutSection() {
  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Changed items-end to items-center to align text to the middle of the image */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1bad50]">
              About Us
            </h2>
            <div className="text-gray-700 text-base lg:text-lg leading-relaxed space-y-4">
              <p>
                The Presidential Initiative on Compressed Natural Gas and Electric Vehicles (Pi-CNG & EV) is a flagship programme 
                of the Federal Government of Nigeria launched in 2023 to fast-track the 
                nation’s transition to cleaner, more affordable, and more sustainable 
                transportation energy sources.
              </p>
              <p>
                Rooted in the Renewed Hope Agenda, the initiative promotes the widespread 
                adoption of Compressed Natural Gas (CNG) and electric vehicles especially 
                in mass transit systems driving cost savings, job creation, energy security, 
                and environmental sustainability.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="order-first lg:order-last">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 shadow-2xl">
              <img
                src={imgAboutImage}
                alt="About Pi-CNG"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}