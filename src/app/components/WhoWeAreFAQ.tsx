import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function WhoWeAreFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Pi-CNG and what does it aim to achieve?",
      answer:
        "Pi-CNG (Presidential Initiative on Compressed Natural Gas) is a Federal Government initiative launched in 2023 to transition Nigeria to cleaner, more affordable transportation energy. We aim to make CNG and electric vehicles the preferred choice for Nigerian transportation, reducing dependence on petrol and diesel.",
    },
    {
      question: "What services are provided by Pi-CNG (Automobile)?",
      answer:
        "We provide comprehensive CNG conversion services, access to a growing network of refueling stations, financing options for conversion, capacity building programs, and ongoing support for CNG vehicle owners. We also work with stakeholders to expand infrastructure nationwide.",
    },
    {
      question: "How can CNG/EV save operators in terms of logistics or service costs?",
      answer:
        "CNG is 40-50% cheaper than petrol, leading to significant operational cost savings. Electric vehicles have even lower running costs with minimal maintenance requirements. For fleet operators, this translates to substantial savings on fuel and maintenance expenses, improving profitability.",
    },
    {
      question: "What are the advantages of using CNG in logistics or service sectors?",
      answer:
        "Beyond cost savings, CNG offers environmental benefits with up to 80% reduction in emissions, ensuring regulatory compliance. It provides reliable fuel supply, extends engine life through cleaner combustion, and enhances corporate image through demonstrated commitment to sustainability.",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1bad50] rounded-2xl mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-[#1bad50] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between p-6 lg:p-8 text-left group"
                >
                  <span className="font-semibold text-base lg:text-lg text-gray-900 pr-4 group-hover:text-[#1bad50] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-gray-300 group-hover:border-[#1bad50] flex items-center justify-center transition-all">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-[#1bad50]" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600 group-hover:text-[#1bad50]" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
