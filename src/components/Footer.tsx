"use client";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";
// import { FaTwitter, FaLinkedin, FaDribbble, FaInstagram } from "react-icons/fa";
import ButtonWithIcon from "./ButtonWithIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-5 px-5 text-center">
      <h2 className="text-4xl font-semibold">
        Let’s <span className="text-gray-700">Connect</span>
      </h2>
      <p className="text-gray-500 mt-2 max-w-4xl mx-auto md:py-7 text-sm md:text-base">
        Passionate about crafting seamless user experiences, building
        interactive web applications, or exploring the latest in frontend
        development? Feel free to connect—let’s innovate together!
      </p>

      {/* LinkedIn Button */}
      <div className="mt-5">
        <ButtonWithIcon href="https://www.linkedin.com/in/mohmmdarif">
          <Linkedin />
          Get In Touch
        </ButtonWithIcon>
      </div>

      <hr className="mt-10 border-neutral-200 w-4/5 h-[2px] rounded-full mx-auto" />
      <div className="md:flex md:flex-row-reverse justify-between items-center md:p-10">
        {/* Social Media Icons */}
        <div className="mt-8 md:mt-0 flex justify-center gap-6 text-gray-500 text-2xl">
          <Link
            href="mailto:ariffadhilah124@gmail.com"
            className="hover:text-gray-700"
            aria-label="Email"
          >
            <Mail />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohmmdarif"
            className="hover:text-gray-700"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://github.com/mohmmdarif"
            className="hover:text-gray-700"
            aria-label="GitHub"
          >
            <Github />
          </Link>
          <Link
            href="https://www.instagram.com/mohmmdarif_"
            className="hover:text-gray-700"
            aria-label="Instagram"
          >
            <Instagram />
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:inline-flex md:flex-row gap-1 mt-8 md:mt-0 text-foreground/70 text-sm">
          <span>&copy; 2025 Mohammad Arif Fadhilah.</span>
          <span>All designs, ideas, and magic are mine🩵.</span>
        </div>
      </div>
    </footer>
  );
}
