import { useEffect } from 'react';
import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import { Card } from './Card';
import { countryFlag } from '../helpers/flags';
import { Header } from './Header';
import { Hero } from './Hero';
import { Groups } from './Groups';
import { Qualified } from './Qualified';
import { Qualifier } from './Qualifier';
import { Bracket } from './Bracket';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export default function App() {
  const theme = useStore((s) => s.theme);
  const initData = useStore((s) => s.initData);
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const upcoming = useStore((s) => s.matches);
  const env = (import.meta as any).env || {};
  const showUpcoming = String(env.VITE_SHOW_UPCOMING ?? 'false') === 'true';
  const showGroups = String(env.VITE_SHOW_GROUPS ?? 'false') === 'true';
  const showBracket = String(env.VITE_SHOW_BRACKET ?? 'false') === 'true';
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    initData();
  }, [initData]);
  return (
    <div className="grid-page container" id="top">
      <div>
        <Header />
        <Hero />
        <Qualified />
        <Qualifier />
        {showUpcoming ? (
          <div className="mobile-predictions">
            <div id="predictions" className="section-title">
              {t.upcoming}
            </div>
            <Card>
              <div className="predictions">
                {upcoming.map((it, i) => (
                  <div className="pred-card" key={i}>
                    <div className="pred-header">
                      <strong>
                        {countryFlag(it.home)} {`${it.home} vs ${it.away}`} {countryFlag(it.away)}
                      </strong>
                    </div>
                    <div className="pred-body">{new Date(it.date || '').toLocaleDateString()}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ) : null}
        {showGroups ? <Groups /> : null}
        {showBracket ? <Bracket /> : null}
        <Footer />
      </div>
      {showUpcoming ? <Sidebar /> : null}
    </div>
  );
}
