export const startDate = new Date('2026-06-11T15:00:00');
export const drawDate = new Date('2025-12-05T12:00:00');
export const qualifierStartDate = new Date('2026-03-23T00:00:00');

export const fmtDuration = (ms: number) => {
  if (ms < 0) ms = 0;
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const pad = (v: number) => String(v).padStart(2, '0');

  return `${d}D ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
};

export const daysLeft = (target: Date, nowMs?: number) => {
  const ms = target.getTime() - (nowMs ?? Date.now());
  return Math.max(0, Math.floor(ms / 86400000));
};
