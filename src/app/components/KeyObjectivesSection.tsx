import { Car, Recycle, Briefcase, Battery, Building, Target } from 'lucide-react';

interface ObjectiveCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ObjectiveCard({ icon, title, description }: ObjectiveCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Icon */}
      <div className="bg-[#fefdec] w-[60px] h-[60px] rounded-3xl flex items-center justify-center mb-4">
        <div className="text-[#1bad50]">
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="font-semibold text-base lg:text-lg text-gray-900 mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function KeyObjectivesSection() {
  const objectives = [
    {
      id: 1,
      icon: <Car className="w-6 h-6" />,
      title: "Driving Affordability",
      description: "Reducing transportation costs for commuters and vehicle owners by promoting CNG as a cheaper alternative to petrol and diesel.",
    },
    {
      id: 2,
      icon: <Recycle className="w-6 h-6" />,
      title: "Environmental Sustainability",
      description: "Accelerating CNG and EV adoption to reduce emissions and build cleaner mobility systems",
    },
    {
      id: 3,
      icon: <Briefcase className="w-6 h-6" />,
      title: "Economic Empowerment & Job Creation",
      description: "Creating employment through the establishment of conversion workshops and training technicians in CNG technology.",
    },
    {
      id: 4,
      icon: <Battery className="w-6 h-6" />,
      title: "Energy Security",
      description: "Leveraging Nigeria's vast domestic natural gas reserves to reduce dependency on imported petroleum.",
    },
    {
      id: 5,
      icon: <Building className="w-6 h-6" />,
      title: "Infrastructure Development",
      description: "Facilitating the deployment of CNG-powered mass transit buses and establishing a nationwide network of refuelling stations and conversion centers.",
    },
    {
      id: 6,
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Adoption",
      description: "A specific goal to have one million gas-powered vehicles on Nigerian roads by the end of 2027 through conversion programme and new vehicle assembly.",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Key objectives of the Pi-CNG mandate include
          </h2>
          <p className="text-base lg:text-lg text-gray-900 leading-relaxed">
            The initiative operates under the Renewed Hope Agenda and includes the Commercial Vehicle 
            Conversion Incentive programme (CV-CIP), which provides free or highly discounted conversion 
            kits for transporters.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {objectives.map((objective) => (
            <ObjectiveCard
              key={objective.id}
              icon={objective.icon}
              title={objective.title}
              description={objective.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
