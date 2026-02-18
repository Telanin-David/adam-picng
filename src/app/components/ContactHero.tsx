import imgWhatsAppImage20260203At90419Am24 from "@/assets/images/slash.png";

export function ContactHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] mt-20 lg:mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgWhatsAppImage20260203At90419Am24}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-center space-y-6">
        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Contact Us
        </h1>
        
        {/* Decorative Yellow Line */}
        <div className="w-28 h-2 bg-[#f9e745] rounded-full" />
      </div>
    </section>
  );
}
