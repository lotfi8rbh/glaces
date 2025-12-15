# Projet 3 - Application de Gestion de Glaces

Ce projet a été réalisé dans le cadre du module "Approche comparative des technologies mobiles" (Master 2 SIME). Il s'agit d'une application mobile développée avec **Ionic** et **Angular** (Standalone Components) permettant à un serveur de composer des glaces et de gérer les stocks.

## 📋 Fonctionnalités

L'application respecte l'ensemble des spécifications du cahier des charges :

### 1. Composition de Glace (Écran Principal)
- **Sélection des parfums** : Ajout/retrait de boules (Chocolat, Vanille, Pistache).
- **Contraintes** : 
  - Maximum de 5 boules par glace.
  - Gestion visuelle des erreurs (message rouge "too many scoops").
- **Contenants** : Choix entre Pot (gratuit) et Cornet (payant).
- **Extras** : Ajout de chantilly ou noisettes (impactant le prix).
- **Calcul du prix** : Mise à jour en temps réel selon le nombre de boules et les extras.
- **Validation** : Le bouton "Make icecream" décrémente les stocks en temps réel.

### 2. Gestion des Stocks & Alertes
- **Alerte visuelle** : Une icône d'alerte apparaît à côté d'un parfum si le stock est vide.
- **Navigation** : Clic sur l'alerte pour accéder à la page de commande.
- **Détails du stock** : Possibilité d'afficher tout l'inventaire ("Check all items") avec les quantités restantes.
- **Réapprovisionnement** : Génération d'un email pré-rempli (`mailto`) contenant la liste des ingrédients sélectionnés à commander.

## 🛠 Architecture Technique

Le projet suit une architecture stricte pour séparer la vue de la logique métier :

- **Framework** : Ionic 7 / Angular 17+ (Standalone Components).
- **Pattern Repository** :
  - `StockRepository` (Classe abstraite) : Définit le contrat d'interface.
  - `StockRepositoryService` (Service) : Implémentation concrète contenant les données et la logique de décrémentation.
  - **Injection de dépendance** : Le service est injecté via le token `StockRepository` dans `main.ts`.
- **Modèle de données** : Interface `IceCreamItem` pour typer fortement les objets (prix, stock, unité, image).

## 🌳 Stratégie Git (GitFlow)

Le développement a suivi une approche incrémentale stricte. Chaque fonctionnalité a été développée dans une branche dédiée avant d'être fusionnée sur `master` :

1. `features/data-model` : Mise en place des interfaces et du Repository.
2. `features/ui-flavors-list` : Création de la vue liste et du binding des quantités.
3. `features/ui-complete-order` : Logique des 5 boules, extras et calcul du prix.
4. `features/alert-order` : Navigation vers la page de commande et envoi d'email.
5. `features/stock-details` : Affichage de la liste complète des stocks dans la page commande.
6. `features/stock-logic` : Implémentation de la décrémentation des stocks (règles métier).

## 🚀 Installation et Lancement

Pré-requis : Node.js et Ionic CLI installés.

1. **Cloner le projet** :
   ```bash
   git clone <URL_DU_REPO>
   cd glaces
   ionic serve
