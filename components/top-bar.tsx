'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";


export const TopBar = () => {

    useGSAP(() => {
        gsap.from(".section", {
            opacity: 0,
            y: -80,
            duration: 0.6,
            stagger: 0.1,
        })
    })
  return (
    <div className="w-full flex justify-end gap-x-10  px-20 py-8 absolute text-muted-foreground items-center">
      <div className="section">recent projects</div>
      <div className="flex items-center gap-1 section bg-purple-500 px-4 py-2 rounded-full text-black font-semibold">
        schedule meeting
        <ArrowUpRight size={21} />
      </div>
    </div>
  );
};
