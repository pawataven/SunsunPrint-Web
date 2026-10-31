import { WORK_GROUPS } from '../../app/constants/ourWorks'

export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')
  // Only pages that exist and are meant to be indexed; add new routes here as they are built
  const paths = ['/', '/services', '/our-work', '/start-project',...WORK_GROUPS.map(group => `/our-work/${group.id}`)]
  const urls = paths.map(path => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
