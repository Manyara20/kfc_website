"use client";

import React from "react";
import Image from "next/image";

const courses = [
  {
    title: "Diploma in Forestry",
    authority: "TVET CDACC",
    requirement: "KCSE Mean Grade C-(minus) or Certificate in Forestry",
    duration: "2 Years",
    intake: "May",
    image: "/kfc/core/core1.jpeg",
  },
  {
    title: "Diploma in Environmental Management",
    authority: "TVET CDACC",
    requirement: "KCSE Mean Grade C-(minus)",
    duration: "2 Years",
    intake: "May",
    image: "/kfc/core/core2.jpg",
  },
  {
    title: "Diploma in Wood Science and Technology",
    authority: "Internal",
    requirement: "KCSE Mean Grade C-(minus)",
    duration: "2 Years",
    intake: "May",
    image: "/kfc/core/sawmill.jpg",
  },
  {
    title: "Certificate in Forestry",
    authority: "TVET CDACC",
    requirement: "KCSE Mean Grade D(plain)",
    duration: "2 Years",
    intake: "May",
    image: "/kfc/core/wood.jpg",
  },
];

const CoreCourses = () => {
  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Core Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white  shadow-lg overflow-hidden flex flex-col"
            >
              {/* Course Image */}
              <div className="relative w-full h-64">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              {/* Course Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Authority:</span> {course.authority}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Minimum Requirement:</span>{" "}
                  {course.requirement}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Duration:</span> {course.duration}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Intake:</span> {course.intake}
                </p>
                <div className="mt-auto">
                  <a
                    href="/about/academic-departments" // Placeholder link, update with actual URL
                    className="inline-block bg-[#fe7c02] text-white font-semibold py-2 px-4  hover:bg-green-700 transition-colors duration-300"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
  );
};

export default CoreCourses;