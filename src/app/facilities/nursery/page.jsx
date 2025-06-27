"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdHelpCircle } from 'react-icons/io';
import { FaTree } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const forestList = [
  {
    name: 'Masaita Forest Block',
    image: '/kfc/masaita/masaita.jpeg',
    subtitle: 'The forest has an area of 4,152ha and is part of the Mau complex',
    href: '/forests/masaita',
  },
  {
    name: 'Kenya Forestry College Hospitality Center',
    image: '/images/forests/menengai.jpg',
    subtitle: 'The hospitality center offers conferencing…',
    href: '/forests/kfc-guesthouse-conference-centre',
  },
  {
    name: 'Computer Lab',
    image: '/images/forests/mt.kenya.jpg',
    subtitle: 'Our state-of-the-art computer lab at Kenya Forestry College is equipped with 40 modern workstations',
    href: '/forests/comp_lab',
  },
  {
    name: 'Tree Nurseries',
    image: '/kfc/nursery/nurseryd.jpg',
    subtitle: 'Masaita station has two nurseries, one within the college for students training…',
    href: '/forests/nursery',
  },
  {
    name: 'Hostels',
    image: '/images/forests/eburu.jpg',
    subtitle: 'The college has 2 modern hostels with a capacity of 256 complemented...',
    href: '/forests/hostels',
  },
  {
    name: 'Kenya Forestry College Library',
    image: '/images/forests/kakamega.jpg',
    subtitle: 'Library is more than a repository of books…',
    href: '/forests/library',
  },
];

const Nursery = () => {
  const [fontSize, setFontSize] = useState(16);
  const [showDrawer, setShowDrawer] = useState(false);
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
          backgroundImage: "url('/kfc/nursery/nurseryb.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60" />
        <div className="relative z-10 text-center text-green-600 px-6 max-w-4xl">
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-white text-[2.2rem] sm:text-[3rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize * 2}px` }}
          >
            Tree Nurseries
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-white leading-[1.8] text-[1rem] mt-4"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            With modern tree nurseries
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
          className="bg-white/95 p-6 sm:p-8 md:p-10 max-w-5xl w-full relative z-10 border border-white/30  shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src="/kfc/nursery/nurseryd.jpg"
                alt="Masaita Forest Block"
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover "
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h2
                className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-4 text-[1.8rem] sm:text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize"
                style={{ fontSize: `${fontSize * 1.5}px` }}
              >
                Tree Nurseries
              </h2>
              <p
                className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem]"
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                Kenya Forestry College has nurseries within the college for 
                students training with a capacity of over 500,000 seedlings while the largest  tree nursery with a capacity of 2 million seedlings.
              </p>
            </div>
          </div>

          {/* Carousel Photo Gallery */}
          <div className="mt-8">
            <h3
              className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-4"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              Photo Gallery
            </h3>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={5000}
              className=" overflow-hidden"
            >
              {[
                {
                  src: '/kfc/nursery/nuserya.jpg',
                  alt: 'Masaita Forest scenery',
                  caption: 'Tree nurseries',
                },
                {
                  src: '/kfc/nursery/nurseryb.jpeg',
                  alt: 'Masaita Forest trail',
                  caption: 'Tree nurseries',
                },
                {
                  src: '/kfc/nursery/nurseryc.jpeg',
                  alt: 'Masaita Forest wildlife',
                  caption: 'Tree nurseries',
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
                    className="absolute  bottom-0 left bg-black bg-opacity-50 text-white p-2 font-['Peugeot',Helvetica,sans-serif] text-[0.8rem]"
                    style={{ fontSize: `${fontSize * 0.8}px` }}
                  >
                    {image.caption}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>

        {/* Floating Forests Button */}
        <button
          onClick={() => setShowDrawer(true)}
          className="fixed top-[35%] right-4 z-50 bg-[#1a3c34] hover:bg-green-800 text-white p-3 rounded-full shadow-lg transition"
          title="Explore Other Forests"
        >
          <FaTree className="text-xl" />
        </button>

        {/* Side Drawer */}
        <AnimatePresence>
          {showDrawer && (
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[300px] sm:w-[400px] h-full bg-white shadow-xl z-50 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2
                  className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-xl"
                  style={{ fontSize: `${fontSize * 1.2}px` }}
                >
                  Our Facilities
                </h2>
                <button
                  onClick={() => setShowDrawer(false)}
                  className="text-[#0f5a28] hover:text-green-900"
                >
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>

              <div className="space-y-4">
                {forestList.map((forest) => (
                  <Link href={forest.href} key={forest.name} className="block group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:scale-[1.01] transition">
                      <Image
                        src={forest.image}
                        alt={forest.name}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0  bg-opacity-30 group-hover:bg-opacity-50 transition" />
                      <div
                        className="absolute bottom-0 p-4 text-white font-['Peugeot',Helvetica,sans-serif] font-semibold"
                        style={{ fontSize: `${fontSize * 0.9}px` }}
                      >
                        {forest.name}
                        <p
                          className="font-normal text-[0.8rem] mt-1"
                          style={{ fontSize: `${fontSize * 0.8}px` }}
                        >
                          {forest.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        
      </div>
      <FooterBottom />
    </div>
  );
};

export default Nursery;