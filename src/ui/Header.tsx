import { useStore } from '../store/appStore';
import { useEffect } from 'react';
import { i18n } from '../helpers/i18n';
import '../styles/header.css';

export function Header() {
  const { lang, setLang, theme, toggleTheme, showLangTip, setShowLangTip } = useStore() as any;
  const t = i18n[lang];
  const langs: Array<[string, string]> = [
    ['es', 'ES'],
    ['en', 'EN'],
    ['fr', 'FR'],
    ['pt', 'PT'],
    ['ar', 'العربية'],
    ['fa', 'فارسی'],
    ['ja', '日本語'],
    ['ko', '한국어'],
    ['uz', 'O‘zbek'],
  ];
  useEffect(() => {
    if (showLangTip && typeof setShowLangTip === 'function') {
      const id = setTimeout(() => setShowLangTip(false), 5000);
      return () => clearTimeout(id);
    }
  }, [showLangTip, setShowLangTip]);
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="brand">
          <img src="/Logo-mundialito.png" alt="Futbol Mundial 2026" className="brand-logo" />
          <a href="#countdown" className="brand-title">
            <span className="brand-title-lg">Futbol Mundial 2026</span>
            <span className="brand-title-sm">Mundial &#39;26</span>
          </a>
        </div>
        <nav className="nav">
          <a href="#countdown">{t.start}</a>
          <a href="#groups">{t.groups}</a>
          <a href="#bracket">{t.bracket}</a>
          <a href="#predictions">{t.predictions}</a>
        </nav>
        <div className="controls">
          <div
            className="tooltip"
            data-tip={t.changeLang}
            {...(showLangTip ? { 'data-show': '' } : {})}
          >
            <select className="btn" value={lang} onChange={(e) => setLang(e.target.value as any)}>
              {langs.map(([code, label]) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <button className="btn" onClick={toggleTheme}>
            {theme === 'dark' ? '🌙 ' : '☀️ '}
          </button>
        </div>
      </div>
    </header>
  );
}
