const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-10-01'

export const cmsConfigured = Boolean(projectId)

// Une seule requête GROQ : le contenu du portfolio (services, équipe, témoignages, réglages du site).
export const CONTENT_QUERY = /* groq */ `{
  "site": *[_type == "siteSettings"][0]{ tagline, intro, email, pillars },
  "services": *[_type == "service"] | order(order asc){ _id, title, summary, points },
  "team": *[_type == "member"] | order(order asc){ _id, name, role, bio },
  "testimonials": *[_type == "testimonial"] | order(order asc){ _id, quote, author, company }
}`

let clientPromise = null

// Le client Sanity n'est téléchargé que si un projet est configuré :
// sans CMS, il reste hors du bundle initial.
function getClient() {
  if (!clientPromise) {
    clientPromise = import('@sanity/client').then(({ createClient }) =>
      createClient({ projectId, dataset, apiVersion, useCdn: true }),
    )
  }
  return clientPromise
}

export async function fetchCmsContent() {
  if (!cmsConfigured) return null
  const client = await getClient()
  const data = await client.fetch(CONTENT_QUERY)
  if (!data || !Array.isArray(data.services) || data.services.length === 0) return null
  return data
}
