 'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const departments = [
  {
    name: 'Department of Forestry',
    image: '/kfc/departments/forestry.jpg',
    subtitle: 'The College offers Diploma course in Environmental Management which prepares students to balance forestry with biodiversity...',
    href: '/departments/forestry',
  },
  {
    name: 'Department of Environmental Management',
    image: '/kfc/departments/environmental_management.jpg',
    subtitle: 'The College offers Diploma course in Environmental Management which prepares students…',
    href: '/departments/environmental-management',
  },
  {
    name: 'Department of Wood Science and Technology',
    image: '/kfc/departments/wood_science.jpg',
    subtitle: 'The college trains diploma and certificate in Wood Science and Technology that focuses…',
    href: '/departments/wood-science-technology',
  },
  {
    name: 'Department of Business Management',
    image: '/kfc/departments/business_management.jpg',
    subtitle: 'This course offered by the College is designed to equip individuals with the competences…',
    href: '/departments/business-management',
  },
  {
    name: 'Department of Information Communication and Technology',
    image: '/kfc/departments/ict.jpg',
    subtitle: 'The College offers diploma and certificate course in ICT Technician…',
    href: '/departments/ict',
  },
  {
    name: 'Department of Protection and Security',
    image: '/kfc/departments/protection_security.jpg',
    subtitle: 'The College offers Diploma course in Environmental Management which prepares students to balance forestry with biodiversity...',
    href: '/departments/protection-security',
  },
];

const Departments = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const groupSize = 4; // 1x4 grid
  const totalGroups = Math.ceil(departments.length / groupSize);

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

  const currentDepartments = departments.slice(
    currentGroup * groupSize,
    (currentGroup + 1) * groupSize
  );

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative max-h-screen bg-[#0f5a28] py-14 px-4 sm:px-6 lg:px-8">
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
            Our Departments
          </h1>
        </motion.div>

        {/* 1x4 Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentDepartments.map((dept, index) => (
              <Link href={dept.href} key={dept.name}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative h-80 rounded-xl overflow-hidden shadow-xl bg-white"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    width={400}
                    height={300}
                    className="w-full h-3/5 object-cover transition-transform duration-500"
                    unoptimized
                  />
                  <div className="p-4 flex flex-col justify-between h-2/5">
                    <div>
                      <h2 className="text-black text-lg font-bold">{dept.name}</h2>
                      <p className="text-gray-700 text-sm mt-1">{dept.subtitle}</p>
                    </div>
                    <motion.button
                      className="bg-[#fe7c02] hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold mt-2 w-fit"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ... More
                    </motion.button>
                  </div>
                </motion.div>
              </Link>
            ))}
            {/* Fill empty slots if less than 4 departments */}
            {Array.from({ length: groupSize - currentDepartments.length }).map((_, i) => (
              <div key={`empty-${i}`} className="h-80 rounded-xl bg-gray-200 opacity-50" />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={handlePrev}
            className="bg-[#fe7c02] hover:bg-green-700 text-white p-3 rounded-full shadow-lg disabled:opacity-50"
            disabled={isTransitioning}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft className="text-xl" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="bg-[#fe7c02] hover:bg-green-700 text-white p-3 rounded-full shadow-lg disabled:opacity-50"
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

export default Departments;