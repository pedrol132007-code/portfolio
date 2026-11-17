import { ui } from '../../content/ui';

/** Seções que aparecem no menu, na ordem da página. */
export const navItems = [
  { id: 'sobre', label: ui.nav.about },
  { id: 'projetos', label: ui.nav.projects },
  { id: 'como-construo', label: ui.nav.principles },
  { id: 'experiencia', label: ui.nav.experience },
  { id: 'habilidades', label: ui.nav.skills },
  { id: 'contato', label: ui.nav.contact },
] as const;

export const navIds = navItems.map((n) => n.id);
