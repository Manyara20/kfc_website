"use client";

import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Photo gallery data
const photos = [
  { id: 1, src: "/kfc/core/core1.jpeg", caption: "Kenya Forestry College" },
  { id: 2, src: "/kfc/core/wood.jpg", caption: "Wood Technology" },
  { id: 3, src: "/kfc/Hospitality.jpg", caption: "Hospitality" },
  { id: 4, src: "/kfc/facility/comp_lab.jpg", caption: "Comp Lab" },
  { id: 5, src: "/kfc/facility/comp_lab.jpg", caption: "Comp Lab" },
  { id: 6, src: "/kfc/facility/comp.jpg", caption: "Comp Lab" },
  { id: 7, src: "/kfc/facility/hostel.jpg", caption: "Comp Lab" },
  { id: 8, src: "/kfc/facility/lib.jpg", caption: "Comp Lab" },
  { id: 9, src: "/kfc/facility/libs.jpg", caption: "Comp Lab" },
  
];

export default function KFSGalleryPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />

      <div className="p-4 md:p-8 bg-white min-h-screen">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl mb-4 text-[#023011]"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            KFC Photo Gallery
          </h1>
          <p
            className="text-gray-600 mb-8 max-w-[800px] mx-auto"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            Our moments through the lens — showcasing conservation, forestry, and nature.
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 justify-items-center w-full">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white border-2 border-gray-200 shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full"
            >
              <div className="relative w-full h-[70vh] mb-4">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p
                className="text-sm text-center text-gray-700"
                style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
              >
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <FooterBottom />
    </div>
  );
}