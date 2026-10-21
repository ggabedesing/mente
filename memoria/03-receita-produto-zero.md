# 🚀 Receita: ideia de produto validada em um fim de semana

**Objetivo:** pedir "crie um aplicativo X" e receber algo **pronto para você completar**,
sem planejar do zero — usando o que a Mente já sabe.

## Sexta noite — escopo em 1 hora

1. Uma frase: *"<Público> faz <tarefa> porque <dor>."* Se não couber, é app grande demais.
2. Liste **3 telas no máximo** (ex.: lista → detalhe → criar). O resto é v2.
3. Escolha a receita mais próxima na Mente: automação? renda extra? ferramenta interna?

## Sábado — construir o núcleo

1. **Stack já decidida pela Mente:** app web → TypeScript + Tailwind; rápido demais → templates do Windmill; IA embutida → Transformers.js (roda no navegador, sem servidor de ML).
2. **Se tem tela:** Penpot para o protótipo (ou print → Screenshot to Code para virar HTML/React na hora).
3. **Se tem dado da web:** Scrapling (Python) ou Crawlee (Node) para coletar; Firecrawl se for virar contexto de IA.
4. **Se tem agendamento/recorrência:** seguir a [Receita de automação](01-receita-automacao.md) — gatilho → regra → ação.
5. **Design de API/serviço:** decisão de escala grande consulta o System Design Primer antes de implementar (evita refazer depois).

## Domingo — fechar e entregar

1. **Segurança mínima obrigatória** (antes de qualquer deploy público):
   - [OWASP Cheat Sheets](https://github.com/OWASP/CheatSheetSeries): autenticação, armazenamento de secrets, rate limiting, validação de input.
   - Secrets só em variáveis de ambiente / cofre — nunca no repositório.
2. **E-mails do app** (confirmação, senha, alerta): React Email para o template + listmonk/transacional para o envio.
3. **Deploy** (GitHub Pages para front estático; o resto, na sua infra normal).
4. **Ritual pós-entrega:** o que a IA errou/repitiu vira nota nova em `memoria/` — é assim que ela para de refazer trabalho já resolvido.

## Interligações

- Design → `penpot`, `screenshot-to-code`, `flux-schnell`
- Engenharia → `system-design-primer`, `build-your-own-x`
- Segurança → `owasp-cheatsheets`
- Automação → [Receita de automação](01-receita-automacao.md)
- Alimentar a IA com o repo pronto → [Receita repo→IA](02-receita-repo-para-ia.md)
