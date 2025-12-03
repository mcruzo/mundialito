import { useEffect, useState } from 'react';
import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import { startDate, drawDate, fmtDuration, daysLeft } from '../helpers/dates';
import { Card } from './Card';
import '../styles/hero.css';

export function Hero() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const [now, setNow] = useState(Date.now());
  const localeMap: Record<string, string> = {
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
          <div className="countdown-sub">{fmtDuration(startDate.getTime() - now)}</div>
        </Card>
        <Card title={t.groupDrawTitle} rightLabel={fmtDate(drawDate)}>
          <div className="countdown-main" style={{ color: '#32e676' }}>
            {daysLeft(drawDate, now)} {t.days}
          </div>
          <div className="countdown-sub">{fmtDuration(drawDate.getTime() - now)}</div>
        </Card>
      </div>
    </section>
  );
}
