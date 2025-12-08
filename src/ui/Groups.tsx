import { useStore } from '../store/appStore';
import { useEffect, useRef } from 'react';
import { i18n } from '../helpers/i18n';
import type { Translation } from '../helpers/i18n';
import type { Group, Team } from '../store/appStore';
import { FlagIcon } from './FlagIcon';
import { code3 } from '../helpers/codes';
import { LoaderBar } from './LoaderBar';
import '../styles/groups.css';

const keepOrder = (teams: Team[]) => teams;

export function Groups() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const groups = useStore((s) => s.groups);
  const cards = groups.map((g) => ({ ...g, teams: keepOrder(g.teams) }));
  return (
    <section id="groups" className="container">
      <div className="section-title">
        {t.groups} <span className="meta">{t.groupsMeta}</span>
      </div>
      <div className="groups">
        {cards.map((card) => (
          <GroupCard key={card.name} card={card} t={t} />
        ))}
      </div>
    </section>
  );
}

function GroupCard({ card, t }: { card: Group; t: Translation }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;
    const scrollers = Array.from(root.querySelectorAll<HTMLDivElement>('.stats-scroll'));
    let syncing = false;
    const onScroll = (e: Event) => {
      if (syncing) return;
      const src = e.target as HTMLDivElement;
      syncing = true;
      const x = src.scrollLeft;
      scrollers.forEach((el) => {
        if (el !== src && el.scrollLeft !== x) el.scrollLeft = x;
      });
      syncing = false;
    };
    scrollers.forEach((el) => el.addEventListener('scroll', onScroll, { passive: true }));
    return () => scrollers.forEach((el) => el.removeEventListener('scroll', onScroll));
  }, [card?.name]);

  return (
    <div className="card">
      <div className="card-header">
        <strong>{`${t.groupLabel} ${card.name}`}</strong>
      </div>
      <div className="table-wrap" ref={wrapRef}>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>{t.team}</th>
              <th className="stats-head">
                <div className="stats-scroll">
                  <div className="stats-row">
                    <span className="metric-label">PJ</span>
                    <span className="metric-label">G</span>
                    <span className="metric-label">E</span>
                    <span className="metric-label">P</span>
                    <span className="metric-label">GF</span>
                    <span className="metric-label">GC</span>
                    <span className="metric-label">DG</span>
                  </div>
                </div>
              </th>
              <th>Pts</th>
              <th>RESULTADOS</th>
            </tr>
          </thead>
          <tbody>
            {(card.teams || []).map((tm: Team, idx: number) => (
              <tr key={tm.name}>
                <td>{idx + 1}</td>
                <td>
                  <span className="team">
                    <FlagIcon name={tm.name} /> {code3(tm.name)}
                  </span>
                </td>
                <td className="stats-cell">
                  <div className="stats-scroll">
                    <div className="stats-row">
                      <span className="metric">{tm.pj ?? 0}</span>
                      <span className="metric">{tm.g ?? 0}</span>
                      <span className="metric">{tm.e ?? 0}</span>
                      <span className="metric">{tm.p ?? 0}</span>
                      <span className="metric">{tm.gf ?? 0}</span>
                      <span className="metric">{tm.ga ?? 0}</span>
                      <span className="metric">{(tm.gf ?? 0) - (tm.ga ?? 0)}</span>
                    </div>
                  </div>
                </td>
                <td>{tm.pts ?? 0}</td>
                <td>
                  <LoaderBar width={78} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
