"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/I18nProvider";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-animate]").forEach((el) => {
              el.classList.add("animate-slide-up");
              el.classList.remove("opacity-0");
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-subtle"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        <div className="flex min-h-[90vh] flex-col items-center justify-center py-24 text-center sm:py-32 lg:py-40">
          <h1
            className="heading-xl mb-6 max-w-4xl text-balance opacity-0"
            data-animate
          >
            {t("hero.title")}
          </h1>

          <p
            className="mb-4 max-w-2xl text-balance text-lg text-neutral-500 opacity-0 sm:text-xl"
            data-animate
          >
            {t("hero.subtitle")}
          </p>

          <p
            className="mb-10 max-w-2xl text-balance text-base text-neutral-400 opacity-0 sm:text-lg"
            data-animate
          >
            {t("hero.description")}
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 opacity-0"
            data-animate
          >
            <Link href="/realisations" className="btn-primary px-8 py-3.5 text-base">
              {t("hero.cta")}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
