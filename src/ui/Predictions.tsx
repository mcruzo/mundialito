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
  return (
    <div>
      <div id="predictions" className="section-title">
        {t.upcoming}
      </div>
      <Card>
        <div className="predictions">
          {items.map((it, i) => (
            <div className="pred-card" key={i}>
              <div className="pred-header">
                <strong>
                  <FlagIcon name={it.home} /> {`${it.home} ${t.vs} ${it.away}`}{' '}
                  <FlagIcon name={it.away} />
                </strong>
              </div>
              <div className="pred-body">
                {new Date(it.date || '').toLocaleDateString(localeMap[lang] || 'es-ES')}
              </div>
              {it.away && it.away !== 'TBD' ? (
                <div className="analysis-label">{t.analysisLabel}</div>
              ) : null}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
