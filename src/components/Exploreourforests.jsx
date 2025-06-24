'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const forests = [
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
    image: '/images/forests/ngare.png',
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

const ForestCardGrid = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const groupSize = 4; // 1x3 grid
  const totalGroups = Math.ceil(forests.length / groupSize);

  // Automatic rotation every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentGroup]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
    setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentForests = forests.slice(
    currentGroup * groupSize,
    (currentGroup + 1) * groupSize
  );

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative max-h-screen  bg-[#0f5a28] py-14 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      />

      <div className="relative max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Facilities
          </h1>
        </motion.div>

        {/* 1x3 Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentForests.map((forest, index) => (
              <Link href={forest.href} key={forest.name}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative h-64 squred-xl overflow-hidden shadow-xl bg-white"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={forest.image}
                    alt={forest.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h2 className="text-white text-lg font-bold">{forest.name}</h2>
                    <p className="text-white/90 text-sm">{forest.subtitle}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
            {/* Fill empty slots if less than 3 forests */}
            {Array.from({ length: groupSize - currentForests.length }).map((_, i) => (
              <div key={`empty-${i}`} className="h-64 squared-xl bg-gray-200 opacity-50" />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={handlePrev}
            className="bg-green-600 hover:bg-green-700 text-white p-3 squared-full shadow-lg disabled:opacity-50"
            disabled={isTransitioning}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft className="text-xl" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="bg-green-600 hover:bg-green-700 text-white p-3 squared-full shadow-lg disabled:opacity-50"
            disabled={isTransitioning}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowRight className="text-xl" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ForestCardGrid;