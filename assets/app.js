/* ============ MENTE — lógica do painel ============ */
/* Fonte única: dados/catalogo.json (lê em runtime; sem build, só GitHub) */

const estado = { cat: null, area: "todas", sel: 0 };

const $ = (s) => document.querySelector(s);

/* ---------- normalização pt/en para busca ---------- */
const norm = (s) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

/* ---------- carregar ---------- */
async function carregar() {
  try {
    const r = await fetch("dados/catalogo.json");
    if (!r.ok) throw new Error("HTTP " + r.status);
    estado.cat = await r.json();
  } catch (e) {
    // fallback: tenta via caminho relativo quando aberto fora da raiz
    try {
      const r2 = await fetch("./dados/catalogo.json");
      estado.cat = await r2.json();
    } catch (e2) {
      $("#grade").innerHTML =
        '<div class="vazio">Não foi possível ler dados/catalogo.json — sirva a pasta por HTTP (ex.: <code>python -m http.server</code>).</div>';
      return;
    }
  }
  renderTudo();
}

/* ---------- render geral ---------- */
function renderTudo() {
  const { cat } = estado;
  const totalStars = cat.itens.reduce((a, i) => a + (i.stars || 0), 0);
  $("#subtitulo").textContent =
    `atualizado em ${cat.atualizadoEm} · ${cat.areas.length} áreas · ${cat.itens.length} ferramentas`;

  $("#metricas").innerHTML = [
    ["🧠", cat.itens.length, "ferramentas na memória"],
    ["⭐", totalStars.toLocaleString("pt-BR"), "stars somadas"],
    ["🔗", cat.itens.reduce((a, i) => a + (i.ligadoA?.length || 0), 0), "ligações entre itens"],
    ["📜", cat.notas.length, "receitas prontas"],
  ].map(([e, b, s]) => `<div class="metric"><b>${e} ${b}</b><span>${s}</span></div>`).join("");

  $("#chips").innerHTML =
    `<button class="chip ativo" data-area="todas">🗂️ Todas</button>` +
    cat.areas
      .map((a) => `<button class="chip" data-area="${a.id}">${a.emoji} ${a.nome}</button>`)
      .join("");

  $("#chips").onclick = (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    estado.area = b.dataset.area;
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("ativo", c === b));
    renderGrade();
  };

  $("#receitas").innerHTML = cat.notas
    .map(
      (n) => `<a class="receita" href="${n.arquivo}">
        <h4>${n.titulo}</h4>
        <p>${n.resumo || "Passo a passo que evita reinventar a roda — abra a nota."}</p>
      </a>`
    )
    .join("");

  renderGrade();
}

/* ---------- grade de cards ---------- */
function renderGrade() {
  const { cat } = estado;
  const itens =
    estado.area === "todas" ? cat.itens : cat.itens.filter((i) => i.area === estado.area);
  const porId = Object.fromEntries(cat.itens.map((i) => [i.id, i]));

  $("#grade").innerHTML = itens
    .map((i) => {
      const area = cat.areas.find((a) => a.id === i.area) || { nome: i.area, emoji: "•" };
      const ligs = (i.ligadoA || [])
        .map((id) => porId[id])
        .filter(Boolean)
        .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.nome}</a>`)
        .join(" · ");
      return `<article class="card">
        <div class="cabec">
          <h3>${i.nome}</h3>
          <span class="autor">${i.autor}</span>
          ${i.stars ? `<span class="estrelas">★ ${i.stars.toLocaleString("pt-BR")}</span>` : ""}
        </div>
        <p class="desc">${i.descricao}</p>
        <div class="usar"><b>Quando usar:</b> ${i.quandoUsar}</div>
        <div class="tags">${(i.tags || []).map((t) => `<span class="tag">#${t}</span>`).join("")}</div>
        ${ligs ? `<div class="lig">🔗 liga com: ${ligs}</div>` : ""}
        <div class="rodape">
          <span class="badge-area">${area.emoji} ${area.nome}</span>
          <span class="badge-lic">${i.linguagem}${i.licenca && i.licenca !== "—" ? " · " + i.licenca : ""}</span>
          <a class="abrir" href="${i.url}" target="_blank" rel="noopener">abrir ↗</a>
        </div>
      </article>`;
    })
    .join("");
}

/* ---------- busca flutuante ---------- */
function abrirBusca() {
  $("#overlay").classList.add("aberto");
  $("#input-busca").value = "";
  buscar("");
  $("#input-busca").focus();
}
function fecharBusca() {
  $("#overlay").classList.remove("aberto");
}

function fontes() {
  const { cat } = estado;
  if (!cat) return [];
  const itens = cat.itens.map((i) => ({
    titulo: i.nome,
    sub: `${i.descricao} · Quando usar: ${i.quandoUsar}`,
    url: i.url,
    meta: (cat.areas.find((a) => a.id === i.area) || {}).nome || "",
    hay: norm([i.nome, i.descricao, i.quandoUsar, i.linguagem, i.licenca, (i.tags || []).join(" "), i.meta].join(" ")),
  }));
  const notas = cat.notas.map((n) => ({
    titulo: "📜 " + n.titulo,
    sub: "Receita da memória — clique para abrir a nota.",
    url: n.arquivo,
    meta: "Receita",
    hay: norm([n.titulo, n.resumo || "", "receita nota memoria"].join(" ")),
  }));
  const areas = cat.areas.map((a) => ({
    titulo: `${a.emoji} ${a.nome}`,
    sub: a.resumo,
    url: null,
    meta: "Área",
    areaId: a.id,
    hay: norm([a.nome, a.resumo].join(" ")),
  }));
  return [...itens, ...notas, ...areas];
}

function buscar(q) {
  const nq = norm(q.trim());
  let res = fontes();
  if (nq) {
    const termos = nq.split(/\s+/);
    res = res.filter((r) => termos.every((t) => r.hay.includes(t)));
  }
  res = res.slice(0, 30);
  estado.sel = 0;
  $("#resultados").innerHTML = res.length
    ? res
        .map(
          (r, idx) => `<div class="resultado ${idx === 0 ? "sel" : ""}" data-url="${r.url || ""}" data-area="${r.areaId || ""}">
            <div class="r-tit"><b>${r.titulo}</b></div>
            <div class="r-sub">[${r.meta}] ${r.sub}</div>
          </div>`
        )
        .join("")
    : '<div class="vazio">Nada encontrado — tente outra palavra (ex.: “automação”, “IA”, “e-mail”).</div>';
}

function moverSel(delta) {
  const els = [...document.querySelectorAll(".resultado")];
  if (!els.length) return;
  estado.sel = Math.max(0, Math.min(els.length - 1, estado.sel + delta));
  els.forEach((el, i) => el.classList.toggle("sel", i === estado.sel));
  els[estado.sel].scrollIntoView({ block: "nearest" });
}

function ativarSel() {
  const el = document.querySelector(".resultado.sel");
  if (!el) return;
  if (el.dataset.area) {
    fecharBusca();
    const chip = document.querySelector(`.chip[data-area="${el.dataset.area}"]`);
    if (chip) chip.click();
    return;
  }
  if (el.dataset.url) window.open(el.dataset.url, "_blank", "noopener");
}

/* ---------- eventos ---------- */
document.addEventListener("DOMContentLoaded", () => {
  carregar();

  $("#abrir-busca").onclick = abrirBusca;
  $("#overlay").addEventListener("click", (e) => {
    if (e.target.id === "overlay") fecharBusca();
  });
  $("#resultados").addEventListener("click", (e) => {
    const r = e.target.closest(".resultado");
    if (!r) return;
    document.querySelectorAll(".resultado").forEach((x) => x.classList.remove("sel"));
    r.classList.add("sel");
    ativarSel();
  });
  $("#input-busca").addEventListener("input", (e) => buscar(e.target.value));

  document.addEventListener("keydown", (e) => {
    const aberto = $("#overlay").classList.contains("aberto");
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      aberto ? fecharBusca() : abrirBusca();
      return;
    }
    if (e.key === "/" && !aberto && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      e.preventDefault();
      abrirBusca();
      return;
    }
    if (!aberto) return;
    if (e.key === "Escape") fecharBusca();
    else if (e.key === "ArrowDown") { e.preventDefault(); moverSel(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); moverSel(-1); }
    else if (e.key === "Enter") ativarSel();
  });
});
