import { useState } from 'react';
import { Play, Volume2, SkipBack, SkipForward, Maximize } from 'lucide-react';
import img631821 from "@/assets/images/ba46c1205aa0e5e20c9385f804b52c0655700840.png";
import imgVectorSmartObjectCopy22 from "@/assets/images/mission.png";

export function VideoTestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
    { id: 1, thumbnail: img631821, duration: "2:50", currentTime: "0:18" },
    { id: 2, thumbnail: img631821, duration: "2:50", currentTime: "0:18" },
    { id: 3, thumbnail: img631821, duration: "2:50", currentTime: "0:18" },
    { id: 4, thumbnail: img631821, duration: "2:50", currentTime: "0:18" },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Video Testimonies
            </h2>
            <div className="h-0.5 w-12 bg-gray-900" />
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative bg-white rounded-3xl overflow-hidden aspect-video group cursor-pointer"
              onClick={() => setPlayingVideo(video.id)}
            >
              {/* Video Thumbnail */}
              <img
                src={video.thumbnail}
                alt={`Video testimony ${video.id}`}
                className="w-full h-full object-cover"
              />

              {/* Logo Overlay */}
              <div className="absolute top-6 left-7">
                <img
                  src={imgVectorSmartObjectCopy22}
                  alt="Pi-CNG"
                  className="h-5 w-auto brightness-0 invert"
                />
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm rounded-b-3xl p-4 lg:p-5">
                <div className="flex items-center justify-between gap-4">
                  {/* Left Controls */}
                  <div className="flex items-center gap-3">
                    {/* Play Button */}
                    <button
                      className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label="Play video"
                    >
                      <Play className="w-4 h-4 fill-white" />
                    </button>

                    {/* Volume */}
                    <button
                      className="text-white hover:text-gray-300 transition-colors"
                      aria-label="Adjust volume"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    {/* Time Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        className="text-white hover:text-gray-300 transition-colors"
                        aria-label="Rewind 10 seconds"
                      >
                        <SkipBack className="w-4 h-4" />
                      </button>
                      <span className="text-white text-xs font-medium">
                        {video.currentTime} / {video.duration}
                      </span>
                      <button
                        className="text-white hover:text-gray-300 transition-colors"
                        aria-label="Forward 10 seconds"
                      >
                        <SkipForward className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Controls */}
                  <div className="flex items-center gap-3">
                    <span className="text-white text-xs font-semibold">1x</span>
                    <button
                      className="text-white hover:text-gray-300 transition-colors"
                      aria-label="Fullscreen"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 relative h-1 bg-gray-300/30 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-[#f9e745] rounded-full"
                    style={{ width: '30%' }}
                  />
                  {/* Progress Handle */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#f9e745] rounded-full"
                    style={{ left: '30%', transform: 'translate(-50%, -50%)' }}
                  />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
