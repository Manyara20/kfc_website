"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const History = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure carousel renders client-side
    setIsVisible(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  if (!isMounted) {
    return null; // Prevent SSR issues with carousel
  }

  return (
    <div>
      <MainNavBar />
      {/* Hero */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/kfc/hero/Hero1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60" />
        <div className="relative z-10 text-center text-green-600 px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            About Kenya Forestry College
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            A premier institution for forestry education and training.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-5 z-0"
          style={{
            backgroundImage: `url('/kfc/hero/Hero1.jpg')`,
          }}
        ></div>

        {/* Main Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-5xl w-full relative z-10 border border-white/30 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Text */}
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                About Kenya Forestry College
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                KFC is a technical training institution legally established through section 17 of the Forest Conservation and Management Act (FCMA) of 2016. It is the entity that promotes forestry education and training by/within the Kenya Forest Service.
              </p>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                The College is duly registered with both the Technical and Vocational Education and Training Authority (TVETA), National Industrial Training Authority (NITA), and the Kenya Universities and Colleges Central Placement Service (KUCCPS). Kenya Forestry College’s vision is to be an international centre of excellence for applied education in sustainable management of forestry and allied resources.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src="/kfc/hero/Hero1.jpg"
                alt="Kenya Forestry College"
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Mission, Vision, Mandate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#fe7c02]">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#fe7c02] mb-2"
                style={{ fontSize: `${fontSize * 1.1}px` }}
              >
                Our Mission
              </h3>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem]"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                To promote best practices in the management of forests and allied resources through quality training, innovation, and outreach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#fe7c02]">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#fe7c02] mb-2"
                style={{ fontSize: `${fontSize * 1.1}px` }}
              >
                Our Vision
              </h3>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem]"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                To be an international centre of excellence for technical training in sustainable management of forests and allied resources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#fe7c02]">
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#fe7c02] mb-2"
                style={{ fontSize: `${fontSize * 1.1}px` }}
              >
                Mandate
              </h3>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem]"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                To train highly qualified technical manpower for sustainable management and utilization of forests and allied natural resources for environmental stability and socio-economic development.
              </p>
            </div>
          </div>

          {/* Carousel Photo Gallery */}
          <div className="mt-8">
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              College Photo Gallery
            </h3>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={5000}
              className="overflow-hidden"
            >
              {[
                {
                  src: '/kfc/hero/Hero1.jpg',
                  alt: 'College Campus',
                  caption: 'Kenya Forestry College Campus',
                },
                {
                  src: '/kfc/hero/Hero1.jpg',
                  alt: 'College Building',
                  caption: 'Main College Building',
                },
                {
                  src: '/kfc/hero/Hero1.jpg',
                  alt: 'College Grounds',
                  caption: 'College Grounds',
                },
              ].map((image, i) => (
                <div key={i} className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <p
                    className="absolute  bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 font-['Peugeot',Helvetica,sans-serif] text-[0.8rem]"
                    style={{ fontSize: `${fontSize * 0.8}px` }}
                  >
                    {image.caption}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>

          {/* College Map */}
          <div className="mt-8">
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              College Map
            </h3>
            <Image
              src="/kfc/hero/Hero1.jpg"
              alt="Kenya Forestry College Map"
              width={800}
              height={600}
              className="w-full h-64 ascended md:h-96 object-contain"
            />
          </div>
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default History;