export const startDate = new Date('2026-06-11T13:00:00');
export const drawDate = new Date('2025-12-05T11:00:00');
export const qualifierStartDate = new Date('2026-03-23T00:00:00');

export const fmtDuration = (ms: number) => {
  if (ms < 0) ms = 0;
  const now = Date.now();
  const target = new Date(now + ms);
  const d = daysLeft(target, now);
  const totalHours = hoursLeft(target, now);
  const totalMinutes = minutesLeft(target, now);
  const totalSeconds = secondsLeft(target, now);
  const h = Math.max(0, totalHours - d * 24);
  const m = Math.max(0, totalMinutes - totalHours * 60);
  const s = Math.max(0, totalSeconds - totalMinutes * 60);
  const pad = (v: number) => String(v).padStart(2, '0');

  return `${d}D ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
};

export const daysLeft = (target: Date, nowMs?: number) => {
  const ms = target.getTime() - (nowMs ?? Date.now());
  return Math.max(0, Math.floor(ms / 86400000));
};

export const hoursLeft = (target: Date, nowMs?: number) => {
  const ms = target.getTime() - (nowMs ?? Date.now());
  return Math.max(0, Math.floor(ms / 3600000));
};

export const minutesLeft = (target: Date, nowMs?: number) => {
  const ms = target.getTime() - (nowMs ?? Date.now());
  return Math.max(0, Math.floor(ms / 60000));
};

export const secondsLeft = (target: Date, nowMs?: number) => {
  const ms = target.getTime() - (nowMs ?? Date.now());
  return Math.max(0, Math.floor(ms / 1000));
};
