import imgWhatsAppImage20260203At90418Am23 from "@/assets/images/1c94135fbe3911064625628ceff56994ed6b37d7.png";

export function MandateHero() {
  return (
    <section className="relative h-[500px] lg:h-[600px] mt-20 lg:mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgWhatsAppImage20260203At90418Am23}
          alt="CNG vehicles"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-center space-y-5 lg:space-y-6 max-w-4xl">
        <h1 className="text-white text-4xl lg:text-5xl font-bold text-center">
          The Pi-CNG Mandate
        </h1>
        
        <p className="text-white text-base lg:text-lg text-center max-w-2xl leading-relaxed">
          The Presidential Initiative on Compressed Natural Gas and Electric vehicles (Pi-CNG & EV) 
          is a flagship programme of the Federal Government of Nigeria launched in 2023. Its primary 
          mandate is to fast-track Nigeria's transition to cleaner, more affordable, and sustainable 
          transportation energy sources following the removal of fuel subsidies.
        </p>
        
        {/* Decorative Yellow Line */}
        <div className="w-28 h-2 bg-[#f9e745] rounded-full" />
      </div>
    </section>
  );
}
