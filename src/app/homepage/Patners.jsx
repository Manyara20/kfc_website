"use client";

import { useEffect, useState } from "react";

const partners = [
  
 
  "https://www.kefri.org/assets/images/kefri_logo.png",
  '/kfc/logo/images.jpeg',
  '/kfc/logo/tveta.png',
  '/kfc/kfs.png',
  "https://www.kefri.org/assets/images/kefri_logo.png",
  '/kfc/logo/images.jpeg',
  '/kfc/logo/tveta-logo.png',
  '/kfc/kfs.png',

];

const PartnersSection = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8  text-[#0d3c00]">Our Partners</h2>
      <div className="relative overflow-hidden w-full">
        <div className="flex space-x-8 animate-move min-w-max">
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
    </section>
  );
};

export default PartnersSection;
