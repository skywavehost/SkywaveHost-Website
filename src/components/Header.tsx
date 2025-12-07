"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0F3D2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <span className="text-xl font-bold">Euphoria</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium hover:text-[#22C55E] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-[#22C55E] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-[#22C55E] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-[#22C55E] transition-colors"
            >
              Company
            </Link>
            <Link
              href="#partners"
              className="text-sm font-medium hover:text-[#22C55E] transition-colors"
            >
              Partners
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:text-[#22C55E] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="bg-[#22C55E] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#16A34A] transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-sm font-medium hover:text-[#22C55E] transition-colors"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium hover:text-[#22C55E] transition-colors"
              >
                Services
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-[#22C55E] transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-[#22C55E] transition-colors"
              >
                Company
              </Link>
              <Link
                href="#partners"
                className="text-sm font-medium hover:text-[#22C55E] transition-colors"
              >
                Partners
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="bg-[#22C55E] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#16A34A] transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
