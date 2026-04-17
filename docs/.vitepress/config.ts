import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

const SITE_URL = 'https://help.registroviajero.com'
const OG_DESCRIPTION = 'Guías, tutoriales y referencia para gestionar tus alojamientos y cumplir con el RD 933/2021.'

export default defineConfig({
  title: 'RegistroViajero — Centro de Ayuda',
  description: OG_DESCRIPTION,
  lang: 'es-ES',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],

    // Umami analytics
    ['script', { defer: '', src: 'https://analytics.registroviajero.com/script.js', 'data-website-id': '933877c7-2ace-4788-bfd2-2453b50ad60e' }],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'RegistroViajero — Centro de Ayuda' }],
    ['meta', { property: 'og:title', content: 'RegistroViajero — Centro de Ayuda' }],
    ['meta', { property: 'og:description', content: OG_DESCRIPTION }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:locale', content: 'es_ES' }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/og-image.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'RegistroViajero — Centro de Ayuda' }],
    ['meta', { name: 'twitter:description', content: OG_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/og-image.png` }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Centro de Ayuda',

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
        text: 'Referencia',
        items: [
          { text: 'Preguntas frecuentes', link: '/faq' },
          { text: 'Estados de reserva', link: '/referencia/estados' },
          { text: 'Errores del Ministerio', link: '/referencia/errores-ses' },
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
    plugins: [
      llmstxt(),
    ],
  },
})
