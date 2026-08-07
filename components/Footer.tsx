"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/I18nProvider";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-neutral-200/60 bg-neutral-50">
      <div className="container-custom py-10">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          <Link
            href="/mentions-legales"
            className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
          >
            {t("footer.legal")}
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
          >
            {t("footer.privacy")}
          </Link>
          <a
            href="mailto:contact@mathieubeststudio.fr"
            className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
          >
            contact@mathieubeststudio.fr
          </a>
        </div>

        <div className="mt-6 border-t border-neutral-200/60 pt-4">
          <p className="text-center text-xs text-neutral-400">
            &copy; {currentYear} Mathieu Best Studio. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
