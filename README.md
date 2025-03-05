
# Breizh'sport

Ce projet est un POC d'une architecture headless d'un site e-commerce d'articles de sport.

Il combine les technologies suivantes : 
- Docker et docker compose,
- Node.js,
- React,
- MySQL.

L'application contient donc :
- Une API REST en Node.js,
- Un backend en Node.js,
- Une base de données en MySQL,
- Un frontend en React.

Un accès graphique à la base de données est possible grâce à PHPMyAdmin.

Pour démarrer le projet : 
1) Effectuer un pull de ce repository,
2) Ouvrir un invite de commandes,
3) Lancer la commande "docker-compose up --build -d"
*** Il est nécessaire de posséder docker compose sur sa machine !! ***

Il est possible de vérifier le fonctionnement des différents éléments aux URLs suivants : 
- BACKEND : localhost:4000/backend/
- FRONTEND : localhost:8080/
- API : localhost:3000/api/

Bonnes pratiques à suivre dans ce projet : 
- Les imports se réalisent en début de fichier,
- Les routes d'appel des méthodes doivent être similaires dans l'API et le Backend,
- Le formatage des données se réalisent dans le backend,
- Les fonctions métiers et autres méthodes se réalisent dans le backend,
- La récupération des données se réalise dans l'API,
- Le frontend ne sert qu'à afficher les donnéees,
- L'API ne sert qu'à récupérer les données.

Lancement des tests : 
1) Dans le terminal se rendre dans la partie souhaitée : frontend par exemple
2) Lancer la commande 'npm test' pour les tests unitaires et fonctionnels,
   la commande 'npx eslint .' pour les tests ESLint.
3) L'ensemble des tests sont intégrés dans la CI github à chaque push sur les branches principales




