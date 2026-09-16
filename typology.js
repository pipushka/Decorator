
const FLAG_PLACEHOLDER = "assets/флажок1.png";

const FLAG_DATA = [
  {
    id: "flag-1",
    name: "Флажок 1",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания первого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-2",
    name: "Флажок 2",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания второго флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-3",
    name: "Флажок 3",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания третьего флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-4",
    name: "Флажок 4",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания четвертого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-5",
    name: "Флажок 5",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания пятого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-6",
    name: "Флажок 6",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания шестого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-7",
    name: "Флажок 7",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания седьмого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-8",
    name: "Флажок 8",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания восьмого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-9",
    name: "Флажок 9",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания девятого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-10",
    name: "Флажок 10",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания десятого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-11",
    name: "Флажок 11",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания одиннадцатого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-12",
    name: "Флажок 12",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания двенадцатого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-13",
    name: "Флажок 13",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания тринадцатого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-14",
    name: "Флажок 14",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания четырнадцатого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-15",
    name: "Флажок 15",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания пятнадцатого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  },
  {
    id: "flag-16",
    name: "Флажок 16",
    src: FLAG_PLACEHOLDER,
    description: "Место для небольшого описания шестнадцатого флажка.",
    obtain: [
      ["Условие", "Здесь будет условие получения"],
      ["Дополнительно", "Здесь будет дополнительное условие"]
    ]
  }
];

/* ------------------------------------------------------------
   ЧЕТЫРЕ СПИСКА НИЖНЕГО БЛОКА
   Значения-заглушки можно позже заменить на реальные.
   ------------------------------------------------------------ */

const WORD_LISTS = [
  {
    title: "Первый выбор",
    values: ["детский", "взрослый", "подростковый", "смешанный"]
  },
  {
    title: "Второй выбор",
    values: ["вера", "сомнение", "надежда", "равнодушие"]
  },
  {
    title: "Третий выбор",
    values: ["сила", "доброта", "ресурс", "испытание"]
  },
  {
    title: "Четвертый выбор",
    values: ["выдра", "кот", "птица", "рыба"]
  }
];

const flagGrid = document.getElementById("flagGrid");
const flagDetails = document.getElementById("flagDetails");
const detailsName = document.getElementById("detailsName");
const detailsImage = document.getElementById("detailsImage");
const detailsDescription = document.getElementById("detailsDescription");
const detailsTableBody = document.getElementById("detailsTableBody");

const wordSelectors = document.getElementById("wordSelectors");
const wordResultButton = document.getElementById("wordResultButton");
const wordResult = document.getElementById("wordResult");
const wordResultName = document.getElementById("wordResultName");
const wordResultImage = document.getElementById("wordResultImage");
const wordResultDescription = document.getElementById("wordResultDescription");

let selectedFlag = null;
let hoverFlag = null;

/* ------------------------------------------------------------
   СЕТКА
   ------------------------------------------------------------ */

function renderFlagGrid() {
  flagGrid.innerHTML = "";

  FLAG_DATA.forEach(flag => {
    const card = document.createElement("article");
    card.className = "flag-card";
    card.dataset.flagId = flag.id;

    const name = document.createElement("h4");
    name.textContent = flag.name;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "flag-button";
    button.setAttribute("aria-label", `Открыть ${flag.name}`);

    const image = document.createElement("img");
    image.src = flag.src;
    image.alt = flag.name;
    image.loading = "lazy";

    button.appendChild(image);
    card.append(name, button);
    flagGrid.appendChild(card);

    /* Наведение показывает тот же блок информации,
       но клик закрепляет выбранный флажок. */
    card.addEventListener("mouseenter", () => {
      hoverFlag = flag;
      showFlagDetails(flag, false);
    });

    card.addEventListener("mouseleave", () => {
      hoverFlag = null;

      if (selectedFlag) {
        showFlagDetails(selectedFlag, true);
      } else {
        hideFlagDetails();
      }
    });

    button.addEventListener("click", () => {
      selectedFlag = flag;
      showFlagDetails(flag, true);
    });
  });
}

/* ------------------------------------------------------------
   БЛОК ПОДРОБНОЙ ИНФОРМАЦИИ
   ------------------------------------------------------------ */

function showFlagDetails(flag, shouldScroll) {
  detailsName.textContent = flag.name;
  detailsImage.src = flag.src;
  detailsImage.alt = flag.name;
  detailsDescription.textContent = flag.description;

  detailsTableBody.innerHTML = "";

  flag.obtain.forEach(row => {
    const tr = document.createElement("tr");

    const left = document.createElement("td");
    left.textContent = row[0];

    const right = document.createElement("td");
    right.textContent = row[1];

    tr.append(left, right);
    detailsTableBody.appendChild(tr);
  });

  flagDetails.classList.add("is-open");

  document.querySelectorAll(".flag-card").forEach(card => {
    card.classList.toggle(
      "is-selected",
      card.dataset.flagId === flag.id
    );
  });

  if (shouldScroll) {
    requestAnimationFrame(() => {
      flagDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
}

function hideFlagDetails() {
  if (selectedFlag) return;
  flagDetails.classList.remove("is-open");
}

/* ------------------------------------------------------------
   НИЖНИЕ СПИСКИ
   ------------------------------------------------------------ */

function renderWordSelectors() {
  wordSelectors.innerHTML = "";

  WORD_LISTS.forEach((list, index) => {
    const wrapper = document.createElement("label");
    wrapper.className = "word-select";

    const title = document.createElement("span");
    title.textContent = list.title;

    const select = document.createElement("select");
    select.dataset.index = index;

    list.values.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });

    wrapper.append(title, select);
    wordSelectors.appendChild(wrapper);
  });
}

/* ------------------------------------------------------------
   РЕЗУЛЬТАТ ПО СЛОВАМ
   Пока это заглушка: любой набор показывает флажок 1.
   ------------------------------------------------------------ */

function showWordResult() {
  const selects = [...wordSelectors.querySelectorAll("select")];
  const values = selects.map(select => select.value);

  /* Здесь позже можно сделать настоящую таблицу соответствий:
     комбинация слов -> конкретный флажок. */

  const resultFlag = FLAG_DATA[0];

  wordResultName.textContent = resultFlag.name;
  wordResultImage.src = resultFlag.src;
  wordResultImage.alt = resultFlag.name;
  wordResultDescription.textContent =
    `Результат для сочетания: ${values.join(" · ")}. ` +
    resultFlag.description;

  wordResult.classList.add("is-open");

  requestAnimationFrame(() => {
    wordResult.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

wordResultButton.addEventListener("click", showWordResult);

renderFlagGrid();
renderWordSelectors();

requestAnimationFrame(() => {
    document.body.classList.add("page-ready");
});
