"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 70%"],
  });

  // Smooth progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });

  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {/* Wrapper Header */}
        <div className="flex gap-6 justify-center items-center">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b !from-neutral-900 !to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl mb-6 relative z-20 font-bold tracking-tight">
            Experiences
          </h2>
          <div className=" bg-gray-200 bg-opacity-10 w-full h-[1px] rounded-full mb-4"></div>
        </div>

        {/* Description */}
        <p className="!text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-4xl">
          I am an active student majoring in Informatics with a focus on
          Software Engineering at Universitas Pembangunan Nasional &quot;Veteran&quot;
          Jakarta. I have a strong interest in web development and am passionate
          about creating innovative and efficient software solutions. My
          academic journey has equipped me with solid knowledge in various
          aspects of software engineering, and I am continually seeking
          opportunities to apply and expand my skills in real-world projects.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={item.id ? item.id : `${item.title}-${index}`}
            className="flex justify-start pt-10 md:pt-30 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full !bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full !bg-neutral-200 dark:bg-neutral-800 border !border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold !text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold !text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
