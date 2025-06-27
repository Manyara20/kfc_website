"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';

const BusinessManagement = () => {
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
        className="relative h-[30vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset_ReentrancyGuard inset-0 bg-opacity-60" />
        <div className="relative z-10 text-left text-green-600 px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Department of Business Management
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            This course offered by the College is designed to equip individuals with the competences required to practice as Business Managers in the modern business sector.
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
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        {/* Main Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-5xl w-full relative z-10 border border-white/30 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src="/kfc/images/ochieng.png"
                alt="Ms. Immaculate Ochieng"
                width={600}
                height={400}
                className="w-full h-64 md:h-132 object-cover"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Ms. Immaculate Ochieng
              </h2>
              <h3
                className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
                style={{ fontSize: `${fontSize * 1.2}px` }}
              >
                Head of Department
              </h3>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                This course offered by the College is designed to equip individuals with the competences required to practice as Business Managers in the modern business sector. It equips students with entrepreneurial, financial, and administrative skills needed in the field of business. It reflects the employers’ demand for qualified personnel, that would enable them to compete in an environment that is constantly evolving and the expectations of clients are becoming ever more demanding. Some of the core units are Coordinating Human Resources Functions, Maintaining Customer Experience, Controlling Business Risks, Maintaining Business Assets and Liabilities among others.
              </p>
            </div>
          </div>

          {/* Courses Table */}
          <div className="mt-8">
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Courses
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-[#0f5a28] text-white">
                    <th className="border border-gray-300 p-2 text-left font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>S/No.</th>
                    <th className="border border-gray-300 p-2 text-left font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>Programme</th>
                    <th className="border border-gray-300 p-2 text-left font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>Authority</th>
                    <th className="border border-gray-300 p-2 text-left font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>Minimum Requirements</th>
                    <th className="border border-gray-300 p-2 text-left font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sno: 1, programme: 'Certificate in Business Management', authority: 'TVET CDACC', requirements: 'KCSE Mean Grade D (Plain)', duration: '1 Year' },
                    { sno: 2, programme: 'Green value chain enterprises', authority: 'Internal', requirements: 'Basic Literacy', duration: '1 Month' },
                  ].map((course) => (
                    <tr key={course.sno} className="even:bg-gray-100">
                      <td className="border border-gray-300 p-2 font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>{course.sno}</td>
                      <td className="border border-gray-300 p-2 font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>{course.programme}</td>
                      <td className="border border-gray-300 p-2 font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>{course.authority}</td>
                      <td className="border border-gray-300 p-2 font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>{course.requirements}</td>
                      <td className="border border-gray-300 p-2 font-['Peugeot',Helvetica,sans-serif]" style={{ fontSize: `${fontSize * 0.9}px` }}>{course.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default BusinessManagement;