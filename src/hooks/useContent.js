import { useEffect, useState } from 'react'
import { fetchCmsContent, cmsConfigured } from '../lib/sanity.js'
import { fallbackContent } from '../content/fallback.js'

// Le site rend immédiatement le contenu local, puis le remplace par le contenu
// du CMS dès qu'il est disponible. Une panne du CMS ne casse donc jamais la page.
export default function useContent() {
  const [content, setContent] = useState(fallbackContent)
  const [source, setSource] = useState(cmsConfigured ? 'chargement' : 'local')

  useEffect(() => {
    if (!cmsConfigured) return undefined
    let alive = true

    fetchCmsContent()
      .then((data) => {
        if (!alive) return
        if (data) {
          setContent({
            ...fallbackContent,
            ...data,
            site: {
              ...fallbackContent.site,
              ...data.site,
              pillars: data.site?.pillars?.length
                ? data.site.pillars
                : fallbackContent.site.pillars,
            },
            team: data.team?.length ? data.team : fallbackContent.team,
          })
          setSource('cms')
        } else {
          setSource('local')
        }
      })
      .catch(() => {
        if (alive) setSource('local')
      })

    return () => {
      alive = false
    }
  }, [])

  return { content, source }
}
