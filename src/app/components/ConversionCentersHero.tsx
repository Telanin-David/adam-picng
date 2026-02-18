import imgWhatsAppImage20260203At90419Am23 from "@/assets/images/men-working-on-car.png";

export function ConversionCentersHero() {
  return (
    <section className="relative h-[500px] lg:h-[600px] mt-20 lg:mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgWhatsAppImage20260203At90419Am23}
          alt="Conversion Centres"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-center space-y-5 lg:space-y-6">
        <h1 className="text-white text-4xl lg:text-5xl font-bold text-center leading-tight">
          Conversion Centres
        </h1>
        
        {/* Decorative Yellow Line */}
        <div className="w-28 h-2 bg-[#f9e745] rounded-full" />
      </div>
    </section>
  );
}
