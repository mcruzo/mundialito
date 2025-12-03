import { findTeam } from '../data/teams';

export const countryFlag = (name: string): string => {
  const t = findTeam(name);
  if (t) return t.emoji;
  if (name === 'TBD') return '❓';
  return '⚽';
};
