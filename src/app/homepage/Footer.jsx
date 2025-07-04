"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  // State to ensure rendering happens only on the client to avoid hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Placeholder during server-side rendering to avoid hydration mismatch
  if (!isMounted) {
    return (
      <footer className="bg-[#0D3C00] text-white py-12 sm:py-10 md:py-8 lg:py-6 w-full border-t-4 border-[#1f5d2f] relative overflow-hidden">
        <div className="px-8 sm:px-6 md:px-4 lg:px-2"></div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#0D3C00] text-white py-12 sm:py-10 md:py-8 lg:py-6 w-full border-t-4 border-[#1f5d2f] relative overflow-hidden">
      {/* Background Overlay with Forest Theme */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D3C00]/80 to-[#1f5d2f]/80"></div>

      <div className="relative px-2 sm:px-2 md:px-2 lg:px-2">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 md:gap-4 lg:gap-3">
          {/* Column 1: Logo, Tagline */}
          <div className="p-6 sm:p-4 md:p-3 flex flex-col items-start">
            <Image
                    src="/kfc/kfc_logo100x100.png"
                    alt="Logo"
                    width={64}
                    height={64}
                    className="lg:py-4 py-4"
                />
            
            <p className="text-2xl sm:text-lg md:text-base lg:text-sm text-white/80 mb-6 sm:mb-4 md:mb-3 font-light italic">
              To be an internationally recognized institution for excellence in knowledge-based sustainable forestry training in management and conservation.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="p-6 sm:p-4 md:p-3">
            <h3 className="text-3xl sm:text-2xl md:text-xl lg:text-lg  font-bold text-white mb-4 sm:mb-3 md:mb-2">
            <p className=" font-bold text-[#fff] leading-[1.8] text-[1.2rem] mb-2">
              Contact Us
              </p>
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-2 text-white/80">
              <p className="text-xl sm:text-lg md:text-base lg:text-sm py-1 flex items-center gap-2">
                <FaEnvelope className="text-white" />
                college@kenyaforestservice.org
              </p>
              <p className="text-xl sm:text-lg md:text-base lg:text-sm py-1 flex items-center gap-2">
                <FaMapMarkerAlt className="text-white" />
                P.O BOX 8-20203 LONDIANI - KENYA
              </p>
              <p className="text-xl sm:text-lg md:text-base lg:text-sm py-1 flex items-center gap-2">
                <FaClock className="text-white" />
                Mon - Fri (8am - 5pm) Sat & Sun CLOSED
              </p>
            </div>
          </div>

          {/* Column 3: Toll-Free */}
          <div className="p-6 sm:p-4 md:p-3">
            <h3 className="text-3xl sm:text-2xl md:text-xl lg:text-lg  font-bold text-white mb-4 sm:mb-3 md:mb-2">
            <p className=" font-bold text-[#fff] leading-[1.8] text-[1.2rem] mb-2">
              Related Links
              </p>
            </h3>
            <div className="flex flex-col items-start gap-3 sm:gap-2 text-xl sm:text-xl md:text-lg lg:text-base text-white mb-3 sm:mb-2">
              <a href="https://environment.go.ke/" target="_blank" rel="noopener noreferrer">
                <span>Ministry of Environment, Climate Change and Forestry</span>
              </a>
              <a href="https://kenyaforestservice.org/" target="_blank" rel="noopener noreferrer">
                <span>Kenya Forest Service</span>
              </a>
              <a href="https://www.kefri.org/home.html" target="_blank" rel="noopener noreferrer">
                <span>KEFRI</span>
              </a>
            </div>
            
          </div>

          {/* Column 4: Subscribe */}
          <div className="p-6 sm:p-4 md:p-3">
            <h3 className="text-3xl sm:text-2xl md:text-xl lg:text-lg  font-bold text-white mb-4 sm:mb-3 md:mb-2">
            <p className=" font-bold text-[#fff] leading-[1.8] text-[1.2rem] mb-2">
              Subscribe to The College Magazine
              </p>
            </h3>
            <div className="flex flex-col gap-4 sm:gap-3 md:gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 sm:p-2.5 md:p-2  text-[#e6f5e6] text-xl sm:text-lg md:text-base lg:text-sm border border-white focus:outline-none focus:ring-2 focus:ring-[#1f5d2f] pl-10"
                />
              </div>
              <div className="flex justify-start">
                <button className="bg-[#1f5d2f] text-white py-4 sm:py-1.5 md:py-1 px-4 sm:px-3 md:px-2  text-2xl sm:text-lg md:text-base lg:text-2xl font-medium hover:bg-white hover:text-[#0D3C00] transition-all duration-300 shadow-md hover:shadow-lg">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-4 sm:gap-3 md:gap-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white text-xl sm:text-xl md:text-lg lg:text-3xl hover:text-[#1f5d2f] hover:scale-110 hover:rotate-12 transition-all duration-300" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white text-xl sm:text-xl md:text-lg lg:text-3xl hover:text-[#1f5d2f] hover:scale-110 hover:rotate-12 transition-all duration-300" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-xl sm:text-xl md:text-lg lg:text-3xl hover:text-[#1f5d2f] hover:scale-110 hover:rotate-12 transition-all duration-300" />
                </a>
                <a href="skype:user?call" target="_blank" rel="noopener noreferrer">
                  <FaSkype className="text-white text-xl sm:text-xl md:text-4xl lg:text-3xl hover:text-[#1f5d2f] hover:scale-110 hover:rotate-12 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;