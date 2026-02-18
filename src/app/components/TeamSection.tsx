import { TeamMemberCard } from './TeamMemberCard';
import imgBarrIsmaeelAhmed from "@/assets/images/3f3d4e3dea66b1943a6816f5280b8b81fc9a4d4f.png";
import imgTosinCoker from "@/assets/images/4e74a70e1533fcc003eff4b956f47100a1418608.png";
import imgUntitledDesign71 from "@/assets/images/ad5f30330339758724a7f51076171fb4658ea5c9.png";
import imgUntitledDesign51 from "@/assets/images/46b5b5838219c98844d7116bbb3f4cbfd58a2218.png";
import imgUntitledDesign81 from "@/assets/images/622d10abb616537a3648519d728fb2fdf409f06c.png";
import imgUntitledDesign9 from "@/assets/images/d2829e2eea48cc7768e0f88724767cc362e59df7.png";
import imgUntitledDesign10 from "@/assets/images/bbf5e708d43bc47e39d291da969071819ea60d59.png";
import imgUntitledDesign4 from "@/assets/images/e77817e2fdc6dd84b41f09986483be82ab64cd33.png";
import imgUntitledDesign11 from "@/assets/images/07ff6d8b8e4781c1c52decc580a795d8317b6bad.png";
import img10 from "@/assets/images/68459979b28231f21b0b8cf8bf5517b49cb46ba5.png";
import img11 from "@/assets/images/95ce45f490f5113c1303a299302d8bec69158d03.png";
import imgUntitledDesign12 from "@/assets/images/bc82f015eceb01a0b0f59a76c6e912ac6f8b70a3.png";
import img13 from "@/assets/images/cbbba7858b79fac0e8108a5d94ea4f3007c3daa0.png";
import img14 from "@/assets/images/3c6ea17357e4f2a99a43929b56d8b80d591db248.png";

export function TeamSection() {
  const featuredMember = {
    name: "Barr. Ismaeel Ahmed",
    role: "Executive Chairman/CEO",
    image: imgBarrIsmaeelAhmed,
  };

  const teamMembers = [
    {
      id: 1,
      name: "Mr. Tosin Coker",
      role: "Acting Chief Operating Officer",
      image: imgTosinCoker,
    },
    {
      id: 2,
      name: "Mr. Terkimbi Ibunde",
      role: "Acting Chief Financial Officer",
      image: imgUntitledDesign71,
    },
    {
      id: 3,
      name: "Engr. Zayyanu Tambari",
      role: "Acting Chief Compliance Officer",
      image: imgUntitledDesign51,
    },
    {
      id: 4,
      name: "Mr. Babajide Awolowo",
      role: "Acting Chief Investment Officer",
      image: imgUntitledDesign81,
    },
    {
      id: 5,
      name: "Halimah Hamza Sakwah",
      role: "Director Corporate Services",
      image: imgUntitledDesign9,
    },
    {
      id: 6,
      name: "Engr. Tari Mayor-Bright",
      role: "Head, Gas Supply Integration / Chief of Staff to EC",
      image: imgUntitledDesign10,
    },
    {
      id: 7,
      name: "Mr. Nana Charles",
      role: "Head, ICT",
      image: imgUntitledDesign4,
    },
    {
      id: 8,
      name: "Omolara Obileye",
      role: "Head, Stakeholder Management",
      image: imgUntitledDesign11,
    },
    {
      id: 9,
      name: "Sola Afolayan",
      role: "Special Adviser, Monitoring & Evaluation",
      image: img10,
    },
    {
      id: 10,
      name: "Mr. Imoukhuede Omoh",
      role: "Special Adviser, Training & Capacity Development",
      image: img11,
    },
    {
      id: 11,
      name: "Mr. Abdulkadir Ibrahim Madig",
      role: "Special Adviser, Agriculture",
      image: imgUntitledDesign12,
    },
    {
      id: 12,
      name: "Mr. Jemila Minjibir",
      role: "Head, Social Govt Prods/Advisers",
      image: img13,
    },
    {
      id: 13,
      name: "Mr. Alvin Andrew Njoh",
      role: "Special Adviser, Technical and Innovation",
      image: img14,
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Featured Member - CEO */}
        <div className="mb-16 lg:mb-20">
          <TeamMemberCard
            name={featuredMember.name}
            role={featuredMember.role}
            image={featuredMember.image}
            featured={true}
          />
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
