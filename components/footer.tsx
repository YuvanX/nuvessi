'use client'
import { redirect, useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  const router = useRouter();
  return (
    <div className="absolute bottom-0 left-0 right-0 mx-10 flex justify-between items-end overflow-hidden">
      <div className="text-5xl md:text-9xl text-[#E5E5E3] font-semibold tracking-tighter">
        slavan.
      </div>
      <div className="mb-2 md:mb-5 flex gap-8 md:gap-10 text-[#E5E5E3]">
       <FaInstagram onClick={() => router.push("https://www.instagram.com/slavanhq/")}  className="text-xs md:text-xl"/>
       <FaXTwitter className="text-xs md:text-xl" />
      </div>
    </div>
  );
};
