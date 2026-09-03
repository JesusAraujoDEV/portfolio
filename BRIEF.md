# BRIEF — Ruta B: Brutalismo Negro & Rojo (secciones alternadas)

Rama: `redesign/brutalist-b` (parte de `main` limpio, independiente de la Ruta A que quedó en `redesign/brutalist-a`).

## Concepto

Brutalismo puro y confrontacional, pero **no** blanco/negro genérico de template AI.
La paleta es **negro y rojo**, con **colores fijos y planos — cero gradientes**. Las
secciones alternan de fondo (una sí, una no) creando un ritmo visual duro tipo
bloques de color stark.

## Paleta (fija, plana)

| Token         | Valor       | Uso                                                    |
| ------------- | ----------- | ------------------------------------------------------ |
| `--ink`       | `#0a0a0a`   | Negro casi puro (fondo de secciones "negras")          |
| `--blood`     | `#e01f1f`   | Rojo brutalista (fondo de secciones "rojas")           |
| `--bone`      | `#f2f0eb`   | Blanco hueso (texto sobre negro y sobre rojo)          |
| `--ink-soft`  | `#161616`   | Bordes/sombras sobre fondos claros del bloque negro    |

Regla de contraste: sobre **negro** el texto es hueso y el acento es **rojo**;
sobre **rojo** el texto es hueso/negro y el acento es **negro**. Las sombras
duras (`Npx Npx 0`) invierten color según el fondo para que siempre se vean.

> Confirmado: rojo `#e01f1f` (no `#FF0000` puro, que vibra feo). Saturado pero
> legible.

## Patrón de alternancia de secciones

Orden real de la página: Hero → About → Experience → StackWall → Projects → Interests → Footer.

| # | Sección    | Fondo   | Texto | Acento |
| - | ---------- | ------- | ----- | ------ |
| 1 | Hero       | NEGRO   | hueso | rojo   |
| 2 | About      | ROJO    | hueso | negro  |
| 3 | Experience | NEGRO   | hueso | rojo   |
| 4 | StackWall  | ROJO    | negro | negro  |
| 5 | Projects   | NEGRO   | hueso | rojo   |
| 6 | Interests  | ROJO    | hueso | negro  |
| 7 | Footer     | NEGRO   | hueso | rojo   |

> Confirmado con el usuario: alternancia estricta 1-sí-1-no arrancando en Hero
> negro → About rojo → Experience negro → y así sucesivamente.

Implementación: cada sección lleva una clase `.band--ink` o `.band--blood` que
fija `background` + `color` + variables de acento/sombra locales. Sin gradientes,
transición de color instantánea al hacer scroll (corte duro entre bloques).

## Efecto estrella: nombre "tambaleante" en el Hero

Al pasar el cursor sobre **JESÚS ARAUJO**, cada letra (o el bloque) empieza a:
- **cambiar entre fuentes display** en secuencia rápida (glitch tipográfico), y
- **tambalearse**: micro-rotación y jitter de posición (transform-only).

Fuentes a cargar (Google Fonts, vía `next/font/google`):
- Anton, Bungee, Black Ops One, Limelight, Chelsea Market, Shadows Into Light.

Alcance confirmado: **solo el nombre del Hero.** Los H2 de sección NO tambalean.

Mecánica:
- Cada letra es un `<span>` propio.
- En hover del nombre, un intervalo va rotando la `font-family` de cada letra
  entre el set, desfasado por letra (efecto cascada), + rotación/translate
  aleatorio pequeño.
- Respeta `prefers-reduced-motion`: si está activo, no tambalea (queda en Anton
  fijo), solo un cambio de color al hover.
- Solo `transform` y `font-family` (font swap no dispara layout si las cajas se
  mantienen con `display:inline-block` y ancho estable).

## Tipografía

- **Display / nombre:** Anton por defecto (condensada, brutal), con el set de
  fuentes rotando en el efecto hover.
- **Headings de sección (H2):** Anton o Archivo Black, uppercase, tracking
  negativo, oversized (se mantiene lo de la Ruta A: `text-5xl`/`text-7xl`).
- **Body:** se mantiene Space Grotesk (legible). El template pedía Courier New
  global pero eso mata la legibilidad del body; lo reservo para labels/mono.
- **Mono / labels:** Geist Mono (ya cargado).

## Chrome brutalista

- Bordes: `border-[3px]` / `border-4` en negro o hueso según fondo.
- Sombras duras: `Npx Npx 0` sin blur, color invertido por banda.
- Cero border-radius (cuadrar todo lo que quede redondo salvo lo funcional).
- Links subrayados, bloques mono, misalignment deliberado (rotaciones leves).

## Animaciones (se reusa el módulo de la Ruta A)

- Reutilizo `src/lib/motion.ts` (EASE, DURATION, variantes, springs) — filosofía
  Emil Kowalski: rápido, transform/opacity, `prefers-reduced-motion` respetado.
- El corte de color entre bandas es duro (sin transición) — es una decisión
  brutalista deliberada.

## Qué NO se toca

- Contenido real (nada de pricing/testimonials del template SaaS).
- El cursor `mix-blend-difference` (se adapta solo al invertir sobre negro/rojo).
- La estructura de secciones y los datos (proyectos, experiencia, gustos).
- El 3D si existe / los drag mechanics (StackWall, FandomPile, Projects).

## Plan de ejecución

1. Cargar las 6 fuentes display en `layout.tsx` (`next/font/google`).
2. Reescribir tokens en `globals.css`: paleta negro/rojo, clases `.band--ink` /
   `.band--blood`, sombras/acentos por banda, sin gradientes.
3. Componente `WobbleName` para el efecto de nombre tambaleante + font-glitch.
4. Aplicar la banda a cada sección (envolver o clase en el `<section>`).
5. **Eliminar el `<Atmosphere>`** (blobs difuminados con gradiente) — confirmado
   por el usuario: fuera los gradientes. Se puede conservar solo la textura de
   grano plana (`.grain`) si aporta, pero sin blobs.
6. Ajustar Nav y Footer a la alternancia.
7. Verificar: `npm run lint` + `npm run build`, revisar contraste y reduced-motion.

## Decisiones confirmadas

1. **Alternancia:** estricta 1-sí-1-no desde Hero negro → About rojo →
   Experience negro → StackWall rojo → Projects negro → Interests rojo →
   Footer negro.
2. **Tambaleo:** solo el nombre del Hero. Los H2 de sección no tiemblan.
3. **Rojo:** `#e01f1f`, confirmado.
4. **Gradientes:** eliminados. Se quita `<Atmosphere>` (blobs difuminados);
   opcionalmente se conserva solo el grano plano.

## Feature extra 1: El Navegante (stickman dibujable)

Justo **después del Hero** hay una sección "Dibuja a tu navegante": un lienzo
(`<canvas>`) donde el visitante dibuja a mano alzada su propio stickman (trazo
negro, pointer/touch). Botones: **Limpiar** y **Guardar**.

Al guardar:
- El dibujo se captura (`canvas.toDataURL`) y se persiste en `localStorage`.
- Aparece como un elemento **flotante `fixed`** que acompaña al visitante
  mientras scrollea (recorre la página con él), y es **arrastrable** (Framer
  Motion `drag`) — lo agarras y lo mueves por donde quieras.
- Un botón para **soltar/rehacer** el navegante (volver a dibujar).

Arquitectura:
- `NavigatorProvider` (context + localStorage) guarda el dataURL y si está activo.
- `StickmanCanvas` (dentro de la sección) = lienzo + dibujo + guardar/limpiar.
- `FloatingNavigator` = el `motion.div` `fixed` arrastrable, montado en el root
  (layout) para que persista sobre todas las secciones.
- Respeta touch (pointer events) y `prefers-reduced-motion` (sin bamboleo extra).

## Feature extra 2: `cambiar_color.ps1` (A/B de tono)

Script PowerShell interactivo (flechas ↑/↓ + Enter) para alternar el color de
las bandas "blood" entre dos tonos y probar en vivo:
- **Rojo** `#e01f1f` (default, texto hueso sobre rojo)
- **Rosa** `#ffe1e1` (texto casi negro sobre rosa)

Mecánica: la CSS define ambas paletas bajo `:root[data-blood="red"]` y
`:root[data-blood="pink"]`; el `<html>` en `layout.tsx` lleva `data-blood="red"`.
El script reescribe ese atributo en `layout.tsx`, y el dev server recarga en
caliente con el tono elegido. Solo cambian las bandas rojas/rosas; las bandas
negras se quedan negras en ambos temas.
