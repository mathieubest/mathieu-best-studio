"use client";

import { useTranslation } from "@/lib/i18n/I18nProvider";
import Image from "next/image";

interface AppItem {
  nameKey: string;
  descriptionKey: string;
  gradient: string;
  icon: string;
  iconType: "emoji" | "image";
  platforms: string[];
  status: "live" | "building";
}

const apps: AppItem[] = [
  {
    nameKey: "app.spendless.name",
    descriptionKey: "app.spendless.description",
    gradient: "from-emerald-400 to-teal-600",
    icon: "/spendless-icon.png",
    iconType: "image",
    platforms: ["common.platforms.ios", "common.platforms.android"],
    status: "live",
  },
  {
    nameKey: "app.dripordrop.name",
    descriptionKey: "app.dripordrop.description",
    gradient: "from-violet-500 to-purple-700",
    icon: "/drip-or-drop-icon.png",
    iconType: "image",
    platforms: ["common.platforms.ios", "common.platforms.android"],
    status: "building",
  },
];

export default function RealisationsContent() {
  const { t } = useTranslation();

  return (
    <div className="section-padding bg-white pt-24">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="section-label">{t("realisations.label")}</span>
            <h1 className="heading-lg mt-3">{t("realisations.title")}</h1>
            <p className="body-text mt-4">{t("realisations.subtitle")}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <div
                key={app.nameKey}
                className="group rounded-2xl border border-neutral-200/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                {/* App icon */}
                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-[22%] bg-gradient-to-br ${app.gradient} shadow-lg transition-transform duration-300 group-hover:scale-105`}
                >
                  {app.iconType === "image" ? (
                    <Image
                      src={app.icon}
                      alt={t(app.nameKey)}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <span className="text-3xl" role="img" aria-hidden="true">
                      {app.icon}
                    </span>
                  )}
                </div>

                {/* App name */}
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {t(app.nameKey)}
                </h3>

                {/* Description area */}
                {app.status === "building" ? (
                  <div className="relative overflow-hidden rounded-xl">
                    {/* Description — rendered underneath, fades in on hover */}
                    <p className="text-sm leading-relaxed text-neutral-500 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                      {t(app.descriptionKey)}
                    </p>

                    {/* Building overlay — slides up on hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-500 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                      {/* Animated shimmer bar */}
                      <div className="mb-1 h-1 w-12 overflow-hidden rounded-full bg-neutral-100">
                        <div className="h-full w-8 animate-shimmer rounded-full bg-primary-400/60" />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider text-primary-600">
                        {t("app.building")}
                      </span>
                      {/* Subtle indicator that it's interactive */}
                      <svg
                        className="mt-2 animate-bounce text-neutral-300"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <p className="mb-4 text-sm leading-relaxed text-neutral-500">
                    {t(app.descriptionKey)}
                  </p>
                )}

                {/* Platforms */}
                <div
                  className={`flex items-center justify-center gap-2 ${
                    app.status === "building" ? "mt-3" : ""
                  }`}
                >
                  {app.platforms.map((platformKey) => (
                    <span key={platformKey} className="badge">
                      {t(platformKey)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-neutral-400">
              {t("realisations.more")}{" "}
              <a
                href="mailto:contact@mathieubeststudio.fr"
                className="text-primary-600 hover:text-primary-700"
              >
                {t("realisations.talk")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
