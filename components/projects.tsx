"use client";

import Image from "next/image";
import { BackButton } from "./back-button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Projects = () => {

  const PROJECTS = [
    {
      title: "unfold ui clone",
      description:
        "This is an unfold websites ui clone depicting the skills i have. built using tailwindcss, motion, nextjs.",
      year: "2025",
      image: "/images/unfold.png",
    },
    {
      title: "nexus",
      description:
        "This is an full stack project, I have built it with miniaml design and its responsive. built using tailwindcss, motion, nextjs.",
      year: "2025",
      image: "/images/nexus.png",
    },
    {
      title: "portfolio",
      description:
        "This is an dukaan ui clone depicting the skills i have. built using tailwindcss, react.",
      year: "2025",
      image: "/images/portfolio.png",
    },
    {
      title: "cool youtube clone",
      description:
        "This is an youtube clone remastering the design and in a minimal way. built using tailwindcss, motion, nextjs.",
      year: "2024",
      image: "/images/youtube.png",
    },
    {
      title: "thoughts",
      description:
        "This a full stack blogging app, where i used different libraries for design.",
      year: "2024",
      image: "/images/thoughts.png",
    },
    
  ];

  const titleRef = useRef(null);
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(titleRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.3
      }).from(".project-items", {
        y: 400,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
      })
    })

    return () => ctx.revert();
  }, [])

  return (
    <div className="min-h-screen pt-20">
      <BackButton />
      <div ref={titleRef} className="text-white text-5xl font-semibold text-center">
        projects
      </div>
      <div className="mt-20 flex flex-col items-center max-w-3xl gap-4 mx-auto w-full">
        {PROJECTS.map((p, idx) => (<div key={idx} className="grid grid-cols-1 md:grid-cols-12 project-items">
            <div className="col-span-2 px-2 py-2 font-medium">{p.year}</div>
            <div className="col-span-8 flex flex-col px-4 py-2">
                <div className="font-semibold text-xl lowercase">{p.title}</div>
                <div className="text-muted-foreground lowercase">{p.description}</div>
            </div>
            <div className="col-span-2 px-2 py-2 relative">
              <Image src={p.image} alt="hi" fill className="rounded" style={{ objectFit: 'cover', objectPosition: 'center'}} />
            </div>
           
        </div>))}
      </div>
    </div>
  );
};
