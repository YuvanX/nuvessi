"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

export const Services = () => {
    const titleRef = useRef(null);
    const listRef = useRef(null);



    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      })

      tl.from(titleRef.current, {
        x: -100,
        duration: 0.3,
        opacity: 0,
      }).from(listRef.current, {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.5,
        ease: 'power2.out'
      })

    })
  return (
    <div className="mx-20">
      <div ref={titleRef} className="text-9xl font-semibold font-sans text-purple-500 leading-tight">
        services
      </div>
      <ul ref={listRef} className="text-white my-10 text-5xl space-y-8 tracking-tight font-light">
        <li className="flex items-center gap-x-5">
          <ArrowRight /> We craft high-converting landing pages for brands &
          products.
        </li>
        <li className="flex items-center gap-x-5"> <ArrowRight /> We build seamless, animated frontends that feel alive.</li>
        <li className="flex items-center gap-x-5"> <ArrowRight /> Clean, minimal design — always responsive, always fast.</li>

      </ul>
    </div>
  );
};
