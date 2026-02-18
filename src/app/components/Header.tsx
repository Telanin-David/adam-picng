import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import imgPicngBlackLogo from "../../assets/images/pi-CNG-blacK-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { 
      label: 'Who We Are', 
      href: '/who-we-are',
      dropdown: [
        { label: 'Meet the team', href: '/team' },
        { label: 'Mandate', href: '/mandate' },
        { label: 'Conversion Centers', href: '/conversion-centers' },
        { label: 'EV Projects', href: '/projects' },
      ]
    },
    { 
      label: 'Departments', 
      href: '/departments',
     
    },
    { 
      label: 'News', 
      href: '/news',
      dropdown: [
        { label: 'Newsletters', href: '/newsletter' },
        { label: 'Testimonials', href: '/testimonials' },
      ]
    },
    { label: 'Partners', href: '/partners' },
  ];

  const isActive = (href: string) => {
    return href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm font-sans">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={imgPicngBlackLogo} alt="Pi-CNG Logo" className="h-8 lg:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div 
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`px-5 py-2.5 text-sm rounded-2xl transition-all flex items-center gap-1.5 ${
                    isActive(link.href) 
                      ? 'bg-[#fefdec] text-[#1bad50] font-medium' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.label ? 'rotate-180 text-[#1bad50]' : 'text-gray-400'}`} />
                  )}
                </Link>

                {/* Desktop Dropdown - Styled per your Figma snippet */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-3 w-[220px] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-[#FEFDEC] shadow-[0px_69px_55px_rgba(0,0,0,0.07)] rounded-[16px] overflow-hidden p-2 border border-[#fdfbd4]">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-4 py-3 text-[14px] text-[#080808] hover:bg-[#1bad50]/5 hover:text-[#1bad50] rounded-xl transition-colors font-normal"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="flex items-center bg-[#1bad50] text-white hover:bg-[#159643] transition-all rounded-lg overflow-hidden group shadow-md shadow-green-100">
              <span className="px-7 py-3.5 text-sm font-bold tracking-wide">CONTACT US</span>
              <span className="px-4 py-3.5 border-l border-white/20 bg-black/10">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                   <path d="M7 15l5-5-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-800 rounded-lg hover:bg-gray-50">
            {isMenuOpen ? <X className="w-6 h-6 text-[#1bad50]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Sidebar Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto animate-in slide-in-from-right duration-300">
            <nav className="p-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-50 last:border-0 pb-2">
                  <div 
                    className={`flex items-center justify-between py-4 ${isActive(link.href) ? 'text-[#1bad50]' : 'text-gray-900'}`}
                    onClick={() => link.dropdown && setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  >
                    <Link to={link.href} className="text-lg font-semibold" onClick={() => !link.dropdown && setIsMenuOpen(false)}>
                      {link.label}
                    </Link>
                    {link.dropdown && <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />}
                  </div>
                  
                  {link.dropdown && openDropdown === link.label && (
                    <div className="bg-[#fefdec]/50 rounded-2xl mb-4 overflow-hidden">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-6 py-4 text-sm text-gray-700 active:bg-[#fefdec]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link 
                  to="/contact" 
                  className="w-full bg-[#1bad50] text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT US
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}