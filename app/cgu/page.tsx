import Link from "next/link"

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-black">
            MaybeWith
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-black">
              Accueil
            </Link>
            <Link href="/cgu" className="text-black font-medium">
              CGU
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-black mb-8">Conditions Générales d'Utilisation</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">1. Définitions</h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Utilisateur :</strong> Toute personne physique ou morale utilisant la plateforme MaybeWith.
              </p>
              <p>
                <strong>Plateforme :</strong> L'application mobile MaybeWith et tous ses services associés.
              </p>
              <p>
                <strong>Services :</strong> L'ensemble des fonctionnalités proposées par MaybeWith pour connecter
                établissements et collaborateurs.
              </p>
              <p>
                <strong>Établissement :</strong> Restaurant, bar, café, hôtel ou tout autre établissement de
                l'hospitalité utilisant nos services.
              </p>
              <p>
                <strong>Collaborateur :</strong> Personne proposant ses services professionnels via la plateforme.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">2. Acceptation des conditions</h2>
            <p className="text-gray-700">
              L'utilisation de la plateforme MaybeWith implique l'acceptation pleine et entière des présentes conditions
              générales d'utilisation. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">3. Description des services</h2>
            <p className="text-gray-700 mb-4">
              MaybeWith est une plateforme de mise en relation entre établissements de l'hospitalité et collaborateurs
              pour des missions temporaires. Nos services incluent :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Géolocalisation en temps réel des opportunités</li>
              <li>Système de notifications instantanées</li>
              <li>Gestion des candidatures et recrutements</li>
              <li>Validation des missions par QR code</li>
              <li>Système de paiement sécurisé</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">4. Inscription et compte utilisateur</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Pour utiliser nos services, vous devez créer un compte en fournissant des informations exactes et à
                jour. Vous êtes responsable de la confidentialité de vos identifiants de connexion.
              </p>
              <p>
                Vous vous engagez à notifier immédiatement MaybeWith de toute utilisation non autorisée de votre compte.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">5. Utilisation de la plateforme</h2>
            <div className="text-gray-700 space-y-4">
              <p>Vous vous engagez à utiliser la plateforme de manière légale et respectueuse. Il est interdit de :</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Publier des informations fausses ou trompeuses</li>
                <li>Utiliser la plateforme à des fins illégales</li>
                <li>Harceler ou discriminer d'autres utilisateurs</li>
                <li>Tenter de contourner les mesures de sécurité</li>
                <li>Utiliser des robots ou scripts automatisés</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">6. Paiements et tarification</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Les tarifs des missions sont fixés librement par les établissements. MaybeWith prélève une commission
                sur chaque transaction réalisée via la plateforme.
              </p>
              <p>
                Les paiements sont traités de manière sécurisée par nos partenaires de paiement certifiés. Les
                collaborateurs sont payés selon les modalités convenues avec l'établissement.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">7. Responsabilités des utilisateurs</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                <strong>Établissements :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Respecter la législation du travail en vigueur</li>
                <li>Fournir des informations exactes sur les missions</li>
                <li>Assurer un environnement de travail sûr</li>
                <li>Effectuer les paiements dans les délais convenus</li>
              </ul>
              <p>
                <strong>Collaborateurs :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Posséder les qualifications requises pour les missions</li>
                <li>Respecter les horaires et consignes de l'établissement</li>
                <li>Maintenir un comportement professionnel</li>
                <li>Signaler tout problème via la plateforme</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">8. Protection des données (RGPD)</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                MaybeWith s'engage à protéger vos données personnelles conformément au Règlement Général sur la
                Protection des Données (RGPD).
              </p>
              <p>
                Nous collectons uniquement les données nécessaires au fonctionnement de nos services et ne les
                partageons qu'avec votre consentement explicite ou dans le cadre légal.
              </p>
              <p>
                Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.
                Pour exercer ces droits, contactez-nous à l'adresse indiquée en fin de document.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">9. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              Tous les éléments de la plateforme MaybeWith (design, textes, logos, fonctionnalités) sont protégés par
              les droits de propriété intellectuelle. Toute reproduction ou utilisation non autorisée est interdite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">10. Limitation de responsabilité</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                MaybeWith agit en tant qu'intermédiaire technique entre établissements et collaborateurs. Nous ne sommes
                pas responsables des relations contractuelles qui se nouent entre les parties.
              </p>
              <p>
                Notre responsabilité est limitée aux dysfonctionnements techniques de la plateforme. Nous ne
                garantissons pas la disponibilité continue du service.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">11. Résiliation</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application. MaybeWith se
                réserve le droit de suspendre ou supprimer un compte en cas de violation des présentes conditions.
              </p>
              <p>
                En cas de résiliation, vos données personnelles seront supprimées dans un délai de 30 jours, sauf
                obligation légale de conservation.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">12. Droit applicable et juridiction</h2>
            <p className="text-gray-700">
              Les présentes conditions sont régies par le droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">13. Contact</h2>
            <div className="text-gray-700 space-y-2">
              <p>Pour toute question concernant ces conditions générales d'utilisation :</p>
              <p>
                <strong>Email :</strong> legal@maybewith.com
              </p>
              <p>
                <strong>Adresse :</strong> MaybeWith, [Adresse complète]
              </p>
              <p>
                <strong>Téléphone :</strong> [Numéro de téléphone]
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
