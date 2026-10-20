import type { Language } from "@/lib/i18n/translations";
import { LANDING_PHONE_DISPLAY } from "@/lib/data/landing";
import { FINANCING_EXAMPLE, LOWEST_FINANCING_TERM as LOWEST } from "@/lib/data/financing";

// Copy for the paid-ads landing page (/landing). Kept apart from the site-wide
// translations so the Spanish copy is type-checked against the English one.

const en = {
  header: {
    call: "Call",
    callAria: `Call Orlando T Group at ${LANDING_PHONE_DISPLAY}`,
  },
  hero: {
    eyebrow: "Miami-Dade · Broward · Palm Beach",
    headline: "Protect your home",
    headlineAccent: "before the next storm",
    subtitle:
      "Impact windows, doors and shutters installed by a licensed, insured, family-owned South Florida team. 1,600+ projects since 2006.",
    bullets: [
      "Free in-home estimate, no obligation",
      "100% financing, no money down",
      "Miami-Dade NOA–approved products",
      "3 years of free maintenance",
    ],
    rating: "5.0 average rating on Google & Yelp",
  },
  agent: {
    regionLabel: "Chat with Orlando, our AI assistant",
    name: "Orlando",
    status: "AI assistant · online 24/7",
    heading: "Ask me anything about protecting your home",
    subtitle:
      "Prices, products, financing or your free in-home estimate — in English or Spanish.",
    chat: "Chat with Orlando",
    voice: "Talk by voice",
    callPrompt: "Prefer a person?",
    call: `Call ${LANDING_PHONE_DISPLAY}`,
    switchToVoice: "Switch to voice",
    switchToChat: "Switch to chat",
    close: "Back",
    loading: "Connecting to Orlando…",
    failed: "Orlando couldn't load right now.",
    dock: "Ask Orlando",
  },
  proof: {
    label: "Orlando T Group at a glance",
    stats: [
      { value: "2006", label: "Family-owned since" },
      { value: "1,600+", label: "Projects completed" },
      { value: "3", label: "Counties served" },
      { value: "5.0", label: "Average rating" },
    ],
    brandsLabel: "Premium products from",
  },
  products: {
    heading: "What we install",
    subtitle: "Hurricane and solar protection for every opening of your home.",
    cta: "Ask Orlando",
    ctaAria: (product: string) => `Ask Orlando about ${product}`,
  },
  steps: {
    heading: "How it works",
    stepLabel: "Step",
    subtitle: "From first call to final inspection, one local team handles it all.",
    items: [
      {
        title: "Book your free estimate",
        body: "Ask Orlando or call us. A specialist visits your home, measures every opening and recommends the right protection.",
      },
      {
        title: "Review your options",
        body: "Get a clear quote with financing options. No pressure and no obligation.",
      },
      {
        title: "We install it right",
        body: "Our crew handles permits through final inspection, then visits once a year for 3 years of free maintenance.",
      },
    ],
  },
  work: {
    heading: "Recent work in South Florida",
    subtitle: "A few of the 1,600+ projects we've completed since 2006.",
  },
  reviews: {
    heading: "What homeowners say",
    subtitle: "5.0 average rating on Google & Yelp",
    more: "Read more reviews",
    newTab: "(opens in a new tab)",
    starsAria: (rating: number) => `${rating} out of 5 stars`,
  },
  financing: {
    eyebrow: "Flexible financing",
    heading: "Protect your home now. Pay over time.",
    perks: [
      "100% financing, no money down",
      "No payments for up to a year",
      "No minimum FICO required",
      "Get prequalified in minutes",
    ],
    priceLabel: "From",
    price: LOWEST.monthly,
    priceUnit: "/month*",
    footnote: `*Approximate payment on a ${FINANCING_EXAMPLE.contract} contract over ${LOWEST.years} years at ${LOWEST.rate} interest. Eligibility is based on home equity.`,
    cta: "Ask about financing",
  },
  finalCta: {
    heading: "Don't wait for the next storm warning",
    subtitle:
      "Hurricane season comes every year. Ask Orlando your questions now and book your free in-home estimate before the next one.",
    cta: "Ask Orlando now",
    call: `Call ${LANDING_PHONE_DISPLAY}`,
  },
  footer: {
    tagline: "Licensed & insured · Serving Miami-Dade, Broward & Palm Beach since 2006",
    rights: "All rights reserved.",
    visitSite: "Visit our website",
  },
};

export type LandingCopy = typeof en;

const es: LandingCopy = {
  header: {
    call: "Llamar",
    callAria: `Llamar a Orlando T Group al ${LANDING_PHONE_DISPLAY}`,
  },
  hero: {
    eyebrow: "Miami-Dade · Broward · Palm Beach",
    headline: "Proteja su hogar",
    headlineAccent: "antes de la próxima tormenta",
    subtitle:
      "Ventanas, puertas y persianas de impacto instaladas por un equipo familiar, licenciado y asegurado del Sur de Florida. Más de 1,600 proyectos desde 2006.",
    bullets: [
      "Estimado gratis en su hogar, sin compromiso",
      "Financiamiento del 100%, sin pago inicial",
      "Productos con aprobación NOA de Miami-Dade",
      "3 años de mantenimiento gratis",
    ],
    rating: "5.0 de calificación promedio en Google y Yelp",
  },
  agent: {
    regionLabel: "Chat con Orlando, nuestro asistente de IA",
    name: "Orlando",
    status: "Asistente de IA · disponible 24/7",
    heading: "Pregúnteme lo que quiera sobre cómo proteger su hogar",
    subtitle:
      "Precios, productos, financiamiento o su estimado gratis en casa — en español o inglés.",
    chat: "Chatear con Orlando",
    voice: "Hablar por voz",
    callPrompt: "¿Prefiere hablar con una persona?",
    call: `Llame al ${LANDING_PHONE_DISPLAY}`,
    switchToVoice: "Cambiar a voz",
    switchToChat: "Cambiar a chat",
    close: "Volver",
    loading: "Conectando con Orlando…",
    failed: "Orlando no pudo cargar en este momento.",
    dock: "Pregunte a Orlando",
  },
  proof: {
    label: "Orlando T Group en cifras",
    stats: [
      { value: "2006", label: "Empresa familiar desde" },
      { value: "1,600+", label: "Proyectos completados" },
      { value: "3", label: "Condados atendidos" },
      { value: "5.0", label: "Calificación promedio" },
    ],
    brandsLabel: "Productos de primera de",
  },
  products: {
    heading: "Lo que instalamos",
    subtitle: "Protección contra huracanes y sol para cada abertura de su hogar.",
    cta: "Preguntar",
    ctaAria: (product: string) => `Preguntar a Orlando sobre ${product}`,
  },
  steps: {
    heading: "Cómo funciona",
    stepLabel: "Paso",
    subtitle: "Desde la primera llamada hasta la inspección final, un solo equipo local se encarga de todo.",
    items: [
      {
        title: "Agende su estimado gratis",
        body: "Pregúntele a Orlando o llámenos. Un especialista visita su hogar, mide cada abertura y le recomienda la protección adecuada.",
      },
      {
        title: "Revise sus opciones",
        body: "Reciba una cotización clara con opciones de financiamiento. Sin presión y sin compromiso.",
      },
      {
        title: "Instalación profesional",
        body: "Nuestro equipo se encarga de los permisos hasta la inspección final, y le visitamos una vez al año durante 3 años de mantenimiento gratis.",
      },
    ],
  },
  work: {
    heading: "Trabajos recientes en el Sur de Florida",
    subtitle: "Algunos de los más de 1,600 proyectos que hemos completado desde 2006.",
  },
  reviews: {
    heading: "Lo que dicen nuestros clientes",
    subtitle: "5.0 de calificación promedio en Google y Yelp",
    more: "Ver más reseñas",
    newTab: "(se abre en una pestaña nueva)",
    starsAria: (rating: number) => `${rating} de 5 estrellas`,
  },
  financing: {
    eyebrow: "Financiamiento flexible",
    heading: "Proteja su hogar hoy. Pague con el tiempo.",
    perks: [
      "Financiamiento del 100%, sin pago inicial",
      "Sin pagos por hasta un año",
      "Sin puntaje FICO mínimo",
      "Precalifíquese en minutos",
    ],
    priceLabel: "Desde",
    price: LOWEST.monthly,
    priceUnit: "/mes*",
    footnote: `*Pago aproximado para un contrato de ${FINANCING_EXAMPLE.contract} a ${LOWEST.years} años con ${LOWEST.rate} de interés. La elegibilidad se basa en el patrimonio del hogar.`,
    cta: "Preguntar por financiamiento",
  },
  finalCta: {
    heading: "No espere a la próxima alerta de tormenta",
    subtitle:
      "La temporada de huracanes llega cada año. Pregúntele a Orlando ahora y agende su estimado gratis antes de la próxima.",
    cta: "Pregunte a Orlando ahora",
    call: `Llame al ${LANDING_PHONE_DISPLAY}`,
  },
  footer: {
    tagline: "Licenciados y asegurados · Sirviendo a Miami-Dade, Broward y Palm Beach desde 2006",
    rights: "Todos los derechos reservados.",
    visitSite: "Visite nuestro sitio web",
  },
};

export const landingCopy: Record<Language, LandingCopy> = { en, es };
