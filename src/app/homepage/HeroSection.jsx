"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Kenya Forestry College",
      subtitle:
        "Quality Training for changing Climate",
      image: "/kfc/hero/Hero1.jpg",
      ctaText: "Read More",
      ctaLink: "/about/history",
      secondaryCtaText: "Get In Touch",
      secondaryCtaLink: "/contacts",
    },
    {
      title: "Kenya Forestry College",
      subtitle:
        "We offer quaity training in courses ranging from forestry to information technology...",
      image: "/kfc/hero/kfc_admin_block.jpg",
      ctaText: "Apply Now",
      ctaLink: "/apply-now",
      secondaryCtaText: "Get In Touch",
      secondaryCtaLink: "/contacts",
    },
    {
      title: "Kenya Forestry College",
      subtitle:
        "Master the art and science of wood processing in our state-of-the-art sawmill. We train skilled technicians for a thriving and responsible timber industry",
      image: "/kfc/hero/students_sawmill.jpg",
      ctaText: "Apply Now",
      ctaLink: "/admission/apply-now",
      secondaryCtaText: "Get In Touch",
      secondaryCtaLink: "/contacts",
    },
    {
      title: "Kenya Forestry College",
      subtitle:
        "From our nurseries to the nation's forests, we are at the forefront of Kenya's green revolution. Learn how we cultivate resilience and expertise from the ground up",
      image: "/kfc/hero/students_tree_nurssery.jpeg",
      ctaText: "View All Courses",
      ctaLink: "/about/academic-departments",
      secondaryCtaText: "Get In Touch",
      secondaryCtaLink: "/contacts",
    },
    {
      title: "Kenya Forestry College",
      subtitle:
        "Join a proud lineage of forestry professionals who are making a tangible impact on our environment. ",
      image: "/kfc/hero/graduands.jpg",
      ctaText: "Join Us Now",
      ctaLink: "/admission/apply-now",
      secondaryCtaText: "Get In Touch",
      secondaryCtaLink: "/contacts",
    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[85vh] sm:h-[85vh] md:h-[100vh] w-full overflow-hidden">
      
      {/* Slide Container with Background Image */}
      <div
        className="relative h-full  bg-cover bg-no-repeat bg-center flex flex-col justify-start items-center text-white transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Navigation Bars */}
        <div className="relative w-full z-20">
          <TopNavBar />
          <div >
            <MainNavBar />
          </div>
        </div>

        {/* Text Content and CTA Buttons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center z-10 p-4 sm:p-8 md:p-10 lg:p-12 w-full max-w-6xl">
          <h1
            className="font-bold mb-3 sm:mb-8 md:mb-10 tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            className="mb-6 sm:mb-12 md:mb-14  text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl" //italic
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
            }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex gap-2 sm:gap-3 md:gap-8">
            <a
              href={slides[currentSlide].ctaLink}
              className="inline-block bg-white text-[#fe7c02] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-md hover:bg-[#0D3C00] hover:text-white transition-all duration-300"
              style={{
              }}
            >
              {slides[currentSlide].ctaText}
            </a>
            <a
              href={slides[currentSlide].secondaryCtaLink}
              className="inline-block bg-[#fe7c02] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-md hover:bg-white hover:text-[#0D3C00] transition-all duration-300"
              style={{
              }}
            >
              {slides[currentSlide].secondaryCtaText}
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;