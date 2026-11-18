import { useCallback, useEffect, useState } from 'react';
import { storage } from '../lib/storage';

export type Theme = 'dark' | 'light';

/** Claro por padrão. O index.html já aplica o tema salvo antes da primeira pintura. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
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
