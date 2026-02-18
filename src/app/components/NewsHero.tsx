import imgNewsHero from "@/assets/images/slash.png";

export function NewsHero() {
  return (
    <section className="relative h-[400px] lg:h-[500px] mt-20 lg:mt-24 overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgNewsHero}
          alt="CNG News and Updates"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-center space-y-8">
        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Stories & Updates
        </h1>
        
        {/* Decorative Line */}
        <div className="w-28 h-2 bg-[#f9e745] rounded-full" />
      </div>
    </section>
  );
}
