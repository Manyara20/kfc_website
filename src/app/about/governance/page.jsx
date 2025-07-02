"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const Governance = () => {
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
            Governance of Kenya Forestry College
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            The Kenya Forest Service (KFS) Board of Directors oversees the governance and strategic direction of the College.
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
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-7xl w-full relative z-10 border border-white/30 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Text */}
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                The Kenya Forest Service (KFS) Board of Directors
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                The Kenya Forest Service (KFS) Board of Directors, also referred to as the Board, is the governing body empowered by the Forest Conservation & Management Act (2016). The Board plays a central role in steering both the Kenya Forestry College and KFS more broadly.
              </p>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                By overseeing policy, finance, staffing, and educational standards, the Board ensures that Kenya Forestry College effectively delivers on its mandate—training skilled forestry professionals in line with sustainable forest management principles.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src="/kfc/hero/Hero1.jpg"
                alt="Kenya Forestry College Governance"
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Key Functions */}
          <div className="mt-6">
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Key Functions of the KFS Board
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#fe7c02]">
                <h4
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#fe7c02] mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Policy, Governance & Strategic Oversight
                </h4>
                <ul
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] list-disc pl-5"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <li>Approves and ratifies organizational policies, including those guiding Kenya Forestry College.</li>
                  <li>Provides governance over the College by formulating administrative and management policies.</li>
                  <li>Ensures the Service operates under the Act and relevant regulations, aligning with constitutional standards.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#fe7c02]">
                <h4
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#fe7c02] mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Asset & Financial Management
                </h4>
                <ul
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] list-disc pl-5"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <li>Controls, administers, invests, and mobilizes KFS assets and funds, including college resources.</li>
                  <li>Prepares annual financial estimates for capital/recurrent budgets, covering staff, infrastructure, and college operations.</li>
                  <li>Oversees financial reserves and trust funds supporting forestry education and training.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#fe7c02]">
                <h4
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#fe7c02] mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Organizational Structure & Staffing
                </h4>
                <ul
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] list-disc pl-5"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <li>Appoints the Service Director (Chief Conservator) and other senior officers, including the College’s Director, based on professional qualifications.</li>
                  <li>Delegates authority by forming committees to oversee areas like forestry education, research, audit, etc.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#fe7c02]">
                <h4
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#fe7c02] mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Oversight of Kenya Forestry College
                </h4>
                <ul
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] list-disc pl-5"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <li>Designs policies for administration and management of the College: course delivery, technical/vocational training, and forestry education.</li>
                  <li>Ensures the College aligns with KFS’s broader mission to “provide training in forest protection and allied natural resources.”</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#fe7c02]">
                <h4
                  className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#fe7c02] mb-2"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  Education & Research Supervision
                </h4>
                <ul
                  className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] list-disc pl-5"
                  style={{ fontSize: `${fontSize * 0.9}px` }}
                >
                  <li>Promotes forestry education and supports the College in delivering certificate to diploma programs.</li>
                  <li>Collaborates with research institutes (like KEFRI) to identify and integrate research into College curricula.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why It's Vital */}
          <div className="mt-8">
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Why It's Vital
            </h3>
            <p
              className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
              style={{ fontSize: `${fontSize * 0.9}px` }}
            >
              By overseeing policy, finance, staffing, and educational standards, the Board ensures that Kenya Forestry College effectively delivers on its mandate—training skilled forestry professionals in line with sustainable forest management principles.
            </p>
          </div>
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Governance;