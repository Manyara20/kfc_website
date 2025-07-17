"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StudentAffairs = () => {
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
            Student Affairs at Kenya Forestry College
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            Fostering a vibrant and inclusive student community.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center p-4 sm:p-6 md:p-8 relative overflow-hidden max-w-8xl"
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

        {/* Student Affairs Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-7xl w-full relative z-10 border border-white/30 shadow-lg"
        >
          {/* Student Welfare */}
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Student Welfare
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                At Kenya Forestry College, we prioritize student welfare by providing comprehensive support services, including counseling, academic advising, and financial aid assistance to ensure a conducive learning environment.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/kfc/hero/kfc_admin_block.jpg"
                alt="Student Welfare"
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Student Clubs */}
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Student Clubs
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Our vibrant student clubs, ranging from environmental conservation groups to debate and drama societies, offer opportunities for leadership, creativity, and community engagement.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/kfc/hero/kfc_admin_block.jpg"
                alt="Student Clubs"
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Religious Inclusion */}
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Religious Inclusion
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                We foster an inclusive environment with dedicated spaces for worship and spiritual activities, supporting students of all faiths to practice and connect with their communities.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/kfc/hero/kfc_admin_block.jpg"
                alt="Religious Inclusion"
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Medical Clinics */}
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Medical Clinics
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Our on-campus medical clinic provides accessible healthcare services, including routine check-ups, emergency care, and health education, ensuring students' well-being.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/kfc/hero/kfc_admin_block.jpg"
                alt="Medical Clinic"
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Serene Environment */}
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Serene Environment
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-gray-800 leading-[1.8] text-[0.9rem] mb-4"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Nestled in a lush, green setting, our campus offers a tranquil environment ideal for learning, reflection, and personal growth, surrounded by nature's beauty.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/kfc/hero/students_tree_nurssery.jpeg"
                alt="Serene Environment"
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-8">
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Student Life Gallery
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
                  src: '/kfc/hero/students_tree_nurssery.jpeg',
                  alt: 'Student Welfare',
                  caption: 'Student Support Services',
                },
                {
                  src: '/kfc/hero/graduands.jpg',
                  alt: 'Student Clubs',
                  caption: 'Vibrant Club Activities',
                },
                {
                  src: '/kfc/hero/Hero1.jpg',
                  alt: 'Religious Inclusion',
                  caption: 'Inclusive Worship Spaces',
                },
                {
                  src: '/kfc/hero/students_tree_nurssery.jpeg',
                  alt: 'Medical Clinic',
                  caption: 'On-Campus Healthcare',
                },
                {
                  src: '/kfc/hero/graduands.jpg',
                  alt: 'Serene Environment',
                  caption: 'Peaceful Campus Setting',
                },
              ].map((image, i) => (
                <div key={i} className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-84 md:h-132 object-cover"
                  />
                  <p
                    className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 font-['Peugeot',Helvetica,sans-serif] text-[0.8rem]"
                    style={{ fontSize: `${fontSize * 0.8}px` }}
                  >
                    {image.caption}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default StudentAffairs;