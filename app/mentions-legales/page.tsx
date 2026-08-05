import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Mathieu Best Studio. Retrouvez toutes les informations légales relatives à notre entreprise.",
  alternates: {
    canonical: "https://mathieubeststudio.fr/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="section-padding bg-white pt-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="section-label">Informations légales</span>
            <h1 className="heading-lg mt-3">Mentions légales</h1>
            <p className="body-text mt-4">
              Conformément aux dispositions des articles 6-III et 19 de la Loi
              n°2004-575 du 21 juin 2004 pour la Confiance dans
              l&apos;économie numérique (LCEN), il est précisé aux utilisateurs
              du site mathieubeststudio.fr l&apos;identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Éditeur du site */}
            <section>
              <h2 className="heading-md mb-4">Éditeur du site</h2>
              <dl className="space-y-3 rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Dénomination sociale
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">
                    Mathieu Best Studio
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Forme juridique
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">
                    SASU, Société par actions simplifiée unipersonnelle
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Capital social
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">500 EUR</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Numéro SIREN
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">
                    101 981 108
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Numéro SIRET
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">
                    10198110800018
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Adresse du siège social
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">
                    27 Rue du Mesnil, 78600 Maisons-Laffitte, France
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Nom du dirigeant
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">
                    Mathieu Best
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Adresse e-mail
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">
                    contact@mathieubeststudio.fr
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-900">
                    Numéro de téléphone
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-600">
                    06 35 11 11 03
                  </dd>
                </div>
              </dl>
            </section>

            {/* Directeur de la publication */}
            <section>
              <h2 className="heading-md mb-4">
                Directeur de la publication
              </h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm text-neutral-600">Mathieu Best</p>
              </div>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="heading-md mb-4">Hébergeur</h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm text-neutral-600">
                  Le site mathieubeststudio.fr est hébergé par la société{" "}
                  <strong>Infomaniak</strong>.
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="heading-md mb-4">Propriété intellectuelle</h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                  logo, icônes, etc.) est la propriété exclusive de{" "}
                  <strong>Mathieu Best Studio</strong>, sauf mention contraire.
                  Toute reproduction, distribution, modification, adaptation,
                  retransmission ou publication, même partielle, de ces
                  différents éléments est strictement interdite sans
                  l&apos;accord exprès par écrit de Mathieu Best Studio.
                </p>
              </div>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="heading-md mb-4">
                Limitation de responsabilité
              </h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Mathieu Best Studio s&apos;efforce de fournir des informations
                  aussi précises que possible sur son site. Toutefois, il ne
                  pourra être tenu responsable des omissions, des inexactitudes
                  et des carences dans la mise à jour, qu&apos;elles soient de
                  son fait ou du fait des tiers partenaires qui lui fournissent
                  ces informations. Toutes les informations indiquées sur le
                  site sont données à titre indicatif et sont susceptibles
                  d&apos;évoluer.
                </p>
              </div>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="heading-md mb-4">Droit applicable</h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Les présentes mentions légales sont régies par le droit
                  français. En cas de litige, les tribunaux français seront
                  seuls compétents.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
