import img1258231 from "@/assets/images/a81b7280f499db3037ff111efd6c9d21de761ffe.png";

export function MapSection() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] lg:aspect-[21/9]">
          <img
            src={img1258231}
            alt="Pi-CNG Office Location Map"
            className="w-full h-full object-cover"
          />
          
          {/* Optional: Overlay with address */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
            <div className="max-w-2xl">
              <h3 className="text-white text-xl lg:text-2xl font-bold mb-2">
                Visit Our Office
              </h3>
              <p className="text-white/90 text-sm lg:text-base">
                First floor, wing B NDPHC, Samuel Ademulegun Ave, Central Business District, Abuja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
