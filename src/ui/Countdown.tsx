import React from 'react';
import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import '../styles/countdown.css';

type Props = { d: number; h: number; m: number; s: number };

export function Countdown({ d: _d, h, m, s }: Props) {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const pad = (v: number) => String(v).padStart(2, '0');
  return (
    <div className="countdown-grid">
      <div className="countdown-item">
        <div className="count-val">{pad(h)}</div>
        <div className="count-label">{t.hours.toUpperCase()}</div>
      </div>
      <div className="countdown-item">
        <div className="count-val">{pad(m)}</div>
        <div className="count-label">{t.minutes.toUpperCase()}</div>
      </div>
      <div className="countdown-item">
        <div className="count-val">{pad(s)}</div>
        <div className="count-label">{t.seconds.toUpperCase()}</div>
      </div>
    </div>
  );
}
