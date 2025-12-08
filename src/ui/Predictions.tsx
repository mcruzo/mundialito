import React from 'react';
import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import type { Lang } from '../helpers/i18n';
import { Card } from './Card';
import { FlagIcon } from './FlagIcon';
import '../styles/predictions.css';

export function Predictions() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const items = useStore((s) => s.matches);
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
  const TWO_HOURS = 2 * 60 * 60 * 1000;
  const now = Date.now();
  const getEventMs = (it: { date?: string }) => new Date(it.date || '').getTime() - TWO_HOURS;
  const upcoming = items
    .filter((it) => getEventMs(it) >= now)
    .sort((a, b) => getEventMs(a) - getEventMs(b));
  const past = items
    .filter((it) => getEventMs(it) < now)
    .sort((a, b) => getEventMs(a) - getEventMs(b));
  const ordered = [...upcoming, ...past];
  return (
    <div>
      <div id="predictions" className="section-title">
        {t.upcoming}
      </div>
      <Card>
        <div className="predictions-scroll">
          <div className="predictions">
            {ordered.map((it, i) => {
              const isPast = getEventMs(it) < now;
              return (
              <div className={`pred-card${isPast ? ' past' : ''}`} key={i}>
                <div className="pred-header">
                  <strong>
                    <FlagIcon name={it.home} /> {`${it.home} ${t.vs} ${it.away}`}{' '}
                    <FlagIcon name={it.away} />
                  </strong>
                </div>
                <div className="pred-body">
                  {new Date(getEventMs(it)).toLocaleString(localeMap[lang] || 'es-ES', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'America/Mexico_City',
                  })}
                  {it.venue ? ` • ${it.venue}` : ''}
                </div>
                {isPast && it.score ? (
                  <div className="pred-body">{`${it.home} ${it.score.home} - ${it.score.away} ${it.away}`}</div>
                ) : null}
                {it.away && it.away !== 'TBD' ? (
                  <div className="analysis-label">{t.analysisLabel}</div>
                ) : null}
              </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
