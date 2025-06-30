"use client";
import React, { useState } from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff] py-0 pl-0 md:pl-16">
      

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Left: About Kenya Forestry College */}
        <div className="flex items-center">
          <div className="mx-auto mt-4 md:mt-8 p-6">
            <h5 className="text-[#1a1b1a] text-xl md:text-2xl font-bold uppercase text-center">
              About Kenya Forestry College
            </h5>
            <p className="text-black text-lg mt-4">
              KFC is a technical training institution legally established through section 17 of the Forest Conservation and Management Act (FCMA) of 2016. It is the entity that promotes forestry education and training by/within the Kenya Forest Service.
            </p>
            <p className="text-black text-lg mt-4">
              The College is duly registered with both the Technical and Vocational Education and Training Authority (TVETA), National Industrial Training Authority (NITA) and the Kenya Universities and Colleges Central Placement Service (KUCCPS). Kenya Forestry College’s vision is to be an international centre of excellence for applied education in sustainable management of forestry and allied resources.
            </p>
            <div className="flex justify-center mt-6">
              <Link href="/about/learnmore">
                <button className="text-white border border-white bg-[#fe7c02] hover:bg-[#0D3C00] hover:text-white px-4 py-2 transition-colors duration-300 mt-4 border-radius-0">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Full-section Image */}
        <div className="relative border-radius-0">
          <img
            src="/kfc/hero/graduands.jpg"
            alt="Kenya Forestry College Campus"
            className="w-full h-full object-cover"
            style={{ minHeight: "300px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;