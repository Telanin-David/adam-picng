import imgAboutHero from "@/assets/images/Hero-Section.png";

export function WhoWeAreHero() {
  return (
    <section className="relative h-[400px] lg:h-[500px] mt-20 lg:mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgAboutHero}
          alt="EV Charging Stations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex items-center justify-center">
        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Who We Are
        </h1>
      </div>
    </section>
  );
}
