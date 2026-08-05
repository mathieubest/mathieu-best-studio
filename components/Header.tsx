"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200/60 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-custom flex h-16 items-center"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-neutral-900 transition-opacity hover:opacity-80"
          aria-label="Mathieu Best Studio - Accueil"
        >
          <div className="flex h-9 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-violet-600">
            <span className="text-xs font-bold text-white">MBS</span>
          </div>
          <span className="hidden sm:inline">Mathieu Best Studio</span>
        </Link>
      </nav>
    </header>
  );
}
