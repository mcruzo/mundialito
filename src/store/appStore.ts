import { create } from 'zustand';
import type { Lang } from '../helpers/i18n';

export interface Team {
  name: string;
  pts: number;
  gf: number;
  ga: number;
  pj?: number;
  g?: number;
  e?: number;
  p?: number;
}
export interface Group {
  name: string;
  teams: Team[];
}
export interface Match {
  id?: string | number;
  date?: string;
  home: string;
  away: string;
  score?: { home: number; away: number };
}
export interface Bracket {
  R16: Match[];
  R8: Match[];
  QF: Match[];
  SF: Match[];
  F: Match[];
}

interface AppState {
  lang: Lang;
  theme: 'dark' | 'light';
  showLangTip: boolean;
  setLang: (l: AppState['lang']) => void;
  toggleTheme: () => void;
  setShowLangTip: (v: boolean) => void;
  groups: Group[];
  matches: Match[];
  bracket: Bracket;
  initData: () => void;
}

export const useStore = create<AppState>((set) => ({
  lang: (() => {
    const allowed: Lang[] = ['es', 'en', 'fr', 'pt', 'ar', 'fa', 'ja', 'ko', 'uz'];
    const stored = localStorage.getItem('lang') as Lang | null;
    return stored && allowed.includes(stored) ? stored : 'es';
  })(),
  theme:
    (localStorage.getItem('theme') as AppState['theme']) ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'),
  showLangTip: true,
  setShowLangTip: (v) => set({ showLangTip: v }),
  setLang: (l) => {
    localStorage.setItem('lang', l);
    set({ lang: l, showLangTip: false });
  },
  toggleTheme: () =>
    set((s) => {
      const t = s.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', t);
      return { theme: t };
    }),
  groups: [
    {
      name: 'A',
      teams: [
        { name: 'México', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Sudáfrica', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'República de Corea', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'CZE/DEN/MKD/IRL', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'B',
      teams: [
        { name: 'Canadá', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'BIH/ITA/NIR/WAL', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Catar', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Suiza', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'C',
      teams: [
        { name: 'Brasil', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Marruecos', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Haití', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Escocia', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'D',
      teams: [
        { name: 'Estados Unidos', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Paraguay', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Australia', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'KOS/ROU/SVK/TUR', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'E',
      teams: [
        { name: 'Alemania', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Curazao', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Costa de Marfil', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Ecuador', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'F',
      teams: [
        { name: 'Países Bajos', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Japón', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'ALB/POL/SWE/UKR', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Túnez', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'G',
      teams: [
        { name: 'Bélgica', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Egipto', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'RI de Irán', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Nueva Zelanda', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'H',
      teams: [
        { name: 'España', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Cabo Verde', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Arabia Saudí', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Uruguay', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'I',
      teams: [
        { name: 'Francia', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Senegal', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'BOL/IRQ/SUR', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Noruega', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'J',
      teams: [
        { name: 'Argentina', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Argelia', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Austria', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Jordania', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'K',
      teams: [
        { name: 'Portugal', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'COD/JAM/NCL', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Uzbekistán', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Colombia', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
    {
      name: 'L',
      teams: [
        { name: 'Inglaterra', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Croacia', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Ghana', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
        { name: 'Panamá', pts: 0, gf: 0, ga: 0, pj: 0, g: 0, e: 0, p: 0 },
      ],
    },
  ],
  matches: [],
  bracket: {
    R16: Array.from({ length: 16 }).map(() => ({ home: '—', away: '—' })),
    R8: Array.from({ length: 8 }).map(() => ({ home: '—', away: '—' })),
    QF: Array.from({ length: 4 }).map(() => ({ home: '—', away: '—' })),
    SF: Array.from({ length: 2 }).map(() => ({ home: '—', away: '—' })),
    F: Array.from({ length: 1 }).map(() => ({ home: '—', away: '—' })),
  },
  initData: () => {
    // Fallback inicial de próximos partidos
    set({
      matches: [
        { date: '2026-06-11', home: 'México', away: 'TBD' },
        { date: '2026-06-12', home: 'Canadá', away: 'TBD' },
        { date: '2026-06-12', home: 'Estados Unidos', away: 'TBD' },
      ],
    });
  },
}));
