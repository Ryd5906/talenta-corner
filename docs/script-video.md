# Tâche 6 — Script de la vidéo de présentation

> Durée cible : 3 à 4 minutes. Enregistre ta voix, filme l'écran (OBS ou l'enregistreur intégré), puis monte les deux. Les lignes en italique sont les actions à l'écran.

## Plan (4 minutes)

| Temps | Séquence | Contenu |
| --- | --- | --- |
| 0:00 – 0:20 | Accroche | Qui est Talenta Corner, pourquoi ce site |
| 0:20 – 1:00 | Visite du site | Hero, approche, services |
| 1:00 – 1:30 | Composants React | Équipe, témoignages, responsive |
| 1:30 – 2:30 | CMS Sanity | Studio, modification d'un service, rafraîchissement du site |
| 2:30 – 3:15 | Performance et SEO | Poids, lazy loading, prefetch, métadonnées |
| 3:15 – 3:40 | Conclusion | Ce que j'ai appris, prochaine étape |

## Texte à dire

**0:00 — Accroche.**
« Bonjour. Je m'appelle [prénom], et je vous présente le site portfolio de Talenta Corner, une plateforme d'externalisation basée à Antananarivo qui accompagne les PME dans le développement de leurs talents. L'objectif du site : présenter l'entreprise, ses trois services, son équipe et ses témoignages — avec un contenu que l'équipe peut modifier elle-même, sans développeur. »

**0:20 — Visite.**
*Ouvre la page d'accueil, laisse le site se charger.*
« Le site est construit en React avec Vite. Le parti pris visuel s'appelle “Tissage” : des fils de chaîne verticaux, un registre indigo pour l'équipe, un vermillon de trame, et une typographie condensée à très grande échelle. C'est une métaphore du métier de Talenta Corner : assembler des compétences venues d'horizons différents en une étoffe solide. »
*Descends vers « Notre conviction » puis « Services ». *
« La section approche pose les trois piliers : l'approche humaine, les coûts maîtrisés, et des talents qui grandissent. Puis les services, présentés en trois colonnes tissées, avec des listes alignées. »

**1:00 — Composants.**
*Descends vers l'équipe, puis témoignages, clique sur la flèche « suivant ». *
« Chaque membre de l'équipe est un composant réutilisable, présenté ici en registre typographique — nom, rôle, biographie — sans photo, un choix éditorial assumé. Les témoignages forment un carrousel accessible : les boutons sont annoncés aux lecteurs d'écran, et le changement de citation est annoncé. »
*Réduis la fenêtre à la taille mobile, ou montre les captures. *
« Sur mobile, le menu devient un panneau, se ferme avec Échap, et tout reste utilisable au pouce : cibles de 44 pixels minimum. »

**1:30 — CMS.**
*Ouvre le studio Sanity (localhost:3333), montres la liste des contenus, ouvre un service.*
« Le contenu vient de Sanity, un CMS headless. J'ai défini quatre types : services, membres de l'équipe, témoignages, et réglages du site. »
*Modifie le titre d'un service, clique Publish.*
« Je modifie le titre de ce service et je publie. »
*Reviens sur le site, recharge.*
« Le site interroge Sanity avec une seule requête GROQ — elle récupère en un appel le site, les services, l'équipe et les témoignages. Au rechargement, le contenu est à jour. »
*Coupe le CMS (ou montre le fichier fallback). *
« Et si le CMS ne répond pas, le site affiche le contenu local de secours : il ne casse jamais. »

**2:30 — Performance et SEO.**
*Ouvre l'onglet réseau ou montre le tableau des mesures.*
« Le site pèse environ 167 kilo-octets sur une connexion 3G lente, avec un premier octet à 0,40 seconde et un chargement complet autour de 3,4 secondes. »
« Quatre leviers : les polices sont auto-hébergées, sous-ensemblées et préchargées ; la photo du studio est servie en WebP, dans une version 800 pixels en mobile — 31 kilo-octets au lieu de 110 ; le client Sanity est importé dynamiquement, donc absent du bundle initial ; et les témoignages sont un fichier séparé, précaché au survol du lien. »
« Côté SEO : titre et description uniques, Open Graph, et données structurées JSON-LD qui décrivent l'organisation et ses services. »

**3:15 — Conclusion.**
« Ce projet m'a permis de consolider React, l'intégration d'un CMS headless, les performances mobiles et l'accessibilité. La prochaine étape serait d'ajouter un formulaire de contact relié à un service d'envoi, et de déployer le studio Sanity en ligne pour que l'équipe édite en production. Merci de votre attention. »

## Conseils d'enregistrement

- Enregistre la voix **d'abord**, puis les gestes à l'écran : c'est plus facile à caler.
- Chrome en 1280 × 800, zoom 100 %. Masque la barre de favoris.
- Prépare les onglets à l'avance : site, studio Sanity, code de `src/lib/sanity.js`.
- Une seule prise suffit : c'est le contenu qui compte, pas la perfection.
