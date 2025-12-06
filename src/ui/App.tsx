import { useEffect } from 'react';
import { useStore } from '../store/appStore';
import { Predictions } from './Predictions';
import { Header } from './Header';
import { Hero } from './Hero';
import { Groups } from './Groups';
import { Qualifier } from './Qualifier';
import { Bracket } from './Bracket';
import { Footer } from './Footer';
import { InstallPrompt } from './InstallPrompt';

export default function App() {
  const theme = useStore((s) => s.theme);
  const initData = useStore((s) => s.initData);
  const env = (import.meta as any).env || {};
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
      <div className={`grid-page`} id="top">
        <div>
          <Hero />
          <Qualifier />
          <section className="container mobile-predictions">
            <Predictions />
          </section>
          {showGroups ? <Groups /> : null}
          {showBracket ? <Bracket /> : null}
          <Footer />
        </div>
      </div>
    </>
  );
}
