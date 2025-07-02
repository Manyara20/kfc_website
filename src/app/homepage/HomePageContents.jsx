// pages/index.js (or wherever your HomePageContents is located)
import React from "react";
import FooterBottom from "@/components/FooterBottom";
import HeroSection from "@/app/homepage/HeroSection";
import About from "@/app/homepage/About";
import NewsSection from "@/app/homepage/NewsSection";
import Footer from "@/app/homepage/Footer";
import Courses from "@/app/homepage/Courses";
//import Counter from "@/app/homepage/Counter";
import Mission from "@/app/homepage/Mission";
import CoreCourses from "@/app/homepage/CoreCourses"
import PatnersSection from "@/app/homepage/Patners";
import FeedSection from "@/app/homepage/FeedSection"
import Sidebar from "@/app/homepage/Sidebar";
import Exploreourforests from "@/components/Exploreourforests";


function HomePageContents() {
  return (
    <div>
      <HeroSection />
      <About />
      <Mission />
      <CoreCourses />
      <Courses />
      <Exploreourforests/>
      <PatnersSection />
      <NewsSection />
      <FeedSection />
      <Footer />
      <FooterBottom />
      <Sidebar/>
    </div>
  );
}

export default HomePageContents;