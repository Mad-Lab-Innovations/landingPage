# MaybeWith

Une plateforme mobile de mise en relation entre établissements (restaurants, bars, cafés) et collaborateurs temporaires dans le secteur de la restauration.

## 📱 Fonctionnalités Principales

### 🏢 Pour les Propriétaires d'Établissements
- **Création d'établissement** : Inscription avec détails complets (nom, adresse, type, photos)
- **Gestion des missions** : Création, modification, activation/désactivation des missions de travail
- **Système de paiement** : Intégration Stripe pour les paiements sécurisés avec pré-autorisation
- **Gestion des candidatures** : Consultation, acceptation/refus des candidatures collaborateurs
- **Chat temporaire** : Communication en temps réel avec les collaborateurs acceptés
- **QR Code** : Génération de codes QR pour validation des missions
- **Tableau de bord** : Vue d'ensemble des missions, candidatures et établissements

### 👥 Pour les Collaborateurs
- **Recherche de missions** : Découverte des opportunités à proximité avec géolocalisation
- **Filtrage avancé** : Par type d'établissement, rôle, distance
- **Candidature en un clic** : Postulation rapide avec message personnalisé
- **Missions du jour** : Vue dédiée des missions acceptées pour la journée
- **Scanner QR** : Validation des missions via QR Code
- **Profil complet** : Gestion des compétences, certifications, évaluations
- **Chat intégré** : Communication directe avec les propriétaires

### 🔐 Système d'Authentification et Vérification
- **Inscription multi-étapes** : Processus guidé selon le type d'utilisateur
- **Vérification d'identité ML Kit** : Reconnaissance automatique de documents d'identité
- **Système de certifications** : Upload et vérification des certifications professionnelles
- **Évaluations et notes** : Système de réputation bidirectionnel

## 🛠 Services et Technologies

### 📡 Backend et API
- **API REST** : Communication avec backend sécurisé (https://api.maybwith.com)
- **Authentification JWT** : Gestion sécurisée des sessions utilisateur
- **Stockage de données** : Persistance locale avec SharedPreferences

### 🔥 Firebase Services
- **Firebase Messaging** : Notifications push en temps réel
- **Firebase Firestore** : Chat temporaire et messaging
- **Firebase Storage** : Stockage des images et documents
- **Firebase Core** : Configuration et initialisation

### 💳 Paiements
- **Flutter Stripe** : Intégration complète pour les paiements
- **Pré-autorisation** : Capture automatique en fin de mission
- **Gestion sécurisée** : Configuration des méthodes de paiement

### 🤖 Intelligence Artificielle
- **Google ML Kit** : 
  - Reconnaissance de texte (OCR) sur documents d'identité
  - Détection de visages pour vérification
  - Comparaison faciale document/selfie
- **Vérification automatique** : Validation d'identité en temps réel

### 🗺 Géolocalisation et Cartes
- **Google Maps** : Affichage des établissements sur carte interactive
- **Géolocalisation** : Détection automatique de position utilisateur
- **Calcul de distance** : Tri par proximité géographique

## 📱 Permissions Requises

### 📍 Localisation
- **Permission demandée** : Accès à la position GPS
- **Utilisation** : 
  - Découverte d'établissements à proximité
  - Mise à jour automatique de la position utilisateur
  - Calcul des distances pour le filtrage
- **Configuration** : Permission permanente recommandée pour une meilleure expérience

### 📷 Appareil Photo
- **Permission demandée** : Accès à la caméra
- **Utilisation** :
  - Photo de profil utilisateur
  - Images d'établissement (logo, couverture)
  - Vérification d'identité (document + selfie)
  - Scan des QR Codes de validation de mission
  - Upload de certifications professionnelles

### 📂 Stockage
- **Permission demandée** : Accès au stockage/galerie
- **Utilisation** :
  - Sélection d'images depuis la galerie
  - Sauvegarde temporaire des documents de vérification
  - Cache des images téléchargées

### 🔔 Notifications
- **Permission demandée** : Notifications push
- **Utilisation** :
  - Nouvelles missions disponibles
  - Réponses aux candidatures (acceptation/refus)
  - Messages de chat
  - Rappels de missions du jour
  - Mises à jour importantes de l'application

## 🏗 Architecture Technique

### 🎯 State Management
- **BLoC Pattern** : Gestion d'état réactive avec flutter_bloc
- **Events/States** : Architecture claire pour chaque fonctionnalité
- **Repository Pattern** : Séparation des couches données/logique métier

### 📱 Interface Utilisateur
- **Material Design** : Design system cohérent
- **Responsive** : Adaptation automatique aux différentes tailles d'écran
- **Accessibilité** : Respect des standards d'accessibilité mobile

### 🔄 Gestion des Données
- **Cache local** : Stockage temporaire pour performance
- **Synchronisation** : Mise à jour en temps réel des données
- **Gestion hors ligne** : Fonctionnalités de base disponibles sans connexion

## 🚀 Installation et Configuration

### Prérequis
- Flutter SDK ^3.8.1
- Dart SDK compatible
- Accès aux services Firebase
- Clés API Google Maps et Stripe configurées

### Configuration Firebase
1. Ajouter les fichiers de configuration Firebase (`google-services.json`, `GoogleService-Info.plist`)
2. Configurer les règles Firestore pour le chat
3. Activer Authentication, Firestore, Storage, et Messaging

### Variables d'Environnement
- **API_BASE_URL** : URL de l'API backend
- **STRIPE_PUBLISHABLE_KEY** : Clé publique Stripe
- **GOOGLE_MAPS_API_KEY** : Clé API Google Maps

## 🔒 Sécurité et Confidentialité

### Protection des Données
- **Chiffrement** : Toutes les communications sont chiffrées (HTTPS/TLS)
- **Anonymisation** : Données personnelles protégées selon RGPD
- **Consentement** : Demande explicite pour chaque permission

### Vérification d'Identité
- **ML Kit sécurisé** : Traitement local des documents d'identité
- **Pas de stockage** : Documents temporaires supprimés après vérification
- **Validation manuelle** : Équipe de modération pour validation finale

### Gestion des Paiements
- **PCI DSS** : Conformité aux standards de sécurité Stripe
- **Tokenisation** : Aucune donnée bancaire stockée localement
- **Pré-autorisation** : Paiement sécurisé avant validation de mission

## 📊 Types d'Établissements Supportés

- 🍽 **Restaurants** : Service complet, gastronomie
- 🍺 **Bars** : Établissements de nuit, pubs
- ☕ **Cafés** : Petite restauration, boissons
- 🏨 **Hôtels** : Restauration hôtelière
- 🎉 **Événementiel** : Catering, événements spéciaux

## 👔 Rôles et Compétences

### Rôles Disponibles
- **Serveur/Serveuse** : Service en salle
- **Chef de Cuisine** : Préparation culinaire
- **Barman/Barmaid** : Service bar et cocktails

### Certifications
- Upload de certificats professionnels
- Vérification manuelle par l'équipe
- Badges de compétences visibles sur profil

## 🌐 Déploiement

### iOS
- Configuration des permissions dans `Info.plist`
- Certificats Apple configurés
- App Store Connect setup

### Android
- Permissions dans `AndroidManifest.xml`
- Google Play Console configuration
- Signature des APK de production

---

**Version** : 1.0.0+1  
**Support** : iOS 15.5+ | Android API 21+  
**Développé avec** : Flutter 3.8.1  

Pour plus d'informations, contactez l'équipe de développement.
