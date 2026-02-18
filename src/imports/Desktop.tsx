import { useState } from 'react';
import { Search, ChevronDown, Filter, Menu, X, ArrowRight, MessageCircle, Newspaper, PlusCircle } from 'lucide-react';

// Cloud-based Image Assets Mapping
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&q=80&w=1440",
  impact: "https://images.unsplash.com/photo-1594144408212-9c60965706a1?auto=format&fit=crop&q=80&w=1440",
  about: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
  vision: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
  mission: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
  news1: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?auto=format&fit=crop&q=80&w=600",
  news2: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
  news3: "https://images.unsplash.com/photo-1504384308090-c89eecbb98a1?auto=format&fit=crop&q=80&w=600",
  partner1: "https://logo.clearbit.com/nnpcgroup.com",
  partner2: "https://logo.clearbit.com/totalenergies.com",
  partner3: "https://logo.clearbit.com/shell.com"
};

// --- Sub-Components ---

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-20 z-50 border-b flex items-center px-16 justify-between">
      <div className="font-bold text-2xl text-[#1bad50]">Pi-CNG</div>
      <nav className="hidden lg:flex gap-8 text-sm font-medium">
        {['Home', 'Who We Are', 'Departments', 'News'].map((item) => (
          <a key={item} href="#" className="text-gray-800 hover:text-[#1bad50]">{item}</a>
        ))}
      </nav>
      <button className="bg-[#1bad50] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#159643] transition-all">
        CONTACT US <ArrowRight size={16} />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[740px] mt-20 overflow-hidden flex items-center">
      <img src={IMAGES.hero} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-16 text-white max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">Fuels That Work For Nigerians</h1>
        <p className="text-xl opacity-90 mb-10 leading-relaxed">
          CNG is affordable, reliable, and made for today’s Nigeria. It helps drivers and businesses reduce fuel costs without sacrificing performance.
        </p>
        <button className="bg-white text-black px-8 py-4 font-bold flex items-center gap-2 hover:bg-gray-100 transition-all">
          WHO WE ARE <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function StatsRibbon() {
  const stats = [
    { label: 'Vehicle Converted', val: '15,000+' },
    { label: 'Conversion Centres', val: '300+' },
    { label: 'Refueling Stations', val: '40+' },
    { label: 'Green Impact', val: 'High' }
  ];
  return (
    <div className="bg-white py-12 border-b">
      <div className="container mx-auto px-16 flex justify-between">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <h4 className="text-2xl font-bold text-[#1bad50]">{s.val}</h4>
            <p className="text-gray-500 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main Page Assembly ---

export default function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-green-100">
      <Header />
      <Hero />
      <StatsRibbon />
      
      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-16 flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <span className="text-[#1bad50] font-bold tracking-widest text-sm">ABOUT US</span>
            <h2 className="text-4xl font-bold mt-4 mb-6">Empowering a Cleaner, Cheaper Future Together</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Driving affordability, environmental sustainability, and local empowerment through a nationally-led CNG vehicle conversion and deployment programme.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-6">
            <div className="bg-[#fefdec] p-8 rounded-3xl flex gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm h-fit"><PlusCircle className="text-blue-500" /></div>
              <div>
                <h3 className="font-bold text-lg">Our Vision</h3>
                <p className="text-sm text-gray-600 mt-2">Achieve universal access to affordable, reliable gas and EV infrastructure.</p>
              </div>
            </div>
            <div className="bg-[#e8f7ee] p-8 rounded-3xl flex gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm h-fit"><PlusCircle className="text-green-500" /></div>
              <div>
                <h3 className="font-bold text-lg">Our Mission</h3>
                <p className="text-sm text-gray-600 mt-2">Drive 30% gas adoption rate for Nigerians through strategic partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <img src={IMAGES.impact} className="absolute inset-0 w-full h-full object-cover" alt="Impact" />
        <div className="absolute inset-0 bg-[#080808]/80" />
        <div className="relative text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Impact So Far</h2>
          <div className="w-20 h-1 bg-[#f9e745] mx-auto mb-8" />
          <p className="text-3xl font-light">Thousands of lives changed through cleaner energy.</p>
        </div>
      </section>

      {/* Floating Action Button (Chat) */}
      <div className="fixed bottom-8 right-8 bg-[#1bad50] p-5 rounded-full text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
        <MessageCircle size={32} />
      </div>

      {/* Footer Placeholder */}
      <footer className="bg-[#080808] py-20 text-white border-t border-gray-800">
        <div className="container mx-auto px-16 text-center opacity-60">
          <p>© 2026 - Presidential Initiative on CNG (Pi-CNG)</p>
        </div>
      </footer>
    </div>
  );
}