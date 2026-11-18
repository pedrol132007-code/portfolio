import { useEffect, useState } from 'react';
import { storage } from '../../lib/storage';

/**
 * TEMPORÁRIO: seletor de paleta para comparar as opções no link de prévia.
 * Não aparece no endereço oficial. Sai do código quando a paleta for escolhida.
 */
const OPTIONS = [
  { id: 'salvia', label: 'Areia e sálvia', swatch: ['#f5f0e6', '#4f7253'] },
  { id: 'lavanda', label: 'Areia e lavanda', swatch: ['#f5f0e6', '#67589a'] },
  { id: 'lilas', label: 'Lilás', swatch: ['#f3f0f7', '#67589a'] },
] as const;

type PaletteId = (typeof OPTIONS)[number]['id'];

const isProduction = () => window.location.hostname === 'pedro-romeiro.vercel.app';

export function PalettePreview() {
  const [palette, setPalette] = useState<PaletteId>(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('paleta');
    const saved = fromUrl ?? document.documentElement.dataset.palette;
    return OPTIONS.some((o) => o.id === saved) ? (saved as PaletteId) : 'salvia';
  });

  useEffect(() => {
    document.documentElement.dataset.palette = palette;
    storage.set('palette', palette);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
  }, [palette]);

  if (isProduction()) return null;

  return (
    <div
      role="group"
      aria-label="Prévia de paleta"
      style={{
        position: 'fixed',
        left: '50%',
        bottom: 'max(1rem, env(safe-area-inset-bottom))',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.375rem',
        maxWidth: 'calc(100vw - 2rem)',
        padding: '0.375rem',
        borderRadius: '999px',
        background: 'var(--surface)',
        border: '1px solid var(--line-strong)',
        boxShadow: 'var(--shadow)',
        fontSize: 'var(--fs-xs)',
      }}
    >
      <span style={{ padding: '0 0.5rem', color: 'var(--text-muted)' }}>Prévia</span>
      {OPTIONS.map((o) => {
        const active = o.id === palette;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={active}
            onClick={() => setPalette(o.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '999px',
              border: '1px solid',
              borderColor: active ? 'var(--accent)' : 'transparent',
              background: active ? 'var(--accent-soft)' : 'transparent',
              color: 'var(--text)',
              font: 'inherit',
              fontWeight: active ? 600 : 450,
              cursor: 'pointer',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '0.9rem',
                height: '0.9rem',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${o.swatch[0]} 50%, ${o.swatch[1]} 50%)`,
                border: '1px solid var(--line-strong)',
              }}
            />
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
