import { useEffect, useState } from 'react';
import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import type { Lang } from '../helpers/i18n';
import { startDate, daysLeft, hoursLeft, minutesLeft, secondsLeft } from '../helpers/dates';
import { Card } from './Card';
import { Countdown } from './Countdown';
import '../styles/hero.css';

export function Hero() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const [now, setNow] = useState(Date.now());
  const localeMap: Record<Lang, string> = {
    es: 'es-ES',
    en: 'en-US',
    fr: 'fr-FR',
    pt: 'pt-PT',
    ar: 'ar',
    fa: 'fa',
    ja: 'ja-JP',
    ko: 'ko-KR',
    uz: 'uz-UZ',
  };
  const fmtDate = (d: Date) =>
    d.toLocaleDateString(localeMap[lang] || 'es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="countdown" className="hero container">
      <div className="title">{t.tournament}</div>
      <div className="countdown-cards">
        <Card title={t.worldStart} rightLabel={fmtDate(startDate)}>
          <div className="countdown-main" style={{ color: '#32e676' }}>
            {daysLeft(startDate, now)} {t.days}
          </div>
          {(() => {
            const d = daysLeft(startDate, now);
            const th = hoursLeft(startDate, now);
            const tm = minutesLeft(startDate, now);
            const ts = secondsLeft(startDate, now);
            return (
              <Countdown
                d={d}
                h={Math.max(0, th - d * 24)}
                m={Math.max(0, tm - th * 60)}
                s={Math.max(0, ts - tm * 60)}
              />
            );
          })()}
        </Card>
      </div>
    </section>
  );
}
