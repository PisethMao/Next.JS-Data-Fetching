// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-12 font-english">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-wide">ISTAD</h2>
          <p className="mt-2 text-sm opacity-75">
            Your one-stop solution for all your needs
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-8 md:mt-0">
          <Link
            href="/about"
            className="text-lg hover:text-gray-200 transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-lg hover:text-gray-200 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:text-gray-200 transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-lg hover:text-gray-200 transition-all duration-300"
          >
            Blog
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-8 md:mt-0">
          <a
            href="https://www.facebook.com/piseth.mao.2025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/PisethMao528763"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-all duration-300"
          >
            <FaX />
          </a>
          <a
            href="https://github.com/PisethMao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-all duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 text-sm opacity-60">
        <p>
          &copy; {new Date().getFullYear()} ISTAD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
