import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import img58751 from "@/assets/images/newsletter.png";

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Subscribe to our newsletter
          </h2>
          <div className="h-0.5 bg-[#1bad50] w-full max-w-4xl" />
        </div>

        {/* Newsletter Form and Image */}
        <div className="grid lg:grid-cols-[410px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Side - Newsletter Image */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-[#1bad50] rounded-3xl overflow-hidden aspect-[410/339]">
              <img
                src={img58751}
                alt="Newsletter subscription"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Subscription Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Submit details to help us get back to you.
              </h3>
              
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-[#1bad50] rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    You've successfully subscribed to our newsletter.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-base text-gray-900 mb-3">
                        First Name <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required
                        className="w-full h-15 px-7 py-4 bg-white border border-gray-200 rounded-2xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1bad50] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-base text-gray-900 mb-3">
                        Last Name <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        required
                        className="w-full h-15 px-7 py-4 bg-white border border-gray-200 rounded-2xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1bad50] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-base text-gray-900 mb-3">
                      Email Address <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="w-full h-15 px-7 py-4 bg-white border border-gray-200 rounded-2xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1bad50] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group flex items-center bg-[#1bad50] text-white hover:bg-[#159643] transition-all duration-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                  >
                    <span className="px-7 py-3.5 text-base font-medium">SUBSCRIBE</span>
                    <span className="px-4 py-3.5 border-l border-white/20">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
