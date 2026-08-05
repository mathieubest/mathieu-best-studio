import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 bg-neutral-50">
      <div className="container-custom py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-neutral-900 transition-opacity hover:opacity-80"
          >
            <div className="flex h-7 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary-600 to-violet-600">
              <span className="text-[10px] font-bold text-white">MBS</span>
            </div>
            Mathieu Best Studio
          </Link>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
            >
              Politique de confidentialité
            </Link>
            <a
              href="mailto:contact@mathieubeststudio.fr"
              className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
            >
              contact@mathieubeststudio.fr
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-neutral-200/60 pt-4">
          <p className="text-center text-xs text-neutral-400">
            &copy; {currentYear} Mathieu Best Studio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
