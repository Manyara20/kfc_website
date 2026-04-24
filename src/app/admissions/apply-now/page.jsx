"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

const Apply = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <MainNavBar />
      {/* Hero */}
      <div
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center bg-[url('/kfc/hero/Hero1.jpg')]"
      >
        <div className="absolute inset-0 bg-opacity-60" />
        <div className="relative z-10 text-center text-green-600 px-6 max-w-7xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Apply to Kenya Forestry College
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            Join our premier institution for forestry education and training.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center p-4 sm:p-6 md:p-8 relative overflow-hidden bg-forest-main"

      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-5 z-0 bg-[url('/kfc/clas_lab.jpg')]"
        ></div>

        {/* Application Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-7xl w-full relative z-10 border border-white/30 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Left Column */}
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Apply via KUCCPS
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Apply to Kenya Forestry College through the Kenya Universities and Colleges Central Placement Service (KUCCPS) for a seamless application process.
              </p>
              <a
                href="https://students.kuccps.net/institutions/3880/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#fe7c02] text-white font-['Peugeot',Helvetica,sans-serif] font-semibold py-2 px-4 rounded hover:bg-[#e66b02] transition-colors"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Apply Now
              </a>
            </div>
            {/* Right Column */}
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Apply Directly
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                You can apply using either the application form or the student management system on our official portal.
              </p>
              <a
                href="/kfc/docs/kfc_application_form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#fe7c02] text-white font-['Peugeot',Helvetica,sans-serif] font-semibold py-2 px-4 rounded hover:bg-[#e66b02] transition-colors"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Apply Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Apply;