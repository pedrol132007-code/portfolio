# Portfólio — Pedro Lucas Romeiro dos Santos

Site pessoal feito com React, TypeScript e Vite. Bilíngue (PT/EN), tema claro por padrão (areia e sálvia), com opção de escuro.

## Rodar no seu computador

Precisa só do [Node.js](https://nodejs.org) LTS (18 ou mais recente).

```bash
npm install       # instala as dependências (uma vez só)
npm run dev       # abre em http://localhost:5173 e recarrega ao salvar
npm run build     # gera a versão final em dist/
npm run preview   # serve o dist/ para conferir antes do deploy
```

## Onde mexer no conteúdo

Todo o texto fica em `src/content/`, nos dois idiomas:

| Arquivo | O que tem |
| --- | --- |
| `profile.ts` | nome, frase do topo, sobre, experiência, formação, links |
| `projects.ts` | projetos (copie um item para adicionar outro) |
| `skills.ts` | habilidades e a seção "Como eu construo" |
| `ui.ts` | textos de botões, menu e títulos |

Campos com `{ pending: ... }` aparecem no site como "A confirmar". Troque pelo valor real
ou, para esconder todos de uma vez, mude `site.showPending` para `false` em `profile.ts`.

Imagens de projetos ficam em `public/images/projects/` (de preferência em WebP).

## Deploy na Vercel

O site está em **https://pedro-romeiro.vercel.app**, ligado ao repositório
[pedrol132007-code/portfolio](https://github.com/pedrol132007-code/portfolio).
Cada `git push` no branch `main` publica uma versão nova sozinho.

Se um dia tiver domínio próprio, adicione na Vercel e troque `pedro-romeiro.vercel.app`
em `index.html`, `public/robots.txt` e `public/sitemap.xml`.

## Estrutura

```
src/
  content/      # todo o conteúdo do site
  components/
    layout/     # cabeçalho, rodapé, itens do menu
    sections/   # uma seção da página por arquivo
    projects/   # destaque, linha expansível, galeria, diagrama do ToDoDay
    ui/         # peças reutilizáveis (link, ícone, seção, revelação)
  hooks/        # idioma, tema, seção ativa, entrada na tela
  styles/       # tokens (cores, tipografia, espaços) e estilos base
public/
  fonts/        # Bricolage Grotesque (licença OFL)
  images/       # capturas dos projetos
```

Fonte: Bricolage Grotesque, SIL Open Font License 1.1. Ícones baseados no Lucide (ISC).
