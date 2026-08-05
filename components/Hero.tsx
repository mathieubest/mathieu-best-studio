"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

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
      {/* Background decorations */}
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
          {/* Title */}
          <h1
            className="heading-xl mb-6 max-w-4xl text-balance opacity-0"
            data-animate
          >
            Mathieu Best Studio
          </h1>

          {/* Subtitle */}
          <p
            className="mb-4 max-w-2xl text-balance text-lg text-neutral-500 opacity-0 sm:text-xl"
            data-animate
          >
            Développement d&apos;applications mobiles, logiciels sur mesure et
            solutions numériques.
          </p>

          {/* Description */}
          <p
            className="max-w-2xl text-balance text-base text-neutral-400 opacity-0 sm:text-lg"
            data-animate
          >
            Mathieu Best Studio accompagne les entreprises dans la conception et
            le développement de solutions numériques modernes. Nous développons
            des applications iOS, Android, des logiciels métier, des plateformes
            web et des outils utilisant l&apos;intelligence artificielle.
          </p>
        </div>
      </div>
    </section>
  );
}
