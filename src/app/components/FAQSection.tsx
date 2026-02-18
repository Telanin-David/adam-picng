import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// PART 1: The complex FAQ Logo extracted from your div wall
const FAQLogo = () => (
  <div className="w-[60px] h-[60px] relative overflow-hidden flex-shrink-0">
    <div className="w-[27.04px] h-[24.2px] left-[32.68px] top-[1.28px] absolute bg-[#9DC6FB]" />
    <div className="w-[34.5px] h-[30.88px] left-0 top-[27.84px] absolute bg-[#E27A66]" />
    <div className="w-[22.17px] h-[19.84px] left-[37.83px] top-[32.55px] absolute bg-[#FFE07D]" />
    <div className="w-[38.25px] h-[34.23px] left-[10.1px] top-[13.35px] absolute bg-[#F9F6F9]" />
    <div className="w-[21.39px] h-[19.14px] left-[1.37px] top-[1.28px] absolute bg-[#B3E59F]" />
    {/* Inner detail boxes */}
    <div className="w-[9.69px] h-[11.79px] left-[21.25px] top-[21.52px] absolute bg-[#5E54AC]" />
    <div className="w-[5.83px] h-[11.72px] left-[15.39px] top-[21.65px] absolute bg-[#5E54AC]" />
  </div>
);

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Pi-CNG, and how does it work?",
      answer: "Pi-CNG is Nigeria's presidential initiative to drive the adoption of Compressed Natural Gas. It works by providing infrastructure, conversion kits, and strategic partnerships to make cleaner energy accessible."
    },
    {
      question: "Which vehicles can use CNG under the Pi-CNG initiative?",
      answer: "Most petrol-powered vehicles, including passenger cars, buses, and light commercial vehicles, can be converted to run on a bi-fuel system (both petrol and CNG)."
    },
    {
      question: "How safe is CNG compared to petrol or diesel for transportation?",
      answer: "CNG is significantly safer; it is lighter than air and dissipates quickly if leaked, and has a higher ignition temperature than petrol."
    },
    {
      question: "What are the cost benefits of using CNG for personal or commercial vehicles?",
      answer: "Users typically save 40-70% on fuel costs compared to petrol, leading to rapid payback on conversion costs and lower long-term maintenance."
    }
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Title Area */}
          <div className="lg:w-[440px] flex flex-col gap-10">
            <div className="space-y-6">
              <FAQLogo />
              <h2 className="text-[#080808] text-4xl lg:text-5xl font-bold leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-[#080808] text-xl font-normal opacity-80">
                Have other questions?
              </p>
              <button className="inline-flex items-center gap-2 group transition-all">
                <span className="text-[#1BAD50] font-medium text-lg">Contact us</span>
                <div className="w-5 h-5 bg-[#1BAD50] rounded-sm flex items-center justify-center group-hover:translate-x-1 transition-transform">
                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Accordion List */}
          <div className="flex-1 flex flex-col border-t border-[#080808]/10">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-[#080808]/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 lg:py-10 flex items-center justify-between text-left group"
                >
                  <span className="text-[#080808] text-lg lg:text-xl font-medium pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Custom Circle/Plus Icon from your design */}
                  <div className="relative w-6 h-6 flex-shrink-0">
                    <div className="absolute inset-0 border-[1.5px] border-[#080808] rounded-full" />
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border-[1.5px] border-[#080808] transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`} />
                  </div>
                </button>

                {/* Animated Answer Box */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40 pb-10 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#080808]/70 text-base lg:text-lg leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
