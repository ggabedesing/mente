# 🧠 Mente

**Memória visual e interligada** — só GitHub, sem servidor, sem banco, sem custo.

Um painel que reúne o que importa (automação, renda extra, engenharia, segurança, design,
edição, raspagem, e-mails, IA), **tudo conectado**, com receitas prontas para não repetir
trabalho já resolvido — e um export para uma IA **já chegar com esse conhecimento**.

## 📁 Estrutura

```
mente/
├── index.html              ← painel visual (GitHub Pages)
├── assets/                 ← estilo + lógica do painel
├── dados/catalogo.json     ← FONTE DA VERDADE (itens, áreas, ligações)
├── memoria/                ← notas e receitas (Markdown)
├── MENTE.md                ← export único para colar numa IA
└── .github/workflows/      ← validação automática (JSON + links)
```

## ▶️ Ver o painel

**Online:** ative GitHub Pages no repositório (Settings → Pages → Source: `main` / root).
O painel ficará em `https://ggabedesing.github.io/mente/`.

**Local:**

```bash
python -m http.server 8080
# abra http://localhost:8080
```

- **Busca flutuante:** `Ctrl+K` (ou `⌘K` / tecla `/`) — acha por assunto, tag ou "quando usar".
- **Filtros:** chips por área no topo.
- **Ligações:** cada card mostra com que outros itens ele se conecta (🔗).

## 🤖 Dar isso a uma IA

1. Cole o [`MENTE.md`](MENTE.md) no contexto da conversa — instruções de uso estão no topo dele.
2. Para absorver um repositório inteiro: [receita repo→IA](memoria/02-receita-repo-para-ia.md)
   (Gitingest pela URL ou Repomix pela CLI).

## ✍️ Adicionar algo à memória

1. Edite `dados/catalogo.json` — copie um item e ajuste (`id`, `nome`, `area`, `url`,
   `descricao`, `quandoUsar`, `ligadoA`, `tags`).
2. (Opcional) escreva uma receita em `memoria/` e registre no array `notas`.
3. Abra um PR — a Action valida o JSON e checa se os links respondem.

Guia completo: [`memoria/00-como-usar.md`](memoria/00-como-usar.md).
