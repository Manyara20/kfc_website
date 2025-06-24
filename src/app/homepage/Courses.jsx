"use client";

import React from "react";
import Image from "next/image";

const Courses = () => {
  return (
    <section
      className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center text-white flex flex-col items-center justify-center transition-all duration-500"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/kfc/class_lab.jpg)`,
      }}
    >
      {/* Title */}
      <p className="text-lg sm:text-xl font-semibold text-center uppercase mb-6 px-4">
        Applications are invited for training programmes offered at Kenya <br /> Forestry
        College, Londiani, Kericho County.
      </p>

      {/* Tagline */}
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center uppercase mb-4 px-4">
        Apply a for training program
      </h1>

      {/* Apply Now Button */}
      <a
        href="/apply" // Placeholder link, update with actual application URL
        className="bg-[#fe7c02] text-white font-semibold py-3 px-6  hover:bg-green-700 transition-colors duration-300"
      >
        Apply Now
      </a>
    </section>
  );
};

export default Courses;