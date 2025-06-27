"use client";

import React from "react";
import Image from "next/image";
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const departments = [
  {
    title: "Department of Forestry",
    description: "The College offers Diploma course in Environmental Management which prepares students to balance forestry with biodiversity.",
    image: "/kfc/nursery/nurseryb.jpeg",
    link: "/departments/forestry",
  },
  {
    title: "Department of Environmental Management",
    description: "The College offers Diploma course in Environmental Management which prepares students…",
    image: "/kfc/images/pruning.jpg",
    link: "/departments/environmental-management",
  },
  {
    title: "Department of Wood Science and Technology",
    description: "The college trains diploma and certificate in Wood Science and Technology that focuses…",
    image: "/kfc/images/sawmill-engineering-class-in-session-1.jpg",
    link: "/departments/wood-science-technology",
  },
  {
    title: "Department of Business Management",
    description: "This course offered by the College is designed to equip individuals with the competences…",
    image: "/kfc/facility/comp_lab.jpg",
    link: "/departments/business-management",
  },
  {
    title: "Department of Information Communication and Technology",
    description: "The College offers diploma and certificate course in ICT Technician…",
    image: "/kfc/facility/comp.jpg",
    link: "/departments/ict",
  },
  {
    title: "Department of Protection and Security",
    description: "The College offers Diploma course in Environmental Management which prepares students to balance forestry with biodiversity.",
    image: "/kfc/protetction.jpg",
    link: "/departments/protection-security",
  },
];

const AcademicDepartment = () => {
  return (
    <div>
     <MainNavBar />
        <section className="py-12 px-4 sm:px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
              Academic Departments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((department, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg overflow-hidden flex flex-col"
                >
                  {/* Department Image */}
                  <div className="relative w-full h-64">
                    <Image
                      src={department.image}
                      alt={department.title}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  {/* Department Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {department.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">
                      {department.description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href={department.link}
                        className="inline-block bg-[#fe7c02] text-white font-semibold py-2 px-4 hover:bg-green-700 transition-colors duration-300"
                      >
                        ...More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      <FooterBottom />
    </div>
  );
};

export default AcademicDepartment;