// Contenu local de secours : utilisé tel quel tant qu'aucun projet Sanity
// n'est configuré (voir .env.example), et si l'API CMS ne répond pas.

export const site = {
  brand: 'Talenta Corner',
  base: 'Antananarivo · Madagascar',
  tagline: 'Le talent se cultive.',
  intro:
    "Talenta Corner connecte les entreprises avec des professionnels qualifiés à Madagascar. Une approche humaine, une qualité maîtrisée et des équipes que l'on fait grandir — projet après projet.",
  email: 'bonjour@talenta-corner.mg',
  pillars: [
    {
      title: 'Approche humaine',
      text: "Chaque mission commence par une rencontre. Nous plaçons la relation avant le contrat, et le projet avant le volume.",
    },
    {
      title: 'Coûts maîtrisés',
      text: "Une qualité de niveau international à un coût maîtrisé, sans compromis sur l'accompagnement ni sur les délais.",
    },
    {
      title: 'Talents qui grandissent',
      text: "Nos équipes se forment en continu. Travailler avec nous, c'est aussi soutenir une génération de professionnels.",
    },
  ],
}

export const services = [
  {
    _id: 'service-developpement',
    order: 1,
    title: 'Programmes de développement des talents',
    summary:
      "Des parcours sur mesure pour faire monter en compétences vos équipes ou les nôtres : diagnostic, plan de progression, accompagnement individuel.",
    points: ['Diagnostic des compétences', 'Parcours personnalisés', 'Suivi trimestriel'],
  },
  {
    _id: 'service-formation',
    order: 2,
    title: 'Formation en entreprise',
    summary:
      "Des formations opérationnelles animées par des praticiens : front-end, design produit, gestion de projet, communication.",
    points: ['Ateliers pratiques', 'Sessions intra-entreprise', 'Formats courts ou longs'],
  },
  {
    _id: 'service-conseil',
    order: 3,
    title: 'Services de conseil',
    summary:
      "Structurer une équipe externe, cadrer un projet digital, choisir un outil : nous intervenons là où la décision compte.",
    points: ['Cadrage de projet', 'Choix technologiques', 'Structuration d’équipe'],
  },
]

export const team = [
  {
    _id: 'membre-miora',
    name: 'Miora Rakoto',
    role: 'Lead front-end',
    bio: "Dix ans de React, un goût prononcé pour les interfaces sobres et les performances mesurées.",
  },
  {
    _id: 'membre-andry',
    name: 'Andry Razafy',
    role: 'Designer produit',
    bio: "Passe du carnet de croquis au prototype Figma sans jamais perdre l'utilisateur de vue.",
  },
  {
    _id: 'membre-hanta',
    name: 'Hanta Ramaroson',
    role: 'Cheffe de projet',
    bio: 'Fait tenir les délais sans faire taire les idées : le point de contact de chaque client.',
  },
]

export const testimonials = [
  {
    _id: 'temoignage-sarah',
    quote:
      "Une équipe qui comprend le métier avant d'écrire une ligne de code. Nos délais ont été tenus, et la relation est devenue un partenariat.",
    author: 'Sarah M.',
    company: 'Directrice RH, PME textile',
  },
  {
    _id: 'temoignage-jean',
    quote:
      "La formation en entreprise a changé notre façon de travailler : des ateliers concrets, applicables dès le lendemain.",
    author: 'Jean R.',
    company: 'Fondateur, agence digitale',
  },
  {
    _id: 'temoignage-lucie',
    quote:
      "Un accompagnement humain, des coûts maîtrisés et une vraie écoute. Nous avons confié un deuxième projet dans la foulée.",
    author: 'Lucie K.',
    company: 'Responsable opérations, e-commerce',
  },
]

export const fallbackContent = { site, services, team, testimonials }
