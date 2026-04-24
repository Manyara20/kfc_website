'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const headsOfDepartments = [
  {
    name: 'Mr. Josphat Okumu Makokha',
    department: 'Department of Forestry',
    image: '/kfc/images/okumu.png',
    href: '/departments/forestry',
  },
  {
    name: 'Ms. Joannes Rwane',
    department: 'Department of Environmental Management',
    image: '/kfc/images/rwane.png',
    href: '/departments/environmental-management',
  },
  {
    name: 'Mr. Micheal Wanyonyi',
    department: 'Department of Wood Science and Technology',
    image: '/kfc/images/wanyonyi.png',
    href: '/departments/wood-science-technology',
  },
  {
    name: 'Mr. Donald Standa',
    department: 'Department of Information Communication and Technology',
    image: '/kfc/images/standa.png',
    href: '/departments/ict',
  },
  {
    name: 'Ms. Immaculate Ochieng',
    department: 'Department of Business Management',
    image: '/kfc/images/ochieng.png',
    href: '/departments/business-management',
  },
  {
    name: 'Mr. Appolinary Mwandigha',
    department: 'Department of Forest Protection and Security',
    image: '/kfc/images/mwan.jpeg',
    href: '/departments/protection-security',
  },
];

const HeadOfDepartments = () => {
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen bg-[#0f5a28] py-14 px-4 sm:px-6 lg:px-8 flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-fixed opacity-30" />

      <div className="relative max-w-8xl mx-auto flex-grow">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Heads of Departments
          </h1>
        </motion.div>

        {/* 1x4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {headsOfDepartments.map((hod) => (
            <Link href={hod.href} key={hod.name}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate="animate"
                className="relative h-120 overflow-hidden shadow-xl bg-white flex flex-col"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Image
                  src={hod.image}
                  alt={hod.name}
                  width={400}
                  height={300}
                  className="w-full h-[360px] object-cover transition-transform duration-500"
                  unoptimized
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-black text-lg font-bold">{hod.name}</h2>
                    <p className="text-gray-700 text-sm mt-1">{hod.department}</p>
                  </div>
                  <motion.button
                    className="bg-[#fe7c02] hover:bg-green-700 text-white px-4 py-2 text-sm font-semibold mt-2 w-fit self-end"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Department
                  </motion.button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default HeadOfDepartments;