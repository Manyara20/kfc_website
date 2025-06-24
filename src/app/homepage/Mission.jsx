"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const principles = [
  {
    id: "ecosystem",
    title: "Our Mission",
    description:
      "Development and dissemination of best practices in natural resources management through quality teaching, research and outreach.",
    icon: "/icons/ecosystem.png",
    background: "/images/uniform.jpg",
  },
  {
    id: "public-good",
    title: "Our Vision",
    description:
      "A Model Educational Centre of excellence for forestry, environment and allied natural resources.",
    icon: "/icons/public-relation.png",
    background: "/images/MangroveboatinGazi.jpg",
  },
  {
    id: "sustainable",
    title: "Quality Policy Statement",
    description:
      "The College is mandated to provide quality training, education for sustainable management and utilization of forests and allied natural resources.",
    icon: "/icons/conservation.png",
    background: "/images/plant_tree.jpg",
  },
  {
    id: "values",
    title: "Core Values",
    description:
      "Teamwork, Critical thinking, Continuous learning culture, Excellence, Integrity, Scientific principles and professionalism, Creativity and Innovation",
    icon: "/icons/conservation.png",
    background: "/images/plant_tree.jpg",
  },
];

const Principles = () => {
  const [activePrincipleTab, setActivePrincipleTab] = useState("ecosystem");
  const [currentPrincipleIndex, setCurrentPrincipleIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true on client-side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-slide effect for small screens
  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentPrincipleIndex((prevIndex) =>
          prevIndex === principles.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, []);

  // Update active tab when slider index changes
  useEffect(() => {
    setActivePrincipleTab(principles[currentPrincipleIndex].id);
  }, [currentPrincipleIndex]);

  const activePrinciple = principles.find((p) => p.id === activePrincipleTab);

  if (!isMounted) {
    return null; // Prevent server-side rendering mismatch
  }

  return (
    <section>
      <div
        className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center text-white p-4 sm:p-6 flex flex-col justify-center transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${activePrinciple.background})`,
        }}
      >
        {/* Principle Tabs (Visible on larger screens) */}
        <div className="hidden sm:block mb-8">
          <div className="flex flex-row gap-6 pl-6">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className={`cursor-pointer text-lg font-semibold uppercase ${
                  activePrincipleTab === principle.id
                    ? "underline underline-offset-4 decoration-white decoration-4 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => {
                  setActivePrincipleTab(principle.id);
                  setCurrentPrincipleIndex(
                    principles.findIndex((p) => p.id === principle.id)
                  );
                }}
              >
                {principle.title}
              </div>
            ))}
          </div>
        </div>

        {/* Principle Content */}
        <div className="flex items-start gap-3 sm:gap-4 max-w-full sm:max-w-2xl pl-0 sm:pl-6">
          <Image
            src={activePrinciple.icon}
            alt={activePrinciple.title}
            width={32}
            height={32}
            className="sm:w-[40px] sm:h-[40px]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div className="animate-fade-in">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 uppercase">
              {activePrinciple.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {activePrinciple.description}
            </p>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Principles;