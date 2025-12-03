import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import { FlagIcon } from './FlagIcon';
import '../styles/groups.css';

const sortTeams = (teams: Array<{ name: string; pts: number; gf: number; ga: number }>) => {
  return [...teams].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const gdA = a.gf - a.ga;
    const gdB = b.gf - b.ga;
    if (gdB !== gdA) return gdB - gdA;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.name.localeCompare(b.name);
  });
};

export function Groups() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const groups = useStore((s) => s.groups);
  const cards = groups.map((g) => ({ ...g, teams: sortTeams(g.teams) }));
  return (
    <section id="groups" className="container">
      <div className="section-title">
        {t.groups} <span className="meta">{t.groupsMeta}</span>
      </div>
      <div className="groups">
        {cards.map((card) => (
          <div key={card.name} className="card">
            <div className="card-header">
              <strong>{`${t.groupLabel} ${card.name}`}</strong>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t.team}</th>
                  <th>{t.points}</th>
                  <th>{t.goalsFor}</th>
                  <th>{t.goalsAgainst}</th>
                  <th>{t.goalDiff}</th>
                </tr>
              </thead>
              <tbody>
                {(card.teams || []).map((tm, idx) => (
                  <tr key={tm.name}>
                    <td>{idx + 1}</td>
                    <td>
                      <FlagIcon name={tm.name} /> {tm.name}
                    </td>
                    <td>{tm.pts}</td>
                    <td>{tm.gf}</td>
                    <td>{tm.ga}</td>
                    <td>{tm.gf - tm.ga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
