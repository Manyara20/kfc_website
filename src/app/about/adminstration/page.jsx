"use client";

import Link from "next/link";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import InfoIcon from "@mui/icons-material/Info";

const managementDetails = {
  principal: {
    image: "/kfc/management/musiyimi.jpg",
    name: "Francis Musyimi",
    title: "Principal",
    bio: "The Principal is the chief executive officer of the college responsible for providing strategic leadership, institutional management, and overall administration. The principal ensures the implementation of training policies, academic excellence, financial accountability, and stakeholder engagement.",
  },
  "deputy-principal": {
    image: "/kfc/management/owuor.jpg",
    name: "John O. Owuor",
    title: "Deputy Principal",
    bio: "The Deputy Principal is the second-in-command and assists the Principal in managing academic affairs, research programs, student services, and daily operations. The deputy often oversees curriculum implementation, staff coordination, and quality assurance.",
  },
  "chief-administrative-officer": {
    image: "/kfc/management/owang.jpg",
    name: "Andrew O. Ogwang",
    title: "Chief Administrative Officer",
    bio: "The Chief Administrative Officer is in charge of the college’s non-academic operations, including administration, procurement, budgeting, human resource management, asset management, and infrastructure. The CAO ensures effective support systems are in place for smooth college functioning.",
  },
  "academic-officer": {
    image: "/kfc/management/chebii.jpg",
    name: "Micah Chebii",
    title: "Academic Officer",
    bio: "The Academic Officer oversees the implementation of academic programs, monitors teaching standards, supports curriculum development, and ensures compliance with training objectives. The officer works closely with teaching staff and the Examination Officer to maintain academic quality.",
  },
  "examination-officer": {
    image: "/kfc/management/ngaruingo.jpeg",
    name: "Robert Nyaringo",
    title: "Examination Officer",
    bio: "The Examination Officer is responsible for the planning, coordination, and management of all examinations in the college. Duties include scheduling, invigilation, processing of results, certification, and maintaining exam integrity and recordkeeping.",
  },
  "industrial-liaison-officer": {
    image: "/kfc/management/ochieng.jpg",
    name: "Charles Ochieng",
    title: "Industrial Liaison Officer",
    bio: "The Industrial Liaison Officer facilitates and coordinates student industrial attachments (field placements). This officer connects the college with forestry industry partners, secures placement opportunities, monitors student progress, and integrates field experience into the academic curriculum.",
  },
  "dean-of-students": {
    image: "/kfc/management/margaret.jpg",
    name: "Margaret Githiaga",
    title: "Dean of Students",
    bio: "The Dean of Students is in charge of student welfare and support services. This includes overseeing discipline, accommodation, health services, counseling, extracurricular activities, and fostering a supportive campus environment for personal and academic growth.",
  },
  "accountant": {
    image: "/kfc/management/josphine.jpg",
    name: "Josephine Njoroge",
    title: "Senior Accountant",
    bio: "An Accountant is responsible for managing the college's financial records, ensuring compliance with government financial regulations, and preparing financial reports. The accountant oversees budgeting, payroll, payment processing, reconciliation of accounts, and financial audits.",
  },
  "forester-masaita-block": {
    image: "/kfc/management/aluda.jpg",
    name: "Rickson Aluda",
    title: "Forester – Masaita Block",
    bio: "The Forester – Masaita Block is responsible for managing the field training area (Masaita block). This officer supervises practical student training in forestry operations, including tree nursery management, silviculture, plantation establishment, and environmental conservation.",
  },
  "procurement-officer": {
    image: "/kfc/management/openo.jpg",
    name: "Gladys Kirotich",
    title: "Procurement Officer",
    bio: "A Procurement Officer at Kenya Forestry College is responsible for planning, sourcing, purchasing, and managing goods and services required by the institution, in compliance with the Public Procurement and Asset Disposal Act.",
  },
};

// Main Page Component
export default function KFCSeniorManagementPage() {
  // Extract Principal and Deputy Principal
  const principal = {
    id: "principal",
    name: managementDetails.principal.name,
    title: managementDetails.principal.title,
    image: managementDetails.principal.image,
  };

  const deputyPrincipal = {
    id: "deputy-principal",
    name: managementDetails["deputy-principal"].name,
    title: managementDetails["deputy-principal"].title,
    image: managementDetails["deputy-principal"].image,
  };

  // Extract other management members, excluding Principal and Deputy Principal
  const managementMembers = Object.keys(managementDetails)
    .filter((key) => key !== "principal" && key !== "deputy-principal")
    .map((key) => ({
      id: key,
      name: managementDetails[key].name,
      title: managementDetails[key].title,
      image: managementDetails[key].image,
    }));

  return (
    <div>
      <MainNavBar />
      <div className="bg-white min-h-screen px-4 md:px-6 py-4">
        {/* Title and Description */}
        <div className="text-center mb-6">
          
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto font-['Peugeot',Helvetica,sans-serif]">
            Meet the dedicated leaders of the Kenya Forestry College, committed to advancing forestry education and training.
          </p>
        </div>

        {/* Principal Section */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md w-full sm:w-100 p-4 text-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="inline-block bg-[#6A961F] text-white text-xs font-bold uppercase px-3 py-1 mb-2 font-['Peugeot',Helvetica,sans-serif]">
              Principal
            </span>
            <img
              className="w-72 h-72 rounded-full mx-auto mb-2 border-4 border-[#6A961F] shadow-sm object-fit"
              alt={principal.name}
              src={principal.image}
            />
            <h6 className="text-base font-semibold text-[#023011] mb-1 uppercase font-['Peugeot',Helvetica,sans-serif]">
              {principal.name}
            </h6>
            <p className="text-gray-600 text-sm mb-2 capitalize font-['Peugeot',Helvetica,sans-serif]">
              {principal.title}
            </p>
            <Link href={`/about/governance/${principal.id}`} passHref>
              <button
                className="text-[#6A961F] hover:bg-[#6A961F]/10 p-2 rounded-full transition-colors duration-200"
                aria-label="View Profile"
              >
                <InfoIcon fontSize="small" />
              </button>
            </Link>
          </div>
        </div>

        {/* Deputy Principal Section */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md w-full sm:w-100 p-4 text-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="inline-block bg-[#6A961F] text-white text-xs font-bold uppercase px-3 py-1 mb-2 font-['Peugeot',Helvetica,sans-serif]">
              Deputy Principal
            </span>
            <img
              className="w-72 h-72 rounded-full mx-auto mb-2 border-4 border-[#6A961F] shadow-sm object-fit"
              alt={deputyPrincipal.name}
              src={deputyPrincipal.image}
            />
            <h6 className="text-base font-semibold text-[#023011] mb-1 uppercase font-['Peugeot',Helvetica,sans-serif]">
              {deputyPrincipal.name}
            </h6>
            <p className="text-gray-600 text-sm mb-2 capitalize font-['Peugeot',Helvetica,sans-serif]">
              {deputyPrincipal.title}
            </p>
            <Link href={`/about/governance/${deputyPrincipal.id}`} passHref>
              <button
                className="text-[#6A961F] hover:bg-[#6A961F]/10 p-2 rounded-full transition-colors duration-200"
                aria-label="View Profile"
              >
                <InfoIcon fontSize="small" />
              </button>
            </Link>
          </div>
        </div>

        {/* Other Management Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {managementMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <img
                  className="w-84 h-84 rounded-full mx-auto mb-2 border-4 border-[#0D3C00] shadow-sm object-fit"
                  alt={member.name}
                  src={member.image}
                />
                <h6 className="text-base font-semibold text-[#023011] mb-1 uppercase font-['Peugeot',Helvetica,sans-serif]">
                  {member.name}
                </h6>
                <p className="text-gray-600 text-sm mb-2 capitalize font-['Peugeot',Helvetica,sans-serif]">
                  {member.title}
                </p>
              </div>
              <Link href={`/about/governance/${member.id}`} passHref>
                <button
                  className="text-[#0D3C00] hover:bg-[#6A961F]/10 p-2 rounded-full transition-colors duration-200"
                  aria-label="View Profile"
                >
                  <InfoIcon fontSize="small" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}