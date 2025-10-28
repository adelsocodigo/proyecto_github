const state = {
  items: [],
  filtered: [],
};

const $ = (sel) => document.querySelector(sel);

function render(list) {
  const root = $("#news-list");
  const tpl = $("#news-card-template");
  root.innerHTML = "";
  list.forEach(item => {
    const node = tpl.content.cloneNode(true);
    const a = node.querySelector(".card-link");
    const h2 = node.querySelector(".card-title");
    const p = node.querySelector(".card-desc");
    const s = node.querySelector(".source");
    const t = node.querySelector(".date");

    a.href = item.url;
    a.ariaLabel = `Abrir noticia: ${item.title}`;
    h2.textContent = item.title;
    p.textContent = item.summary || "";
    s.textContent = item.source || "Fuente";
    t.textContent = formatDate(item.date);

    root.appendChild(node);
  });
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "2-digit" });
  } catch { return ""; }
}

function filter(q) {
  const term = q.trim().toLowerCase();
  state.filtered = !term
    ? state.items
    : state.items.filter(x =>
        (x.title || "").toLowerCase().includes(term) ||
        (x.summary || "").toLowerCase().includes(term) ||
        (x.source || "").toLowerCase().includes(term)
      );
  render(state.filtered);
}

function loadDemo() {
  state.items = [
    {
      title: "Nuevo modelo multimodal mejora la comprensión de vídeo",
      summary: "Investigadores anuncian avances en resumen de vídeo de larga duración.",
      url: "https://example.com/nota1",
      source: "AI Journal",
      date: "2025-10-15"
    },
    {
      title: "Europa publica guía de evaluación para sistemas de IA",
      summary: "Un marco práctico para auditorías de riesgo y pruebas de seguridad.",
      url: "https://example.com/nota2",
      source: "EU Digital",
      date: "2025-09-30"
    },
    {
      title: "Start-up lanza herramienta de evaluación de sesgos",
      summary: "La plataforma automatiza pruebas A/B para fairness en modelos lingüísticos.",
      url: "https://example.com/nota3",
      source: "ML Ops Daily",
      date: "2025-08-20"
    }
  ];
  state.filtered = state.items;
  render(state.filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  $("#search").addEventListener("input", (e) => filter(e.target.value));
  $("#add-sample").addEventListener("click", loadDemo);
  // Opcional: podrías cargar contenido real desde un JSON estático en /data/news.json
  // fetch("./data/news.json").then(r=>r.json()).then(items => { state.items = items; state.filtered = items; render(items); });
});
