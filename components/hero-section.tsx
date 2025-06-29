"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const HeroSection = () => {
  const brandName = ["n", "u", "v", "e", "s", "s", "i"];
  const halfLength = Math.floor(brandName.length / 2);

  useGSAP(() => {
    gsap.from(".start", {
      y: 200,
      duration: 0.6,
      stagger: 0.1,
    });

    gsap.from(".end", {
      y: 200,
      duration: 0.6,
      stagger: -0.1,
    });
  });

  return (
    <div className="min-h-screen items-center justify-center font-sans font-bold flex flex-col">
      <div className="text-9xl text-violet-700 overflow-hidden">
        {brandName.map((char, idx) =>
          idx < halfLength ? (
            <span key={idx} className="inline-block start">
              {char}
            </span>
          ) : (
            <span className="inline-block end" key={idx}>
              {char}
            </span>
          )
        )}
      </div>
    </div>
  );
};
