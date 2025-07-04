"use client";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Footer } from "./footer";

export const HeroSection = () => {
  const overlay = useRef(null);
  const router = useRouter();

  const [isOverlayCompleted, setIsOverlayCompleted] = useState(false);

  const brandName = ["s", "l", "a", "v", "a", "n", "."];


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".start", {
        y: 200,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
      });

      tl.from(overlay.current, {
        y: "100%",
        onComplete: () => setIsOverlayCompleted(true),
      });

      tl.to(overlay.current, {
        y: "-100%",
      });
    });
    return () => ctx.revert();
  }, []);

  

  return (
    <div className="min-h-screen font-sans relative overflow-hidden">
      {isOverlayCompleted ? (
        <div className="flex flex-col items-center justify-center h-screen mx-5">
          <div className="text-lg md:text-5xl text-center tracking-tighter whitespace-nowrap font-thin">
            Making yours into ours - a brand built together.
          </div>
          <div className="w-full text-center mt-2 font-extralight text-xs md:text-xl md:max-w-2xl md:mt-4">
            From concept to execution, we transform ideas into powerful digital
            solutions that resonate with your audience and drive meaningful
            results.
          </div>
          <div className="flex items-center gap-6 my-5 text-xs md:text-sm">
            <div
              onClick={() => router.push("/services")}
              className="bg-[#E5E5E3] text-black py-2 px-4 rounded-full font-medium flex items-center gap-2 "
            >
              checkout services
              <ArrowRight size={13} />
            </div>
            <div onClick={() => router.push('https://cal.com/abhi-vignesh-k-j4ezz4/15min?user=abhi-vignesh-k-j4ezz4&overlayCalendar=true')}>Start your project</div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="text-5xl md:text-9xl text-[#E5E5E3] overflow-hidden font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {brandName.map((char, idx) => (
            <span key={idx} className="inline-block start">
              {char}
            </span>
          ))}
        </div>
      )}

      <div
        ref={overlay}
        className="h-screen w-screen bg-[#0D0D0D] absolute top-0 z-[100]"
      ></div>
    </div>
  );
};
