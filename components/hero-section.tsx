"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const overlay = useRef(null);
  const [isOverlayCompleted, setIsOverlayCompleted] = useState(false);

  const brandName = ["s", "l", "a", "v", "a", "n", "."];
  const halfLength = Math.floor(brandName.length / 2);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".start", {
      y: 200,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
    }).from(".end", {
      y: 200,
      duration: 0.6,
      stagger: -0.1,
    });

    tl.from(overlay.current, {
      y: "100%",
      onComplete: () => setIsOverlayCompleted(true),
    });

    tl.to(overlay.current, {
      y: "-100%",
    });
  }, []);

  return (
    <div className="min-h-screen font-sans  flex flex-col relative">
      {isOverlayCompleted ? (
        <div>Making yours into ours - a brand built together</div>
      ) : (
        <div className="text-9xl text-purple-500 overflow-hidden font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
      )}

      <div
        ref={overlay}
        className="h-screen w-screen bg-purple-500 absolute"
      ></div>
    </div>
  );
};
