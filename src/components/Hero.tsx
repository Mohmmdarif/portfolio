"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import IdentityHighlight from "@/components/IdentityHighlight";
import { Download } from "lucide-react";

const Hero = () => {
  const BADGES = [
    "Web Development",
    "Frontend Web Developer",
    "Web Design",
  ];

  const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

  const parentVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE_IN_OUT,
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: -22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: EASE_IN_OUT },
    },
  };

  return (
    <section className="flex flex-col gap-10 justify-center items-center pt-10 md:pt-28 md:h-3/4">
      <motion.div
        className="flex gap-2"
        initial="hidden"
        animate="visible"
        variants={parentVariants}
      >
        {BADGES.map(text => (
          <motion.div key={text} variants={childVariants} className="hidden md:block">
            <Badge
              variant="outline"
              className="rounded-full text-sm bg-gray-50 font-medium text-muted-foreground dark:text-foreground"
            >
              {text}
            </Badge>
          </motion.div>
        ))}
        <motion.div
          variants={childVariants}
          className="md:hidden"
        >
          <Badge
            variant="outline"
            className="rounded-full text-sm bg-gray-50 font-medium"
          >
            Crafting Experiences That Matter
          </Badge>
        </motion.div>
      </motion.div>

      <IdentityHighlight />

      <ButtonWithIcon
        href="https://drive.google.com/file/d/1Z6mqrSugis8u7MH5tADWZYkD9pOrR4SP/view?usp=sharing"
        className="z-10"
      >
        <Download />
        Download My CV
      </ButtonWithIcon>
    </section>
  );
}
export default Hero;
