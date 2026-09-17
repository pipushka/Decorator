const FLAG_PLACEHOLDER = "assets/флажок1.png";

const FLAG_DATA = [
  {
    id: "flag-1",
    name: "Погибший, но вознёсшийся вопреки ",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Вера", "Безопасность", "Активность"],
      ["Сомята", "Вера", "Активность", "Творчество"],
      ["Лягушата", "Вера", "Безопасность", "Активность"],
      ["Лягушата", "Вера", "Ресурсы", "Активность"],
      ["Выдрята", "Хитрость", "Активность", "Творчество"],
      ["Выдрята", "Вера", "Безопасность", "Активность"]
    ]
  },
  {
    id: "flag-2",
    name: "Скрывающий искренность в пучинах глубин",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Безопасность", "Ресурсы"],
      ["Сомята", "Хитрость", "Безопасность", "Творчество"],
      ["Сомята", "Вера", "Ресурсы", "Детство"],
      ["Лягушата", "Хитрость", "Безопасность", "Детство"],
      ["Лягушата", "Хитрость", "Активность", "Творчество"],
      ["Лягушата", "Сила", "Безопасность", "Детство"]
    ]
  },
  {
    id: "flag-3",
    name: "Одаряющий надеждой, что поглощает души",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Вера", "Ресурсы", "Активность"],
      ["Лягушата", "Хитрость", "Детство", "Творчество"],
      ["Лягушата", "Вера", "Ресурсы", "Творчество"],
      ["Лягушата", "Вера", "Активность", "Творчество"],
      ["Выдрята", "Хитрость", "Ресурсы", "Детство"],
      ["Выдрята", "Сила", "Активность", "Детство"]
    ]
  },
  {
    id: "flag-4",
    name: "Флажок 4",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
          ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-5",
    name: "Флажок 5",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
       ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-6",
    name: "Флажок 6",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
         ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-7",
    name: "Флажок 7",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-8",
    name: "Флажок 8",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-9",
    name: "Флажок 9",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-10",
    name: "Флажок 10",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-11",
    name: "Флажок 11",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-12",
    name: "Флажок 12",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-13",
    name: "Флажок 13",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-14",
    name: "Флажок 14",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-15",
    name: "Флажок 15",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
     ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  },
  {
    id: "flag-16",
    name: "Флажок 16",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
    ["Сомята", "Вера", "Ресурсы", "Активность"],
    ]
  }
];

const WORD_LISTS = [
  {
    title: "Детский",
    values: ["выдра", "лягуш", "сом"]
  },
  {
    title: "Взрослый",
    values: ["вера", "сила", "хитрость"]
  },
  {
    title: "Сфера 1",
    values: ["актив", "ресы", "детство", "боевка", "худы"]
  },
  {
    title: "Сфера 2",
    values: ["актив", "ресы", "детство", "боевка", "худы"]
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
   СЕТКА*/

function renderFlagGrid() {
  flagGrid.innerHTML = "";

  FLAG_DATA.forEach(flag => {
    const card = document.createElement("article");
    card.className = "flag-card";
    card.dataset.flagId = flag.id;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "flag-button";
    button.setAttribute("aria-label", `Открыть ${flag.name}`);

    const image = document.createElement("img");
    image.src = flag.src;
    image.alt = flag.name;
    image.loading = "lazy";

    button.appendChild(image);
    card.appendChild(button);
    flagGrid.appendChild(card);

    button.addEventListener("click", () => {

      if (selectedFlag && selectedFlag.id === flag.id) {
        selectedFlag = null;
        hideFlagDetails();
        return;
      }
      
      selectedFlag = flag;
      showFlagDetails(flag, false);
    });
  });
}

/* ------------------------------------------------------------
   БЛОК ПОДРОБНОЙ ИНФОРМАЦИИ*/

function showFlagDetails(flag, shouldScroll) {
  detailsName.textContent = flag.name;
  detailsImage.src = flag.src;
  detailsImage.alt = flag.name;
  detailsDescription.textContent = flag.description;

  detailsTableBody.innerHTML = "";

  flag.obtain.forEach(row => {
    const tr = document.createElement("tr");

    row.forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    detailsTableBody.appendChild(tr);
  });

  flagDetails.classList.add("is-open");

  document.querySelectorAll(".flag-card").forEach(card => {
    card.classList.toggle(
      "is-selected",
      card.dataset.flagId === flag.id
    );
  });
}

function hideFlagDetails() {
  flagDetails.classList.remove("is-open");

  document.querySelectorAll(".flag-card").forEach(card => {
    card.classList.remove("is-selected");
  });
}

/* ------------------------------------------------------------
   НИЖНИЕ СПИСКИ*/

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
   РЕЗУЛЬТАТ ПО СЛОВАМ */

function showWordResult() {
  const selects = [...wordSelectors.querySelectorAll("select")];
  const values = selects.map(select => select.value);

  const resultFlag = FLAG_DATA[0];

  wordResultName.textContent = resultFlag.name;
  wordResultImage.src = resultFlag.src;
  wordResultImage.alt = resultFlag.name;
  wordResultDescription.textContent =
    `ну тут типа будет чета: ${values.join(" · ")}. ` +
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
