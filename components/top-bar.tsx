"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const TopBar = () => {
  const scheduleButtonRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    gsap.from(".section", {
      opacity: 0,
      y: -80,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
      pointerEvents: "auto",
    });
  });

  return (
    <div className="w-full flex justify-end gap-x-5  px-10 py-8 absolute text-muted-foreground items-center">
      <button
        onClick={() => {
          router.push("/projects");
          console.log("clicked");
        }}
        className="section text-white bg-[#0D0D0D]  px-4 py-2 rounded-full border flex items-center gap-1 font-semibold z-50"
      >
        recent projects
        <ArrowUpRight size={21} />
      </button>
      <div
        onClick={() =>
          router.push(
            "https://cal.com/abhi-vignesh-k-j4ezz4/15min?user=abhi-vignesh-k-j4ezz4&overlayCalendar=true"
          )
        }
        ref={scheduleButtonRef}
        className="flex items-center gap-1 section bg-[#0D0D0D]  px-4 py-2 rounded-full text-white font-semibold border z-50"
      >
        schedule meeting
        <ArrowUpRight size={21} />
      </div>
    </div>
  );
};
