import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router';
import footerlogo from "@/assets/images/footer-logo.png";

export function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-16 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="h-14 w-auto">
              <img 
                src={footerlogo}
                alt="Pi-CNG Logo"
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="text-base text-white/90 leading-relaxed">
              <p className="mb-0">
                Get updates delivered to your inbox. You can also reach us via the email address below.
              </p>
              <a 
                href="mailto:info@pci.gov.ng"
                className="text-[#1bad50] hover:text-[#159643] transition-colors"
              >
                info@pci.gov.ng
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/mandate"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  The Mandate
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <a
                  href="conversion-centers"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  Conversion Centers
                </a>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/who-we-are"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Socials</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  <Twitter className="w-4 h-4" />
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[#1bad50] transition-colors text-base"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 lg:px-16 py-6">
          <div className="text-center md:text-left text-base text-white/80">
            <p>&copy; 2026 - Presidential Initiative on CNG (Pi-CNG)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}