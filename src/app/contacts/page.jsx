"use client";

import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(
  () => import('@/components/MapComponent'),
  { ssr: false, loading: () => <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center"><p>Loading map...</p></div> }
);

const ContactUsPage = () => {
  // Map center (Kenya) and locations
  const mapCenter = [0, 37.5]; // Approximate geographic center of Kenya
  const locations = [
    {
      name: 'Kenya Forestry College, Londiani',
      position: [-0.153705,35.607246], // Karura Forest, Nairobi
      isHeadquarters: true,
    },
    
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      
      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white">We are here to help! Reach out to us for any inquiries or support.</p>
        </div>

        {/* Grid Layout for Contact Information and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            {/* Headquarters Card */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-green-900 mb-6">Kenya Forestry College, Londiani</h2>
              <div className="space-y-4 text-gray-700 break-words">
                <p>Londiani Kericho County, Off Nakuru-Kericho Highway</p>
                <p>P.O. Box 8-20203 Londiani</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:college@kenyaforestservice.org"
                    className="text-green-600 hover:underline break-all"
                  >
                    college@kenyaforestservice.org
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://www.kenyaforestservice.org"
                    className="text-green-600 hover:underline break-all"
                  >
                    www.kfc.ac.ke
                  </a>
                </p>
                <p>Tel: 0794-976449, 0731-976449</p>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-green-900 mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-green-600 hover:text-green-700 transition duration-300"
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-green-600 hover:text-green-700 transition duration-300"
                >
                  <FaFacebookF className="text-3xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-green-600 hover:text-green-700 transition duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="skype:user?call"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Skype"
                  className="text-green-600 hover:text-green-700 transition duration-300"
                >
                  <FaSkype className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Locations</h2>
            <div className="w-full h-[400px]">
              <MapComponent mapCenter={mapCenter} locations={locations} />
            </div>
          </div>
        </div>

        
        
      </main>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
};



export default ContactUsPage;