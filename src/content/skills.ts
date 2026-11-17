import type { L, Maybe } from './types';

export type Skill = {
  name: string | L;
  /** Slugs dos projetos onde a habilidade aparece. Viram links. 'benner' aponta para a seção de experiência. */
  usedIn: string[];
};

export type SkillGroup = {
  title: L;
  skills: Maybe<Skill[]>;
};

/** Só entra aqui o que aparece em algum projeto ou foi confirmado pelo Pedro. */
export const skillGroups: SkillGroup[] = [
  {
    title: { pt: 'Linguagens', en: 'Languages' },
    skills: [
      { name: 'TypeScript', usedIn: ['tododay'] },
      { name: 'JavaScript', usedIn: ['genfin'] },
      { name: 'Python', usedIn: ['pyinvest', 'super-trunfo'] },
      { name: 'C', usedIn: ['safedrive'] },
      { name: 'C++', usedIn: ['smartcane'] },
      { name: 'SQL', usedIn: ['tododay', 'benner'] },
      { name: 'PowerShell', usedIn: ['benner'] },
      { name: 'HTML & CSS', usedIn: ['genfin', 'tododay'] },
    ],
  },
  {
    title: { pt: 'Interfaces', en: 'Frontend' },
    skills: [
      { name: 'React', usedIn: ['tododay'] },
      { name: 'Vite', usedIn: ['tododay'] },
      { name: 'Tailwind CSS', usedIn: ['tododay'] },
      { name: 'TanStack Query', usedIn: ['tododay'] },
      { name: { pt: 'PWA e service worker', en: 'PWA and service workers' }, usedIn: ['genfin'] },
    ],
  },
  {
    title: { pt: 'Back-end e dados', en: 'Backend and data' },
    skills: [
      { name: 'Supabase', usedIn: ['tododay'] },
      { name: { pt: 'PostgreSQL e RLS', en: 'PostgreSQL and RLS' }, usedIn: ['tododay'] },
      { name: { pt: 'Funções serverless', en: 'Serverless functions' }, usedIn: ['genfin'] },
      { name: { pt: 'APIs públicas de mercado', en: 'Public market data APIs' }, usedIn: ['genfin'] },
    ],
  },
  {
    title: { pt: 'Inteligência artificial', en: 'Artificial intelligence' },
    skills: [
      { name: { pt: 'Agente com LLM via API', en: 'LLM agent over an API' }, usedIn: ['genfin'] },
      { name: 'Claude Code', usedIn: ['benner'] },
    ],
  },
  {
    title: { pt: 'Desktop, mobile e hardware', en: 'Desktop, mobile and hardware' },
    skills: [
      { name: 'Tauri', usedIn: ['tododay'] },
      { name: 'Capacitor (Android)', usedIn: ['genfin'] },
      { name: 'Arduino', usedIn: ['smartcane'] },
    ],
  },
  {
    title: { pt: 'Qualidade e entrega', en: 'Quality and delivery' },
    skills: [
      { name: 'Vitest', usedIn: ['tododay'] },
      { name: 'Playwright', usedIn: ['tododay'] },
      { name: 'GitHub Actions', usedIn: ['tododay', 'genfin'] },
      { name: 'Vercel', usedIn: ['tododay', 'genfin'] },
    ],
  },
  {
    title: { pt: 'Business Intelligence', en: 'Business Intelligence' },
    skills: [
      { name: 'DBeaver', usedIn: ['benner'] },
      { name: { pt: 'Coletores de dados', en: 'Data collectors' }, usedIn: ['benner'] },
      { name: { pt: 'Servidores', en: 'Servers' }, usedIn: ['benner'] },
    ],
  },
];

export type Principle = { title: L; body: L; evidence: string };

/** "Como eu construo". Cada princípio aponta para o projeto que o mostra na prática. */
export const principles: Principle[] = [
  {
    title: { pt: 'Colocar no ar e ouvir quem usa', en: 'Ship it, then listen' },
    body: {
      pt: 'O ToDoDay saiu como beta para uma equipe piloto, com changelog versionado e um botão de feedback dentro do app.',
      en: 'ToDoDay shipped as a beta to a pilot team, with a versioned changelog and a feedback button inside the app.',
    },
    evidence: 'tododay',
  },
  {
    title: { pt: 'Testar o que pode quebrar', en: 'Test what can break' },
    body: {
      pt: 'Testes unitários e de ponta a ponta no ToDoDay, testes das regras de acesso no banco e, no GenFin, testes da validação de saldo, da importação da B3 e das cotações.',
      en: 'Unit and end-to-end tests in ToDoDay, tests for the database access rules and, in GenFin, tests for balance checks, B3 imports and price quotes.',
    },
    evidence: 'genfin',
  },
  {
    title: { pt: 'Cuidar dos dados de quem usa', en: 'Respect people’s data' },
    body: {
      pt: 'No GenFin a carteira fica no aparelho e só sai cifrada. No ToDoDay, quem pode ver e editar cada coisa é decidido pelo banco, não pela interface.',
      en: 'In GenFin the portfolio stays on the device and only leaves encrypted. In ToDoDay, who can see and edit what is decided by the database, not the interface.',
    },
    evidence: 'genfin',
  },
  {
    title: { pt: 'Documentar para quem vem depois', en: 'Write it down for the next person' },
    body: {
      pt: 'READMEs que explicam como rodar, como os números são calculados e como publicar, para que o projeto não dependa da minha memória.',
      en: 'READMEs that explain how to run, how the numbers are computed and how to deploy, so the project doesn’t depend on my memory.',
    },
    evidence: 'tododay',
  },
];
