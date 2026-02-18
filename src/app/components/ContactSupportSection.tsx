import { Mail, Phone, MapPin } from 'lucide-react';
import img1843491 from "@/assets/images/ce67955f97b25223b66401b6f68feabd406dcb93.png";

export function ContactSupportSection() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Contact Support
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Have questions or need assistance? Our team is here to help with all your enquiries. Whether you prefer to send an email, give us a call, or visit our office in Abuja, we are ready to support you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">General Enquiries</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1bad50]" />
                  </div>
                  <a 
                    href="mailto:info@pci.gov.ng"
                    className="text-lg text-gray-900 hover:text-[#1bad50] transition-colors"
                  >
                    info@pci.gov.ng
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#f9e745]" />
                  </div>
                  <a 
                    href="tel:+2347000000264"
                    className="text-lg text-gray-900 hover:text-[#1bad50] transition-colors"
                  >
                    +234 700 000 0264
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1bad50]" />
                  </div>
                  <address className="text-lg text-gray-900 not-italic leading-relaxed">
                    First floor, wing B NDPHC, Samuel<br />
                    Ademulegun Ave, Central Business<br />
                    District, Abuja
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative bg-gray-100 rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={img1843491}
                alt="Customer support representative"
                className="w-full h-full object-cover"
              />
              
              {/* Pi-CNG Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
                <p className="text-[#1bad50] font-bold text-lg">PI - CNG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
