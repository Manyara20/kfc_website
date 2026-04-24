"use client";

import React from "react";
import { FaUsers, FaChalkboardTeacher, FaTrophy, FaBook } from "react-icons/fa";

const stats = [
  {
    value: "3200+",
    label: "Students",
    icon: FaUsers,
  },
  {
    value: "24+",
    label: "Teachers",
    icon: FaChalkboardTeacher,
  },
  {
    value: "35+",
    label: "Awards",
    icon: FaTrophy,
  },
  {
    value: "15+",
    label: "Courses",
    icon: FaBook,
  },
];

const Counter = () => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-counter bg-cover bg-center text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">
                <stat.icon className="w-16 h-16 text-[#fe7c02]" />
              </div>
              {/* Value */}
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">
                {stat.value}
              </h3>
              {/* Label */}
              <p className="text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;