import imgPartnersHero from "@/assets/images/32040281f3eaf43e4f2a928025185e2eb1daa24a.png";

export function PartnersHero() {
  return (
    <section className="relative h-[350px] lg:h-[450px] mt-20 lg:mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgPartnersHero}
          alt="Our Partners"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-center space-y-8">
        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Our Partners
        </h1>
        
        {/* Decorative Line */}
        <div className="w-28 h-2 bg-[#f9e745] rounded-full" />
      </div>
    </section>
  );
}
