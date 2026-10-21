# MENTE — contexto completo para IA (export)

> **Instrução para a IA:** você recebeu a memória de trabalho do Gabriel, um perfil multidisciplinar
> (automação, engenharia, segurança, design, edição, raspagem, e-mails, renda extra, IA).
> Regras: (1) trate este conteúdo como **conhecimento que você já tem** — não precisa pesquisar o
> básico de novo; (2) antes de recomendar uma ferramenta, **confira se ela já está nesta lista** e
> escolha a mais específica para o caso; (3) se a tarefa casa com uma das receitas, **siga a receita**
> em vez de inventar um fluxo novo; (4) entregue produtos **prontos para o usuário completar**, não
> esboços; (5) ao aprender algo novo com o usuário, devolva um resumo estruturado para ser salvo de
> volta na Mente (isso mantém a memória viva e evita repetir trabalho).

**Como usar:** cole este arquivo inteiro no início da conversa (ou anexe como contexto).
Para analisar um repositório e absorver seu conhecimento, leia
[`memoria/02-receita-repo-para-ia.md`](memoria/02-receita-repo-para-ia.md) (Repomix/Gitingest).

---

## 1. Perfil e princípios

- Não repetir trabalho que já se sabe resolver: **primeiro checar a Mente, depois pesquisar**.
- Tudo se liga: cada ferramenta aponta para as vizinhas que completam o fluxo.
- Quando um pedido for "crie um app/design X", entregar algo **funcional e completo** seguindo a
  receita de produto, explicando as melhores funções antes de codar.
- Segurança não é opcional: OWASP Cheat Sheets antes de qualquer exposição pública.

## 2. Áreas e ferramentas (curadoria verificada em 2026-10-21)

### ⚙️ Automação
| Ferramenta | Stack | ★ | Quando usar |
|---|---|---:|---|
| [n8n](https://github.com/n8n-io/n8n) | TypeScript | 208k | Workflows visuais com 400+ integrações, agentes IA/MCP, self-hosted |
| [Activepieces](https://github.com/activepieces/activepieces) | TypeScript | 25k | Zapier open source AI-first, ~400 servidores MCP |
| [Windmill](https://github.com/windmill-labs/windmill) | Rust | 18k | Script → webhook/workflow/UI; alternativa ao Retool/Temporal |
| [Automatisch](https://github.com/automatisch/automatisch) | JavaScript | 14k | Zapier open source simples |
| [Home Assistant](https://github.com/home-assistant/core) | Python | 92k | Automação física/IoT com controle local |

### 🕸️ Raspagem de dados
| Ferramenta | Stack | ★ | Quando usar |
|---|---|---:|---|
| [Firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 194k | Site → Markdown/JSON limpo para LLM (alimenta RAG/contexto) |
| [Scrapling](https://github.com/D4Vinci/Scrapling) | Python | 89k | 1º escolha em Python: seletor adaptativo + stealth anti-bot |
| [Scrapy](https://github.com/scrapy/scrapy) | Python | 65k | Crawls grandes e estruturados com pipeline de dados |
| [Crawlee](https://github.com/apify/crawlee) | TypeScript | 26k | Node/TS, navegador headless, rotação de proxy |

### 📧 E-mails & newsletters
| Ferramenta | Stack | ★ | Quando usar |
|---|---|---:|---|
| [listmonk](https://github.com/knadh/listmonk) | Go | 24k | Newsletter/mailing self-hosted em binário único + transacionais |
| [React Email](https://github.com/resend/react-email) | TypeScript | 20k | Templates de e-mail em React, versionados no código |

### 💰 Renda extra
| Ferramenta | Stack | ★ | Quando usar |
|---|---|---:|---|
| [Public APIs](https://github.com/public-apis/public-apis) | Markdown | 491k | Achar API gratuita por categoria |
| [TheAlgorithms·Python](https://github.com/TheAlgorithms/Python) | Python | 225k | Referência de algoritmos + contribuição OSS fácil |
| [Freqtrade](https://github.com/freqtrade/freqtrade) | Python | 56k | Bot de trading cripto (backtest antes de dinheiro real) |
| [Actual Budget](https://github.com/actualbudget/actual) | TypeScript | 30k | Finanças pessoais local-first (envelope budgeting) |
| [Ghostfolio](https://github.com/ghostfolio/ghostfolio) | TypeScript | 10k | Gestão de patrimônio self-hosted |

### 🏗️ Engenharia
| Ferramenta | Stack | ★ | Quando usar |
|---|---|---:|---|
| [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x) | Markdown | 555k | Aprender reconstruindo tecnologias do zero |
| [System Design Primer](https://github.com/donnemartin/system-design-primer) | Python | 375k | Arquitetura e escala de sistemas grandes |

### 🔐 Segurança
| Ferramenta | Stack | ★ | Quando usar |
|---|---|---:|---|
| [OWASP Cheat Sheet Series](https://github.com/OWASP/CheatSheetSeries) | Markdown | 34k | Checklist AppSec antes de lançar qualquer app |

### 🎨 Design & UI
| Ferramenta | Stack | ★ | Quando usar |
|---|---|---:|---|
| [Penpot](https://github.com/penpot/penpot) | Clojure | 61k | Figma open source self-hosted (protótipos/design system) |
| [Screenshot to Code](https://github.com/abi/screenshot-to-code) | Python | 81k | Print → HTML/Tailwind/React/Vue via IA |

### 🎬 Edição
| Ferramenta | Stack | ★ | Quando usar |
|---|---|---:|---|
| [Shotcut](https://github.com/mltframework/shotcut) | C++ | 15k | Editor de vídeo open source multiplataforma |

### 🧠 IA & modelos (GitHub + Hugging Face)
| Recurso | Tipo | Quando usar |
|---|---|---|
| [Repomix](https://github.com/yamadashy/repomix) (★29k) | repo → IA | Empacotar repositório inteiro num arquivo para LLM |
| [Gitingest](https://github.com/coderamp-labs/gitingest) (★16k) | repo → IA | Trocar `hub` por `ingest` na URL GitHub e extrair o repo |
| [Transformers.js](https://github.com/huggingface/transformers.js) (★16k) | browser ML | Rodar modelos HF no navegador sem servidor |
| [FLUX.1 schnell](https://huggingface.co/black-forest-labs/FLUX.1-schnell) | imagem | Geração de imagem com pesos abertos (Apache-2.0) |
| [Qwen2.5-Coder-32B](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) | código | LLM de código open weights para rodar local |
| [Llama 3.3 70B](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) | geral | Base open weights para agentes |
| [BGE M3](https://huggingface.co/BAAI/bge-m3) | embeddings | Busca semântica/RAG multilíngue |
| [Florence-2 large](https://huggingface.co/microsoft/Florence-2-large) | visão | Captioning/OCR em prints e documentos |
| [Whisper base](https://huggingface.co/openai/whisper-base) | áudio | Transcrever aulas/reuniões → texto pesquisável |

## 3. Ligações (como combinar)

- **Coletar dado da web → agir:** Scrapling/Scrapy/Crawlee → fluxo (n8n/Windmill) → ação (listmonk/Telegram).
- **Conteúdo → conhecimento de IA:** site → Firecrawl; repo → Repomix/Gitingest; áudio → Whisper → nota na Mente.
- **Ideia → app:** Penpot (protótipo) / Screenshot-to-Code → build (receita produto) → OWASP → deploy → e-mails (React Email + listmonk).
- **Dinheiro:** Public APIs + Scrapling alimentam produtos; Freqtrade/Ghostfolio/Actual cuidam da gestão.

## 4. Receitas (resumo — texto completo em `memoria/`)

1. **Automação** (`01`): escolher ferramenta por situação → desenhar GATILHO→LEITURA→REGRA→AÇÃO → checklist de teste/custo/log/secrets.
2. **Repo → IA** (`02`): Gitingest (URL) ou Repomix (CLI) → prompt base no topo deste arquivo → resumo estruturado volta para a Mente.
3. **Produto zero** (`03`): escopo de 3 telas (sexta) → núcleo com stack decidida (sábado) → OWASP + e-mails + deploy (domingo).

## 5. Semântica deste documento

- `dados/catalogo.json` é a fonte da verdade (este arquivo é um espelho legível — se divergirem, vale o JSON).
- Atualização: adicionar item = editar o JSON; a memória e o painel se atualizam juntos.
