interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  featured?: boolean;
}

export function TeamMemberCard({ name, role, image, featured = false }: TeamMemberCardProps) {
  if (featured) {
    return (
      <div className="relative bg-gray-900 rounded-3xl overflow-hidden w-full max-w-[346px] mx-auto">
        {/* Image Container */}
        <div className="relative h-[400px] w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          {/* Nigerian Flag Overlay */}
          <div className="absolute left-0 top-1/4 w-16 h-32">
            <svg viewBox="0 0 60 100" className="w-full h-full">
              <rect x="0" y="0" width="20" height="100" fill="#008751" />
              <rect x="20" y="0" width="20" height="100" fill="white" />
              <rect x="40" y="0" width="20" height="100" fill="#008751" />
            </svg>
          </div>
        </div>

        {/* Info Card at Bottom */}
        <div className="bg-[#fefdec] text-center py-8 px-4 rounded-t-3xl">
          <h3 className="font-bold text-lg mb-1 text-gray-900">{name}</h3>
          <p className="text-base text-gray-900">{role}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-900 rounded-3xl overflow-hidden w-full group hover:shadow-xl transition-shadow">
      {/* Image Container */}
      <div className="relative h-[243px] bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info Card at Bottom */}
      <div className="bg-white text-center py-6 px-4 rounded-t-2xl h-[100px] flex flex-col items-center justify-center">
        <h3 className="font-bold text-base mb-1 text-gray-900">{name}</h3>
        <p className="text-sm text-gray-900 leading-tight">{role}</p>
      </div>
    </div>
  );
}
