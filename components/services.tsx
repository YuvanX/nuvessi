'use client'
import { Asterisk } from "lucide-react";
import { BackButton } from "./back-button";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Services = () => {
  
  const SERVICES = [
    {
      title: "Custom Landing Page Design",
      description: `Tailored landing pages that match your brand, built with clean code and a conversion-first approach.`,
    },
    {
      title: "One-Product Storefronts",
      description: `High-converting product pages for digital or physical products
            (ideal for Shopify or Gumroad sellers).`,
    },
    {
      title: "Portfolio & Personal Brand Pages",
      description: `Simple and elegant pages for freelancers, creators, and founders
            to showcase their work or story.`,
    },
    {
      title: "Pre-launch / Waitlist Pages",
      description: `Build hype and collect emails before your product or startup
            launches with optimized lead-gen landing pages.`,
    },
    {
      title: "Landing Page Redesign",
      description: `Already have a page? We’ll upgrade the visuals, speed, and structure
            to improve results and brand feel.`,
    },
  ];

  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3
    }).from(".list-items", {
      y: 200,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1
    });
  });

  return () => ctx.revert();

  }, [])


  
  return (
    <div className="flex flex-col items-center min-h-screen mt-20 overscroll-none overflow-hidden font-sans">
      <BackButton />
      <div ref={titleRef} className="lowercase text-5xl font-bold">Services</div>
      <div className="mt-20 max-w-9xl">
        <div  className="space-y-10 flex flex-col">
          {SERVICES.map((s, idx) => (
            <div  key={idx} className="flex items-start gap-2 list-items">
              <Asterisk size={20} />

              <div className="flex flex-col items-start">
                <div className="font-semibold text-2xl">{s.title}</div>
                <div className="font-thin  text-neutral-300 text-lg">
                  {s.description}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
