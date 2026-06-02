"use client";

import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-10 md:py-12 px-6 md:px-8 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <span 
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF4D2D] text-white text-xs font-bold" 
            aria-hidden="true"
          >
            EM
          </span>
          <span className="text-white text-sm font-semibold tracking-tight">
            Emil Marinov
          </span>
        </div>

        {/* Navigation */}
        <nav aria-label="Rechtliches" className="flex justify-center">
          <ul className="flex gap-6">
            <li>
              <Link 
                href="/datenschutz" 
                className="text-[#A0A0A0] hover:text-[#FF4D2D] transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                Datenschutz
              </Link>
            </li>
            <li>
              <Link 
                href="/impressum" 
                className="text-[#A0A0A0] hover:text-[#FF4D2D] transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                Impressum
              </Link>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-[#A0A0A0] text-xs font-mono">
          © {year} Emil Marinov. Alle Rechte vorbehalten.
        </p>

      </div>
    </footer>
  );
}
