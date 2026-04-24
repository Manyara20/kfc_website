"use client";

import React from "react";
import Image from "next/image";

const Courses = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] bg-courses bg-cover bg-center text-white flex flex-col items-center justify-center transition-all duration-500">
      {/* Title */}
      <p className="text-lg sm:text-xl font-semibold text-center uppercase mb-6 px-4">
        Applications are invited for training programmes offered at Kenya <br /> Forestry
        College, Londiani, Kericho County.
      </p>

      {/* Tagline */}
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center uppercase mb-4 px-4">
        Apply for a training program
      </h1>

      {/* Apply Now Button */}
      <a
        href="/admissions/apply-now" // Placeholder link, update with actual application URL
        className="bg-[#fe7c02] text-white font-semibold py-3 px-6  hover:bg-green-700 transition-colors duration-300"
      >
        Apply Now
      </a>
    </section>
  );
};

export default Courses;