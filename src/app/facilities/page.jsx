"use client";

import Link from "next/link";
import Image from "next/image";
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const forests = [
  {
    name: "Masaita Forest Block",
    image: "/kfc/masaita/masaita.jpeg",
    subtitle: "The forest has an area of 4,152ha and is part of the Mau complex",
    href: "/facilities/masaita",
  },
  {
    name: "Kenya Forestry College Hospitality Center",
    image: "/kfc/facility/Hospitality.jpg",
    subtitle: "The hospitality center offers conferencing…",
    href: "/facilities/kfc-guesthouse-conference-centre",
  },
  {
    name: "Computer Lab",
    image: "/kfc/facility/comp_lab.jpg",
    subtitle:
      "Our state-of-the-art computer lab at Kenya Forestry College is equipped with 40 modern workstations",
    href: "/facilities/comp_lab",
  },
  {
    name: "Tree Nurseries",
    image: "/kfc/nursery/nurseryb.jpeg",
    subtitle:
      "Masaita station has two nurseries, one within the college for students training…",
    href: "/facilities/nursery",
  },
  {
    name: "Hostels",
    image: "/kfc/facility/hostel.jpg",
    subtitle:
      "The college has 2 modern hostels with a capacity of 256 complemented...",
    href: "/forests/hostels",
  },
  {
    name: "Kenya Forestry College Library",
    image: "/kfc/facility/lib.jpg",
    subtitle: "Library is more than a repository of books…",
    href: "/facilities/library",
  },
];

const ForestCardGrid = () => {
  return (
    <>
   <MainNavBar />
    <section className="py-12 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Our Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forests.map((forest, index) => (
            <div
              key={index}
              className="bg-white shadow-lg  overflow-hidden flex flex-col"
            >
              {/* Forest Image */}
              <div className="relative w-full h-64">
                <Image
                  src={forest.image}
                  alt={forest.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              {/* Forest Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {forest.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {forest.subtitle}
                </p>
                <div className="mt-auto">
                  <Link
                    href={forest.href}
                    className="inline-block bg-[#fe7c02] text-white font-semibold py-2 px-4  hover:bg-green-700 transition-colors duration-300"
                  >
                    ...More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FooterBottom />
     </>
  );
};

export default ForestCardGrid;