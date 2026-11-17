import { useCallback, useEffect, useState } from 'react';
import { storage } from '../lib/storage';

export type Theme = 'dark' | 'light';

/** Escuro por padrão. O index.html já aplica o tema salvo antes da primeira pintura. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0B1020' : '#F4F5FA');
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      storage.set('theme', next);
      return next;
    });
  }, []);

  return { theme, toggle };
}
