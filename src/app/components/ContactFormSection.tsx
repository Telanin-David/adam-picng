import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import img1843351 from "@/assets/images/08387e9bb7da0f945543b52797570666460d01bf.png";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Need some information? Reach out to us
          </h2>
          <div className="h-0.5 bg-[#1bad50] w-full max-w-4xl" />
        </div>

        {/* Form and Image Grid */}
        <div className="grid lg:grid-cols-[410px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gray-200 rounded-3xl overflow-hidden aspect-[410/579]">
              <img
                src={img1843351}
                alt="Customer service representative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Simple Contact Form</h3>
              
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

                {/* Email and Subject */}
                <div className="grid sm:grid-cols-2 gap-5">
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

                  <div>
                    <label htmlFor="subject" className="block text-base text-gray-900 mb-3">
                      Subject <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full h-15 px-7 py-4 bg-white border border-gray-200 rounded-2xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1bad50] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-base text-gray-900 mb-3">
                    Comments / Questions <span className="text-red-500 font-bold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Comments"
                    required
                    rows={6}
                    className="w-full px-7 py-4 bg-white border border-gray-200 rounded-2xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1bad50] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group flex items-center bg-[#1bad50] text-white hover:bg-[#159643] transition-all duration-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                >
                  <span className="px-7 py-3.5 text-base font-medium">SEND MESSAGE</span>
                  <span className="px-4 py-3.5 border-l border-white/20">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
