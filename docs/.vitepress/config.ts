import { defineConfig, type HeadConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

const SITE_URL = 'https://help.registroviajero.com'
const BRAND_URL = 'https://registroviajero.com'
const APP_URL = 'https://app.registroviajero.com'
const OG_DESCRIPTION = 'Guías, tutoriales y referencia para gestionar tus alojamientos y cumplir con el RD 933/2021.'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RegistroViajero',
  url: BRAND_URL,
  logo: `${BRAND_URL}/logo.svg`,
  sameAs: [BRAND_URL, APP_URL, SITE_URL],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RegistroViajero — Centro de Ayuda',
  url: SITE_URL,
  inLanguage: 'es-ES',
  publisher: {
    '@type': 'Organization',
    name: 'RegistroViajero',
    url: BRAND_URL,
  },
}

// Keep in sync with docs/faq.md. Google penalizes FAQPage schema that doesn't match visible content.
const faqs: { q: string; a: string }[] = [
  { q: '¿Qué es el Real Decreto 933/2021?', a: 'Es la normativa española que obliga a los establecimientos de alojamiento turístico a comunicar los datos de sus huéspedes al Ministerio del Interior a través de la plataforma SES.HOSPEDAJES. RegistroViajero automatiza este proceso.' },
  { q: '¿Necesito instalar algo?', a: 'No. RegistroViajero es una aplicación web. Solo necesitas un navegador actualizado (Chrome, Safari, Firefox o Edge). Opcionalmente puedes instalarla como PWA en tu dispositivo móvil.' },
  { q: '¿Mis huéspedes necesitan crear una cuenta?', a: 'No. Cada huésped recibe un enlace único que abre directamente el formulario de check-in. No requiere registro, descarga ni instalación.' },
  { q: '¿En qué idiomas está el check-in?', a: 'El formulario de check-in está disponible en 9 idiomas: español, inglés, francés, alemán, italiano, portugués, gallego, euskera y catalán.' },
  { q: '¿Qué documentos acepta?', a: 'Españoles: DNI o pasaporte. No españoles: pasaporte, NIE, certificado de registro UE, documento de identidad extranjero o documento de viaje.' },
  { q: '¿Qué pasa con los menores de edad?', a: 'Los menores de 14 años están exentos de registro según el RD 933/2021. Los menores de 14 a 17 años deben completar el formulario e indicar su parentesco con un adulto de la misma reserva.' },
  { q: '¿Los datos del huésped se guardan si cierra el navegador?', a: 'Sí. Los datos se guardan automáticamente en cada paso. El huésped puede continuar más tarde abriendo el mismo enlace.' },
  { q: '¿Cómo consigo las credenciales SES?', a: 'Las credenciales las proporciona el Ministerio del Interior. Contacta con la oficina de extranjería o comisaría de policía de tu zona.' },
  { q: '¿Puedo usar RegistroViajero sin credenciales SES?', a: 'Sí. Puedes gestionar reservas y recopilar datos de huéspedes sin credenciales. El envío al Ministerio se activa cuando las configures.' },
  { q: '¿Cuánto tiempo tengo para enviar el parte?', a: 'La normativa exige la comunicación en el momento del check-in o en las 24 horas siguientes al inicio del hospedaje. Enviar fuera de plazo puede calificarse como incumplimiento, incluso si se envía más tarde.' },
  { q: '¿Qué pasa si el Ministerio rechaza un envío?', a: 'La reserva queda en estado Error con el código y mensaje devueltos por SES.HOSPEDAJES. Corrige los datos indicados, vuelve a validar y reenvía.' },
  { q: '¿Funciona en Cataluña y País Vasco?', a: 'Actualmente no. Estas comunidades utilizan sistemas propios (Mossos d\'Esquadra y Ertzaintza). La integración está prevista para futuras versiones.' },
  { q: '¿Cuánto cuesta?', a: 'El plan Pro cuesta 5 €/puesto/mes (mínimo 2 puestos). Hay un periodo de prueba de 15 días con acceso ilimitado, sin tarjeta de crédito.' },
  { q: '¿Se bloquea el check-in si caduca mi plan?', a: 'No. Los huéspedes siempre pueden completar sus datos a través de los enlaces de check-in, independientemente del estado de tu suscripción.' },
  { q: '¿Puedo cancelar en cualquier momento?', a: 'Sí. Al cancelar, mantienes el acceso hasta el final del período pagado.' },
  { q: '¿Qué sanciones hay si no cumplo el RD 933/2021?', a: 'La omisión o inexactitud de la comunicación se tipifica como infracción leve (100–600 €) por la Ley Orgánica 4/2015 de Seguridad Ciudadana. Puede escalar a grave (601–30.000 €) o muy grave (30.001–600.000 €) por reiteración, volumen o conducta dolosa.' },
  { q: '¿Qué plataformas son compatibles?', a: 'Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar y cualquier plataforma que exporte iCal (.ics).' },
  { q: '¿Cada cuánto se sincronizan las reservas?', a: 'Automáticamente cada 15 minutos. También puedes forzar una sincronización manual en cualquier momento.' },
  { q: '¿Cómo se protegen los datos?', a: 'Contraseñas cifradas con argon2id, credenciales SES cifradas con AES-256-GCM, comunicaciones por HTTPS/TLS, almacenamiento aislado por agencia y registro de auditoría inmutable.' },
  { q: '¿Cuánto tiempo se conservan los datos de huéspedes?', a: '3 años desde la fecha de salida, conforme al RD 933/2021. Transcurrido ese plazo, se eliminan automáticamente.' },
  { q: '¿Puedo eliminar mi cuenta?', a: 'Sí. Desde Configuración → Perfil → Zona de peligro. Los datos personales se anonimizan y los registros de auditoría se conservan por cumplimiento legal.' },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const SECTION_LABELS: Record<string, string> = {
  guia: 'Guía',
  referencia: 'Referencia',
  faq: 'Preguntas frecuentes',
}

type PageKind = 'home' | 'faq' | 'guide' | 'reference'

function pagePath(relativePath: string): string {
  if (relativePath === 'index.md') return '/'
  const base = relativePath.replace(/\.md$/, '')
  if (base.endsWith('/index')) return `/${base.slice(0, -'/index'.length)}/`
  return `/${base}`
}

function pageUrl(relativePath: string): string {
  const path = pagePath(relativePath)
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

function pageKind(relativePath: string): PageKind {
  if (relativePath === 'index.md') return 'home'
  if (relativePath === 'faq.md') return 'faq'
  if (relativePath.startsWith('guia/')) return 'guide'
  if (relativePath.startsWith('referencia/')) return 'reference'
  return 'guide'
}

function buildBreadcrumb(relativePath: string, title: string) {
  const parts = relativePath.replace(/\.md$/, '').split('/').filter((p) => p !== 'index')
  const items: Record<string, unknown>[] = [
    { '@type': 'ListItem', position: 1, name: 'Centro de Ayuda', item: `${SITE_URL}/` },
  ]
  let acc = SITE_URL
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]
    acc += `/${p}`
    const isLast = i === parts.length - 1
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: isLast ? title : SECTION_LABELS[p] ?? p,
      item: acc,
    })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

function techArticleSchema(title: string, description: string, canonical: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url: canonical,
    inLanguage: 'es-ES',
    author: { '@type': 'Organization', name: 'RegistroViajero', url: BRAND_URL },
    publisher: {
      '@type': 'Organization',
      name: 'RegistroViajero',
      url: BRAND_URL,
      logo: { '@type': 'ImageObject', url: `${BRAND_URL}/logo.svg` },
    },
    isPartOf: { '@type': 'WebSite', name: 'RegistroViajero — Centro de Ayuda', url: SITE_URL },
  }
}

export default defineConfig({
  title: 'RegistroViajero — Centro de Ayuda',
  description: OG_DESCRIPTION,
  lang: 'es-ES',
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: SITE_URL,
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],

    // Preconnect to analytics
    ['link', { rel: 'preconnect', href: 'https://analytics.registroviajero.com', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://analytics.registroviajero.com' }],

    // Umami analytics
    ['script', { defer: '', src: 'https://analytics.registroviajero.com/script.js', 'data-website-id': '933877c7-2ace-4788-bfd2-2453b50ad60e' }],

    // Static Open Graph / Twitter (per-page og:title/og:description/og:url injected in transformPageData)
    ['meta', { property: 'og:site_name', content: 'RegistroViajero — Centro de Ayuda' }],
    ['meta', { property: 'og:locale', content: 'es_ES' }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/og-image.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/og-image.png` }],

    // Site-wide Schema.org
    ['script', { type: 'application/ld+json' }, JSON.stringify(organizationSchema)],
    ['script', { type: 'application/ld+json' }, JSON.stringify(websiteSchema)],
  ],

  transformPageData(pageData) {
    const { relativePath, title, description, frontmatter } = pageData
    const pageTitle = (frontmatter.title as string) || title || 'RegistroViajero — Centro de Ayuda'
    const pageDescription = (frontmatter.description as string) || description || OG_DESCRIPTION
    const canonical = pageUrl(relativePath)
    const kind = pageKind(relativePath)

    const head: HeadConfig[] = (frontmatter.head as HeadConfig[]) ?? []
    head.push(
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:type', content: kind === 'home' ? 'website' : 'article' }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
    )

    if (kind !== 'home') {
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(buildBreadcrumb(relativePath, pageTitle))])
    }

    if (kind === 'faq') {
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(faqPageSchema)])
    }

    if (kind === 'guide' || kind === 'reference') {
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(techArticleSchema(pageTitle, pageDescription, canonical))])
    }

    frontmatter.head = head
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Centro de Ayuda',

    lastUpdated: {
      text: 'Actualizado',
      formatOptions: { dateStyle: 'medium' },
    },

    nav: [
      { text: 'Guía', link: '/guia/' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Legal', link: 'https://registroviajero.com/legal/aviso-legal' },
      { text: 'Web', link: 'https://registroviajero.com' },
      { text: 'App', link: 'https://app.registroviajero.com' },
    ],

    sidebar: [
      {
        text: 'Primeros pasos',
        items: [
          { text: 'Qué es RegistroViajero', link: '/guia/' },
          { text: 'Crear tu cuenta', link: '/guia/crear-cuenta' },
          { text: 'Añadir alojamientos', link: '/guia/alojamientos' },
          { text: 'Credenciales SES', link: '/guia/credenciales-ses' },
        ],
      },
      {
        text: 'Reservas y check-in',
        items: [
          { text: 'Crear reservas', link: '/guia/reservas' },
          { text: 'Enlace de check-in', link: '/guia/check-in' },
          { text: 'Importar calendarios (iCal)', link: '/guia/ical' },
          { text: 'Validar y enviar', link: '/guia/enviar' },
        ],
      },
      {
        text: 'Gestión',
        items: [
          { text: 'Equipo y roles', link: '/guia/equipo' },
          { text: 'Facturación', link: '/guia/facturacion' },
          { text: 'Notificaciones', link: '/guia/notificaciones' },
        ],
      },
      {
        text: 'Solución de problemas',
        items: [
          { text: 'Problemas comunes', link: '/guia/problemas-comunes' },
        ],
      },
      {
        text: 'Referencia',
        items: [
          { text: 'Preguntas frecuentes', link: '/faq' },
          { text: 'Estados de reserva', link: '/referencia/estados' },
          { text: 'Errores del Ministerio', link: '/referencia/errores-ses' },
          { text: 'Sanciones del RD 933/2021', link: '/referencia/sanciones' },
        ],
      },
      {
        text: 'Legal',
        items: [
          { text: 'Aviso legal', link: 'https://registroviajero.com/legal/aviso-legal' },
          { text: 'Política de privacidad', link: 'https://registroviajero.com/legal/privacidad' },
          { text: 'Términos de uso', link: 'https://registroviajero.com/legal/terminos' },
          { text: 'Política de cookies', link: 'https://registroviajero.com/legal/cookies' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/registroviajero' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'RegistroViajero.com — Cumplimiento del Real Decreto 933/2021',
      copyright: '© 2026 RegistroViajero',
    },
  },

  vite: {
    plugins: [llmstxt()],
  },
})
