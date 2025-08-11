"use client";

import { motion } from "framer-motion";

export default function IdentityHighlight() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-10 justify-center items-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center w-full leading-normal md:leading-normal md:w-3/5 px-4 md:px-0">
          <span className="text-gray-600 ">Hello!</span> I’m{" "}
          <span className="hidden md:inline-block">Arif Fadhilah, </span>{" "}
          Front-End Web Developer, Based in
          <span className="text-gray-600"> Bekasi</span>
        </h1>
        <p className="text-gray-600 font-medium px-4 md:px-0 text-center w-full md:w-3/5">
          Designing with Purpose, Crafting with Precition.
        </p>
      </motion.div>
    </>
  );
}
