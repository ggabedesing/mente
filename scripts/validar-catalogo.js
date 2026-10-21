/* Valida dados/catalogo.json: ids, áreas, URLs, campos e ligações. */
const fs = require("fs");
const path = require("path");

const raiz = path.join(__dirname, "..");
const arq = path.join(raiz, "dados", "catalogo.json");

const c = JSON.parse(fs.readFileSync(arq, "utf8"));
const falhas = [];

if (!Array.isArray(c.areas) || !c.areas.length) falhas.push("areas vazio");
if (!Array.isArray(c.itens) || !c.itens.length) falhas.push("itens vazio");

const ids = new Set();
const areaIds = new Set((c.areas || []).map((a) => a.id));

for (const i of c.itens) {
  if (!i.id) falhas.push("item sem id");
  if (ids.has(i.id)) falhas.push("id duplicado: " + i.id);
  ids.add(i.id);
  if (!areaIds.has(i.area)) falhas.push(`${i.id}: area desconhecida "${i.area}"`);
  if (!/^https:\/\//.test(i.url || "")) falhas.push(`${i.id}: url inválida`);
  if (!i.descricao || !i.quandoUsar) falhas.push(`${i.id}: descricao/quandoUsar vazios`);
  for (const l of i.ligadoA || []) {
    if (!c.itens.some((x) => x.id === l)) falhas.push(`${i.id}: ligação quebrada -> ${l}`);
  }
}

for (const n of c.notas || []) {
  if (!fs.existsSync(path.join(raiz, n.arquivo))) falhas.push("nota com arquivo inexistente: " + n.arquivo);
}

if (falhas.length) {
  console.error("✖ " + falhas.join("\n✖ "));
  process.exit(1);
}
console.log(`✔ catálogo válido: ${c.itens.length} itens, ${c.areas.length} áreas, ${(c.notas || []).length} notas`);
