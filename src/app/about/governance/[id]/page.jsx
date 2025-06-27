"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Placeholder image for fallback
const placeholderImage = "/icons/user.png"; // Updated to match KFCSeniorManagementPage

// Management details mapping
const managementDetails = {
  principal: {
    image: "/kfc/management/musiyimi.jpg",
    name: "Mr. Francis Musyimi",
    title: "Principal",
    bio: "The Principal is the chief executive officer of the college responsible for providing strategic leadership, institutional management, and overall administration. The principal ensures the implementation of training policies, academic excellence, financial accountability, and stakeholder engagement.",
  },
  "deputy-principal": {
    image: "/kfc/management/owuor.jpg",
    name: "Mr. John O. Owuor",
    title: "Deputy Principal",
    bio: "The Deputy Principal is the second-in-command and assists the Principal in managing academic affairs, research programs, student services, and daily operations. The deputy often oversees curriculum implementation, staff coordination, and quality assurance.",
  },
  "chief-administrative-officer": {
    image: "/kfc/management/ojwang.jpg",
    name: "Andrew O. Ogwang",
    title: "Chief Administrative Officer",
    bio: "The Chief Administrative Officer is in charge of the college’s non-academic operations, including administration, procurement, budgeting, human resource management, asset management, and infrastructure. The CAO ensures effective support systems are in place for smooth college functioning.",
  },
  "academic-officer": {
    image: "/kfc/management/chebii.jpg",
    name: "Mr. Micah Chebii",
    title: "Academic Officer",
    bio: "The Academic Officer oversees the implementation of academic programs, monitors teaching standards, supports curriculum development, and ensures compliance with training objectives. The officer works closely with teaching staff and the Examination Officer to maintain academic quality.",
  },
  "examination-officer": {
    image: "/icons/user.png",
    name: "Mr. Robert Nyaringo",
    title: "Examination Officer",
    bio: "The Examination Officer is responsible for the planning, coordination, and management of all examinations in the college. Duties include scheduling, invigilation, processing of results, certification, and maintaining exam integrity and recordkeeping.",
  },
  "forester-masaita-block": {
    image: "/kfc/management/aluda.jpg",
    name: "Mr. Rickson Aluda",
    title: "Forester – Masaita Block",
    bio: "The Forester – Masaita Block is responsible for managing the field training area (Masaita block). This officer supervises practical student training in forestry operations, including tree nursery management, silviculture, plantation establishment, and environmental conservation.",
  },
  "dean-of-students": {
    image: "/kfc/management/openo.jpg",
    name: "Margret Openo",
    title: "Dean of Students",
    bio: "The Dean of Students is in charge of student welfare and support services. This includes overseeing discipline, accommodation, health services, counseling, extracurricular activities, and fostering a supportive campus environment for personal and academic growth.",
  },
  "industrial-liaison-officer": {
    image: "/kfc/management/ochieng.jpg",
    name: "Charles Ochieng",
    title: "Industrial Liaison Officer",
    bio: "The Industrial Liaison Officer facilitates and coordinates student industrial attachments (field placements). This officer connects the college with forestry industry partners, secures placement opportunities, monitors student progress, and integrates field experience into the academic curriculum.",
  },
  "procurement-officer": {
    image: "/icons/user.png",
    name: "Gladys Kirotich",
    title: "Procurement Officer",
    bio: "A Procurement Officer at Kenya Forestry College is responsible for planning, sourcing, purchasing, and managing goods and services required by the institution, in compliance with the Public Procurement and Asset Disposal Act.",
  },
  "accountant": {
    image: "/kfc/management/josphine.jpg",
    name: "Josephine Njoroge",
    title: "Accountant",
    bio: "An Accountant is responsible for managing the college's financial records, ensuring compliance with government financial regulations, and preparing financial reports. The accountant oversees budgeting, payroll, payment processing, reconciliation of accounts, and financial audits.",
  },
};

const ManagementProfile = () => {
  const params = useParams();
  const { id } = params;

  // Ensure id is defined and exists in the managementDetails object
  if (!id || !managementDetails[id]) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
          <p className="text-gray-700 text-base font-['Peugeot',Helvetica,sans-serif]">
            Profile not found
          </p>
        </div>
      </div>
    );
  }

  const profile = managementDetails[id];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNavBar />
      <MainNavBar />
      <div className="flex-grow flex items-center justify-center p-4 md:p-6">
        <div className="bg-white shadow-lg rounded-lg border-2 border-[#6A961F] w-full max-w-2xl p-6 md:p-8">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={profile.image}
                alt={profile.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-[#6A961F] shadow-sm"
                onError={(e) => (e.target.src = placeholderImage)}
              />
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold text-[#023011] mb-2 text-center uppercase"
              style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
            >
              {profile.name}
            </h1>
            <h2
              className="text-lg md:text-xl text-gray-600 mb-4 text-center capitalize"
              style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
            >
              {profile.title}
            </h2>
            <p
              className="text-gray-700 text-sm md:text-base leading-relaxed text-center"
              style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
            >
              {profile.bio || "No biography available."}
            </p>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default ManagementProfile;