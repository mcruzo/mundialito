import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import { FlagIcon } from './FlagIcon';
import '../styles/bracket.css';
import { Card } from './Card';

export function Bracket() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const bracket = useStore((s) => s.bracket);
  const rounds = [
    { key: 'R16', label: t.round16 },
    { key: 'R8', label: t.round8 },
    { key: 'QF', label: t.quarter },
    { key: 'SF', label: t.semifinalRound },
    { key: 'F', label: t.finalRound },
  ] as const;
  const mapData: Record<(typeof rounds)[number]['key'], Array<{ home: string; away: string }>> = {
    R16: bracket.R16 as any,
    R8: bracket.R8 as any,
    QF: bracket.QF as any,
    SF: bracket.SF as any,
    F: bracket.F as any,
  };
  return (
    <section id="bracket" className="container">
      <div className="section-title">{t.bracket}</div>
      <Card>
        <div className="bracket">
          {rounds.map((r) => (
            <div key={r.key} className="round">
              <strong>{r.label}</strong>
              {(mapData[r.key] || []).map((m, i) => (
                <div key={r.key + i} className="match">
                  <div className="slot">
                    <div className="name">
                      <FlagIcon name={m.home} /> <span>{m.home}</span>
                    </div>
                    <span></span>
                  </div>
                  <div className="slot">
                    <div className="name">
                      <FlagIcon name={m.away} /> <span>{m.away}</span>
                    </div>
                    <span></span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
