# TP 6 : Découverte des Hooks Avancés et des Hooks Personnalisés

## 1. Structure du projet

Le projet contient plusieurs composants React permettant de découvrir les Hooks avancés et les Hooks personnalisés, notamment useReducer, useRef, useEffect et useFetch.

![alt text](<Screenshot 2026-10-25 161245.png>)

## 2. Résultat final avant les exercices facultatifs

L’application affiche un compteur interactif, un champ de saisie utilisant useRef, un compteur de rendus, une liste d’articles récupérés depuis une API et un chronomètre utilisant useEffect.

![alt text](<Screenshot 2026-10-25 154534.png>)


3. Exercices facultatifs

Exercice 1 : Réinitialiser le compteur

Un bouton Réinitialiser a été ajouté au compteur. Il permet de remettre la valeur du compteur à zéro grâce à useReducer.

<video controls src="Screen Recording 2026-10-25 155647.mp4" title="Title"></video>

Exercice 2 : Hook personnalisé useLocalStorage

Un Hook personnalisé useLocalStorage a été créé pour sauvegarder une valeur dans le stockage local du navigateur. La valeur saisie reste disponible après le rechargement de la page.

![alt text](image.png)

Exercice 3 : Afficher la date et l’heure

Un composant utilisant useEffect a été ajouté pour afficher la date et l’heure actuelles. L’affichage est mis à jour toutes les secondes grâce à setInterval, puis l’intervalle est nettoyé avec clearInterval.

![alt text](image-1.png)
