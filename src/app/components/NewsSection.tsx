import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import image1 from "@/assets/images/image-1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";


export function NewsSection() {
  const newsItems = [
    {
      image: image1,
      tag: "Recent",
      date: "Feb 02, 2026   l  8:45PM",
      title: "PRESS RELEASE: Pi-CNG signs Mou with YJT of China",
    },
    {
      image: image2,
      title: "Pi-CNG Inspects Bajaj's Two- and Three-Wheeler Manufacturing Plant",
      excerpt:
        "The Executive Chairman of Pi-CNG & EVs, Barr. Ismaeel Ahmed, recently conducted an inspection visit to the newly commissioned state-of-the-art Bajaj three...",
      readTime: "6 min. read",
    },
    {
      image: image3,
      title: "EV Fair: Electrifying Mobility",
      excerpt:
        "The Pi-CNG & EVs hosted an EV Fair: Electrifying Mobility at Eagle Square, Abuja — bringing together innovators, policymakers, OEMs, and clean energy...",
      readTime: "2 min. read",
    },
    {
      image: image4,
      title: "AKK Project - 2026 Unveiling",
      excerpt:
        "The Presidential Initiative on Compressed Natural Gas (Pi-CNG) and Electric Vehicles participated in the AKK Business Development Roadshow that took place...",
      readTime: "4 min. read",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12 gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                fill="#FD6930"
                d="M8.0513 2.50533L20.7238 11.3869L17.2307 16.3709L4.55822 7.48936L8.0513 2.50533Z"
              />
              <path
                fill="#CBC4CC"
                d="M23.1699 10.9079L21.7174 9.88857L13.8773 21.0631C13.7547 21.2381 13.6669 21.4269 13.6115 21.6215L16.5044 23.6517C15.6645 23.0623 15.4613 21.9033 16.0504 21.063L23.1699 10.9079Z"
              />
            </svg>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Latest Insights & Stories
            </h2>
          </div>
          {/* View All Button */}
          <Link 
            to="/news"
            className="group flex items-center bg-[#1bad50] text-white hover:bg-[#159643] transition-colors px-8 py-4 rounded-lg font-medium"
          >
            <span>View All News</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
          {/* Featured Article */}
          <div className="space-y-5">
            <div className="aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-2xl bg-gray-200">
              <ImageWithFallback
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="inline-flex px-3 py-1.5 bg-[#f83446] text-white text-sm font-semibold rounded-full">
                  {newsItems[0].tag}
                </span>
                <span className="text-sm lg:text-base text-gray-600">{newsItems[0].date}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl text-gray-900 leading-tight">
                {newsItems[0].title}
              </h3>
            </div>
          </div>

          {/* Article List */}
          <div className="space-y-6">
            {newsItems.slice(1).map((article, index) => (
              <article key={index} className="group">
                <div className="flex gap-4">
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-base lg:text-lg text-gray-900 leading-snug group-hover:text-[#1bad50] transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[#eda833]">Recent</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-600">{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-32 lg:w-40 aspect-[4/3] overflow-hidden rounded-xl bg-gray-200">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                {index < newsItems.slice(1).length - 1 && (
                  <div className="mt-6 h-px bg-gray-200" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}