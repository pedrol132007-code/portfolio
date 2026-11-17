import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { L, Locale } from '../content/types';
import { storage } from '../lib/storage';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Escolhe o texto do idioma atual. Aceita texto fixo (string) também. */
  t: (text: L | string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function initialLocale(): Locale {
  const saved = storage.get('locale');
  if (saved === 'pt' || saved === 'en') return saved;
  if (typeof navigator !== 'undefined' && !navigator.language.toLowerCase().startsWith('pt')) return 'en';
  return 'pt';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    storage.set('locale', l);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: (text) => (typeof text === 'string' ? text : text[locale]) }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale precisa estar dentro de <LocaleProvider>');
  return ctx;
}
