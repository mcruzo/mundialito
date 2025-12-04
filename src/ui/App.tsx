import { useEffect } from 'react';
import { useStore } from '../store/appStore';
import { Predictions } from './Predictions';
import { Header } from './Header';
import { Hero } from './Hero';
import { Groups } from './Groups';
import { Qualified } from './Qualified';
import { Qualifier } from './Qualifier';
import { Bracket } from './Bracket';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { InstallPrompt } from './InstallPrompt';

export default function App() {
  const theme = useStore((s) => s.theme);
  const initData = useStore((s) => s.initData);
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
    <>
      <Header />
      <InstallPrompt />
      <div className={`grid-page ${showUpcoming ? 'sidebar' : ''}`} id="top">
        <div>
          <Hero />
          <Qualified />
          <Qualifier />
          {showUpcoming ? (
            <section className="container mobile-predictions">
              <Predictions />
            </section>
          ) : null}
          {showGroups ? <Groups /> : null}
          {showBracket ? <Bracket /> : null}
          <Footer />
        </div>
        {showUpcoming ? <Sidebar /> : null}
      </div>
    </>
  );
}
