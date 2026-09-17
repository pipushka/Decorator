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
          ["Выдрята", "Вера", "Ресурсы", "Активность"],
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
       ["Выдрята", "Вера", "Ресурсы", "Детство"],
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
         ["Выдрята", "Сила", "Детство", "Творчество"],
    ]
  },
  {
    id: "flag-7",
    name: "Флажок 7",
    src: FLAG_PLACEHOLDER,
    description: "Жаждущий перекроить судьбы наперекор опасности",
    obtain: [
    ["Сомята", "Сила", "Безопасность", "Активность"],
      ["Лягушата", "Хитрость", "Безопасность", "Активность"],
      ["Лягушата", "Хитрость", "Активность", "Детство"],
      ["Выдрята", "Хитрость", "Ресурсы", "Творчество"],
      ["Выдрята", "Сила", "Безопасность", "Творчество"],
      ["Сомята", "Вера", "Безопасность", "Детство"],
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
       ["Выдрята", "Хитрость", "Безопасность", "Творчество"],
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
      ["Выдрята", "Вера", "Активность", "Творчество"],
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
      ["Лягушата", "Вера", "Ресурсы", "Детство"],
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
      ["Выдрята", "Вера", "Безопасность", "Творчество"],
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
      ["Выдрята", "Вера", "Детство", "Творчество"],
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
      ["Выдрята", "Вера", "Активность", "Детство"],
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
      ["Выдрята", "Вера", "Ресурсы", "Творчество"],
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
      ["Выдрята", "Сила", "Ресурсы", "Активность"],
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
      ["Выдрята", "Сила", "Активность", "Творчество"],
    ]
  }
];

const ALL_COMBINATIONS = [

    {
        combination: [
            "Сомята",
            "Сила",
            "Детство",
            "Активность"
        ],
        flagId: "flag-7"
    },

    {
        combination: [
            "Выдрята",
            "Вера",
            "Творчество",
            "Ресурсы"
        ],
        flagId: "flag-12"
    }

];

const WORD_LISTS = [
  {
    title: "Детский",
    values: ["Выдрята", "Лягушата", "Сомята"]
  },
  {
    title: "Взрослый",
    values: ["Вера", "Сила", "Хитрость"]
  },
  {
    title: "Сфера 1",
    values: ["Активность", "Ресурсы", "Детство", "Безопасность", "Творчество"]
  },
  {
    title: "Сфера 2",
    values: ["Активность", "Ресурсы", "Детство", "Безопасность", "Творчество"]
  }
];

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================================
       DOM
    ======================================================== */

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


    /* ========================================================
       ПРОВЕРКА HTML
    ======================================================== */

    const requiredElements = {
        flagGrid,
        flagDetails,
        detailsName,
        detailsImage,
        detailsDescription,
        detailsTableBody,
        wordSelectors,
        wordResultButton,
        wordResult,
        wordResultName,
        wordResultImage,
        wordResultDescription
    };

    const missingElements = Object.entries(requiredElements)
        .filter(([name, element]) => !element)
        .map(([name]) => name);

    if (missingElements.length > 0) {

        console.error(
            "Typology: не найдены элементы HTML:",
            missingElements
        );

        return;
    }


    /* ========================================================
       СОСТОЯНИЕ
    ======================================================== */

    let selectedFlag = null;


    /* ========================================================
       СЕТКА ФЛАЖКОВ
    ======================================================== */

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


    /* ========================================================
       ПОДРОБНАЯ ИНФОРМАЦИЯ О ФЛАЖКЕ
    ======================================================== */

    function showFlagDetails(flag) {

        detailsName.textContent = flag.name;

        detailsImage.src = flag.src;
        detailsImage.alt = flag.name;

        detailsDescription.textContent =
            flag.description || "";


        detailsTableBody.innerHTML = "";


        if (Array.isArray(flag.obtain)) {

            flag.obtain.forEach(row => {

                const tr = document.createElement("tr");


                row.forEach(value => {

                    const td = document.createElement("td");

                    td.textContent = value;

                    tr.appendChild(td);

                });


                detailsTableBody.appendChild(tr);

            });

        }


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


    /* ========================================================
       НИЖНИЕ 4 СПИСКА
    ======================================================== */

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


    /* ========================================================
       КЛЮЧ КОМБИНАЦИИ
    ======================================================== */

    function makeCombinationKey(combination) {

        return combination
            .map(value =>
                String(value)
                    .trim()
                    .toLowerCase()
            )
            .join("|");
    }


    /* ========================================================
       ПОИСК В obtain У ФЛАЖКОВ
    ======================================================== */

    function findFlagFromObtains(combination) {

        const wantedKey =
            makeCombinationKey(combination);


        for (const flag of FLAG_DATA) {

            if (!Array.isArray(flag.obtain)) {
                continue;
            }


            for (const row of flag.obtain) {

                if (!Array.isArray(row)) {
                    continue;
                }


                /*
                    Проверяем только комбинации
                    из четырёх элементов.
                */

                if (row.length !== combination.length) {
                    continue;
                }


                if (
                    makeCombinationKey(row) ===
                    wantedKey
                ) {

                    return flag;
                }

            }

        }


        return null;
    }


    /* ========================================================
       ПОИСК В ОБЩЕЙ БАЗЕ КОМБИНАЦИЙ
    ======================================================== */

    function findFlagFromAllCombinations(combination) {

        const wantedKey =
            makeCombinationKey(combination);


        if (!Array.isArray(ALL_COMBINATIONS)) {
            return null;
        }


        for (const entry of ALL_COMBINATIONS) {

            if (!entry) {
                continue;
            }


            if (!Array.isArray(entry.combination)) {
                continue;
            }


            if (
                makeCombinationKey(entry.combination) !==
                wantedKey
            ) {

                continue;
            }


            const flag = FLAG_DATA.find(
                item =>
                    item.id === entry.flagId
            );


            if (flag) {
                return flag;
            }

        }


        return null;
    }


    /* ========================================================
       ОБЩИЙ ПОИСК
       
       Сначала obtain.
       Если там нет — ALL_COMBINATIONS.
    ======================================================== */

    function findFlagByCombination(combination) {

        const fromObtains =
            findFlagFromObtains(combination);


        if (fromObtains) {
            return fromObtains;
        }


        const fromAllCombinations =
            findFlagFromAllCombinations(combination);


        if (fromAllCombinations) {
            return fromAllCombinations;
        }


        return null;
    }


    /* ========================================================
       ПОЛУЧЕНИЕ ВЫБРАННЫХ ЧЕТЫРЁХ ЗНАЧЕНИЙ
    ======================================================== */

    function getSelectedCombination() {

        const selects =
            Array.from(
                wordSelectors.querySelectorAll("select")
            );


        return selects.map(
            select => select.value
        );
    }


    /* ========================================================
       ПОКАЗ РЕЗУЛЬТАТА
    ======================================================== */

    function showWordResult() {

        const values =
            getSelectedCombination();


        console.log(
            "Выбранная комбинация:",
            values
        );


        /* ----------------------------------------------------
           Проверка количества списков
        ---------------------------------------------------- */

        if (values.length !== 4) {

            console.error(
                "Typology: должно быть ровно 4 списка.",
                values
            );

            return;
        }


        /* ----------------------------------------------------
           Поиск флажка
        ---------------------------------------------------- */

        const resultFlag =
            findFlagByCombination(values);


        console.log(
            "Найденный флажок:",
            resultFlag
        );


        /* ====================================================
           КОМБИНАЦИЯ НАЙДЕНА
        ==================================================== */

        if (resultFlag) {

            wordResultName.textContent =
                resultFlag.name;


            wordResultImage.src =
                resultFlag.src;

            wordResultImage.alt =
                resultFlag.name;


            wordResultDescription.textContent =
                resultFlag.description || "";


            wordResult.classList.add("is-open");


            requestAnimationFrame(() => {

                wordResult.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });


            return;
        }


        /* ====================================================
           КОМБИНАЦИЯ НЕ НАЙДЕНА
        ==================================================== */

        wordResultName.textContent =
            "Флажок для этой комбинации пока не найден";


        wordResultImage.src =
            FLAG_PLACEHOLDER;

        wordResultImage.alt =
            "Флажок не найден";


        wordResultDescription.textContent =
            `Выбрано: ${values.join(" · ")}. ` +
            "Такой комбинации пока нет в базе.";


        wordResult.classList.add("is-open");


        requestAnimationFrame(() => {

            wordResult.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }


    /* ========================================================
       КНОПКА РЕЗУЛЬТАТА
    ======================================================== */

    wordResultButton.addEventListener(
        "click",
        showWordResult
    );


    /* ========================================================
       ЗАПУСК
    ======================================================== */

    renderFlagGrid();

    renderWordSelectors();


    console.log(
        "Typology загружена.",
        "Флажков:",
        FLAG_DATA.length,
        "дополнительных комбинаций:",
        ALL_COMBINATIONS.length
    );

});
