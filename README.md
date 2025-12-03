# Mundialito

Aplicación web construida con Vite + React + TypeScript para explorar información relevante del Mundial 2026.

## Tecnologías

- Vite (bundler y dev server)
- React 18
- TypeScript
- Zustand (estado global)
- ESLint + Prettier (calidad y formato de código)

## Objetivo del proyecto

- Mostrar cuenta regresiva al inicio del torneo y al sorteo de grupos.
- Visualizar selecciones clasificadas ordenadas por bombos.
- Explorar grupos y llaves de eliminación.
- Presentar “Partidos por venir” y un bloque de “Plazas restantes” (torneo clasificatorio + eliminatorias europeas).
- Centralizar datos de selecciones (nombre, código FIFA de 3 letras y emoji) en `src/data/teams.ts`.

## Arranque

1. Requisitos: Node.js >= 18
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Desarrollo:
   ```bash
   npm run dev
   ```

## Variables de entorno

Las siguientes banderas controlan la visibilidad de secciones:

- `VITE_SHOW_UPCOMING` — “Partidos por venir” (Sidebar y bloque móvil)
- `VITE_SHOW_GROUPS` — sección “Grupos”
- `VITE_SHOW_BRACKET` — sección “Llaves”

Por defecto están en `false` en `.env`. Ajusta y reinicia el servidor de desarrollo para aplicar cambios.

## Estructura relevante

- `src/ui` — componentes de interfaz (Hero, Qualified, Groups, Bracket, Sidebar, Qualifier)
- `src/helpers` — utilidades (fechas, i18n, banderas, códigos)
- `src/data/teams.ts` — lista única de selecciones (emoji + code3 + aliases)
- `src/store/appStore.ts` — estado global con grupos, llaves y próximos partidos

## Notas

- No se deben commitear archivos sensibles como `.env`; ya están ignorados por `.gitignore`.
- Los emojis de banderas siguen estándares de Unicode; placeholders como `TBD` se muestran con `❓`.
