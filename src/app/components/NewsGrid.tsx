import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgNews1 from "@/assets/images/fb10a2772a73e681839bb04308e5d9734db9ec1c.png";
import imgNews2 from "@/assets/images/7c336df9985e7275c07f0b13c68b769881092ba0.png";
import imgNews3 from "@/assets/images/72c7ca6d39f1fd49bfd4f275fff6d830860464a9.png";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  category: string;
}

export function NewsGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Pi-CNG signs MoU with YJT of China",
      excerpt: "Pi-CNG & EVs has signed a Memorandum of Understanding (MoU) with You Jie Te Environment Technology Ltd (YJT) of China, following a five-d...",
      image: imgNews1,
      date: "February 10, 2026",
      category: "Partnerships",
    },
    {
      id: 2,
      title: "AKK Project - 2026 Unveiling",
      excerpt: "The Executive Chairman of Pi-CNG & EVs, Barr. Ismaeel Ahmed, recently conducted an inspection visit to the newly commissioned state-of-the-art...",
      image: imgNews2,
      date: "February 8, 2026",
      category: "Infrastructure",
    },
    {
      id: 3,
      title: "EV Fair: Electrifying Mobility",
      excerpt: "The Pi-CNG & EVs hosted an EV Fair: Electrifying Mobility at Eagle Square, Abuja — bringing together innovators, policymakers, OEMs, and clean energy...",
      image: imgNews3,
      date: "February 5, 2026",
      category: "Events",
    },
    {
      id: 4,
      title: "Expanding CNG Infrastructure Nationwide",
      excerpt: "New refueling stations are being deployed across major cities to support the growing adoption of CNG vehicles in Nigeria's transportation sector.",
      date: "February 3, 2026",
      category: "Infrastructure",
    },
    {
      id: 5,
      title: "Training Program for CNG Technicians",
      excerpt: "Pi-CNG launches comprehensive training programs to build local capacity for CNG vehicle conversion and maintenance across Nigeria.",
      date: "February 1, 2026",
      category: "Capacity Building",
    },
    {
      id: 6,
      title: "Partnership with Mass Transit Operators",
      excerpt: "Strategic partnerships formed with major transport operators to accelerate the conversion of commercial vehicle fleets to CNG.",
      date: "January 28, 2026",
      category: "Partnerships",
    },
    {
      id: 7,
      title: "CNG Adoption Reaches New Milestone",
      excerpt: "Over 5,000 vehicles successfully converted to CNG as Nigeria's clean energy transition gains momentum.",
      date: "January 25, 2026",
      category: "Milestones",
    },
    {
      id: 8,
      title: "Investment in Electric Vehicle Infrastructure",
      excerpt: "New charging stations being deployed to support electric vehicle adoption as part of Nigeria's sustainable transport initiative.",
      date: "January 22, 2026",
      category: "Infrastructure",
    },
    {
      id: 9,
      title: "Youth Empowerment Through Clean Energy",
      excerpt: "Pi-CNG's initiative creates thousands of jobs for Nigerian youth in the clean energy and sustainable transport sectors.",
      date: "January 20, 2026",
      category: "Impact",
    },
  ];

  const visibleArticles = newsArticles.slice(0, visibleCount);
  const hasMore = visibleCount < newsArticles.length;

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-end gap-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Latest Insights & Stories
            </h2>
            <div className="w-10 h-0.5 bg-gray-900 mb-2" />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {visibleArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 3, newsArticles.length))}
              className="group flex items-center gap-2 bg-[#1bad50] text-white hover:bg-[#159643] transition-all duration-300 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl"
            >
              <span>Load More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

interface NewsCardProps {
  article: NewsArticle;
}

function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
      {/* Image */}
      <div className="relative h-60 bg-gray-200 overflow-hidden">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200" />
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-[#1bad50] text-white text-xs font-medium rounded-full shadow-lg">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 flex-1 flex flex-col">
        {/* Date */}
        <p className="text-xs lg:text-sm text-gray-500 mb-3">
          {article.date}
        </p>

        {/* Title */}
        <h3 className="font-bold text-lg lg:text-xl text-gray-900 mb-3 leading-snug group-hover:text-[#1bad50] transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>

        {/* Read More Link */}
        <button className="inline-flex items-center gap-2 text-[#1bad50] font-medium hover:gap-3 transition-all group/btn">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
