// ============================================================
// КАТЕГОРИИ ДЕКОРА
// ============================================================

const CATEGORY_ORDER = [
  ["far", "Дальняя ветка"],
  ["near", "Ближняя ветка"],
  ["cat", "На коте"],
  ["plan", "Общий план"],
  ["set", "Сеты"]
];


// ============================================================
// СОСТОЯНИЕ
// ============================================================

const state = {

  // Единственная основа
  base: "assets/плашка1.png",

  // Выбранный декор
  selected: new Map(),

  // Открытые категории
  open: new Set([
    "far",
    "near",
    "cat",
    "plan",
    "set"
  ])

};


// ============================================================
// ЭЛЕМЕНТЫ DOM
// ============================================================

const baseImage = document.getElementById("baseImage");
const basePreview = document.getElementById("basePreview");
const layers = document.getElementById("layers");

const categories = document.getElementById("categories");

const selectedNames =
  document.getElementById("selectedNames");

const totalPrice =
  document.getElementById("totalPrice");


// ============================================================
// ПОЛУЧЕНИЕ ДЕКОРА
// ============================================================

function allDecor() {

  return DECOR_DATA;

}


// ============================================================
// ДЕКОР КОНКРЕТНОЙ КАТЕГОРИИ
// ============================================================

function getCategoryItems(category) {

  return allDecor().filter(
    item => item.category === category
  );

}


// ============================================================
// ЯВЛЯЕТСЯ ЛИ КАТЕГОРИЯ СЛОЕМ
// ============================================================

function isLayerCategory(category) {

  return [
    "plan",
    "near",
    "cat",
    "far"
  ].includes(category);

}


// ============================================================
// ОТРИСОВКА КАТЕГОРИЙ
// ============================================================

function renderCategories() {

  categories.innerHTML = "";

  for (const [category, title] of CATEGORY_ORDER) {

    const section =
      document.createElement("section");

    section.className =
      "category" +
      (
        state.open.has(category)
          ? " open"
          : ""
      );


    // --------------------------------------------------------
    // ЗАГОЛОВОК
    // --------------------------------------------------------

    const head =
      document.createElement("button");

    head.className = "category-head";

    head.innerHTML = `
      <span>${title}</span>
      <span class="arrow">▼</span>
    `;


    head.addEventListener(
      "click",
      () => {

        if (state.open.has(category)) {

          state.open.delete(category);

        } else {

          state.open.add(category);

        }

        renderCategories();

      }
    );


    // --------------------------------------------------------
    // СОДЕРЖИМОЕ
    // --------------------------------------------------------

    const body =
      document.createElement("div");

    body.className = "category-body";


    const items =
      getCategoryItems(category);


    if (!items.length) {

      body.innerHTML =
        `<div class="empty">Пока пусто</div>`;

    } else {

      for (const item of items) {

        const button =
          document
            .getElementById("itemTemplate")
            .content
            .firstElementChild
            .cloneNode(true);


        button.querySelector(
          ".item-name"
        ).textContent = item.name;


        button.querySelector(
          ".item-price"
        ).textContent =
          `${item.price} жемчужин`;


        button.querySelector(
          ".item-thumb"
        ).src = item.src;


        button.querySelector(
          ".item-thumb"
        ).alt = item.name;


        if (state.selected.has(item.id)) {

          button.classList.add("selected");

        }


        button.addEventListener(
          "click",
          () => selectDecor(item)
        );


        body.appendChild(button);

      }

    }


    section.append(head, body);

    categories.appendChild(section);

  }

}


// ============================================================
// ВЫБОР ДЕКОРА
// ============================================================

function selectDecor(item) {

  // ----------------------------------------------------------
  // СЕТ
  // ----------------------------------------------------------

  if (item.category === "set") {

    state.selected.clear();

    state.selected.set(
      item.id,
      item
    );

  }

  // ----------------------------------------------------------
  // ОБЫЧНЫЙ ДЕКОР
  // ----------------------------------------------------------

  else {

    // Убираем выбранный сет
    for (
      const [id, selected] of state.selected
    ) {

      if (selected.category === "set") {

        state.selected.delete(id);

      }

    }


    // В одном слое только один элемент
    if (isLayerCategory(item.category)) {

      for (
        const [id, selected] of state.selected
      ) {

        if (
          selected.category ===
          item.category
        ) {

          state.selected.delete(id);

        }

      }

    }


    // Включение / выключение элемента
    if (state.selected.has(item.id)) {

      state.selected.delete(item.id);

    } else {

      state.selected.set(
        item.id,
        item
      );

    }

  }


  renderCategories();
  renderCanvas();
  renderInfo();

}


// ============================================================
// ОТРИСОВКА ПЛАШКИ
// ============================================================

function renderCanvas() {

  layers.innerHTML = "";


  const ordered =
    [...state.selected.values()]
      .filter(
        item =>
          isLayerCategory(item.category)
      );


  // Порядок слоёв
  const z = {

    plan: 20,
    near: 30,
    cat: 40,
    far: 50

  };


  ordered.sort(
    (a, b) =>
      z[a.category] -
      z[b.category]
  );


  // ----------------------------------------------------------
  // ОБЫЧНЫЙ ДЕКОР
  // ----------------------------------------------------------

  ordered.forEach(item => {

    const img =
      document.createElement("img");

    img.className = "decor-layer";

    img.src = item.src;

    img.alt = item.name;

    img.style.zIndex =
      z[item.category];


    img.onerror = () => {

      img.style.display = "none";

    };


    layers.appendChild(img);

  });


  // ----------------------------------------------------------
  // СЕТ
  // ----------------------------------------------------------

  const set =
    [...state.selected.values()]
      .find(
        item =>
          item.category === "set"
      );


  if (set) {

    const img =
      document.createElement("img");

    img.className =
      "decor-layer";

    img.src = set.src;

    img.alt = set.name;

    img.style.zIndex = 100;


    img.onerror = () => {

      img.style.display = "none";

    };


    layers.appendChild(img);

  }

}


// ============================================================
// ИНФОРМАЦИЯ О ВЫБРАННОМ ДЕКОРЕ
// ============================================================

function renderInfo() {

  const items =
    [...state.selected.values()];


  if (!items.length) {

    selectedNames.textContent =
      "Ничего не выбрано";

    totalPrice.textContent = "0";

    return;

  }


  selectedNames.textContent =
    items
      .map(
        item =>
          `${item.name} — ${item.price}`
      )
      .join(", ");


  totalPrice.textContent =
    items.reduce(
      (sum, item) =>
        sum +
        Number(item.price || 0),
      0
    );

}


// ============================================================
// УСТАНОВКА ОСНОВЫ
// ============================================================

function setBase(src, label = "Плашка 1") {

  state.base = src;

  baseImage.src = src;

  baseImage.style.display = "block";


  basePreview.innerHTML = "";


  const img =
    document.createElement("img");

  img.src = src;

  img.alt = label;


  basePreview.appendChild(img);

}


// ============================================================
// ЗАГРУЗКА СОБСТВЕННОЙ ОСНОВЫ
// ============================================================

document
  .getElementById("baseInput")
  .addEventListener(
    "change",
    event => {

      const file =
        event.target.files?.[0];


      if (!file) {
        return;
      }


      // ------------------------------------------------------
      // Только PNG
      // ------------------------------------------------------

      if (
        file.type !==
        "image/png"
      ) {

        alert(
          "Основа должна быть PNG."
        );

        event.target.value = "";

        return;

      }


      const url =
        URL.createObjectURL(file);


      const img =
        new Image();


      img.onload = () => {

        // ----------------------------------------------------
        // Проверяем размер
        // ----------------------------------------------------

        if (
          img.naturalWidth !== 621 ||
          img.naturalHeight !== 381
        ) {

          alert(
            "Размер плашки должен быть ровно 621×381 px."
          );

          URL.revokeObjectURL(url);

          event.target.value = "";

          return;

        }


        // ----------------------------------------------------
        // Всё нормально — ставим новую основу
        // ----------------------------------------------------

        setBase(
          url,
          file.name
        );

      };


      img.onerror = () => {

        alert(
          "Не удалось загрузить изображение."
        );

        URL.revokeObjectURL(url);

        event.target.value = "";

      };


      img.src = url;

    }
  );


// ============================================================
// СБРОС
// ============================================================

document
  .getElementById("resetBtn")
  .addEventListener(
    "click",
    () => {

      state.selected.clear();

      renderCategories();
      renderCanvas();
      renderInfo();

    }
  );


// ============================================================
// СКАЧИВАНИЕ
// ============================================================

document
  .getElementById("downloadBtn")
  .addEventListener(
    "click",
    async () => {

      const canvasEl =
        document.getElementById("canvas");


      const images =
        [
          ...canvasEl.querySelectorAll(
            "img"
          )
        ];


      // ------------------------------------------------------
      // Итоговый размер — такой же,
      // как у исходных файлов
      // ------------------------------------------------------

      const out =
        document.createElement(
          "canvas"
        );


      out.width = 621;
      out.height = 381;


      const ctx =
        out.getContext("2d");


      // ------------------------------------------------------
      // Рисуем все слои
      // ------------------------------------------------------

      for (const img of images) {

        if (
          !img.src ||
          img.style.display === "none"
        ) {

          continue;

        }


        await new Promise(
          resolve => {

            if (img.complete) {

              resolve();

            } else {

              img.onload =
                img.onerror =
                resolve;

            }

          }
        );


        try {

          ctx.drawImage(
            img,
            0,
            0,
            621,
            381
          );

        } catch {}

      }


      // ------------------------------------------------------
      // Скачиваем
      // ------------------------------------------------------

      const a =
        document.createElement("a");


      a.download =
        "decor-result.png";


      a.href =
        out.toDataURL(
          "image/png"
        );


      a.click();

    }
  );


// ============================================================
// ПЕРВОНАЧАЛЬНОЕ СОСТОЯНИЕ
// ============================================================

setBase(
  "assets/плашка1.png",
  "Плашка 1"
);

renderCategories();
renderCanvas();
renderInfo();
