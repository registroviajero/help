import { defineConfig, type DefaultTheme, type HeadConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

const SITE_URL = 'https://help.registroviajero.com'
const BRAND_URL = 'https://registroviajero.com'
const APP_URL = 'https://app.registroviajero.com'

type Locale = 'es' | 'en'
const LOCALES: Locale[] = ['es', 'en']
const DEFAULT_LOCALE: Locale = 'es'

const SITE_TITLE: Record<Locale, string> = {
  es: 'RegistroViajero — Centro de Ayuda',
  en: 'RegistroViajero — Help Center',
}

const SITE_DESCRIPTION: Record<Locale, string> = {
  es: 'Guías, tutoriales y referencia para gestionar tus alojamientos y cumplir con el Real Decreto 933/2021.',
  en: 'Guides, tutorials, and reference for managing your accommodations and complying with Royal Decree 933/2021.',
}

const LANG_TAG: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-US',
}

const OG_LOCALE: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_US',
}

const ORG_NAME = 'RegistroViajero'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORG_NAME,
  url: BRAND_URL,
  logo: `${BRAND_URL}/logo.svg`,
  sameAs: [BRAND_URL, APP_URL, SITE_URL],
}

function localePathPrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`
}

function stripLocalePrefix(relativePath: string): string {
  return relativePath.startsWith('en/') ? relativePath.slice(3) : relativePath
}

function localeOfPath(relativePath: string): Locale {
  return relativePath.startsWith('en/') ? 'en' : 'es'
}

function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_TITLE[locale],
    url: `${SITE_URL}${localePathPrefix(locale)}/`,
    inLanguage: LANG_TAG[locale],
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: BRAND_URL,
    },
  }
}

// Keep in sync with docs/faq.md and docs/en/faq.md. Google penalizes FAQPage schema that doesn't match visible content.
const FAQS: Record<Locale, { q: string; a: string }[]> = {
  es: [
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
    { q: '¿Cuánto cuesta?', a: 'El plan Pro cuesta 5 €/alojamiento/mes, sin mínimo. Pagas solo por los alojamientos activos. Incluye 15 días de prueba gratuita, sin tarjeta de crédito.' },
    { q: '¿Se bloquea el check-in si caduca mi plan?', a: 'No. Los huéspedes siempre pueden completar sus datos a través de los enlaces de check-in, independientemente del estado de tu suscripción.' },
    { q: '¿Puedo cancelar en cualquier momento?', a: 'Sí. Al cancelar, mantienes el acceso hasta el final del período pagado.' },
    { q: '¿Qué sanciones hay si no cumplo el RD 933/2021?', a: 'La omisión o inexactitud de la comunicación se tipifica como infracción leve (100–600 €) por la Ley Orgánica 4/2015 de Seguridad Ciudadana. Puede escalar a grave (601–30.000 €) o muy grave (30.001–600.000 €) por reiteración, volumen o conducta dolosa.' },
    { q: '¿Qué plataformas son compatibles?', a: 'Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar y cualquier plataforma que exporte iCal (.ics).' },
    { q: '¿Cada cuánto se sincronizan las reservas?', a: 'Automáticamente cada 15 minutos. También puedes forzar una sincronización manual en cualquier momento.' },
    { q: '¿Cómo se protegen los datos?', a: 'Contraseñas cifradas con argon2id, credenciales SES cifradas con AES-256-GCM, comunicaciones por HTTPS/TLS, almacenamiento aislado por agencia y registro de auditoría inmutable.' },
    { q: '¿Cuánto tiempo se conservan los datos de huéspedes?', a: '3 años desde la fecha de salida, conforme al RD 933/2021. Transcurrido ese plazo, se eliminan automáticamente.' },
    { q: '¿Puedo eliminar mi cuenta?', a: 'Sí. Desde Configuración → Perfil → Zona de peligro. Los datos personales se anonimizan y los registros de auditoría se conservan por cumplimiento legal.' },
  ],
  en: [
    { q: 'What is Royal Decree 933/2021?', a: 'It is the Spanish regulation that requires tourist accommodation establishments to report guest data to the Ministry of the Interior through the SES.HOSPEDAJES platform. RegistroViajero automates this process.' },
    { q: 'Do I need to install anything?', a: 'No. RegistroViajero is a web application. You only need an up-to-date browser (Chrome, Safari, Firefox, or Edge). Optionally, you can install it as a PWA on your mobile device.' },
    { q: 'Do my guests need to create an account?', a: 'No. Each guest receives a unique link that opens the check-in form directly. No sign-up, download, or installation required.' },
    { q: 'What languages is check-in available in?', a: 'The guest check-in form is available in 9 languages: Spanish, English, French, German, Italian, Portuguese, Galician, Basque, and Catalan.' },
    { q: 'Which documents does it accept?', a: 'Spanish citizens: DNI or passport. Non-Spanish: passport, NIE, EU registration certificate, foreign national ID, or travel document.' },
    { q: 'What about minors?', a: 'Minors under 14 are exempt from registration under Royal Decree 933/2021. Those aged 14 to 17 must complete the form and declare their kinship with an adult on the same reservation.' },
    { q: 'Is guest data saved if they close the browser?', a: 'Yes. Data is saved automatically after each step. The guest can resume later by reopening the same link.' },
    { q: 'How do I get SES credentials?', a: 'Credentials are issued by the Spanish Ministry of the Interior. Contact your local immigration office (oficina de extranjería) or police station.' },
    { q: 'Can I use RegistroViajero without SES credentials?', a: 'Yes. You can manage reservations and collect guest data without credentials. Ministry submission is enabled as soon as you configure them.' },
    { q: 'How long do I have to submit a guest report?', a: 'The regulation requires submission at the moment of check-in or within 24 hours of the start of the stay. Late submissions can still be qualified as non-compliance, even if sent later.' },
    { q: 'What happens if the Ministry rejects a submission?', a: 'The reservation goes into the Error state with the code and message returned by SES.HOSPEDAJES. Fix the flagged fields, re-validate, and resubmit.' },
    { q: 'Does it work in Catalonia and the Basque Country?', a: 'Not yet. These regions use their own systems (Mossos d\'Esquadra and Ertzaintza). Integration is planned for future releases.' },
    { q: 'How much does it cost?', a: 'The Pro plan costs €5 per accommodation per month, with no minimum. You only pay for active accommodations. It includes a 15-day free trial, no credit card required.' },
    { q: 'Is check-in blocked if my plan lapses?', a: 'No. Guests can always complete their data through the check-in links, regardless of your subscription status.' },
    { q: 'Can I cancel at any time?', a: 'Yes. When you cancel, you keep access until the end of the paid period.' },
    { q: 'What are the penalties for non-compliance with RD 933/2021?', a: 'Failure or inaccuracy in the submission is classified as a minor offense (€100–600) under Organic Law 4/2015 on Public Safety. It can escalate to serious (€601–30,000) or very serious (€30,001–600,000) for repeat offenses, volume, or willful misconduct.' },
    { q: 'Which platforms are supported?', a: 'Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar, and any platform that exports iCal (.ics).' },
    { q: 'How often are reservations synced?', a: 'Automatically every 15 minutes. You can also trigger a manual sync at any time.' },
    { q: 'How is data protected?', a: 'Passwords hashed with argon2id, SES credentials encrypted with AES-256-GCM, communications over HTTPS/TLS, agency-isolated storage, and an immutable audit log.' },
    { q: 'How long is guest data retained?', a: '3 years from the checkout date, as required by Royal Decree 933/2021. After that, data is deleted automatically.' },
    { q: 'Can I delete my account?', a: 'Yes. From Settings → Profile → Danger zone. Personal data is anonymized; audit records are retained for legal compliance.' },
  ],
}

function faqPageSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_TAG[locale],
    mainEntity: FAQS[locale].map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

const SECTION_LABELS: Record<Locale, Record<string, string>> = {
  es: {
    guia: 'Guía',
    referencia: 'Referencia',
    faq: 'Preguntas frecuentes',
  },
  en: {
    guide: 'Guide',
    reference: 'Reference',
    faq: 'FAQ',
  },
}

const HOME_BREADCRUMB_LABEL: Record<Locale, string> = {
  es: 'Centro de Ayuda',
  en: 'Help Center',
}

type PageKind = 'home' | 'faq' | 'guide' | 'reference'

// Canonical translation map. Page segments differ between locales
// (guia/facturacion ↔ en/guide/billing), so we can't derive one from the other.
// Keep this in sync with the files in docs/ and docs/en/.
const PAGE_ALTERNATES: Record<Locale, string>[] = [
  { es: 'index.md',                      en: 'en/index.md' },
  { es: 'faq.md',                        en: 'en/faq.md' },
  { es: 'guia/index.md',                 en: 'en/guide/index.md' },
  { es: 'guia/crear-cuenta.md',          en: 'en/guide/create-account.md' },
  { es: 'guia/alojamientos.md',          en: 'en/guide/accommodations.md' },
  { es: 'guia/credenciales-ses.md',      en: 'en/guide/ses-credentials.md' },
  { es: 'guia/reservas.md',              en: 'en/guide/reservations.md' },
  { es: 'guia/check-in.md',              en: 'en/guide/check-in.md' },
  { es: 'guia/ical.md',                  en: 'en/guide/ical.md' },
  { es: 'guia/enviar.md',                en: 'en/guide/submit.md' },
  { es: 'guia/equipo.md',                en: 'en/guide/team.md' },
  { es: 'guia/facturacion.md',           en: 'en/guide/billing.md' },
  { es: 'guia/notificaciones.md',        en: 'en/guide/notifications.md' },
  { es: 'guia/problemas-comunes.md',     en: 'en/guide/common-issues.md' },
  { es: 'referencia/estados.md',         en: 'en/reference/states.md' },
  { es: 'referencia/errores-ses.md',     en: 'en/reference/ses-errors.md' },
  { es: 'referencia/sanciones.md',       en: 'en/reference/penalties.md' },
]

const ALTERNATES_BY_PATH: Map<string, Record<Locale, string>> = (() => {
  const map = new Map<string, Record<Locale, string>>()
  for (const entry of PAGE_ALTERNATES) {
    for (const locale of LOCALES) map.set(entry[locale], entry)
  }
  return map
})()

function alternatesFor(relativePath: string): Record<Locale, string> | null {
  return ALTERNATES_BY_PATH.get(relativePath) ?? null
}

function pagePathFromRelative(relativePath: string): string {
  const locale = localeOfPath(relativePath)
  const bare = stripLocalePrefix(relativePath)
  const prefix = localePathPrefix(locale)
  if (bare === 'index.md') return `${prefix}/`
  const base = bare.replace(/\.md$/, '')
  if (base.endsWith('/index')) return `${prefix}/${base.slice(0, -'/index'.length)}/`
  return `${prefix}/${base}`
}

function pageUrl(relativePath: string): string {
  return `${SITE_URL}${pagePathFromRelative(relativePath)}`
}

function pageKind(relativePath: string): PageKind {
  const bare = stripLocalePrefix(relativePath)
  if (bare === 'index.md') return 'home'
  if (bare === 'faq.md') return 'faq'
  if (bare.startsWith('guia/') || bare.startsWith('guide/')) return 'guide'
  if (bare.startsWith('referencia/') || bare.startsWith('reference/')) return 'reference'
  return 'guide'
}

function buildBreadcrumb(relativePath: string, title: string) {
  const locale = localeOfPath(relativePath)
  const bare = stripLocalePrefix(relativePath)
  const parts = bare.replace(/\.md$/, '').split('/').filter((p) => p !== 'index')
  const prefix = localePathPrefix(locale)
  const homeUrl = `${SITE_URL}${prefix}/`
  const items: Record<string, unknown>[] = [
    { '@type': 'ListItem', position: 1, name: HOME_BREADCRUMB_LABEL[locale], item: homeUrl },
  ]
  let acc = `${SITE_URL}${prefix}`
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]
    acc += `/${p}`
    const isLast = i === parts.length - 1
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: isLast ? title : SECTION_LABELS[locale][p] ?? p,
      item: acc,
    })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

function techArticleSchema(title: string, description: string, canonical: string, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url: canonical,
    inLanguage: LANG_TAG[locale],
    author: { '@type': 'Organization', name: ORG_NAME, url: BRAND_URL },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: BRAND_URL,
      logo: { '@type': 'ImageObject', url: `${BRAND_URL}/logo.svg` },
    },
    isPartOf: { '@type': 'WebSite', name: SITE_TITLE[locale], url: `${SITE_URL}${localePathPrefix(locale)}/` },
  }
}

const WEBSITE_SCHEMA_JSON: Record<Locale, string> = {
  es: JSON.stringify(websiteSchema('es')),
  en: JSON.stringify(websiteSchema('en')),
}

const FAQ_SCHEMA_JSON: Record<Locale, string> = {
  es: JSON.stringify(faqPageSchema('es')),
  en: JSON.stringify(faqPageSchema('en')),
}

// ============================================================================
// Spanish theme config
// ============================================================================

const esNav: DefaultTheme.NavItem[] = [
  { text: 'Guía', link: '/guia/' },
  { text: 'FAQ', link: '/faq' },
  { text: 'Legal', link: 'https://registroviajero.com/legal/aviso-legal' },
  { text: 'Web', link: 'https://registroviajero.com' },
  { text: 'App', link: 'https://app.registroviajero.com' },
]

const esSidebar: DefaultTheme.Sidebar = [
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
    items: [{ text: 'Problemas comunes', link: '/guia/problemas-comunes' }],
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
]

// ============================================================================
// English theme config
// ============================================================================

const enNav: DefaultTheme.NavItem[] = [
  { text: 'Guide', link: '/en/guide/' },
  { text: 'FAQ', link: '/en/faq' },
  { text: 'Legal', link: 'https://registroviajero.com/en/legal/legal-notice' },
  { text: 'Web', link: 'https://registroviajero.com/en/' },
  { text: 'App', link: 'https://app.registroviajero.com' },
]

const enSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Getting started',
    items: [
      { text: 'What is RegistroViajero', link: '/en/guide/' },
      { text: 'Create your account', link: '/en/guide/create-account' },
      { text: 'Add accommodations', link: '/en/guide/accommodations' },
      { text: 'SES credentials', link: '/en/guide/ses-credentials' },
    ],
  },
  {
    text: 'Reservations and check-in',
    items: [
      { text: 'Create reservations', link: '/en/guide/reservations' },
      { text: 'Check-in link', link: '/en/guide/check-in' },
      { text: 'Import calendars (iCal)', link: '/en/guide/ical' },
      { text: 'Validate and submit', link: '/en/guide/submit' },
    ],
  },
  {
    text: 'Management',
    items: [
      { text: 'Team and roles', link: '/en/guide/team' },
      { text: 'Billing', link: '/en/guide/billing' },
      { text: 'Notifications', link: '/en/guide/notifications' },
    ],
  },
  {
    text: 'Troubleshooting',
    items: [{ text: 'Common issues', link: '/en/guide/common-issues' }],
  },
  {
    text: 'Reference',
    items: [
      { text: 'Frequently asked questions', link: '/en/faq' },
      { text: 'Reservation states', link: '/en/reference/states' },
      { text: 'Ministry errors', link: '/en/reference/ses-errors' },
      { text: 'Penalties under RD 933/2021', link: '/en/reference/penalties' },
    ],
  },
  {
    text: 'Legal',
    items: [
      { text: 'Legal notice', link: 'https://registroviajero.com/en/legal/legal-notice' },
      { text: 'Privacy policy', link: 'https://registroviajero.com/en/legal/privacy' },
      { text: 'Terms of use', link: 'https://registroviajero.com/en/legal/terms' },
      { text: 'Cookie policy', link: 'https://registroviajero.com/en/legal/cookies' },
    ],
  },
]

// ============================================================================
// Shared head
// ============================================================================

const sharedHead: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ['meta', { name: 'theme-color', content: '#2563eb' }],

  ['link', { rel: 'preconnect', href: 'https://analytics.registroviajero.com', crossorigin: '' }],
  ['link', { rel: 'dns-prefetch', href: 'https://analytics.registroviajero.com' }],

  ['script', { defer: '', src: 'https://analytics.registroviajero.com/script.js', 'data-website-id': '933877c7-2ace-4788-bfd2-2453b50ad60e' }],

  ['meta', { property: 'og:image', content: `${SITE_URL}/og-image.png` }],
  ['meta', { property: 'og:image:width', content: '1200' }],
  ['meta', { property: 'og:image:height', content: '630' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:image', content: `${SITE_URL}/og-image.png` }],

  ['script', { type: 'application/ld+json' }, JSON.stringify(organizationSchema)],
]

// ============================================================================
// Config
// ============================================================================

const COPYRIGHT_YEAR = new Date().getFullYear()

export default defineConfig({
  title: SITE_TITLE.es,
  description: SITE_DESCRIPTION.es,
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: SITE_URL,
    transformItems(items) {
      // sitemap.js emits each `links` entry as
      //   <xhtml:link rel="alternate" hreflang="..." href="..."/>.
      // The hreflang field comes from `lang`; `url` must be a full URL.
      // `item.url` on input is the relative path (e.g. "en/faq" or "").
      const alternatesByItemUrl = new Map<string, Record<Locale, string>>()
      for (const entry of PAGE_ALTERNATES) {
        for (const locale of LOCALES) {
          const itemUrl = pagePathFromRelative(entry[locale]).replace(/^\//, '').replace(/\/$/, '')
          alternatesByItemUrl.set(itemUrl, entry)
        }
      }
      return items.map((item) => {
        const entry = alternatesByItemUrl.get(item.url.replace(/\/$/, ''))
        if (!entry) return item
        const defaultUrl = pageUrl(entry[DEFAULT_LOCALE])
        const links = LOCALES.map((locale) => ({
          lang: LANG_TAG[locale],
          url: pageUrl(entry[locale]),
        }))
        links.push({ lang: 'x-default', url: defaultUrl })
        return { ...item, links }
      })
    },
  },

  head: sharedHead,

  locales: {
    root: {
      label: 'Español',
      lang: LANG_TAG.es,
      title: SITE_TITLE.es,
      description: SITE_DESCRIPTION.es,
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Centro de Ayuda',
        lastUpdated: { text: 'Actualizado', formatOptions: { dateStyle: 'medium' } },
        nav: esNav,
        sidebar: esSidebar,
        search: { provider: 'local' },
        outline: { label: 'En esta página', level: [2, 3] },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Tema',
        lightModeSwitchTitle: 'Cambiar a tema claro',
        darkModeSwitchTitle: 'Cambiar a tema oscuro',
        langMenuLabel: 'Cambiar idioma',
        footer: {
          message: 'RegistroViajero — Cumplimiento del Real Decreto 933/2021',
          copyright: `© ${COPYRIGHT_YEAR} RegistroViajero`,
        },
      },
    },
    en: {
      label: 'English',
      lang: LANG_TAG.en,
      link: '/en/',
      title: SITE_TITLE.en,
      description: SITE_DESCRIPTION.en,
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Help Center',
        lastUpdated: { text: 'Updated', formatOptions: { dateStyle: 'medium' } },
        nav: enNav,
        sidebar: enSidebar,
        search: { provider: 'local' },
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' },
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        langMenuLabel: 'Change language',
        footer: {
          message: 'RegistroViajero — Royal Decree 933/2021 compliance',
          copyright: `© ${COPYRIGHT_YEAR} RegistroViajero`,
        },
      },
    },
  },

  transformPageData(pageData) {
    const { relativePath, title, description, frontmatter } = pageData
    const locale = localeOfPath(relativePath)
    const kind = pageKind(relativePath)
    const pageTitle = (frontmatter.title as string) || title || SITE_TITLE[locale]
    const pageDescription = (frontmatter.description as string) || description || SITE_DESCRIPTION[locale]
    const canonical = pageUrl(relativePath)

    const newHead: HeadConfig[] = [
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:site_name', content: SITE_TITLE[locale] }],
      ['meta', { property: 'og:locale', content: OG_LOCALE[locale] }],
      ['meta', { property: 'og:type', content: kind === 'home' ? 'website' : 'article' }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
    ]

    for (const alt of LOCALES) {
      if (alt === locale) continue
      newHead.push(['meta', { property: 'og:locale:alternate', content: OG_LOCALE[alt] }])
    }

    const alts = alternatesFor(relativePath)
    if (alts) {
      for (const alt of LOCALES) {
        newHead.push(['link', { rel: 'alternate', hreflang: LANG_TAG[alt], href: pageUrl(alts[alt]) }])
      }
      newHead.push(['link', { rel: 'alternate', hreflang: 'x-default', href: pageUrl(alts[DEFAULT_LOCALE]) }])
    }

    if (kind === 'home') {
      newHead.push(['script', { type: 'application/ld+json' }, WEBSITE_SCHEMA_JSON[locale]])
    } else {
      newHead.push(['script', { type: 'application/ld+json' }, JSON.stringify(buildBreadcrumb(relativePath, pageTitle))])
    }

    if (kind === 'faq') {
      newHead.push(['script', { type: 'application/ld+json' }, FAQ_SCHEMA_JSON[locale]])
    }

    if (kind === 'guide' || kind === 'reference') {
      newHead.push(['script', { type: 'application/ld+json' }, JSON.stringify(techArticleSchema(pageTitle, pageDescription, canonical, locale))])
    }

    const existing = (frontmatter.head as HeadConfig[]) ?? []
    frontmatter.head = [...existing, ...newHead]
  },

  vite: {
    plugins: [llmstxt()],
  },
})
