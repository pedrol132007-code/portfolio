export type Locale = 'pt' | 'en';

/** Texto nos dois idiomas do site. */
export type L = Record<Locale, string>;

/**
 * Informação que ainda precisa da confirmação do Pedro.
 * Enquanto `site.showPending` for true, aparece no site como um aviso tracejado;
 * com false, simplesmente some. Troque por um valor real quando tiver.
 */
export type Pending = { pending: L };

export type Maybe<T> = T | Pending;

export const isPending = (v: unknown): v is Pending =>
  typeof v === 'object' && v !== null && 'pending' in v;

export type ProjectLink = {
  kind: 'repo' | 'live';
  href: string;
  /** Observação curta ao lado do link, ex.: acesso por convite. */
  note?: L;
};

export type ProjectImage = {
  src: string;
  alt: L;
  width: number;
  height: number;
};

export type Project = {
  /** Usado como âncora (#tododay) e chave. */
  slug: string;
  name: string;
  /** Destaque grande na seção de projetos. */
  featured: boolean;
  kind: L;
  status?: L;
  summary: L;
  problem: L;
  highlights: L[];
  stack: string[];
  links: ProjectLink[];
  images?: ProjectImage[];
  /** Visual especial para projetos sem captura de tela. */
  visual?: 'tododay-architecture';
};
