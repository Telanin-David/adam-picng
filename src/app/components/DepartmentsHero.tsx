import imgDepartmentsHero from "@/assets/images/e9e27f54e92c12e67eb7e5c5f70961b732b6788f.png";

export function DepartmentsHero() {
  return (
    <section className="relative h-[400px] lg:h-[500px] mt-20 lg:mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgDepartmentsHero}
          alt="CNG Vehicles Fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-center space-y-8">
        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Departments
        </h1>
        
        {/* Decorative Line */}
        <div className="w-28 h-2 bg-[#f9e745] rounded-full" />
      </div>
    </section>
  );
}
