import { create } from 'zustand';

export interface Team {
  name: string;
  pts: number;
  gf: number;
  ga: number;
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
  lang: 'es' | 'en' | 'fr' | 'pt' | 'zh';
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
  lang: (localStorage.getItem('lang') as AppState['lang']) || 'es',
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
  groups: Array.from({ length: 12 }).map((_, i) => ({
    name: String.fromCharCode(65 + i),
    teams: [],
  })),
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
