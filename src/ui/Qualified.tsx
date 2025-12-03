import { code3 } from '../helpers/codes';
import { findTeam } from '../data/teams';
import { MiniCard } from './MiniCard';
import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import '../styles/qualified.css';

export function Qualified() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const inList = (name: string) => !!findTeam(name);
  const pot1 = [
    'Canadá',
    'México',
    'Estados Unidos',
    'España',
    'Argentina',
    'Francia',
    'Inglaterra',
    'Brasil',
    'Portugal',
    'Países Bajos',
    'Bélgica',
    'Alemania',
  ].filter(inList);
  const pot2 = [
    'Croacia',
    'Marruecos',
    'Colombia',
    'Uruguay',
    'Suiza',
    'Japón',
    'Senegal',
    'RI de Irán',
    'República de Corea',
    'Ecuador',
    'Austria',
    'Australia',
  ].filter(inList);
  const pot3 = [
    'Noruega',
    'Panamá',
    'Egipto',
    'Argelia',
    'Escocia',
    'Paraguay',
    'Túnez',
    'Costa de Marfil',
    'Uzbekistán',
    'Catar',
    'Arabia Saudí',
    'Sudáfrica',
  ].filter(inList);
  const pot4 = ['Jordania', 'Cabo Verde', 'Ghana', 'Curazao', 'Haití', 'Nueva Zelanda'].filter(
    inList
  );
  const placeholders = [
    { label: 'UEFA A' },
    { label: 'UEFA B' },
    { label: 'UEFA C' },
    { label: 'UEFA D' },
    { label: 'TC 1' },
    { label: 'TC 2' },
  ];
  return (
    <section id="qualified" className="container">
      <div className="section-title">{t.qualified}</div>
      <div className="pots">
        <div className="pot">
          <div className="pot-title">{`${t.potLabel} 1`}</div>
          <div className="list">
            {pot1.map((name) => (
              <MiniCard key={name} teamName={name} code3={code3(name)} />
            ))}
          </div>
        </div>
        <div className="pot">
          <div className="pot-title">{`${t.potLabel} 2`}</div>
          <div className="list">
            {pot2.map((name) => (
              <MiniCard key={name} teamName={name} code3={code3(name)} />
            ))}
          </div>
        </div>
        <div className="pot">
          <div className="pot-title">{`${t.potLabel} 3`}</div>
          <div className="list">
            {pot3.map((name) => (
              <MiniCard key={name} teamName={name} code3={code3(name)} />
            ))}
          </div>
        </div>
        <div className="pot">
          <div className="pot-title">{`${t.potLabel} 4`}</div>
          <div className="list">
            {pot4.map((name) => (
              <MiniCard key={name} teamName={name} code3={code3(name)} />
            ))}
            {placeholders.map((p) => (
              <MiniCard key={p.label} teamName={'TBD'} code3={p.label} />
            ))}
          </div>
        </div>
      </div>
      <p className="pots-legend">{t.potsLegend}</p>
    </section>
  );
}
