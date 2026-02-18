import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function MandateFAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What is Pi-CNG, and how does it work?",
      answer: "Pi-CNG (Presidential Initiative on Compressed Natural Gas) is a government program that promotes the use of CNG as an alternative fuel for vehicles. It works by converting existing petrol/diesel vehicles to run on compressed natural gas, which is cleaner, more affordable, and locally sourced.",
    },
    {
      id: 2,
      question: "Which vehicles can use CPI under the Pi-CNG initiative?",
      answer: "Most petrol and diesel-powered vehicles including cars, commercial vehicles, buses, and tricycles can be converted to run on CNG. The Pi-CNG program provides conversion kits and certified conversion centers to ensure safe and proper installation.",
    },
    {
      id: 3,
      question: "How safe is CNG compared to petrol or diesel for transportation?",
      answer: "CNG is actually safer than petrol or diesel in many ways. It is lighter than air and dissipates quickly in case of a leak, reducing fire risks. CNG tanks are built to rigorous safety standards and are more robust than petrol tanks. The fuel system undergoes strict testing and certification.",
    },
    {
      id: 4,
      question: "What are the cost benefits of using CNG for personal or commercial vehicles?",
      answer: "CNG costs significantly less than petrol or diesel - typically 50-70% cheaper per kilometer. For commercial vehicle owners and transport operators, this translates to substantial savings on fuel costs, faster return on investment, and improved profitability. Additionally, CNG vehicles often have lower maintenance costs.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f9e745] flex items-center justify-center">
                <span className="text-xl">💬</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#1bad50] flex items-center justify-center -ml-3">
                <span className="text-xl">💡</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#fefdec] flex items-center justify-center -ml-3">
                <span className="text-xl">❓</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600">
            Have other questions?{' '}
            <a href="/contact" className="text-[#1bad50] hover:underline font-medium">
              Contact Us 👋
            </a>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 lg:px-10 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base lg:text-lg text-gray-900 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openItem === item.id ? (
                    <Minus className="w-6 h-6 text-[#1bad50]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openItem === item.id && (
                <div className="px-8 lg:px-10 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
