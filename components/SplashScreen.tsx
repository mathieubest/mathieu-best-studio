"use client";

import { useState, useEffect, useRef } from "react";
import { Brain, Lightbulb, Smartphone } from "lucide-react";

const ICON_DURATION = 1000;
const FADE_OUT = 600;
const ICON_SIZE = 52;

type Stage = "brain" | "lightbulb" | "phone" | "reveal" | "complete";

export default function SplashScreen() {
  const [stage, setStage] = useState<Stage>("brain");
  const [mounted, setMounted] = useState(false);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || hasPlayedRef.current) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setStage("complete");
      hasPlayedRef.current = true;
      return;
    }

    hasPlayedRef.current = true;

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStage("lightbulb"), ICON_DURATION));
    timers.push(setTimeout(() => setStage("phone"), ICON_DURATION * 2));
    timers.push(setTimeout(() => setStage("reveal"), ICON_DURATION * 3));
    timers.push(setTimeout(() => setStage("complete"), ICON_DURATION * 3 + FADE_OUT));

    return () => timers.forEach(clearTimeout);
  }, [mounted]);

  useEffect(() => {
    if (stage === "complete") {
      document.body.style.overflow = "";
    } else if (mounted) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage, mounted]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white" aria-hidden="true" suppressHydrationWarning />
    );
  }

  if (stage === "complete") return null;

  return (
    <>
      <style>{`
        @keyframes splashIcon {
          0%   { opacity: 0; transform: scale(0.9); }
          18%  { opacity: 1; transform: scale(1); }
          82%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.96); }
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${
          stage === "reveal" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transition: `opacity ${FADE_OUT}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
        aria-hidden="true"
      >
        {["brain", "lightbulb", "phone"].includes(stage) && (
          <div
            key={stage}
            className="flex items-center justify-center"
            style={{ animation: `splashIcon ${ICON_DURATION}ms ease-out forwards` }}
          >
            {stage === "brain" && <Brain size={ICON_SIZE} strokeWidth={1.5} className="text-primary-600" aria-hidden="true" />}
            {stage === "lightbulb" && <Lightbulb size={ICON_SIZE} strokeWidth={1.5} className="text-primary-600" aria-hidden="true" />}
            {stage === "phone" && <Smartphone size={ICON_SIZE} strokeWidth={1.5} className="text-primary-600" aria-hidden="true" />}
          </div>
        )}
      </div>
    </>
  );
}
