const CATEGORY_ORDER = [
  ["far", "Дальняя ветка"],
  ["near", "Ближняя ветка"],
  ["cat", "На коте"],
  ["plan", "Общий план"],
  ["set", "Сеты"]
];

const STORAGE_KEY = "decorator-custom-data-v1";

const state = {
  base: null,
  selected: new Map(),
  custom: loadCustom(),
  open: new Set(["far", "near", "cat", "plan", "set"])
};

const baseImage = document.getElementById("baseImage");
const basePreview = document.getElementById("basePreview");
const layers = document.getElementById("layers");
const categories = document.getElementById("categories");
const selectedNames = document.getElementById("selectedNames");
const totalPrice = document.getElementById("totalPrice");

function loadCustom() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCustom() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.custom));
}

function allDecor() {
  return [...DECOR_DATA, ...state.custom];
}

function getCategoryItems(category) {
  return allDecor().filter(x => x.category === category);
}

function isLayerCategory(category) {
  return ["plan", "near", "cat", "far"].includes(category);
}

function renderCategories() {
  categories.innerHTML = "";

  for (const [category, title] of CATEGORY_ORDER) {
    const section = document.createElement("section");
    section.className = "category" + (state.open.has(category) ? " open" : "");

    const head = document.createElement("button");
    head.className = "category-head";
    head.innerHTML = `<span>${title}</span><span class="arrow">▼</span>`;
    head.addEventListener("click", () => {
      if (state.open.has(category)) state.open.delete(category);
      else state.open.add(category);
      renderCategories();
    });

    const body = document.createElement("div");
    body.className = "category-body";

    const items = getCategoryItems(category);
    if (!items.length) {
      body.innerHTML = `<div class="empty">Пока пусто</div>`;
    } else {
      for (const item of items) {
        const button = document.getElementById("itemTemplate").content.firstElementChild.cloneNode(true);
        button.querySelector(".item-name").textContent = item.name;
        button.querySelector(".item-price").textContent = `${item.price} жемчужин`;
        button.querySelector(".item-thumb").src = item.src;
        button.querySelector(".item-thumb").alt = item.name;

        if (state.selected.has(item.id)) button.classList.add("selected");

        button.addEventListener("click", () => selectDecor(item));
        body.appendChild(button);
      }
    }

    section.append(head, body);
    categories.appendChild(section);
  }
}

function selectDecor(item) {
  // Сет полностью заменяет весь остальной декор.
  if (item.category === "set") {
    state.selected.clear();
    state.selected.set(item.id, item);
  } else {
    // При выборе обычного декора любой сет снимается.
    for (const [id, selected] of state.selected) {
      if (selected.category === "set") state.selected.delete(id);
    }

    // Внутри одного слоя действует выбор одного элемента.
    if (isLayerCategory(item.category)) {
      for (const [id, selected] of state.selected) {
        if (selected.category === item.category) state.selected.delete(id);
      }
    }

    if (state.selected.has(item.id)) state.selected.delete(item.id);
    else state.selected.set(item.id, item);
  }

  renderCategories();
  renderCanvas();
  renderInfo();
}

function renderCanvas() {
  layers.innerHTML = "";

  const ordered = [...state.selected.values()].filter(x => isLayerCategory(x.category));
  const z = { plan: 20, near: 30, cat: 40, far: 50 };

  ordered.sort((a, b) => z[a.category] - z[b.category]);

  ordered.forEach(item => {
    const img = document.createElement("img");
    img.className = "decor-layer";
    img.src = item.src;
    img.alt = item.name;
    img.style.zIndex = z[item.category];
    img.onerror = () => {
      img.style.display = "none";
    };
    layers.appendChild(img);
  });

  // Сет рисуется поверх основы одним слоем.
  const set = [...state.selected.values()].find(x => x.category === "set");
  if (set) {
    const img = document.createElement("img");
    img.className = "decor-layer";
    img.src = set.src;
    img.alt = set.name;
    img.style.zIndex = 100;
    img.onerror = () => { img.style.display = "none"; };
    layers.appendChild(img);
  }
}

function renderInfo() {
  const items = [...state.selected.values()];
  if (!items.length) {
    selectedNames.textContent = "Ничего не выбрано";
    totalPrice.textContent = "0";
    return;
  }

  selectedNames.textContent = items.map(x => `${x.name} — ${x.price}`).join(", ");
  totalPrice.textContent = items.reduce((sum, x) => sum + Number(x.price || 0), 0);
}

function setBase(src, label = "") {
  state.base = src;
  baseImage.src = src;
  baseImage.style.display = "block";
  basePreview.innerHTML = "";
  const img = document.createElement("img");
  img.src = src;
  img.alt = label || "Основа";
  basePreview.appendChild(img);
}

document.getElementById("baseInput").addEventListener("change", e => {
  const file = e.target.files?.[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  setBase(url, file.name);
});

document.querySelectorAll("[data-base]").forEach(btn => {
  btn.addEventListener("click", () => setBase(btn.dataset.base, btn.textContent));
});

document.getElementById("addDecorBtn").addEventListener("click", () => {
  const file = document.getElementById("decorInput").files?.[0];
  const name = document.getElementById("decorName").value.trim();
  const price = Number(document.getElementById("decorPrice").value);
  const category = document.getElementById("decorCategory").value;

  if (!file) {
    alert("Выберите PNG декора.");
    return;
  }
  if (!name) {
    alert("Введите название декора.");
    return;
  }
  if (!Number.isFinite(price) || price < 0) {
    alert("Введите корректную цену.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const item = {
      id: "custom-" + Date.now(),
      name,
      price,
      category,
      src: reader.result
    };
    state.custom.push(item);
    saveCustom();
    renderCategories();
    document.getElementById("decorName").value = "";
    document.getElementById("decorPrice").value = "";
    document.getElementById("decorInput").value = "";
  };
  reader.readAsDataURL(file);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  state.selected.clear();
  renderCategories();
  renderCanvas();
  renderInfo();
});

document.getElementById("downloadBtn").addEventListener("click", async () => {
  const canvasEl = document.getElementById("canvas");
  const images = [...canvasEl.querySelectorAll("img")];

  const out = document.createElement("canvas");
  out.width = 1200;
  out.height = 1200;
  const ctx = out.getContext("2d");

  for (const img of images) {
    if (!img.src || img.style.display === "none") continue;
    await new Promise(resolve => {
      if (img.complete) resolve();
      else img.onload = img.onerror = resolve;
    });
    try {
      ctx.drawImage(img, 0, 0, 1200, 1200);
    } catch {}
  }

  const a = document.createElement("a");
  a.download = "decor-result.png";
  a.href = out.toDataURL("image/png");
  a.click();
});

renderCategories();
renderCanvas();
renderInfo();
