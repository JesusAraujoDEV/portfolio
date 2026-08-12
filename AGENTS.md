<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio — Jesús Araujo

Personal portfolio for jesusaraujo.lat. Full-Stack dev (Node.js, .NET/C#, React, PostgreSQL), currently Analista de Aplicaciones at Intelix Synergy.

## Stack
- Next.js (App Router, TypeScript), Tailwind CSS
- Framer Motion for transitions/micro-interactions
- react-three-fiber / drei for 3D accents — use sparingly, only where it adds signal

## Design direction
Distinctive, not templated. References: directedbychris.xyz, mschristensen.com (inverted-color custom cursor), haoqi.design, cossette.com/fr (bold type, restrained brutalism), jasminegunarto.com, landing.love/sites/jackiezhang. Dark-first palette, generous whitespace, bold confident type, one signature interaction (custom cursor) rather than many small effects.

## Content sections
- Hero — name, role, one-line pitch
- About — bio + personality grid (Hunter x Hunter, One Piece, Olivia Rodrigo, Letterboxd top 4, Venezuela, Magallanes, Resident Evil / Leon Kennedy & Ethan Winters)
- Projects — case-study style, not generic cards: Wallets, Mediart, FixIt, Orquesta Sinfónica de Carabobo system, Deggs
- Contact/footer — LinkedIn, Letterboxd, Spotify, GitHub, email

## Assets
Personal images live in `public/images/` — `profile.jpg`, `letterboxd-top4.jpg`. Do not fabricate placeholder photos of the person; use a neutral placeholder block until the real asset is dropped in.

## Conventions
- Components in `src/components/`, one component per file
- No new dependency unless it earns its place — check what's already installed first
