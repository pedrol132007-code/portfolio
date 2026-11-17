import type { L } from './types';

/** Textos de interface (navegação, botões, rótulos). O conteúdo fica nos outros arquivos. */
export const ui = {
  skip: { pt: 'Pular para o conteúdo', en: 'Skip to content' },
  nav: {
    label: { pt: 'Navegação principal', en: 'Main navigation' },
    about: { pt: 'Sobre', en: 'About' },
    projects: { pt: 'Projetos', en: 'Projects' },
    principles: { pt: 'Como construo', en: 'How I build' },
    experience: { pt: 'Experiência', en: 'Experience' },
    skills: { pt: 'Habilidades', en: 'Skills' },
    contact: { pt: 'Contato', en: 'Contact' },
    openMenu: { pt: 'Abrir menu', en: 'Open menu' },
    closeMenu: { pt: 'Fechar menu', en: 'Close menu' },
  },
  toggles: {
    language: { pt: 'Read in English', en: 'Ler em português' },
    languageShort: { pt: 'EN', en: 'PT' },
    toLight: { pt: 'Usar tema claro', en: 'Switch to light theme' },
    toDark: { pt: 'Usar tema escuro', en: 'Switch to dark theme' },
  },
  hero: {
    seeProjects: { pt: 'Ver projetos', en: 'See projects' },
    contact: { pt: 'Entrar em contato', en: 'Get in touch' },
  },
  sections: {
    about: { pt: 'Sobre', en: 'About' },
    projects: { pt: 'Projetos', en: 'Projects' },
    projectsIntro: {
      pt: 'De um jogo de cartas em Python feito para uma disciplina a um app com CI, migrations e versão desktop. Os dois primeiros estão publicados e seguem evoluindo.',
      en: 'From a card game in Python built for a course to an app with CI, migrations and a desktop build. The first two are live and still evolving.',
    },
    moreProjects: { pt: 'Outros projetos', en: 'More projects' },
    principles: { pt: 'Como eu construo', en: 'How I build' },
    principlesIntro: {
      pt: 'Não são regras que li em algum lugar. São coisas que os projetos me ensinaram e que hoje faço de propósito.',
      en: 'These aren’t rules I read somewhere. They’re things my projects taught me, and that I now do on purpose.',
    },
    experience: { pt: 'Experiência', en: 'Experience' },
    skills: { pt: 'Habilidades', en: 'Skills' },
    skillsIntro: {
      pt: 'Só o que já usei num projeto. Cada item leva ao lugar onde aparece.',
      en: 'Only what I’ve used in a project. Each item links to where it shows up.',
    },
    education: { pt: 'Formação', en: 'Education' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  project: {
    problem: { pt: 'Problema', en: 'Problem' },
    built: { pt: 'O que tem dentro', en: 'What’s inside' },
    stack: { pt: 'Tecnologias', en: 'Built with' },
    repo: { pt: 'Ver código', en: 'View code' },
    live: { pt: 'Abrir app', en: 'Open app' },
    details: { pt: 'Detalhes', en: 'Details' },
    shownIn: { pt: 'Visto em', en: 'Seen in' },
  },
  architecture: {
    title: { pt: 'Como o ToDoDay é montado', en: 'How ToDoDay is put together' },
    ui: { pt: 'Interface', en: 'Interface' },
    data: { pt: 'Dados e regras', en: 'Data and rules' },
    delivery: { pt: 'Onde roda', en: 'Where it runs' },
    pipeline: { pt: 'Cada mudança', en: 'Every change' },
    web: { pt: 'Web na Vercel', en: 'Web on Vercel' },
    desktop: { pt: 'Desktop Windows com Tauri', en: 'Windows desktop with Tauri' },
    pr: { pt: 'Pull request', en: 'Pull request' },
    ci: { pt: 'Lint, testes e build', en: 'Lint, tests and build' },
    dev: { pt: 'Banco de dev', en: 'Dev database' },
    prod: { pt: 'Produção', en: 'Production' },
  },
  contact: {
    heading: { pt: 'Vamos conversar', en: 'Let’s talk' },
    body: {
      pt: 'Estou aberto a conversar sobre estágios, projetos e ideias em software, IA e dados. O jeito mais rápido de falar comigo é pelo LinkedIn.',
      en: 'I’m open to talking about internships, projects and ideas in software, AI and data. LinkedIn is the fastest way to reach me.',
    },
    email: { pt: 'E-mail', en: 'Email' },
  },
  footer: {
    built: { pt: 'Feito com React e Vite.', en: 'Built with React and Vite.' },
    source: { pt: 'Ver o código deste site', en: 'View this site’s code' },
  },
  pending: { pt: 'A confirmar', en: 'To confirm' },
  newTab: { pt: '(abre em nova aba)', en: '(opens in a new tab)' },
} satisfies Record<string, unknown>;

export type UiText = L;
