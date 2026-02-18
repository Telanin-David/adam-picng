import imgWhatsAppImage20260203At90417Am2 from "@/assets/images/e9e27f54e92c12e67eb7e5c5f70961b732b6788f.png";

export function ProjectsHero() {
  return (
    <section className="relative h-[500px] lg:h-[600px] mt-20 lg:mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgWhatsAppImage20260203At90417Am2}
          alt="Electric vehicles in Nigeria"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-center space-y-5 lg:space-y-6 max-w-4xl">
        <h1 className="text-white text-4xl lg:text-5xl font-bold text-center leading-tight">
          EV 40+: The Future of Mobility in Nigeria is Here.
        </h1>
        
        <p className="text-white text-base lg:text-lg text-center max-w-3xl leading-relaxed">
          From electric buses to innovative charging solutions—we are ready for a cleaner transport future.
        </p>
        
        {/* Decorative Yellow Line */}
        <div className="w-28 h-2 bg-[#f9e745] rounded-full" />
      </div>
    </section>
  );
}
