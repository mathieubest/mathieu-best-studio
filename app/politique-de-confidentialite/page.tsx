import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Mathieu Best Studio. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
  alternates: {
    canonical: "https://mathieubeststudio.fr/politique-de-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="section-padding bg-white pt-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="section-label">Protection des données</span>
            <h1 className="heading-lg mt-3">Politique de confidentialité</h1>
            <p className="body-text mt-4">
              Dernière mise à jour :{" "}
              <time dateTime="2026-08-05">5 août 2026</time>
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-10 rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-neutral-600">
              La présente politique de confidentialité a pour objectif
              d&apos;informer les utilisateurs du site{" "}
              <strong>mathieubeststudio.fr</strong> sur la manière dont leurs
              données personnelles sont collectées, traitées et protégées,
              conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Collecte des données */}
            <section>
              <h2 className="heading-md mb-4">
                1. Collecte des données personnelles
              </h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Dans le cadre de l&apos;utilisation de notre site, nous
                  pouvons être amenés à collecter les données personnelles
                  suivantes lorsque vous utilisez notre formulaire de contact :
                </p>
                <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-neutral-600">
                  <li>Nom et prénom</li>
                  <li>Adresse e-mail</li>
                  <li>Message (contenu libre)</li>
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Ces données sont collectées uniquement lorsque vous les
                  fournissez volontairement en utilisant le formulaire de
                  contact disponible sur notre site. Aucune collecte automatisée
                  de données personnelles n&apos;est effectuée sans votre
                  consentement.
                </p>
              </div>
            </section>

            {/* Utilisation */}
            <section>
              <h2 className="heading-md mb-4">
                2. Utilisation des données collectées
              </h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Les données personnelles collectées via le formulaire de
                  contact sont utilisées exclusivement pour :
                </p>
                <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-neutral-600">
                  <li>Répondre à vos demandes et questions</li>
                  <li>Vous fournir des informations sur nos services</li>
                  <li>
                    Assurer le suivi de nos échanges professionnels
                  </li>
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  En aucun cas, vos données personnelles ne seront utilisées à
                  des fins de prospection commerciale sans votre consentement
                  explicite préalable, ni ne seront transmises à des tiers.
                </p>
              </div>
            </section>

            {/* Conservation */}
            <section>
              <h2 className="heading-md mb-4">
                3. Durée de conservation des données
              </h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Les données personnelles collectées via le formulaire de
                  contact sont conservées pendant une durée maximale de{" "}
                  <strong>3 ans</strong> à compter du dernier échange avec
                  l&apos;utilisateur, conformément aux recommandations de la
                  CNIL. Au-delà de cette durée, les données sont supprimées ou
                  anonymisées.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="heading-md mb-4">4. Cookies</h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Le site <strong>mathieubeststudio.fr</strong> n&apos;utilise
                  aucun cookie de traçage, de publicité ou d&apos;analyse
                  d&apos;audience. Nous respectons votre vie privée et ne
                  collectons aucune donnée de navigation à des fins
                  commerciales.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Si des cookies techniques strictement nécessaires au
                  fonctionnement du site venaient à être mis en place, vous en
                  seriez informé lors de votre première visite et auriez la
                  possibilité de les accepter ou de les refuser.
                </p>
              </div>
            </section>

            {/* Droits */}
            <section>
              <h2 className="heading-md mb-4">
                5. Droits des utilisateurs
              </h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Conformément au RGPD et à la loi Informatique et Libertés,
                  vous disposez des droits suivants concernant vos données
                  personnelles :
                </p>
                <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-neutral-600">
                  <li>
                    <strong>Droit d&apos;accès</strong> : vous pouvez obtenir la
                    confirmation que vos données sont traitées et en obtenir une
                    copie.
                  </li>
                  <li>
                    <strong>Droit de rectification</strong> : vous pouvez
                    demander la correction de données inexactes ou incomplètes.
                  </li>
                  <li>
                    <strong>Droit à l&apos;effacement</strong> : vous pouvez
                    demander la suppression de vos données dans certains cas
                    (« droit à l&apos;oubli »).
                  </li>
                  <li>
                    <strong>Droit à la limitation du traitement</strong> : vous
                    pouvez demander la limitation de l&apos;utilisation de vos
                    données.
                  </li>
                  <li>
                    <strong>Droit d&apos;opposition</strong> : vous pouvez vous
                    opposer au traitement de vos données pour des motifs
                    légitimes.
                  </li>
                  <li>
                    <strong>Droit à la portabilité</strong> : vous pouvez
                    recevoir vos données dans un format structuré et lisible.
                  </li>
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Pour exercer ces droits, vous pouvez nous contacter à
                  l&apos;adresse suivante :{" "}
                  <a
                    href="mailto:contact@mathieubeststudio.fr"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    contact@mathieubeststudio.fr
                  </a>
                  . Nous nous engageons à répondre à votre demande dans un délai
                  maximal d&apos;un mois.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Si vous estimez que vos droits ne sont pas respectés, vous
                  pouvez introduire une réclamation auprès de la{" "}
                  <strong>CNIL</strong> (Commission Nationale de
                  l&apos;Informatique et des Libertés) via leur site web :{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    www.cnil.fr
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="heading-md mb-4">6. Contact</h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Pour toute question relative à cette politique de
                  confidentialité ou pour exercer vos droits, vous pouvez nous
                  contacter :
                </p>
                <ul className="mt-3 list-none space-y-1 text-sm leading-relaxed text-neutral-600">
                  <li>
                    📧 Par e-mail :{" "}
                    <a
                      href="mailto:contact@mathieubeststudio.fr"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      contact@mathieubeststudio.fr
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Modification */}
            <section>
              <h2 className="heading-md mb-4">
                7. Modification de la politique de confidentialité
              </h2>
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Mathieu Best Studio se réserve le droit de modifier la
                  présente politique de confidentialité à tout moment. Les
                  modifications prendront effet dès leur publication sur cette
                  page. Nous vous invitons à consulter régulièrement cette page
                  pour prendre connaissance des éventuelles mises à jour.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
