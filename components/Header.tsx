"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

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
        {/* Logo — left */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-neutral-900 transition-opacity hover:opacity-80"
          aria-label="Mathieu Best Studio - Accueil"
        >
          <div className="flex h-9 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-violet-600">
            <span className="text-xs font-bold text-white">MBS</span>
          </div>
        </Link>

        {/* Nav links — centered */}
        <div className="flex flex-1 items-center justify-center gap-1">
          <Link
            href="/realisations"
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            {t("nav.realisations")}
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            {t("nav.about")}
          </Link>
        </div>

        {/* Language switcher — right */}
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
