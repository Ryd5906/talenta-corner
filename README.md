# Talenta Corner — Site portfolio

> Site vitrine React pour **Talenta Corner**, plateforme d'externalisation basée à Antananarivo (Madagascar).
> Services, équipe et témoignages sont pilotés par un CMS headless **Sanity** ; le site reste lisible même sans CMS grâce à un contenu local de secours.

**En ligne :** https://talenta-corner.vercel.app

## Le parcours couvert

| Tâche | Livrable | Emplacement |
| --- | --- | --- |
| 1. Comprendre l'entreprise | Guide de réponses (préparation, non soumis) | [`docs/guide-tache-1.md`](docs/guide-tache-1.md) |
| 2. Planification et architecture | PDF : feuille de route, pistes visuelles explorées, architecture React, composants réutilisables, responsive, intégration CMS | [`docs/architecture-talenta-corner.pdf`](docs/architecture-talenta-corner.pdf) |
| 3. Développement UI | Composants Services, Équipe, Témoignages + hooks | [`src/components/`](src/components/) |
| 4. Intégration CMS | Client Sanity, requête GROQ, schémas et studio | [`src/lib/sanity.js`](src/lib/sanity.js), [`sanity/`](sanity/) |
| 5. Performance et SEO | Optimisations + document d'explication | [`docs/performance-seo.md`](docs/performance-seo.md) |
| 6. Déploiement et présentation | Site en production + script vidéo (enregistré par la porteuse du projet) | https://talenta-corner.vercel.app · [`docs/script-video.md`](docs/script-video.md) |

## Direction artistique — « Tissage »

Le site emprunte sa logique au tissage malgache : des fils de chaîne verticaux traversent la section services, l'équipe s'affiche comme un registre indigo, et un vermillon de trame souligne les moments clés. La métaphore dit la mission de Talenta Corner : **des compétences venues d'horizons différents, assemblées en une étoffe solide**.

- **Formes** : fils verticaux tous les 22 px, registres horizontaux, nœud 2 × 2, filets d'un pixel, titres condensés XXL.
- **Couleurs** : pierre `#E4E2D8`, sable `#D6D3C6`, indigo `#181B33`, vermillon `#C0391F`, encre `#33362B`.
- **Typographie** : Big Shoulders Display (titres, capitales condensées), Instrument Sans (texte courant), IBM Plex Mono (étiquettes, coordonnées, listes).
- **Ton** : éditorial, sobre, humain — pas de dégradés artificiels ni de cartes génériques.

## Stack

| Choix | Raison |
| --- | --- |
| React 18 + Vite 5 | Requis par la tâche ; Vite pour un démarrage instantané et un bundle optimisé. |
| CSS pur, variables | Aucune dépendance UI : contrôle total du design, moins de JS, ~4 Ko de CSS compressé. |
| Sanity (headless) | CMS compatible React, API GROQ, gratuit, sans serveur à maintenir. |
| Contenu local de secours | Le site ne dépend jamais d'une API externe pour s'afficher. |
| Vercel | Détection Vite automatique, HTTPS, CDN. |

## Installation

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

Node 18 ou plus récent.

## Déploiement

Le site tourne sur **https://talenta-corner.vercel.app** : Vercel détecte le framework Vite, exécute `npm run build` et sert `dist/` via son CDN, HTTPS inclus.

```bash
npx vercel --prod
```

## Variables d'environnement

Copier `.env.example` en `.env.local`. **Aucune variable n'est obligatoire** : sans projet Sanity, le site utilise `src/content/fallback.js`.

| Variable | Requise | Exemple | Rôle |
| --- | --- | --- | --- |
| `VITE_SANITY_PROJECT_ID` | non | `a1b2c3d4` | Projet Sanity du site |
| `VITE_SANITY_DATASET` | non | `production` | Dataset à interroger |
| `VITE_SANITY_API_VERSION` | non | `2024-10-01` | Version de l'API |
| `SANITY_STUDIO_PROJECT_ID` | studio | `a1b2c3d4` | Projet pour le studio (`sanity/`) |
| `SANITY_STUDIO_DATASET` | studio | `production` | Dataset du studio |

Seules les variables préfixées `VITE_` sont exposées au navigateur. Ne jamais y placer de jeton d'écriture.

## CMS — mise en route

1. Créer un projet gratuit sur [sanity.io/manage](https://www.sanity.io/manage) (dataset `production`).
2. Créer un jeton **Editor** dans *API → Tokens*, puis renseigner `.env.local`.
3. Installer et lancer le studio : `cd sanity && npm install && npm run dev`.
4. Créer les contenus dans le studio (schémas fournis), ou importer la démo :
   ```bash
   SANITY_API_WRITE_TOKEN=... node scripts/seed.mjs
   ```
5. Rebuild du site : le contenu du CMS remplace automatiquement le contenu local.

### Contrat de contenu (une requête GROQ)

```groq
{
  "site": *[_type == "siteSettings"][0]{ tagline, intro, email, pillars },
  "services": *[_type == "service"] | order(order asc){ _id, title, summary, points },
  "team": *[_type == "member"] | order(order asc){ _id, name, role, bio },
  "testimonials": *[_type == "testimonial"] | order(order asc){ _id, quote, author, company }
}
```

Exemple de réponse (extrait) :

```json
{
  "site": { "tagline": "Le talent se cultive.", "email": "bonjour@talenta-corner.mg", "pillars": [ { "title": "Approche humaine", "text": "…" } ] },
  "services": [ { "_id": "service-1", "title": "Programmes de développement des talents", "summary": "…", "points": ["Diagnostic des compétences"] } ],
  "team": [ { "_id": "member-1", "name": "Miora Rakoto", "role": "Lead front-end", "bio": "…" } ],
  "testimonials": [ { "_id": "testimonial-1", "quote": "…", "author": "Sarah M.", "company": "Directrice RH, PME textile" } ]
}
```

Le client Sanity n'est téléchargé **que si** `VITE_SANITY_PROJECT_ID` est défini (import dynamique).

## Performance sur 3G

Mesure sur build de production, Chrome, réseau **Slow 3G** (400 kbit/s, 400 ms de latence), processeur bridé ×4, écran 390 × 844, cache HTTP vidé.

| Indicateur | Valeur |
| --- | --- |
| Premier octet (TTFB) | 0,40 s |
| Événement `load` | ≈ 3,4 s |
| Contenu visible (LCP) | 3,9 – 4,0 s |
| Poids transféré | ≈ 167 Ko (HTML 1,3, CSS 4,4, JS 51, polices 79, photo 31, chunk témoignages 1, favicon 1) |
| Requêtes | 9 au premier chargement |

Optimisations en place : polices auto-hébergées, sous-ensemblées et préchargées ; photo du studio déclinée en WebP 800 / 1280 px (`srcset`, `sizes="100vw"`, 31 Ko servis en mobile) avec un repli JPEG ; dimensions explicites ; JS React en un seul fichier compressé ; client Sanity hors du bundle initial ; chunk témoignages chargé à la demande et précaché pendant les temps morts ; `preconnect` vers le CDN Sanity uniquement si le CMS est configuré.

## Structure

```
talenta-corner/
├── index.html            SEO, JSON-LD, préchargement des polices
├── package.json
├── vite.config.js
├── .env.example
├── public/
│   ├── favicon.svg
│   ├── og-cover.jpg      vignette sociale 1200 × 630
│   ├── studio.jpg        repli JPEG du bandeau
│   ├── studio-800.webp   bandeau, 800 px de large
│   ├── studio-1280.webp  bandeau, 1280 px de large
│   └── fonts/            WOFF2 auto-hébergés (Big Shoulders, Instrument Sans, IBM Plex Mono)
├── src/
│   ├── main.jsx
│   ├── App.jsx           composition + chargement différé des témoignages
│   ├── styles.css        jetons « Tissage », mobile-first
│   ├── content/fallback.js
│   ├── lib/sanity.js     client dynamique + requête GROQ
│   ├── hooks/
│   │   ├── useContent.js    contenu CMS → secours local
│   │   ├── useReveal.js     révélation au scroll (reduced-motion respecté)
│   │   └── usePrefetch.js   précache du bloc témoignages
│   └── components/       Nav, Hero, Mission, Services, Team, Testimonials, Contact, Footer
├── sanity/               studio : config + schémas (service, member, testimonial, siteSettings)
├── scripts/seed.mjs      import du contenu de démonstration
├── concepts/             maquette de la direction « Tissage » retenue
└── docs/                 guide tâche 1, PDF d'architecture, perf/SEO, captures, script vidéo
```

## Limites assumées

- Contenu de démonstration : les noms, témoignages et textes sont fictifs ; seules les informations publiques de Talenta Corner (mission, services, ancrage) sont utilisées.
- Pas de formulaire de contact côté serveur : le bouton ouvre un e-mail (`mailto:`).
- Le studio Sanity n'est pas déployé en ligne (il se lance en local) ; le site fonctionne sans lui.
- La photo du bandeau est une image d'illustration : les personnes qui y figurent ne sont pas membres de l'équipe. Source : [Pexels](https://www.pexels.com/photo/coworkers-looking-at-a-laptop-in-an-office-8127690/), licence Pexels (usage commercial gratuit, sans attribution obligatoire), recadrée en noir et blanc.
- L'équipe est présentée en registres typographiques (noms, rôles, bios), sans portraits.
- Aucun test automatisé pour l'instant ; la recette a été faite manuellement à 390, 768 et 1440 px.
