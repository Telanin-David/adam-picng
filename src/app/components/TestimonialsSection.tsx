import { TestimonialCard } from './TestimonialCard';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "I travel between Ibadan and Lagos weekly. The savings on that route alone have already paid for my conversion cost in just three months. Finding Pi-CNG stations is easy, and the staff are always helpful. I can't imagine going back to petrol.",
      name: "Chinedu O.",
      location: "Lagos",
      rating: 5,
    },
    {
      id: 2,
      quote: "I travel between Ibadan and Lagos weekly. The savings on that route alone have already paid for my conversion cost in just three months. Finding Pi-CNG stations is easy, and the staff are always helpful. I can't imagine going back to petrol.",
      name: "Chinedu O.",
      location: "Lagos",
      rating: 5,
    },
    {
      id: 3,
      quote: "I travel between Ibadan and Lagos weekly. The savings on that route alone have already paid for my conversion cost in just three months. Finding Pi-CNG stations is easy, and the staff are always helpful. I can't imagine going back to petrol.",
      name: "Chinedu O.",
      location: "Lagos",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-3">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            98% CUSTOMER SATISFACTION
          </h2>
          <p className="text-xl lg:text-2xl text-gray-900">
            15,000+ HAPPY CUSTOMERS
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mt-4">
            Real experiences from Nigerians who've made the switch to CNG. Discover how Pi-CNG is transforming lives, businesses, and communities across the nation.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
