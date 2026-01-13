# EcoTrack – Simulateur d’impact écologique des choix quotidiens

## Présentation générale

EcoTrack est une application développée en Python permettant de simuler et d’estimer l’impact écologique de choix quotidiens effectués par un utilisateur.  
À partir de réponses simples (transport, alimentation, usage du numérique, logement), le programme calcule une empreinte environnementale estimée et fournit un score écologique global ainsi que des propositions d’amélioration.

Le projet s’inscrit dans le thème **« Nature & Informatique »** et a pour objectif de montrer comment l’informatique peut être utilisée pour analyser, comparer et mieux comprendre les impacts environnementaux à l’aide d’algorithmes et de données.

---

## Fonctionnalités détaillées

### 1. Questionnaire interactif
Le programme propose à l’utilisateur une série de questions structurées en plusieurs catégories :

- **Transports**
  - voiture thermique
  - transports en commun
  - vélo / marche
  - avion (occasionnel)

- **Alimentation**
  - alimentation riche en viande
  - alimentation mixte
  - alimentation végétarienne

- **Usage du numérique**
  - streaming vidéo
  - jeux vidéo
  - navigation internet
  - stockage cloud

- **Logement / énergie**
  - type de chauffage
  - consommation électrique estimée

L’utilisateur sélectionne ses réponses via le terminal (menu numéroté).

---

### 2. Gestion des données environnementales
Les impacts écologiques associés à chaque choix sont stockés dans un fichier de données (CSV) :

- facteurs d’émission simplifiés
- valeurs numériques cohérentes et documentées
- séparation claire entre le code et les données

Ces données sont chargées dynamiquement par le programme, ce qui permet :
- une modification facile des valeurs,
- une meilleure lisibilité,
- une reproductibilité du projet.

---

### 3. Calcul de l’empreinte écologique
Le cœur du projet repose sur des algorithmes de calcul :

- récupération des réponses utilisateur,
- association de chaque réponse à un facteur d’impact,
- pondération selon la catégorie (transport plus impactant que le numérique),
- addition des impacts partiels,
- normalisation du résultat.

Le programme calcule :
- un **impact total estimé**,
- un **détail par catégorie**,
- un **score écologique sur 100**.

---

### 4. Analyse et interprétation des résultats
À la fin du calcul, EcoTrack affiche :

- le score écologique global,
- une interprétation du score :
  - faible impact,
  - impact moyen,
  - impact élevé,
- un récapitulatif clair par catégorie.

Les résultats sont présentés de manière lisible et compréhensible pour un utilisateur non expert.

---

### 5. Propositions d’amélioration personnalisées
À partir des réponses fournies, le programme identifie les postes les plus impactants et propose :

- des alternatives plus écologiques,
- une estimation de gain écologique potentiel,
- une simulation simple “avant / après”.

Exemples :
- remplacer la voiture par les transports en commun,
- réduire le streaming quotidien,
- modifier certains choix alimentaires.

---

### 6. Visualisation des résultats (optionnelle)
Le projet peut inclure une visualisation simple :

- histogramme de répartition des impacts,
- comparaison visuelle entre catégories,
- graphique généré avec la bibliothèque `matplotlib`.

Cette fonctionnalité permet de rendre les résultats plus parlants et pédagogiques.

---

### 7. Modularité et organisation du code
Le projet est structuré en plusieurs fichiers Python :

- `main.py` : point d’entrée du programme
- `calculs.py` : fonctions de calcul de l’impact écologique
- `donnees.py` : chargement et gestion des données
- `interface.py` : interactions avec l’utilisateur

Cette organisation facilite :
- la lecture du code,
- la maintenance,
- les évolutions futures.

---

### 8. Tests et validation
Des tests simples sont fournis afin de :
- vérifier le bon fonctionnement des calculs,
- tester les fonctions principales,
- limiter les erreurs lors de modifications.

Le projet a été testé sur plusieurs scénarios utilisateurs.

---

## Installation et exécution

### Prérequis
- Python **3.10 ou supérieur**
- Système d’exploitation compatible (Linux, Windows, macOS)

### Installation des dépendances
Dans le répertoire du projet, exécuter :

```bash
pip install -r requirements.txt
