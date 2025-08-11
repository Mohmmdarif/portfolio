"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

type ButtonWithIconProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export default function ButtonWithIcon(props: ButtonWithIconProps) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 50 }} // Muncul dari bawah
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      className={props.className}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" className="rounded-full p-7">
        {props.children}
      </Button>
    </motion.a>
  );
}
