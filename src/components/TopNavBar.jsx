"use client";

import Link from "next/link";
import { FaPhone } from "react-icons/fa";

const TopNavBar = () => {
  return (
    <div className="bg-[#fe7c02] w-full">
      <div className="max-w-[1600px] mx-auto px-4 py-1.5 flex items-center justify-between">
        {/* Left: quick links */}
        <div className="flex items-center gap-0 text-white text-xs sm:text-sm font-semibold">
          <Link
            href="https://mail.kenyaforestservice.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hidden sm:block px-2 py-0.5"
          >
            Staff Mail
          </Link>
          <span className="hidden sm:block text-white/40 select-none">|</span>
          <Link href="/about/student-affairs" className="hover:underline hidden md:block px-2 py-0.5">
            Student Affairs
          </Link>
          <span className="hidden md:block text-white/40 select-none">|</span>
          <Link href="/tenders" className="hover:underline hidden md:block px-2 py-0.5">
            Tenders
          </Link>
          <span className="hidden md:block text-white/40 select-none">|</span>
          <Link href="/careers" className="hover:underline hidden md:block px-2 py-0.5">
            Careers
          </Link>
        </div>

        {/* Right: phone + apply button */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold">
            <FaPhone className="text-xs" />
            0794-976449
          </span>
          <Link
            href="/admissions/apply-now"
            className="bg-white text-[#fe7c02] text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 hover:bg-[#0D3C00] hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            Apply for a Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
