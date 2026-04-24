"use client";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function StaffDocuments() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-[0.05] before:z-0 bg-forest-main"

      >
        <div className="text-center mb-10 z-10">
          <h1
            className="text-4xl md:text-5xl mb-4 text-[#fff] font-peugeot"
          >
            Hi there 
          </h1>
          <p
            className="text-white mb-8 max-w-[800px] mx-auto text-lg font-peugeot"
          >
            Welcome! The forest product you are looking for is reserved for the conservationist. If you are one just login.
          </p>
          <Link href="/login">
            <button
              className="bg-white text-[#0D3C00] px-6 py-3  hover:bg-[#023011] transition-colors duration-300 font-peugeot"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}