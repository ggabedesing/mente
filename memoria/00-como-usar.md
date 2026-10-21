# Como usar esta memória

> A **Mente** é a memória visual do Gabriel. Ela não guarda código: guarda **conhecimento conectado** —
> o que existe no mundo open source, qual ferramenta serve para quê, e receitas prontas para não
> reinventar a roda. Humano lê pelo painel; IA lê pelo arquivo [`MENTE.md`](../MENTE.md).

## Estrutura

| Parte | Onde | Serve para |
|---|---|---|
| **Catálogo** (fonte da verdade) | [`dados/catalogo.json`](../dados/catalogo.json) | Lista de ferramentas por área, com links, stars, licença, "quando usar" e ligações entre elas. |
| **Notas / receitas** | [`memoria/`](.) | Passo a passo de tarefas recorrentes (automação, repo→IA, produto). |
| **Painel visual** | [`index.html`](../index.html) | Área flutuante de pesquisa: achar o assunto por tag, área ou texto. |
| **Export para IA** | [`MENTE.md`](../MENTE.md) | Arquivo único para colar num LLM — ele já chega com todo o conhecimento. |

## Regras de ouro

1. **Nada se perde.** Toda ferramenta ou receita nova entra no `catalogo.json` com a área e as ligações (`ligadoA`).
2. **Tudo se liga.** Cada item aponta para os vizinhos que se conectam (ex.: Firecrawl → Repomix: site vira contexto de IA).
3. **"Quando usar" é sagrado.** O campo mais valioso é o contexto — saber *qual* ferramenta escolher evita repetir trabalho já resolvido.
4. **Receitas são o atalho.** Se você fez uma vez e deu certo, vira receita em `memoria/`. Da próxima é só seguir.

## Como adicionar algo novo

1. Abra `dados/catalogo.json`.
2. Copie um item existente na array `itens` e ajuste: `id`, `nome`, `area`, `url`, `descricao`, `quandoUsar`, `ligadoA`, `tags`.
3. (Opcional) escreva uma receita nova em `memoria/0X-*.md` e registre no array `notas`.
4. Commit → o painel se atualiza sozinho (ele lê o JSON em tempo de execução).

## Para a IA

Cole [`MENTE.md`](../MENTE.md) no contexto (ou use Repomix/Gitingest num repo e some com este arquivo).
A instrução padrão está no topo do próprio MENTE.md.
