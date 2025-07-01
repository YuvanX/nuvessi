'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";


export const TopBar = () => {
    const scheduleButtonRef = useRef(null)
    useGSAP(() => {
        gsap.from(".section", {
            opacity: 0,
            y: -80,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.3,
        })
    })

    const handleHover = () => {
      gsap.to(scheduleButtonRef.current, {
        backgroundColor: "#facc15",
        duration: 0.3,
      })
    }

    const handleAfterHover = () => {
      gsap.to(scheduleButtonRef.current, {
        backgroundColor: "#a855f7",
        duration: 0.3,
        ease: 'back.in'
      })
    }

  return (
    <div className="w-full flex justify-end gap-x-10  px-20 py-8 absolute text-muted-foreground items-center">
      <div className="section hover:text-purple-500">recent projects</div>
      <div ref={scheduleButtonRef} onMouseEnter={handleHover} onMouseLeave={handleAfterHover} className="flex items-center gap-1 section bg-purple-500 px-4 py-2 rounded-full text-black font-semibold ">
        schedule meeting
        <ArrowUpRight size={21} />
      </div>
    </div>
  );
};
