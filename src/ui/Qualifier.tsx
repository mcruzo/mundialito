import { useEffect, useState } from 'react';
import { qualifierStartDate, fmtDuration, daysLeft } from '../helpers/dates';
import { Card } from './Card';
import { FlagIcon } from './FlagIcon';
import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import '../styles.css';


export function Qualifier() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const route1 = {
    semi: { home: 'NCL', away: 'JAM' },
    final: { home: 'WIN', away: 'COD' },
  };
  const route2 = {
    semi: { home: 'BOL', away: 'SUR' },
    final: { home: 'WIN', away: 'IRQ' },
  };

  const euroRoutesCodes: Record<string, [string, string, string, string]> = {
    A: ['ALB', 'BIH', 'CZE', 'DEN'],
    B: ['ITA', 'KOS', 'NIR', 'MKD'],
    C: ['POL', 'IRL', 'ROU', 'SVK'],
    D: ['SWE', 'TUR', 'UKR', 'WAL'],
  };

  return (
    <section id="qualifier" className="container">
      <div className="section-title">{t.qualifierTitle}</div>
      <Card>
        <div className="q-countdown">
          <div className="q-main">
            {daysLeft(qualifierStartDate, now)} {t.days}
          </div>
          <div className="q-sub">{fmtDuration(qualifierStartDate.getTime() - now)}</div>
        </div>
        <div className="section-subtitle strong">{t.fifaQualifierSubtitle}</div>
        <div className="q-grid">
          <div className="q-route">
            <strong>{`${t.route} 1`}</strong>
            <div className="q-round">
              <div className="q-match">
                <span className="q-name">
                  <FlagIcon code3={route1.semi.home} /> {route1.semi.home}
                </span>
                <span className="q-vs">{t.vs}</span>
                <span className="q-name">
                  <FlagIcon code3={route1.semi.away} /> {route1.semi.away}
                </span>
              </div>
              <div className="q-match">
                <span className="q-name">🏆 {t.winnerSF}</span>
                <span className="q-vs">{t.vs}</span>
                <span className="q-name">
                  <FlagIcon code3={route1.final.away} /> {route1.final.away}
                </span>
              </div>
            </div>
          </div>
          <div className="q-route">
            <strong>{`${t.route} 2`}</strong>
            <div className="q-round">
              <div className="q-match">
                <span className="q-name">
                  <FlagIcon code3={route2.semi.home} /> {route2.semi.home}
                </span>
                <span className="q-vs">{t.vs}</span>
                <span className="q-name">
                  <FlagIcon code3={route2.semi.away} /> {route2.semi.away}
                </span>
              </div>
              <div className="q-match">
                <span className="q-name">🏆 {t.winnerSF}</span>
                <span className="q-vs">{t.vs}</span>
                <span className="q-name">
                  <FlagIcon code3={route2.final.away} /> {route2.final.away}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="q-legend">{t.qualifierLegend}</p>
        <div className="section-subtitle strong">{t.euroPlayoffsSubtitle}</div>
        <div className="q-grid">
          {(['A', 'B', 'C', 'D'] as const).map((path) => {
            const [a, b, c, d] = euroRoutesCodes[path];
            return (
              <div className="q-route" key={path}>
                <strong>{`${t.route} ${path}`}</strong>
                <div className="q-round">
                  <div className="q-match">
                    <span className="q-name">
                      <FlagIcon code3={a} /> {a}
                    </span>
                    <span className="q-vs">{t.vs}</span>
                    <span className="q-name">
                      <FlagIcon code3={b} /> {b}
                    </span>
                  </div>
                  <div className="q-match">
                    <span className="q-name">
                      <FlagIcon code3={c} /> {c}
                    </span>
                    <span className="q-vs">{t.vs}</span>
                    <span className="q-name">
                      <FlagIcon code3={d} /> {d}
                    </span>
                  </div>
                  <div className="q-match">
                    <span className="q-name">🏆 {t.winnerSF}</span>
                    <span className="q-vs">{t.vs}</span>
                    <span className="q-name">{t.winnerSF}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
}
