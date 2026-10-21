# 🧠 Receita: transformar qualquer repositório em conhecimento de IA

**Objetivo:** puxar um repositório (seu ou de terceiros) e entregar a uma IA de modo que ela
**já chegue sabendo** — analisando, explicando e reaproveitando o conhecimento sem perder nada.
**Ferramentas:** Repomix, Gitingest, Firecrawl, MENTE.md.

## Caminho A — o repo inteiro vira contexto (uma frase só)

1. **Gitingest** (não instala nada): troque `github.com` por `gitingest.com` na URL do repo
   → sai um `.txt` com a árvore + arquivos em texto pronto para prompt.
   Repo: <https://github.com/coderamp-labs/gitingest>
2. **Repomix** (mais controle, local):
   ```bash
   npx repomix --remote https://github.com/owner/repo
   # ou dentro do repo:
   npx repomix
   ```
   Gera `repomix.xml`/`.md` otimizado para LLM, com `.repomixignore` para cortar lixo.
   Repo: <https://github.com/yamadashy/repomix>
3. Cole no contexto da IA com o pedido do [topo de MENTE.md](../MENTE.md).

## Caminho B — só o conteúdo de um site/artigo

- **Firecrawl**: `POST /scrape` → Markdown limpo (ou a extensão de browser). Ideal para docs,
  blog do "professor", páginas de aula. Repo: <https://github.com/firecrawl/firecrawl>

## Caminho C — áudio/vídeo vira texto pesquisável

- **Whisper** (`openai/whisper-base` no Hugging Face) transcreve aulas/reuniões →
  salve em `memoria/transcricoes/` → indexe junto com a Mente.

## Como pedir à IA (prompt base)

> "Você recebe o repositório `<nome>` empacotado. Extraia: (1) propósito e arquitetura,
> (2) decisões de design e stack, (3) padrões reutilizáveis, (4) o que é genérico deste repo
> que se aplica a outros projetos meus. Guarde tudo como 'conhecimento que eu já tenho' e
> confirme com um resumo em 10 linhas antes de qualquer conclusão."

Depois, para **não perder conteúdo**: peça que a IA devolva o resumo estruturado — e cole esse
resumo de volta na Mente (nova nota em `memoria/` ou item novo no `catalogo.json`).

## Regra de segurança

Só empacote o que pode ser público. Repos privados → redija o resumo na mão antes de enviar
à qualquer IA externa.

## Interligações

- Site → contexto: `Firecrawl` (área raspagem)
- Repo → contexto: `Repomix`/`Gitingest` (área ia)
- Memória permanente da IA: [`MENTE.md`](../MENTE.md) + [`dados/catalogo.json`](../dados/catalogo.json)
