import imgTechnicalOps from "@/assets/images/men-working-on-car.png";
import imgFinance from "@/assets/images/bae47030fcc0ba864407db8444378e379e4c5fcc.png";
import imgInvestment from "@/assets/images/1c94135fbe3911064625628ceff56994ed6b37d7.png";
import imgCompliance from "@/assets/images/38652c763718459ec55c07a45a996f5f86f0b07c.png";
import imgCorporateServices from "@/assets/images/32040281f3eaf43e4f2a928025185e2eb1daa24a.png";

export function DepartmentsSection() {
  const departments = [
    {
      id: 1,
      title: "Technical & Operations",
      subtitle: "Business Unit (CNG Programme Delivery)",
      image: imgTechnicalOps,
      // description: "Leading the technical implementation and operational delivery of CNG conversion programs nationwide.",
    },
    {
      id: 2,
      title: "Finance",
      subtitle: "Business Unit",
      image: imgFinance,
      // description: "Managing financial operations, budgeting, and fiscal planning to ensure sustainable program delivery.",
    },
    {
      id: 3,
      title: "Investment",
      subtitle: "Business Unit",
      image: imgInvestment,
      // description: "Driving investment strategies and partnerships to expand CNG infrastructure and adoption.",
    },
    {
      id: 4,
      title: "Compliance",
      subtitle: "Business Unit",
      image: imgCompliance,
      // description: "Ensuring regulatory compliance and maintaining quality standards across all operations.",
    },
    {
      id: 5,
      title: "Corporate Services",
      subtitle: "Business Unit",
      image: imgCorporateServices,
      // description: "Providing essential administrative and support services for organizational effectiveness.",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-end justify-center gap-3 mb-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Pi-CNG Departments
            </h2>
            <div className="w-10 h-0.5 bg-gray-900 mb-2" />
          </div>
        </div>

        {/* Departments Grid */}
        <div className="space-y-8 lg:space-y-12">
          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {departments.slice(0, 3).map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {departments.slice(3, 5).map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface DepartmentCardProps {
  department: {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
}

function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Container with Unique Shape */}
      <div className="relative h-64 lg:h-72 overflow-hidden">
        {/* Decorative Shape Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1bad50]/10 to-transparent z-10" />
        
        {/* Image */}
        <img
          src={department.image}
          alt={department.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 space-y-3">
        <div className="space-y-1 text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
            {department.title}
          </h3>
          <p className="text-sm lg:text-base text-gray-600">
            {department.subtitle}
          </p>
        </div>
        
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed text-center">
          {department.description}
        </p>
      </div>
    </div>
  );
}
