# Jesús Araujo — Portfolio

Portafolio personal de **Jesús Araujo**, Full-Stack Web Developer (Node.js, .NET/C#, React, PostgreSQL) — actualmente Analista de Aplicaciones en Intelix Synergy C.A.

Destino: [jesusaraujo.lat](https://jesusaraujo.lat)

## Referencias de diseño

- [directedbychris.xyz](https://directedbychris.xyz/) — cursor/interacción
- [mschristensen.com](https://www.mschristensen.com/) — cursor con inversión de color
- [haoqi.design](https://haoqi.design/) — detalles de personalidad (reloj, sonido)
- [cossette.com/fr](https://www.cossette.com/fr) — tipografía bold, brutalista con moderación
- [jasminegunarto.com](https://jasminegunarto.com/) — cálido, minimal
- [landing.love/sites/jackiezhang](https://www.landing.love/sites/jackiezhang/) — dark mode, tono personal
- [brittanychiang.com](https://brittanychiang.com/) — estructura de proyectos

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript) + [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — transiciones, scroll choreography y el sistema de drag de la sección "Mis gustos"
- i18n propio (ES/EN/DE) vía Context, sin librería externa — ver `src/components/LocaleProvider.tsx`
- Despliegue en [Dokploy](https://dokploy.com/) (auto-deploy on push a `main`)

## Estructura de carpetas

```
src/
├── app/
│   ├── layout.tsx        # Providers globales (locale, lightbox, cursor)
│   └── page.tsx           # Ensambla las secciones de la página
├── components/             # Un componente por archivo
│   ├── Hero.tsx, About.tsx, Experience.tsx, Projects.tsx, Interests.tsx, Footer.tsx
│   ├── ProjectCase.tsx, ProjectGallery.tsx     # Casos de estudio de proyectos
│   ├── FandomPile.tsx, FandomMobileItem.tsx     # Pila arrastrable de gustos
│   ├── CustomCursor.tsx, LightboxProvider.tsx   # Interacciones globales
│   └── LocaleProvider.tsx, LanguageSwitcher.tsx # Selector de idioma ES/EN/DE
├── hooks/
│   └── useActiveSectionHash.ts   # Sincroniza el hash de la URL con la sección visible
└── lib/
    ├── projects.ts, experience.ts, fandomItems.ts   # Contenido (localizado ES/EN/DE)
    └── translations.ts, i18n.ts                      # Diccionario de textos de UI

public/images/    # Fotos, capturas de proyectos y arte de "mis gustos"
```

## Desarrollo

```bash
npm run dev
```

## Estado

En producción: [jesusaraujo.lat](https://jesusaraujo.lat)
