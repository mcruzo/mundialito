import { useEffect, useState } from 'react';
import { useStore } from '../store/appStore';
import { i18n } from '../helpers/i18n';
import '../styles/installprompt.css';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice?: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export function InstallPrompt() {
  const lang = useStore((s) => s.lang);
  const t = i18n[lang];
  const [visible, setVisible] = useState(false);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem('fm26_install_prompt_dismissed');
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.matchMedia('(max-width: 640px)').matches;
    const handler = (e: Event) => {
      e.preventDefault();
      if (dismissed || !isMobile) return;
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler as any);
    return () => window.removeEventListener('beforeinstallprompt', handler as any);
  }, []);

  const onNo = () => {
    localStorage.setItem('fm26_install_prompt_dismissed', 'no');
    setVisible(false);
  };

  const onYes = async () => {
    if (!deferred) return;
    await deferred.prompt();
    try {
      const choice = await deferred.userChoice!;
      localStorage.setItem(
        'fm26_install_prompt_dismissed',
        choice.outcome === 'accepted' ? 'yes' : 'no'
      );
    } catch {
      localStorage.setItem('fm26_install_prompt_dismissed', 'no');
    }
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div className="install-overlay">
      <div className="install-modal">
        <div className="install-title">{t.installPromptTitle}</div>
        <div className="install-body">{t.installPromptBody}</div>
        <div className="install-actions">
          <button className="btn" onClick={onNo}>
            {t.installNo}
          </button>
          <button className="btn" onClick={onYes}>
            {t.installYes}
          </button>
        </div>
      </div>
    </div>
  );
}
