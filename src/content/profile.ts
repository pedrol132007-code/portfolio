import type { L, Maybe } from './types';

/** Mostra no site os campos que ainda faltam confirmar. Troque para false antes do deploy final. */
export const site = {
  showPending: false,
  /** Repositório deste portfólio, para o link do rodapé. */
  sourceUrl: 'https://github.com/pedrol132007-code/portfolio' as Maybe<string>,
};

export const profile = {
  name: 'Pedro Lucas Romeiro dos Santos',
  firstLine: 'Pedro',
  secondLine: 'Lucas',
  tagline: {
    pt: 'Construindo tecnologia. Explorando possibilidades.',
    en: 'Building technology. Exploring possibilities.',
  } satisfies L,
  intro: {
    pt: 'Estudante de Ciência da Computação apaixonado por desenvolvimento de software, inteligência artificial e inovação.',
    en: 'Computer Science student passionate about software development, artificial intelligence and innovation.',
  } satisfies L,
  now: {
    pt: 'Hoje: estágio em BI na Benner e o ToDoDay em beta com uma equipe piloto.',
    en: 'Right now: BI internship at Benner, and ToDoDay in beta with a pilot team.',
  } satisfies L,
  links: {
    github: 'https://github.com/pedrol132007-code',
    linkedin: 'https://www.linkedin.com/in/pedro-lucas-romeiro-dos-santos-ba983b346/',
    email: 'pedrol132007@gmail.com' as Maybe<string>,
  },
};

export const about: { paragraphs: L[]; facts: { label: L; value: L }[] } = {
  paragraphs: [
    {
      pt: 'Estudo Ciência da Computação na Universidade Presbiteriana Mackenzie e trabalho como estagiário na área de Business Intelligence da Benner.',
      en: 'I study Computer Science at Universidade Presbiteriana Mackenzie and work as a Business Intelligence intern at Benner.',
    },
    {
      pt: 'Gosto de pegar uma ideia e levar até ela funcionar de verdade: um kanban em tempo real usado por uma equipe, uma carteira de investimentos com um agente de IA, uma bengala com sensor ultrassônico, um simulador de telemetria em C.',
      en: 'I like taking an idea all the way to something that actually works: a real-time kanban used by a team, an investment tracker with an AI agent, a cane with an ultrasonic sensor, a telemetry simulator written in C.',
    },
    {
      pt: 'Meus interesses passam por desenvolvimento de software, inteligência artificial e agentes autônomos, análise de dados e produtos digitais. Estou no começo da formação, e é construindo que aprendo o que a aula ainda não cobriu.',
      en: 'My interests span software development, artificial intelligence and autonomous agents, data analysis and digital products. I’m early in my education, and building is how I learn what class hasn’t covered yet.',
    },
  ],
  facts: [
    { label: { pt: 'Curso', en: 'Studying' }, value: { pt: 'Ciência da Computação, Mackenzie', en: 'Computer Science, Mackenzie' } },
    { label: { pt: 'Trabalho', en: 'Working' }, value: { pt: 'Estágio em BI, Benner', en: 'BI internship, Benner' } },
    { label: { pt: 'Idiomas', en: 'Languages' }, value: { pt: 'Português nativo, inglês avançado', en: 'Native Portuguese, advanced English' } },
  ],
};

export type ExperienceItem = {
  company: string;
  role: L;
  period: Maybe<L>;
  summary: Maybe<L>;
  tools: Maybe<string[]>;
};

export const experience: ExperienceItem[] = [
  {
    company: 'Benner',
    role: { pt: 'Estagiário de Business Intelligence', en: 'Business Intelligence Intern' },
    period: { pt: 'ago. 2026 – atual', en: 'Aug 2026 – present' },
    summary: {
      pt: 'Na equipe de BI, trabalho com os dados que chegam às análises: consultas SQL no DBeaver, coletores de dados, servidores e automações em PowerShell. O Claude Code faz parte do meu dia a dia para escrever, revisar e entender esse código mais rápido.',
      en: 'On the BI team, I work with the data that feeds the analyses: SQL queries in DBeaver, data collectors, servers and PowerShell automation. Claude Code is part of my daily routine for writing, reviewing and understanding that code faster.',
    },
    tools: ['SQL', 'DBeaver', 'PowerShell', 'Claude Code'],
  },
];

export const education = {
  degree: { pt: 'Bacharelado em Ciência da Computação', en: 'B.Sc. in Computer Science' } satisfies L,
  school: 'Universidade Presbiteriana Mackenzie',
  period: { pt: '2026 – dez. 2029 (previsão)', en: '2026 – Dec 2029 (expected)' } as Maybe<L>,
};
