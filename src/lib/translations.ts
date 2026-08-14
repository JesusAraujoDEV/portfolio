import type { Locale } from "@/lib/i18n";

const es = {
    nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", gustos: "Mis gustos", contact: "Contacto" },
    cursor: { go: "IR", view: "VER", viewRepo: "VER REPO", write: "ESCRIBIR" },
    hero: {
      pitchBefore:
        "Programo cosas que la gente termina usando de verdad: APIs que no se caen, dashboards que se entienden a la primera, procesos que antes tomaban horas y ahora corren solos. Ahora mismo, en ",
      pitchAfter: ", armando un sistema de logística para una 4PL de Costa Rica.",
      rol: "Rol",
      rolValue: "Full-Stack Developer",
      ahoraEn: "Ahora en",
      stack: "Stack",
      stackValue: "TypeScript · Node · Next.js",
      scroll: "Scroll ↓",
    },
    about: {
      eyebrow: "Sobre mí",
      heading: "21 años, ingeniero recién graduado, todavía sin dormir bien.",
      bio: "Nací y crecí en Valencia. Ahorita en Intelix Synergy metido en un sistema de logística para una empresa de Costa Rica, y hace poco defendí mi tesis en la UJAP con 19/20 — el resultado de varias noches sin dormir que valieron la pena. Antes de eso armé el sistema de pagos de la Orquesta Sinfónica de Carabobo, que sigue corriendo. Cuando cierro la laptop, casi siempre hay una serie, una peli o un control en la mano.",
    },
    experience: {
      eyebrow: "Experiencia",
      heading: "Por dónde he pasado.",
      stages: (n: number) => `${n} etapas · 2022—2026`,
    },
    projects: {
      eyebrow: "Proyectos",
      heading: "Cosas que construí y que siguen funcionando.",
    },
    interests: {
      eyebrow: "Mis gustos",
      heading: "Lo que veo, juego y escucho cuando cierro la laptop.",
      introBefore:
        "Hunter x Hunter y One Piece de base, JoJo's como el shonen raro que también me ganó, Leon Kennedy y Ethan Winters sobreviviendo el apocalipsis zombi, Persona 5 robando corazones en Tokio, Red Dead Redemption 2 cuando quiero ir despacio, y mis 4 películas top de siempre — toca cada pieza para el porqué. ",
      introLink: "Ver perfil completo en Letterboxd →",
    },
    nowPlaying: {
      eyebrow: "Now playing",
      blurb:
        "Si abres mi Spotify a cualquier hora, hay buenas chances de que esté sonando algo de ella. No es una fase.",
    },
    footer: {
      eyebrow: "Contacto",
      heading: "¿Tienes algo en mente? Escríbeme.",
    },
    quickFacts: {
      magallanesNote: "beisbol venezolano, así perdamos siempre",
      valenciaNote: "de aquí soy, aquí sigo construyendo",
    },
    langSwitcher: {
      label: "Idioma",
      deNote: "Estoy aprendiendo alemán (A1) — mi meta es visitar Alemania algún día.",
    },
};

const en: typeof es = {
    nav: { about: "About", experience: "Experience", projects: "Projects", gustos: "Things I like", contact: "Contact" },
    cursor: { go: "GO", view: "VIEW", viewRepo: "VIEW REPO", write: "WRITE" },
    hero: {
      pitchBefore:
        "I build things people actually end up using: APIs that don't go down, dashboards that make sense on the first look, processes that used to take hours and now run on their own. Right now, at ",
      pitchAfter: ", I'm building a logistics system for a 4PL company in Costa Rica.",
      rol: "Role",
      rolValue: "Full-Stack Developer",
      ahoraEn: "Currently at",
      stack: "Stack",
      stackValue: "TypeScript · Node · Next.js",
      scroll: "Scroll ↓",
    },
    about: {
      eyebrow: "About me",
      heading: "21 years old, freshly graduated engineer, still not sleeping enough.",
      bio: "I was born and raised in Valencia. Right now I'm at Intelix Synergy, building a logistics system for a company in Costa Rica, and I recently defended my thesis at UJAP with a 19/20 — the payoff for a bunch of sleepless nights. Before that I built the payment system for the Orquesta Sinfónica de Carabobo, which is still running today. When I close the laptop, there's almost always a show, a movie, or a controller in my hand.",
    },
    experience: {
      eyebrow: "Experience",
      heading: "Where I've been.",
      stages: (n: number) => `${n} stages · 2022—2026`,
    },
    projects: {
      eyebrow: "Projects",
      heading: "Things I built that are still running.",
    },
    interests: {
      eyebrow: "Things I like",
      heading: "What I watch, play, and listen to when I close the laptop.",
      introBefore:
        "Hunter x Hunter and One Piece as the foundation, JoJo's as the weird shonen that won me over too, Leon Kennedy and Ethan Winters surviving the zombie apocalypse, Persona 5 stealing hearts in Tokyo, Red Dead Redemption 2 when I want to slow down, and my all-time top 4 movies — tap each piece for the why. ",
      introLink: "See full profile on Letterboxd →",
    },
    nowPlaying: {
      eyebrow: "Now playing",
      blurb: "Open my Spotify at any hour and there's a good chance something of hers is playing. It's not a phase.",
    },
    footer: {
      eyebrow: "Contact",
      heading: "Got something in mind? Write to me.",
    },
    quickFacts: {
      magallanesNote: "Venezuelan baseball — we lose either way",
      valenciaNote: "this is where I'm from, this is where I keep building",
    },
    langSwitcher: {
      label: "Language",
      deNote: "I'm learning German (A1) — my goal is to visit Germany someday.",
    },
};

const de: typeof es = {
    nav: { about: "Über mich", experience: "Erfahrung", projects: "Projekte", gustos: "Meine Interessen", contact: "Kontakt" },
    cursor: { go: "LOS", view: "ANSEHEN", viewRepo: "REPO ANSEHEN", write: "SCHREIBEN" },
    hero: {
      pitchBefore:
        "Ich programmiere Dinge, die Leute wirklich benutzen: APIs, die nicht abstürzen, Dashboards, die man auf Anhieb versteht, Prozesse, die früher Stunden dauerten und jetzt von allein laufen. Gerade jetzt, bei ",
      pitchAfter: ", baue ich ein Logistiksystem für einen 4PL-Anbieter aus Costa Rica auf.",
      rol: "Rolle",
      rolValue: "Full-Stack Developer",
      ahoraEn: "Aktuell bei",
      stack: "Stack",
      stackValue: "TypeScript · Node · Next.js",
      scroll: "Scrollen ↓",
    },
    about: {
      eyebrow: "Über mich",
      heading: "21 Jahre alt, frisch graduierter Ingenieur, schläft immer noch zu wenig.",
      bio: "Ich bin in Valencia geboren und aufgewachsen. Gerade arbeite ich bei Intelix Synergy an einem Logistiksystem für ein Unternehmen aus Costa Rica, und vor Kurzem habe ich meine Abschlussarbeit an der UJAP mit einer 19/20 verteidigt — das Ergebnis einiger durchwachter Nächte, die sich gelohnt haben. Davor habe ich das Zahlungssystem der Orquesta Sinfónica de Carabobo gebaut, das bis heute läuft. Wenn ich den Laptop zuklappe, habe ich fast immer eine Serie, einen Film oder einen Controller in der Hand.",
    },
    experience: {
      eyebrow: "Erfahrung",
      heading: "Wo ich schon überall war.",
      stages: (n: number) => `${n} Stationen · 2022—2026`,
    },
    projects: {
      eyebrow: "Projekte",
      heading: "Dinge, die ich gebaut habe und die immer noch laufen.",
    },
    interests: {
      eyebrow: "Meine Interessen",
      heading: "Was ich schaue, spiele und höre, wenn ich den Laptop zuklappe.",
      introBefore:
        "Hunter x Hunter und One Piece als Grundlage, JoJo's als der schräge Shonen, der mich auch überzeugt hat, Leon Kennedy und Ethan Winters, die die Zombie-Apokalypse überleben, Persona 5, das in Tokio Herzen stiehlt, Red Dead Redemption 2, wenn ich es ruhig angehen will, und meine ewigen Top-4-Filme — auf jedes Stück tippen für das Warum. ",
      introLink: "Vollständiges Profil auf Letterboxd ansehen →",
    },
    nowPlaying: {
      eyebrow: "Now playing",
      blurb: "Wenn du zu irgendeiner Tageszeit mein Spotify öffnest, läuft mit guter Wahrscheinlichkeit etwas von ihr. Das ist keine Phase.",
    },
    footer: {
      eyebrow: "Kontakt",
      heading: "Hast du etwas im Kopf? Schreib mir.",
    },
    quickFacts: {
      magallanesNote: "venezolanisches Baseball, auch wenn wir immer verlieren",
      valenciaNote: "von hier komme ich, hier baue ich weiter",
    },
    langSwitcher: {
      label: "Sprache",
      deNote: "Ich lerne gerade Deutsch (A1) — und du liest das schon auf Deutsch. Mein Ziel: eines Tages nach Deutschland reisen.",
    },
};

export const translations: Record<Locale, typeof es> = { es, en, de };
