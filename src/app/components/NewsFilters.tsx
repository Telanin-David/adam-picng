import { useState } from 'react';

export function NewsFilters() {
  const [activeFilter, setActiveFilter] = useState('news');

  const filters = [
    { id: 'news', label: 'News & Articles' },
    { id: 'newsletters', label: 'Newsletters' },
    { id: 'trackstories', label: 'Trackstories' },
  ];

  return (
    <div className="relative -mt-8 lg:-mt-12 z-10">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-center gap-3 lg:gap-4 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 lg:px-6 py-3 lg:py-3.5 text-sm lg:text-base rounded-2xl transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg border border-white/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
