"use client";

import Image from "next/image";
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';
import HeadOfDepartments from '@/components/HeadofDepartments';



const AcademicDepartments = () => {
  return (
    <div>
     <MainNavBar />
     <HeadOfDepartments />   
      <FooterBottom />
    </div>
  );
};

export default AcademicDepartments; 