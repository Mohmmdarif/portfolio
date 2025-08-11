"use client";

import Image, { StaticImageData } from "next/image";
import ButtonWithIcon from "./ButtonWithIcon";
import { Linkedin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Testimonial = {
  quote?: string;
  name?: string;
  designation?: string;
  src: string | StaticImageData;
};

export const AboutMe = ({
  testimonials,
  maxStack = 5,
}: {
  testimonials: Testimonial[];
  maxStack?: number;
}) => {
  const primaryName = "Mohammad Arif Fadhilah";
  const ordered = [...testimonials];
  const idx = ordered.findIndex((t) => t.name === primaryName);
  if (idx !== -1) {
    const [me] = ordered.splice(idx, 1);
    ordered.push(me);
  }

  const stack = ordered.slice(0, maxStack);
  const me = stack[stack.length - 1]; // top card info

  const pattern = [
    { x: -18, y: 12, rotate: -10, scale: 0.86, opacity: 0.45 },
    { x: 14, y: 6, rotate: 6, scale: 0.88, opacity: 0.55 },
    { x: -10, y: 0, rotate: 10, scale: 0.9, opacity: 0.6 },
    { x: 10, y: -6, rotate: -4, scale: 0.93, opacity: 0.75 },
    { x: 0, y: -12, rotate: 2, scale: 1, opacity: 1 },
  ];

  const layers = stack.map((t, i) => {
    const p = pattern[Math.min(i, pattern.length - 1)];
    return { ...t, ...p, z: i + 1, isTop: i === stack.length - 1 };
  });

  // In-view detection
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.35 });

  return (
    <motion.section
      ref={rootRef}
      className="max-w-sm md:max-w-4xl mx-auto antialiased px-4 md:px-8 lg:px-12 md:py-20"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Stack Photos */}
        <div>
          <div className="relative h-80 w-full">
            {layers.map((item, i) => (
              <motion.div
                key={item.name ?? i}
                className="absolute inset-0 px-4"
                style={{ zIndex: item.z }}
                initial={{ opacity: 0, y: 40, scale: item.scale * 0.9 }}
                animate={
                  inView
                    ? {
                      opacity: item.opacity,
                      y: item.y,
                      x: item.x,
                      scale: item.scale,
                      rotate: item.rotate,
                    }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: inView ? 0.1 + i * 0.08 : 0,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.name || "Photo"}
                  width={500}
                  height={500}
                  draggable={false}
                  className={`h-full w-full rounded-3xl object-cover object-center border border-border/50 bg-card shadow-sm ${item.isTop ? "shadow-lg" : "blur-[0.3px]"
                    }`}
                  priority={item.isTop}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text */}
        <motion.div
          className="flex flex-col justify-between py-4"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          {me && (
            <div>
              <h2 className="text-2xl font-bold text-foreground">{me.name}</h2>
              {me.designation && (
                <p className="text-sm text-muted-foreground">
                  {me.designation}
                </p>
              )}
              {me.quote && (
                <p className="text-sm md:text-base text-muted-foreground mt-8 leading-relaxed">
                  {me.quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
                      animate={
                        inView
                          ? { opacity: 1, y: 0, filter: "blur(0px)" }
                          : {}
                      }
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        delay: inView ? 0.3 + index * 0.02 : 0,
                      }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </p>
              )}
            </div>
          )}
          <ButtonWithIcon
            href="https://www.linkedin.com/in/mohmmdarif"
            className="mt-8 w-fit"
          >
            <Linkedin />
            Get In Touch
          </ButtonWithIcon>
        </motion.div>
      </div>
    </motion.section>
  );
};