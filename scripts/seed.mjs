// Remplit le dataset Sanity avec le contenu de démonstration.
// Usage : SANITY_API_WRITE_TOKEN=... VITE_SANITY_PROJECT_ID=... node scripts/seed.mjs
import { createClient } from '@sanity/client'
import { fallbackContent } from '../src/content/fallback.js'

const projectId = process.env.VITE_SANITY_PROJECT_ID
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Renseignez VITE_SANITY_PROJECT_ID et SANITY_API_WRITE_TOKEN.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: process.env.VITE_SANITY_API_VERSION || '2024-10-01',
  token,
  useCdn: false,
})

const docs = [
  { ...fallbackContent.site, _id: 'siteSettings', _type: 'siteSettings' },
  ...fallbackContent.services.map((service, i) => ({
    ...service,
    _type: 'service',
    order: i + 1,
    _id: `service-${i + 1}`,
  })),
  ...fallbackContent.team.map((member, i) => ({
    ...member,
    _type: 'member',
    order: i + 1,
    _id: `member-${i + 1}`,
  })),
  ...fallbackContent.testimonials.map((testimonial, i) => ({
    ...testimonial,
    _type: 'testimonial',
    order: i + 1,
    _id: `testimonial-${i + 1}`,
  })),
]

const transaction = docs.reduce((tx, doc) => tx.createOrReplace(doc), client.transaction())
const result = await transaction.commit()
console.log(`Contenu importé : ${result.results.length} documents.`)
