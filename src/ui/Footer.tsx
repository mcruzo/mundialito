import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import '../styles/footer.css';

export function Footer() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  return (
    <footer className="footer">
      Copyright © Futbol Mundial 2026
    </footer>
  );
}
