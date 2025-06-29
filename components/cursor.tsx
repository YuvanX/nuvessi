"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
gsap.registerPlugin(useGSAP);

export const Cursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.x,
        y: e.y
      })
    }
    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="w-5 h-5 rounded-full bg-violet-600 fixed"
    ></div>
  );
};
