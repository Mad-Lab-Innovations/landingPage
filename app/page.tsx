import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Bell, CreditCard, QrCode, Smartphone, Users, Clock } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">MaybeWith</div>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-black">
              Accueil
            </Link>
            <Link href="/cgu" className="text-gray-600 hover:text-black">
              CGU
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
                Trouvez des missions dans l'hospitalité en temps réel
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                L'app qui connecte établissements et collaborateurs grâce à la géolocalisation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg">
                  <Smartphone className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/app-screenshot-1.png"
                  alt="MaybeWith App Screenshot"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Comment ça marche</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Pour les collaborateurs</h3>
                <p className="text-gray-600 mb-6">Trouvez des missions près de chez vous</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      1
                    </div>
                    <span className="text-gray-700">Créez votre profil et ajoutez vos compétences</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      2
                    </div>
                    <span className="text-gray-700">Recevez des notifications de missions près de vous</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      3
                    </div>
                    <span className="text-gray-700">Postulez et commencez votre mission</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Pour les établissements</h3>
                <p className="text-gray-600 mb-6">Recrutez rapidement du personnel qualifié</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      1
                    </div>
                    <span className="text-gray-700">Publiez votre mission en quelques clics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      2
                    </div>
                    <span className="text-gray-700">Recevez des candidatures qualifiées</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      3
                    </div>
                    <span className="text-gray-700">Validez la mission avec un QR code</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Découvrez l'application</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            <div className="text-center">
              <Image
                src="/app-screenshot-2.png"
                alt="Profil utilisateur"
                width={200}
                height={400}
                className="rounded-2xl shadow-lg mb-4"
              />
              <p className="text-gray-600 text-sm">Profil collaborateur</p>
            </div>
            <div className="text-center">
              <Image
                src="/app-screenshot-3.png"
                alt="Notifications"
                width={200}
                height={400}
                className="rounded-2xl shadow-lg mb-4"
              />
              <p className="text-gray-600 text-sm">Notifications temps réel</p>
            </div>
            <div className="text-center">
              <Image
                src="/app-screenshot-4.png"
                alt="Carte géolocalisée"
                width={200}
                height={400}
                className="rounded-2xl shadow-lg mb-4"
              />
              <p className="text-gray-600 text-sm">Géolocalisation</p>
            </div>
            <div className="text-center">
              <Image
                src="/app-screenshot-5.png"
                alt="Recherche établissements"
                width={200}
                height={400}
                className="rounded-2xl shadow-lg mb-4"
              />
              <p className="text-gray-600 text-sm">Recherche d'établissements</p>
            </div>
            <div className="text-center">
              <Image
                src="/app-screenshot-1.png"
                alt="Création de mission"
                width={200}
                height={400}
                className="rounded-2xl shadow-lg mb-4"
              />
              <p className="text-gray-600 text-sm">Création de mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités clés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Fonctionnalités clés</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">Géolocalisation en temps réel</h3>
                <p className="text-gray-600">Trouvez des missions près de votre position actuelle</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Bell className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">Notifications instantanées</h3>
                <p className="text-gray-600">Soyez alerté dès qu'une nouvelle mission correspond à votre profil</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">Paiements sécurisés</h3>
                <p className="text-gray-600">Transactions sécurisées et paiements automatisés</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <QrCode className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">Validation par QR code</h3>
                <p className="text-gray-600">Validation simple et rapide des missions accomplies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download final */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Téléchargez MaybeWith dès maintenant</h2>
          <p className="text-xl text-gray-300 mb-8">Rejoignez la communauté des professionnels de l'hospitalité</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg">
              <Smartphone className="mr-2 h-5 w-5" />
              App Store
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg">
              <Smartphone className="mr-2 h-5 w-5" />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-black mb-4">MaybeWith</div>
              <p className="text-gray-600">L'application qui révolutionne le recrutement dans l'hospitalité</p>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Liens utiles</h4>
              <div className="space-y-2">
                <Link href="/cgu" className="block text-gray-600 hover:text-black">
                  Conditions Générales d'Utilisation
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-black">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Suivez-nous</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-600 hover:text-black">
                  LinkedIn
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-black">
                  Twitter
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-black">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 MaybeWith. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
