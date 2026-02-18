import imgNewsletterHero from "@/assets/images/newsletter.png";

export function NewsletterHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] mt-20 lg:mt-24 overflow-hidden bg-gradient-to-br from-[#1bad50] to-[#159643]">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={imgNewsletterHero}
          alt="Newsletter"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold">
            Stay Updated
          </h1>
          <p className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates on Pi-CNG initiatives, news, and developments
          </p>
        </div>
        
        {/* Decorative Line */}
        <div className="w-28 h-2 bg-[#f9e745] rounded-full" />
      </div>
    </section>
  );
}
