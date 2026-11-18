import type { Project } from './types';

const GH = 'https://github.com/pedrol132007-code';

/**
 * Para adicionar um projeto: copie um item, troque os campos e salve.
 * `featured: true` coloca o projeto em destaque, com espaço para imagens.
 * A ordem do array é a ordem no site.
 */
export const projects: Project[] = [
  {
    slug: 'tododay',
    name: 'ToDoDay',
    featured: true,
    kind: { pt: 'Produto em beta', en: 'Product in beta' },
    status: { pt: 'v1.0.0-beta, em uso por uma equipe piloto', en: 'v1.0.0-beta, used by a pilot team' },
    summary: {
      pt: 'Kanban para equipes pequenas. Os boards são compartilhados e se atualizam em tempo real, e funciona no navegador ou como app desktop no Windows.',
      en: 'A kanban for small teams. Boards are shared and update in real time, in the browser or as a Windows desktop app.',
    },
    problem: {
      pt: 'Dar a uma equipe pequena uma visão clara do trabalho: o que foi entregue, o que está atrasado ou parado e como está a carga de cada pessoa.',
      en: 'Give a small team a clear view of its work: what shipped, what is late or stuck, and how loaded each person is.',
    },
    highlights: [
      {
        pt: 'Atualização em tempo real, colunas com limite de WIP, busca global com Ctrl+K e filtros que ficam na URL.',
        en: 'Real-time updates, columns with WIP limits, global search with Ctrl+K and filters kept in the URL.',
      },
      {
        pt: 'Papéis admin, member e viewer garantidos no próprio banco, com Row Level Security no Postgres.',
        en: 'Admin, member and viewer roles enforced in the database itself, with Postgres Row Level Security.',
      },
      {
        pt: 'Toda mudança entra por pull request: o CI roda lint, testes e build, e as migrations são aplicadas primeiro em desenvolvimento e depois em produção.',
        en: 'Every change goes through a pull request: CI runs lint, tests and build, and migrations reach development before production.',
      },
      {
        pt: 'O dashboard de métricas da equipe ainda roda com dados de demonstração; os dados reais chegam na próxima versão.',
        en: 'The team metrics dashboard still runs on demo data; real data arrives in the next version.',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Supabase', 'PostgreSQL', 'Tauri v2', 'Vitest', 'Playwright', 'GitHub Actions', 'Vercel'],
    links: [
      { kind: 'repo', href: `${GH}/tododay` },
      { kind: 'live', href: 'https://tododay-nu.vercel.app/', note: { pt: 'acesso por convite', en: 'invite only' } },
    ],
    images: [
      {
        src: '/images/projects/tododay-board.webp',
        alt: {
          pt: 'Board do ToDoDay com as colunas A fazer, Em andamento, Em revisão e Concluído, cards com etiquetas, prazos e responsáveis, e um limite de WIP estourado em Em revisão. Equipe e tarefas fictícias.',
          en: 'ToDoDay board with To do, In progress, In review and Done columns, cards with labels, due dates and assignees, and a WIP limit exceeded in In review. Fictional team and tasks.',
        },
        width: 1600,
        height: 1000,
      },
    ],
    visual: 'tododay-architecture',
  },
  {
    slug: 'genfin',
    name: 'GenFin',
    featured: true,
    kind: { pt: 'App web, PWA e Android', en: 'Web app, PWA and Android' },
    summary: {
      pt: 'Carteira de investimentos para quem investe na bolsa brasileira, num único arquivo HTML: preço médio, alocação, proventos, rebalanceamento e imposto de renda.',
      en: 'An investment tracker for the Brazilian stock market, in a single HTML file: average price, allocation, dividends, rebalancing and income tax.',
    },
    problem: {
      pt: 'Reunir num só lugar o que quem investe na B3 precisa acompanhar: preço médio, proventos, metas de alocação e a apuração mensal do imposto de renda.',
      en: 'Bring together what a B3 investor has to track: average price, dividends, allocation targets and the monthly income tax calculation.',
    },
    highlights: [
      {
        pt: 'Na versão 2.0, uma aba Agente: uma IA (via Groq) que olha a carteira e o mercado (Fundamentus, Yahoo Finanças, B3 e boletim Focus), sugere onde aportar e o que considerar vender, sempre mostrando os números que usou.',
        en: 'Version 2.0 adds an Agent tab: an AI (via Groq) that looks at the portfolio and the market (Fundamentus, Yahoo Finance, B3 and the Focus report), suggests where to invest and what to consider selling, always showing the numbers it used.',
      },
      {
        pt: '“Vou aportar…” vira um plano em cotas inteiras, com um botão Comprar em cada linha. Valores em reais e quantidades não saem do aparelho: o agente recebe só percentuais.',
        en: '“I’m investing…” turns into a plan in whole shares, with a Buy button on each line. Amounts and quantities never leave the device: the agent only gets percentages.',
      },
      {
        pt: 'Sincronização entre aparelhos com a carteira cifrada no próprio aparelho (AES-GCM) antes de ir para a nuvem.',
        en: 'Sync across devices, with the portfolio encrypted on the device (AES-GCM) before it reaches the cloud.',
      },
      {
        pt: 'Proventos já anunciados na B3, renda fixa atualizada pelas séries do Banco Central, importação dos extratos da B3 e comparação com o CDI e o Ibovespa.',
        en: 'Dividends already announced on B3, fixed income updated from Central Bank series, B3 statement imports and comparison against the CDI and the Ibovespa.',
      },
      {
        pt: 'App Android com Capacitor, compilado, assinado e publicado pelo GitHub Actions.',
        en: 'Android app built with Capacitor, compiled, signed and released by GitHub Actions.',
      },
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Vercel Functions', 'Vercel Blob', 'Groq (LLM)', 'Capacitor', 'PWA', 'Node test runner', 'GitHub Actions'],
    links: [
      { kind: 'repo', href: `${GH}/GenFin` },
      { kind: 'live', href: 'https://genfin-rose.vercel.app' },
    ],
    images: [
      {
        src: '/images/projects/genfin-agente.webp',
        alt: {
          pt: 'Aba Agente do GenFin: resumo do dia da carteira, resposta sobre o que vender e um plano de aporte em cotas com botões Comprar. Valores fictícios.',
          en: 'GenFin Agent tab: the portfolio’s daily summary, an answer about what to sell and an investment plan in shares with Buy buttons. Sample values.',
        },
        width: 1600,
        height: 1350,
      },
      {
        src: '/images/projects/genfin-mobile.webp',
        alt: { pt: 'GenFin no celular', en: 'GenFin on a phone' },
        width: 520,
        height: 1125,
      },
    ],
  },
  {
    slug: 'safedrive',
    name: 'SafeDrive ADAS Simulator',
    featured: false,
    kind: { pt: 'Simulação', en: 'Simulation' },
    summary: {
      pt: 'Simulador de telemetria veicular em C, inspirado em sistemas de assistência ao motorista (ADAS).',
      en: 'A vehicle telemetry simulator in C, inspired by advanced driver assistance systems (ADAS).',
    },
    problem: {
      pt: 'Classificar o risco de colisão frontal e de invasão de faixa a partir de leituras simuladas de radar, LiDAR e câmera.',
      en: 'Classify the risk of a front collision or a lane departure from simulated radar, LiDAR and camera readings.',
    },
    highlights: [
      {
        pt: 'Fusão de sensores pela mediana das três leituras, para reduzir o efeito de valores extremos.',
        en: 'Sensor fusion using the median of the three readings, to reduce the effect of outliers.',
      },
      {
        pt: 'Distância segura calculada pela velocidade, pelo tempo de reação e pelo atrito da pista, com indicação de frenagem automática de emergência.',
        en: 'Safe distance computed from speed, reaction time and road friction, flagging automatic emergency braking.',
      },
      {
        pt: 'Margem de faixa que muda com a velocidade do veículo.',
        en: 'Lane margin that changes with vehicle speed.',
      },
    ],
    stack: ['C'],
    links: [{ kind: 'repo', href: `${GH}/SafeDrive-ADAS-Simulator-` }],
  },
  {
    slug: 'smartcane',
    name: 'SmartCane',
    featured: false,
    kind: { pt: 'Protótipo de hardware', en: 'Hardware prototype' },
    summary: {
      pt: 'Protótipo de bengala inteligente com Arduino, que detecta obstáculos por ultrassom e avisa com um alerta sonoro.',
      en: 'A smart cane prototype built on Arduino that detects obstacles with ultrasound and warns with a buzzer.',
    },
    problem: {
      pt: 'Ajudar pessoas com deficiência visual a perceber obstáculos à frente em tempo real.',
      en: 'Help visually impaired people notice obstacles ahead in real time.',
    },
    highlights: [
      {
        pt: 'Leitura contínua de distância com o sensor HC-SR04 e alerta por buzzer.',
        en: 'Continuous distance sensing with an HC-SR04 sensor and a buzzer alert.',
      },
      {
        pt: 'Próximos passos: vibração, bateria recarregável e conexão com um app.',
        en: 'Next steps: vibration feedback, a rechargeable battery and app connectivity.',
      },
    ],
    stack: ['C++', 'Arduino', 'HC-SR04'],
    links: [{ kind: 'repo', href: `${GH}/SmartCane` }],
    images: [
      {
        src: '/images/projects/smartcane-circuito.webp',
        alt: {
          pt: 'Arduino Uno ligado a uma protoboard com o sensor ultrassônico HC-SR04 e um buzzer',
          en: 'Arduino Uno wired to a breadboard with an HC-SR04 ultrasonic sensor and a buzzer',
        },
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'pyinvest',
    name: 'PyInvest',
    featured: false,
    kind: { pt: 'Aprendizado', en: 'Learning project' },
    summary: {
      pt: 'Simulador de investimentos em Python: CDB, LCI/LCA, poupança e FIIs, com juros compostos, imposto de renda e gráficos em ASCII.',
      en: 'An investment simulator in Python: CDB, LCI/LCA, savings and real estate funds, with compound interest, income tax and ASCII charts.',
    },
    problem: {
      pt: 'Comparar tipos de investimento e acompanhar metas financeiras com aportes mensais.',
      en: 'Compare investment types and track financial goals with monthly contributions.',
    },
    highlights: [
      {
        pt: 'Simulações estatísticas para FIIs e relatório comparativo entre os investimentos.',
        en: 'Statistical simulations for real estate funds and a comparison report across investments.',
      },
    ],
    stack: ['Python'],
    links: [{ kind: 'repo', href: `${GH}/PyInvest` }],
  },
  {
    slug: 'super-trunfo',
    name: 'Super Trunfo Pokémon',
    featured: false,
    kind: { pt: 'Acadêmico', en: 'Coursework' },
    summary: {
      pt: 'Jogo de cartas em Python, com modos jogador contra jogador e contra a máquina.',
      en: 'A card game in Python, with player versus player and player versus machine modes.',
    },
    problem: {
      pt: 'Praticar lógica de programação e manipulação de listas na disciplina de Algoritmos e Programação I.',
      en: 'Practice programming logic and list handling for the Algorithms and Programming I course.',
    },
    highlights: [],
    stack: ['Python'],
    links: [{ kind: 'repo', href: `${GH}/Pokemon-super-trunfo-game` }],
  },
];
