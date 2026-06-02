"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section 
      className="bg-[#E8E8E6] text-[#0A0A0A] min-h-screen flex flex-col justify-between p-6 md:p-12 mesh-grid-light relative border-b border-black/10" 
      id="top"
    >
      
      {/* Top Spacer for the header */}
      <div className="h-10 md:h-12 w-full" />

      {/* Center Content: Portrait + Overlapping Name */}
      <div className="relative flex-grow flex items-center justify-center my-6 max-w-7xl mx-auto w-full">
        
        {/* Portrait Container */}
        <div className="absolute inset-y-0 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto flex items-end justify-center z-10 pointer-events-none">
          <div className="relative h-[55vh] md:h-[65vh] lg:h-[72vh] w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] group/portrait pointer-events-auto">
            <Image
              src="/emil-portrait.jpg"
              alt="Emil Marinov Portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center filter grayscale contrast-[1.15] brightness-[0.9] transition-transform duration-[1500ms] ease-out hover:scale-105"
            />
          </div>
        </div>

        {/* Overlapping Name Text */}
        <h1 className="relative z-20 text-center font-black tracking-tighter leading-none select-none text-[12vw] md:text-[10vw] lg:text-[9.5vw] text-white blend-difference pointer-events-none uppercase">
          Emil Marinov
        </h1>
        
      </div>

      {/* Bottom Bar: Socials (Left) + Titles (Right) */}
      <div className="relative z-30 flex items-end justify-between mt-auto w-full max-w-7xl mx-auto">
        
        {/* Social Icons (stacked vertically or laid out horizontally on mobile) */}
        <div className="flex flex-col gap-4 text-black">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF4D2D] hover:scale-110 transition-all duration-300 p-1"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF4D2D] hover:scale-110 transition-all duration-300 p-1"
            aria-label="Twitter (X)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF4D2D] hover:scale-110 transition-all duration-300 p-1"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Titles / Specialization (Right) */}
        <div className="text-right text-black select-none max-w-xs md:max-w-md">
          <p className="text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight uppercase hover:text-[#FF4D2D] transition-colors duration-300">
            KI-Berater
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight uppercase opacity-80 hover:text-[#FF4D2D] transition-colors duration-300">
            Dozent für KI
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight uppercase opacity-60 hover:text-[#FF4D2D] transition-colors duration-300">
            Mathematiker
          </p>
        </div>
        
      </div>
    </section>
  );
}
