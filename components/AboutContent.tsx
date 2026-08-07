"use client";

import { useTranslation } from "@/lib/i18n/I18nProvider";

export default function AboutContent() {
  const { t } = useTranslation();

  return (
    <div className="section-padding bg-white pt-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          {/* Headline */}
          <h1 className="heading-xl mb-16 text-center text-balance">
            {t("about.headline")}
          </h1>

          {/* Intro */}
          <div className="mb-20 space-y-5">
            <p className="body-text text-balance">
              <strong>Mathieu Best Studio</strong>{" "}
              {(() => {
                const parts = t("about.intro1").split("Mathieu Best");
                return (
                  <>
                    {parts[0]}
                    <a
                      href="https://mathieubest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary-600 hover:text-primary-700"
                    >
                      Mathieu Best
                    </a>
                    {parts[1]}
                  </>
                );
              })()}
            </p>
            <p className="body-text text-balance">{t("about.intro2")}</p>
          </div>

          {/* Belief */}
          <div className="mb-20 rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-8 text-center sm:p-10">
            <p className="text-lg font-medium italic leading-relaxed text-neutral-700">
              {t("about.belief1")}
              <br />
              {t("about.belief2")}
            </p>
          </div>

          {/* Made with purpose */}
          <div className="mb-20">
            <h2 className="heading-lg mb-6">{t("about.purpose")}</h2>
            <p className="body-text max-w-2xl text-balance">
              {t("about.purposeText")}
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary-600">
              {t("about.process")}
            </p>
            <p className="mt-1 text-sm text-neutral-400">{t("about.processText")}</p>
          </div>

          {/* Future */}
          <div className="mb-20">
            <h2 className="heading-lg mb-6">{t("about.future")}</h2>
            <p className="body-text max-w-2xl text-balance">
              {t("about.futureText")}
            </p>
            <p className="mt-6 text-lg font-semibold text-neutral-900">
              {t("about.closing")}
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-neutral-200 pt-10 text-center">
            <p className="body-text mb-2">{t("about.cta")}</p>
            <a
              href="mailto:contact@mathieubeststudio.fr"
              className="text-lg font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              {t("about.ctaLink")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
