"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const overlay = useRef(null);
  const [isOverlayCompleted, setIsOverlayCompleted] = useState(false);

  const brandName = ["s", "l", "a", "v", "a", "n", "."];
  const brandDescription = "Making yours into ours - a brand built together.".split(" ");
  const subDescripton = "We collaborate with founders and dreamers to shape brands that feel personal, intentional, and timeless. From story to style — we craft every detail with purpose.".split(" ")
  const halfLength = Math.floor(brandName.length / 2);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".start", {
      y: 200,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
    })

    tl.from(overlay.current, {
      y: "100%",
      onComplete: () => setIsOverlayCompleted(true),
    });

    tl.to(overlay.current, {
      y: "-100%",
    });
  }, []);

  useEffect(() => {
    if (!isOverlayCompleted) return;

    gsap.from(".brand-description", {
      y: 200,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });
  }, [isOverlayCompleted]);

  return (
    <div className="min-h-screen font-sans relative">
      {isOverlayCompleted ? (
        <div className="flex flex-col  justify-center items-center h-screen  font-normal">
          <div className="overflow-y-hidden py-3 text-5xl">
            {brandDescription.map((b, idx) => (
              <span
                key={idx}
                className="inline-block brand-description lowercase mr-2"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="overflow-hidden py-3 text-5xl text-center mx-20 text-muted-foreground"> 
            {subDescripton.map((sd, idx) => (<span key={idx}
                className="inline-block brand-description lowercase mr-2">{sd}</span>))}
          </div>
        </div>
      ) : (
        <div className="text-9xl text-[#E5E5E3] overflow-hidden font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {brandName.map((char, idx) =>
              <span key={idx} className="inline-block start">
                {char}
              </span>
          )}
        </div>
      )}

      <div
        ref={overlay}
        className="h-screen w-screen bg-[#0D0D0D] absolute top-0"
      ></div>
    </div>
  );
};
