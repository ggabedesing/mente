# 🔧 Receita: montar um fluxo de automação completo

**Objetivo:** uma tarefa repetitiva (coletar dado → transformar → avisar/agir) rodar sozinha.
**Tempo típico:** de 30 min (fluxo simples) a um fim de semana (sistema com produto por trás).

## 1. Escolher a ferramenta (30 segundos de decisão)

| Situação | Ferramenta | Por quê |
|---|---|---|
| Fluxo visual com 400+ integrações, rodando em servidor | **n8n** | Poderoso, agentes IA nativos, self-hosted |
| Só o essencial, sem firula | **Automatisch** | Mais simples que o n8n |
| Agente de IA com MCPs | **Activepieces** | ~400 servidores MCP prontos |
| O ponto de partida é um script Python/TS | **Windmill** | Script vira webhook/UI/API em minutos |
| Automação física (casa, sensores) | **Home Assistant** | Controle local e privado |

Referência: [`dados/catalogo.json`](../dados/catalogo.json) → área `automacao`.

## 2. Desenhar o fluxo antes de clicar

Anote em 4 linhas (funciona até no papel):

```
GATILHO (o que acontece) → LEITURA (buscar onde?) → REGRA (se/quando) → AÇÃO (o que fazer)
```

Exemplo real: *"Todo dia 9h → pega preço do produto no site → se subiu >5% → manda e-mail/Telegram."*

## 3. Montar com as peças certas

- **Gatilho:** schedule (cron), webhook, novo e-mail, novo registro em planilha.
- **Leitura:** se é site protegido/JS → **Scrapling** (Python) ou **Crawlee** (Node); se é vira-LLM/Markdown → **Firecrawl**; se é API → `public-apis` para achar a rota gratuita.
- **Regra:** no próprio nó do fluxo; lógica pesada em Python/TS no Windmill ou num nó de código do n8n.
- **Ação:** e-mail → **listmonk** (própria lista) ou **React Email** (template bonito); mensagem → Telegram/Discord/Slack; dado → planilha/banco.

## 4. Antes de ligar (checklist)

- [ ] Fluxo **testado com dado de exemplo** (1 execução manual).
- [ ] **Custo limitado** (a ação não dispara 1000× se o site mudar).
- [ ] **Logs**: onde acompanhar falha? (n8n/Windmill têm histórico; anotar).
- [ ] **Segurança**: segredos (tokens, SMTP) em variáveis de ambiente — nunca no fluxo.
- [ ] Se é web app novo → seguir o [Cheat Sheet OWASP](https://github.com/OWASP/CheatSheetSeries) da área que importa (auth, secrets, rate limit).

## 5. Interligações desta receita

- Coleta frágil → `raspagem` (Scrapling/Crawlee/Firecrawl)
- Aviso por e-mail → `emails` (listmonk/React Email)
- Quer estudar a fundo → `engenharia` (`system-design-primer` para escalar, `build-your-own-x` para entender por dentro)
- Isso virou produto? → [Receita: produto em um fim de semana](03-receita-produto-zero.md)
