# Tâche 5 — Performances et SEO

Chaque optimisation du site, ce qu'elle fait, où elle vit et pourquoi elle compte.

## 1. Image d'ouverture responsive

**Code** : [`src/components/Hero.jsx`](../src/components/Hero.jsx), [`public/`](../public/)

```jsx
<img
  src="/studio.jpg"
  srcSet="/studio-800.webp 800w, /studio-1280.webp 1280w"
  sizes="100vw"
  alt="Trois collègues penchés sur un ordinateur portable dans un bureau lumineux"
  width="1280" height="800"
  fetchPriority="high" decoding="async"
/>
```

- `srcSet` + `sizes="100vw"` : le navigateur choisit la variante adaptée à l'écran et à la densité. En mobile 390 px × 2, il télécharge le fichier 800 px (31 Ko) au lieu de 110 Ko.
- WebP d'abord, JPEG en repli via `src` : formats modernes pour presque tous les navigateurs, aucune image cassée ailleurs.
- `width` / `height` : le ratio est réservé → pas de saut de mise en page (CLS = 0).
- `fetchPriority="high"` : c'est le visuel d'ouverture, il ne doit pas attendre le reste du chargement. Pas de `loading="lazy"` ici, précisément parce qu'il fait partie du premier écran.
- `alt` descriptif : accessibilité **et** référencement d'image.

## 2. Prefetching et chargement à la demande

**Code** : [`src/hooks/usePrefetch.js`](../src/hooks/usePrefetch.js), [`src/App.jsx`](../src/App.jsx)

- Le bloc témoignages est un `React.lazy` : il sort du bundle initial (1 Ko séparé).
- Il est précaché au **survol ou au focus** du lien « Témoignages » (intention de l'utilisateur), et pendant un `requestIdleCallback` (temps mort) sinon.
- `preconnect` / `dns-prefetch` vers `cdn.sanity.io` : la poignée de main TLS est anticipée pour l'API CMS.

```js
export function prefetchTestimonials() {
  if (warmed) return
  warmed = true
  import('../components/Testimonials.jsx').catch(() => {})
}
```

**Pourquoi** : l'utilisateur ne paie le prix du code témoignages que s'il s'y intéresse ; s'il y va, le fichier est déjà là. Aucune attente au clic.

## 3. Le poids du CMS hors du chemin critique

**Code** : [`src/lib/sanity.js`](../src/lib/sanity.js)

`@sanity/client` est importé dynamiquement : sans variable `VITE_SANITY_PROJECT_ID`, il n'est **jamais** téléchargé. Avec CMS, il ajoute ≈ 33 Ko compressés dans des chunks séparés ; le premier rendu, lui, ne dépend pas de l'API. Le bundle principal reste à 51 Ko compressés (React compris).

## 4. Polices auto-hébergées et préchargées

**Code** : [`index.html`](../index.html), [`src/styles.css`](../src/styles.css)

- Trois familles, quatre fichiers WOFF2 livrés avec le site : 79 Ko réellement téléchargés au premier rendu (le Mono 500 n'arrive que s'il est utilisé). Aucun appel à Google Fonts.
- Sous-ensemble latin uniquement : ni cyrillique, ni grec, ni vietnamien.
- `<link rel="preload">` pour les deux polices critiques (titres et texte) : le texte apparaît avec la bonne police.
- `font-display: swap` : un texte de secours s'affiche immédiatement si une police tarde.

## 5. Métadonnées et données structurées

**Code** : [`index.html`](../index.html)

- `title` et `description` uniques, `lang="fr"`, `canonical`.
- Open Graph + Twitter Card avec une vignette dédiée 1200 × 630 ([`public/og-cover.jpg`](../public/og-cover.jpg)) : aperçu correct au partage (LinkedIn, WhatsApp…).
- JSON-LD `Organization` : mission, services (`makesOffer`), zone desservie, adresse, e-mail. C'est ce que Google lit pour un encart d'entreprise.
- `theme-color` accordé à la pierre du site et `color-scheme: light`.

## 6. Structure sémantique et accessibilité

- Un seul `h1`, sections en `h2`, cartes en `h3`.
- Navigation avec `aria-label`, menu mobile avec `aria-expanded` et fermeture par `Échap`.
- `skip-link` « Aller au contenu ».
- Focus visible (contour vermillon, variante claire sur fond indigo), contrastes AA, cibles tactiles ≥ 44 px.
- `aria-live="polite"` sur le témoignage affiché : un lecteur d'écran annonce le changement.

## Mesures (Slow 3G : 400 kbit/s, latence 400 ms, CPU ×4)

Mesure du 12 novembre 2026 sur build de production, Chrome, écran 390 × 844, cache vidé, via le protocole DevTools (limitation réseau et processeur, `Network.emulateNetworkConditions` + `Emulation.setCPUThrottlingRate`).

| Indicateur | Valeur |
| --- | --- |
| TTFB | 0,40 s |
| `load` | ≈ 3,4 s |
| Contenu visible (LCP) | 3,9 – 4,0 s |
| Poids transféré | ≈ 167 Ko |
| Requêtes | 9 |

Répartition : HTML 1,3 Ko, CSS 4,4 Ko, JS 51 Ko, polices 79 Ko, photo 31 Ko, chunk témoignages 0,9 Ko, favicon 0,7 Ko.

## Ce qui pourrait aller plus loin

- Convertir la photo en AVIF (encore ~30 % plus léger que WebP) et tester un recadrage mobile dédié.
- Réduire le sous-ensemble des polices aux caractères réellement utilisés (≈ 20 Ko gagnables).
- Rendre le hero en HTML statique (Astro ou pré-rendu Vite) pour supprimer le coût d'hydratation sur le LCP.
- Compression Brotli au niveau de l'hébergeur (Vercel le fait déjà).
