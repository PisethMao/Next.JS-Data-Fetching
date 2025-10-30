"use client";
// src/app/not-found.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";

const NotFound = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Fade-in effect for content
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 text-white font-english px-4">
      <div
        className={`space-y-6 max-w-lg w-full text-center transform transition-all duration-1000 ease-in-out ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* 404 Icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-24 w-24 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12H9m3-3V3m0 18v-6M21 12H3"
            />
          </svg>
        </div>

        {/* 404 Title */}
        <h1 className="text-9xl font-extrabold tracking-widest mb-4 transform hover:scale-110 transition duration-500">
          404
        </h1>

        {/* Description */}
        <p className="text-lg font-medium mb-2">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>

        {/* Subtext */}
        <p className="text-md mb-6">
          The page might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>

        {/* Go Back Button */}
        <Link href="/" passHref>
          <button className="mt-8 px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-green-700 hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
