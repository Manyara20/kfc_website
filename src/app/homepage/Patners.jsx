"use client";

import { useEffect, useState } from "react";

const partners = [
  "https://whatthelogo.com/storage/logos/fao-food-and-agriculture-organizations-98044.png",
  "https://whatthelogo.com/storage/logos/national-environment-management-authority-83365.png",
  "https://whatthelogo.com/storage/logos/undp-136787.png",
  "https://www.kefri.org/assets/images/kefri_logo.png",
  "https://whatthelogo.com/storage/logos/kenya-forest-service-96842.webp",

];

const PartnersSection = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8  text-[#0d3c00]">Our Partners</h2>
      <div className="relative overflow-hidden w-full">
        <div className="flex space-x-8 animate-move" style={{ minWidth: "max-content" }}>
          {[...partners, ...partners].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index % partners.length}`}
              className="w-24 h-24 object-contain"
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-move {
          animation: move 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
