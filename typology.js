const FLAG_PLACEHOLDER = "assets/флажок1.png";


/* ============================================================
   ДАННЫЕ ФЛАЖКОВ */

const FLAG_DATA = [
  {
    id: "flag-1",
    name: "Погибший, но вознёсшийся вопреки ",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Вера", "Безопасность", "Активность"],
      ["Сомята", "Вера", "Активность", "Творчество"],
      ["Лягушата", "Вера", "Активность", "Безопасность"],
      ["Лягушата", "Вера", "Ресурсы", "Активность"],
      ["Выдрята", "Хитрость", "Творчество", "Активность"],
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
      ["Выдрята", "Вера", "Безопасность", "Детство"],
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
    name: "Танцующий на острие незыблемых чувств",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Безопасность", "Активность"],
      ["Сомята", "Сила", "Ресурсы", "Активность"],
      ["Лягушата", "Хитрость", "Безопасность", "Творчество"],
      ["Выдрята", "Хитрость", "Детство", "Творчество"],
      ["Выдрята", "Сила", "Безопасность", "Детство"],
      ["Выдрята", "Вера", "Ресурсы", "Активность"]
    ]
  },

  {
    id: "flag-5",
    name: "Знающий истинную тяжесть ответственности",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Сила", "Безопасность", "Ресурсы"],
      ["Сомята", "Сила", "Безопасность", "Творчество"],
      ["Лягушата", "Вера", "Детство", "Творчество"],
      ["Выдрята", "Хитрость", "Безопасность", "Ресурсы"],
      ["Выдрята", "Сила", "Безопасность", "Активность"],
      ["Выдрята", "Вера", "Ресурсы", "Детство"]
    ]
  },

  {
    id: "flag-6",
    name: "Откинувший путы, да чтящий истоки",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Ресурсы", "Творчество"],
      ["Сомята", "Сила", "Ресурсы", "Детство"],
      ["Сомята", "Вера", "Безопасность", "Ресурсы"],
      ["Сомята", "Вера", "Активность", "Детство"],
      ["Лягушата", "Хитрость", "Безопасность", "Ресурсы"],
      ["Выдрята", "Сила", "Детство", "Творчество"]
    ]
  },

  {
    id: "flag-7",
    name: "Жаждущий перекроить судьбы наперекор опасности",
    src: FLAG_PLACEHOLDER,
    description: "АПИСАНЬКА",
    obtain: [
      ["Сомята", "Сила", "Безопасность", "Активность"],
      ["Лягушата", "Хитрость", "Безопасность", "Активность"],
      ["Лягушата", "Хитрость", "Активность", "Детство"],
      ["Выдрята", "Хитрость", "Ресурсы", "Творчество"],
      ["Выдрята", "Сила", "Безопасность", "Творчество"],
      ["Сомята", "Вера", "Безопасность", "Детство"]
    ]
  },

  {
    id: "flag-8",
    name: "Смотрящий на сердцевину сквозь обманчивую красоту",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Ресурсы", "Активность"],
      ["Сомята", "Сила", "Безопасность", "Детство"],
      ["Лягушата", "Хитрость", "Ресурсы", "Активность"],
      ["Лягушата", "Вера", "Безопасность", "Детство"],
      ["Лягушата", "Вера", "Активность", "Детство"],
      ["Выдрята", "Хитрость", "Безопасность", "Творчество"]
    ]
  },

  {
    id: "flag-9",
    name: "Несущий свет тем, кто сбился с пути",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Сила", "Активность", "Детство"],
      ["Сомята", "Вера", "Безопасность", "Творчество"],
      ["Лягушата", "Хитрость", "Ресурсы", "Детство"],
      ["Лягушата", "Сила", "Безопасность", "Активность"],
      ["Выдрята", "Сила", "Ресурсы", "Творчество"],
      ["Выдрята", "Вера", "Активность", "Творчество"]
    ]
  },

  {
    id: "flag-10",
    name: "Хранящий покой мимолётного счастья",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Активность", "Детство"],
      ["Сомята", "Сила", "Детство", "Творчество"],
      ["Сомята", "Вера", "Ресурсы", "Творчество"],
      ["Сомята", "Вера", "Детство", "Творчество"],
      ["Лягушата", "Сила", "Ресурсы", "Активность"],
      ["Лягушата", "Вера", "Ресурсы", "Детство"]
    ]
  },

  {
    id: "flag-11",
    name: "Играющийся с блеском в каплях росы ",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Активность", "Творчество"],
      ["Лягушата", "Сила", "Ресурсы", "Творчество"],
      ["Лягушата", "Сила", "Активность", "Детство"],
      ["Выдрята", "Сила", "Безопасность", "Ресурсы"],
      ["Выдрята", "Вера", "Безопасность", "Творчество"]
    ]
  },

  {
    id: "flag-12",
    name: "Видящий больше, чем позволяют глаза",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Детство", "Творчество"],
      ["Лягушата", "Сила", "Безопасность", "Ресурсы"],
      ["Выдрята", "Хитрость", "Ресурсы", "Активность"],
      ["Выдрята", "Хитрость", "Активность", "Детство"],
      ["Выдрята", "Вера", "Детство", "Творчество"]
    ]
  },

  {
    id: "flag-13",
    name: "Согревающий лаской ледяные сердца",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Сила", "Активность", "Творчество"],
      ["Лягушата", "Хитрость", "Ресурсы", "Творчество"],
      ["Лягушата", "Сила", "Ресурсы", "Детство"],
      ["Выдрята", "Вера", "Безопасность", "Ресурсы"],
      ["Выдрята", "Вера", "Активность", "Детство"]
    ]
  },

  {
    id: "flag-14",
    name: "Чующий приближение перемен в оттенках небес",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Ресурсы", "Детство"],
      ["Лягушата", "Сила", "Безопасность", "Творчество"],
      ["Выдрята", "Хитрость", "Безопасность", "Детство"],
      ["Выдрята", "Сила", "Ресурсы", "Детство"],
      ["Выдрята", "Вера", "Ресурсы", "Творчество"]
    ]
  },

  {
    id: "flag-15",
    name: "Пожирающий свет хищным взглядом",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Сомята", "Хитрость", "Безопасность", "Детство"],
      ["Сомята", "Сила", "Ресурсы", "Творчество"],
      ["Сомята", "Вера", "Безопасность", "Детство"],
      ["Лягушата", "Сила", "Активность", "Творчество"],
      ["Выдрята", "Сила", "Ресурсы", "Активность"]
    ]
  },

  {
    id: "flag-16",
    name: "Застывший в воспоминаниях далёкого прошлого",
    src: FLAG_PLACEHOLDER,
    description: "аписанька",
    obtain: [
      ["Лягушата", "Сила", "Детство", "Творчество"],
      ["Лягушата", "Вера", "Безопасность", "Ресурсы"],
      ["Лягушата", "Вера", "Безопасность", "Детство"],
      ["Выдрята", "Хитрость", "Безопасность", "Активность"],
      ["Выдрята", "Сила", "Активность", "Творчество"]
    ]
  }
];


/* ============================================================
   НОРМАЛИЗАЦИЯ */

function normalizeWord(value) {

  if (typeof value !== "string") {
    return value;
  }

  const trimmed = value.trim();

  return TYPOLOGY_ALIASES[trimmed] || trimmed;
}


function normalizeFlagData() {

  FLAG_DATA.forEach(flag => {

    flag.obtain = flag.obtain.map(combination => {

      return combination.map(word => {
        return normalizeWord(word);
      });

    });

  });

}


/* ============================================================
   ЭЛЕМЕНТЫ СТРАНИЦЫ */

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


if (wordResultImage) {
  wordResultImage.style.display = "none";
}


/* ============================================================
   СЕТКА ФЛАЖКОВ*/

function renderFlagGrid() {

  flagGrid.innerHTML = "";


  FLAG_DATA.forEach(flag => {

    const card = document.createElement("article");

    card.className = "flag-card";
    card.dataset.flagId = flag.id;


    const button = document.createElement("button");

    button.type = "button";
    button.className = "flag-button";

    button.setAttribute(
      "aria-label",
      `Открыть ${flag.name}`
    );


    const image = document.createElement("img");

    image.src = flag.src;
    image.alt = flag.name;
    image.loading = "lazy";


    button.appendChild(image);
    card.appendChild(button);

    flagGrid.appendChild(card);


    button.addEventListener("click", () => {

      if (
        selectedFlag &&
        selectedFlag.id === flag.id
      ) {

        selectedFlag = null;

        hideFlagDetails();

        return;
      }


      selectedFlag = flag;

      showFlagDetails(flag);

    });

  });

}


/* ============================================================
   ПОДРОБНОСТИ ФЛАЖКА */

function showFlagDetails(flag) {

  detailsName.textContent = flag.name;

  detailsImage.src = flag.src;
  detailsImage.alt = flag.name;

  detailsDescription.textContent =
    flag.description;


  detailsTableBody.innerHTML = "";


  flag.obtain.forEach(row => {

    const tr = document.createElement("tr");


    row.forEach(value => {

      const td = document.createElement("td");

      td.textContent = normalizeWord(value);

      tr.appendChild(td);

    });


    detailsTableBody.appendChild(tr);

  });


  flagDetails.classList.add("is-open");


  document
    .querySelectorAll(".flag-card")
    .forEach(card => {

      card.classList.toggle(
        "is-selected",
        card.dataset.flagId === flag.id
      );

    });

}


function hideFlagDetails() {

  flagDetails.classList.remove("is-open");


  document
    .querySelectorAll(".flag-card")
    .forEach(card => {

      card.classList.remove("is-selected");

    });

}


/* ============================================================
   СОЗДАНИЕ СПИСКОВ */

function buildWordListsFromFlags() {

  const firstValues = new Set();
  const secondValues = new Set();

  const lastTwoValues = new Set();


  FLAG_DATA.forEach(flag => {

    flag.obtain.forEach(combination => {

      if (
        !Array.isArray(combination) ||
        combination.length < 4
      ) {
        return;
      }


      firstValues.add(
        normalizeWord(combination[0])
      );

      secondValues.add(
        normalizeWord(combination[1])
      );


      lastTwoValues.add(
        normalizeWord(combination[2])
      );

      lastTwoValues.add(
        normalizeWord(combination[3])
      );

    });

  });


  return [

    {
      title: "Детский",
      values: [...firstValues]
    },

    {
      title: "Взрослый",
      values: [...secondValues]
    },

    {
      title: "Сфера 1",
      values: [...lastTwoValues]
    },

    {
      title: "Сфера 2",
      values: [...lastTwoValues]
    }

  ];

}


/* ============================================================
   НИЖНИЕ СПИСКИ */

function renderWordSelectors() {

  wordSelectors.innerHTML = "";


  const wordLists =
    buildWordListsFromFlags();


  wordLists.forEach((list, index) => {

    const wrapper =
      document.createElement("label");

    wrapper.className = "word-select";


    const title =
      document.createElement("span");

    title.textContent =
      list.title;


    const select =
      document.createElement("select");

    select.dataset.index =
      index;


    list.values.forEach(value => {

      const option =
        document.createElement("option");

      option.value =
        value;

      option.textContent =
        value;


      select.appendChild(option);

    });


    wrapper.appendChild(title);
    wrapper.appendChild(select);

    wordSelectors.appendChild(wrapper);

  });

}


/* ============================================================
   ПРОВЕРКА ДВУХ ПОСЛЕДНИХ СФЕР*/

function lastTwoMatch(
  selectedThird,
  selectedFourth,
  flagThird,
  flagFourth
) {

  const selectedPair = [
    normalizeWord(selectedThird),
    normalizeWord(selectedFourth)
  ].sort();


  const flagPair = [
    normalizeWord(flagThird),
    normalizeWord(flagFourth)
  ].sort();


  return (
    selectedPair[0] === flagPair[0] &&
    selectedPair[1] === flagPair[1]
  );

}


/* ============================================================
   ПОИСК ФЛАЖКА ПО ТИПИРОВАНИЮ */

function findFlagByCombination(values) {

  if (
    !Array.isArray(values) ||
    values.length !== 4
  ) {
    return null;
  }


  const firstValue =
    normalizeWord(values[0]);

  const secondValue =
    normalizeWord(values[1]);

  const thirdValue =
    normalizeWord(values[2]);

  const fourthValue =
    normalizeWord(values[3]);


  for (const flag of FLAG_DATA) {

    for (const combination of flag.obtain) {

      if (
        !Array.isArray(combination) ||
        combination.length !== 4
      ) {
        continue;
      }


      const firstMatches =
        normalizeWord(combination[0]) ===
        firstValue;


      const secondMatches =
        normalizeWord(combination[1]) ===
        secondValue;


      if (
        !firstMatches ||
        !secondMatches
      ) {
        continue;
      }


      const lastTwoMatches =
        lastTwoMatch(
          thirdValue,
          fourthValue,
          combination[2],
          combination[3]
        );


      if (lastTwoMatches) {
        return flag;
      }

    }

  }


  return null;

}


/* ============================================================
   ПОКАЗ РЕЗУЛЬТАТА */

function showWordResult() {

  const selects =
    [...wordSelectors.querySelectorAll("select")];


  const values =
    selects.map(select => select.value);

  if (values.length !== 4) {
    return;
  }


  const resultFlag =
    findFlagByCombination(values);


  /* ==========================================================
     ФЛАЖОК НЕ НАЙДЕН */

  if (!resultFlag) {

    wordResultName.textContent =
      "Флажок не найден";


    wordResultDescription.textContent =
      "Для выбранной комбинации нет флажка.";


    wordResultImage.removeAttribute("src");
    wordResultImage.removeAttribute("alt");

    wordResultImage.style.display =
      "none";


    wordResult.style.textAlign =
      "center";

    wordResultName.style.textAlign =
      "center";

    wordResultDescription.style.textAlign =
      "center";


    wordResult.classList.add("is-open");


    return;
  }


  /* ==========================================================
     ФЛАЖОК НАЙДЕН */

  wordResultName.textContent =
    resultFlag.name;


  wordResultImage.src =
    resultFlag.src;


  wordResultImage.alt =
    resultFlag.name;


  wordResultImage.style.display =
    "";


  wordResultDescription.textContent =
    resultFlag.description;

  wordResult.style.textAlign =
    "";

  wordResultName.style.textAlign =
    "";

  wordResultDescription.style.textAlign =
    "";


  wordResult.classList.add("is-open");


}


/* ============================================================
   ИНИЦИАЛИЗАЦИЯ */

normalizeFlagData();


renderFlagGrid();


renderWordSelectors();


wordResultButton.addEventListener(
  "click",
  showWordResult
);


requestAnimationFrame(() => {

  document.body.classList.add(
    "page-ready"
  );

});
