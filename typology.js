// ============================================================
// ДАННЫЕ ФЛАЖКОВ
// ============================================================

const TYPOLOGY_FLAGS = [

    {
        id: "flag-1",
        name: "Флажок 1",
        src: "assets/флажок1.png",
        description: "Небольшое описание первого флажка.",
        obtain: "Условия получения первого флажка."
    },

    {
        id: "flag-2",
        name: "Флажок 2",
        src: "assets/флажок1.png",
        description: "Небольшое описание второго флажка.",
        obtain: "Условия получения второго флажка."
    },

    {
        id: "flag-3",
        name: "Флажок 3",
        src: "assets/флажок1.png",
        description: "Небольшое описание третьего флажка.",
        obtain: "Условия получения третьего флажка."
    },

    {
        id: "flag-4",
        name: "Флажок 4",
        src: "assets/флажок1.png",
        description: "Небольшое описание четвёртого флажка.",
        obtain: "Условия получения четвёртого флажка."
    },

    {
        id: "flag-5",
        name: "Флажок 5",
        src: "assets/флажок1.png",
        description: "Небольшое описание пятого флажка.",
        obtain: "Условия получения пятого флажка."
    },

    {
        id: "flag-6",
        name: "Флажок 6",
        src: "assets/флажок1.png",
        description: "Небольшое описание шестого флажка.",
        obtain: "Условия получения шестого флажка."
    },

    {
        id: "flag-7",
        name: "Флажок 7",
        src: "assets/флажок1.png",
        description: "Небольшое описание седьмого флажка.",
        obtain: "Условия получения седьмого флажка."
    },

    {
        id: "flag-8",
        name: "Флажок 8",
        src: "assets/флажок1.png",
        description: "Небольшое описание восьмого флажка.",
        obtain: "Условия получения восьмого флажка."
    },

    {
        id: "flag-9",
        name: "Флажок 9",
        src: "assets/флажок1.png",
        description: "Небольшое описание девятого флажка.",
        obtain: "Условия получения девятого флажка."
    },

    {
        id: "flag-10",
        name: "Флажок 10",
        src: "assets/флажок1.png",
        description: "Небольшое описание десятого флажка.",
        obtain: "Условия получения десятого флажка."
    },

    {
        id: "flag-11",
        name: "Флажок 11",
        src: "assets/флажок1.png",
        description: "Небольшое описание одиннадцатого флажка.",
        obtain: "Условия получения одиннадцатого флажка."
    },

    {
        id: "flag-12",
        name: "Флажок 12",
        src: "assets/флажок1.png",
        description: "Небольшое описание двенадцатого флажка.",
        obtain: "Условия получения двенадцатого флажка."
    }

];


// ============================================================
// DOM
// ============================================================

const flagsGrid =
    document.getElementById("flagsGrid");

const selectedFlagSection =
    document.getElementById("selectedFlagSection");

const selectedFlagImage =
    document.getElementById("selectedFlagImage");

const selectedFlagName =
    document.getElementById("selectedFlagName");

const selectedFlagHow =
    document.getElementById("selectedFlagHow");

const selectedFlagDescription =
    document.getElementById("selectedFlagDescription");

const faithSelect =
    document.getElementById("faithSelect");

const animalSelect =
    document.getElementById("animalSelect");

const resourceSelect =
    document.getElementById("resourceSelect");

const loyaltySelect =
    document.getElementById("loyaltySelect");

const combinationImage =
    document.getElementById("combinationImage");

const combinationName =
    document.getElementById("combinationName");

const combinationDescription =
    document.getElementById("combinationDescription");


// ============================================================
// ТЕКУЩИЙ ФЛАЖОК
// ============================================================

let currentFlag = null;


// ============================================================
// ЗАПОЛНИТЬ БЛОК "ПОДРОБНЕЕ"
// ============================================================

function selectFlag(flag) {

    currentFlag = flag;

    selectedFlagImage.src =
        flag.src;

    selectedFlagImage.alt =
        flag.name;

    selectedFlagName.textContent =
        flag.name;

    selectedFlagHow.textContent =
        flag.obtain;

    selectedFlagDescription.textContent =
        flag.description;

}


// ============================================================
// СОЗДАНИЕ КАРТОЧКИ ФЛАЖКА
// ============================================================
//
// Здесь специально НЕТ:
// - описания под флажком;
// - мини-окна;
// - реакции на наведение.
//
// Только название + картинка.
// ============================================================

function createFlagCard(flag) {

    const card =
        document.createElement("article");

    card.className =
        "flag-card";


    // ----------------------------------------------------------
    // НАЗВАНИЕ
    // ----------------------------------------------------------

    const name =
        document.createElement("div");

    name.className =
        "flag-name";

    name.textContent =
        flag.name;


    // ----------------------------------------------------------
    // КНОПКА С ФЛАЖКОМ
    // ----------------------------------------------------------

    const button =
        document.createElement("button");

    button.type =
        "button";

    button.className =
        "flag-button";

    button.setAttribute(
        "aria-label",
        flag.name
    );


    const image =
        document.createElement("img");

    image.src =
        flag.src;

    image.alt =
        flag.name;


    button.appendChild(
        image
    );


    // ----------------------------------------------------------
    // ДОБАВЛЯЕМ В КАРТОЧКУ
    // ----------------------------------------------------------

    card.appendChild(
        name
    );

    card.appendChild(
        button
    );


    // ----------------------------------------------------------
    // КЛИК
    // ----------------------------------------------------------

    button.addEventListener(
        "click",
        () => {

            // Убираем выделение у остальных
            document
                .querySelectorAll(
                    ".flag-card.open"
                )
                .forEach(
                    other => {

                        other.classList.remove(
                            "open"
                        );

                    }
                );


            // Выделяем текущий
            card.classList.add(
                "open"
            );


            // Заполняем информацию
            selectFlag(
                flag
            );


            // Плавно раскрываем
            selectedFlagSection.classList.add(
                "open"
            );

        }
    );


    return card;

}


// ============================================================
// ОТРИСОВКА ФЛАЖКОВ
// ============================================================

function renderFlags() {

    flagsGrid.innerHTML =
        "";


    TYPOLOGY_FLAGS.forEach(
        flag => {

            const card =
                createFlagCard(
                    flag
                );

            flagsGrid.appendChild(
                card
            );

        }
    );

}


// ============================================================
// ДАННЫЕ СОЧЕТАНИЙ
// ============================================================

const COMBINATIONS = {

    "свет|одиночка|сила|себе": {

        name:
            "Флажок силы",

        src:
            "assets/флажок1.png",

        description:
            "Тестовый результат сочетания. Здесь будет настоящее описание флажка."

    },


    "тьма|семья|люди|семье": {

        name:
            "Флажок семьи",

        src:
            "assets/флажок1.png",

        description:
            "Тестовый результат сочетания. Здесь будет описание соответствующего типа."

    },


    "свет|стая|знания|племени": {

        name:
            "Флажок племени",

        src:
            "assets/флажок1.png",

        description:
            "Тестовый результат сочетания. Здесь можно будет написать небольшую характеристику."

    }

};


// ============================================================
// ОБНОВЛЕНИЕ РЕЗУЛЬТАТА СОЧЕТАНИЯ
// ============================================================

function updateCombination() {

    const key = [

        faithSelect.value,
        animalSelect.value,
        resourceSelect.value,
        loyaltySelect.value

    ].join("|");


    const result =
        COMBINATIONS[key];


    // ----------------------------------------------------------
    // НЕ ВСЕ ВЫБРАНО
    // ----------------------------------------------------------

    if (
        !faithSelect.value ||
        !animalSelect.value ||
        !resourceSelect.value ||
        !loyaltySelect.value
    ) {

        combinationImage.src =
            "assets/флажок1.png";

        combinationName.textContent =
            "Выбери все варианты";

        combinationDescription.textContent =
            "После выбора четырёх параметров здесь появится соответствующий флажок, его название и описание.";

        return;

    }


    // ----------------------------------------------------------
    // НАЙДЕН РЕЗУЛЬТАТ
    // ----------------------------------------------------------

    if (result) {

        combinationImage.src =
            result.src;

        combinationName.textContent =
            result.name;

        combinationDescription.textContent =
            result.description;

        return;

    }


    // ----------------------------------------------------------
    // РЕЗУЛЬТАТ НЕ ЗАДАН
    // ----------------------------------------------------------

    combinationImage.src =
        "assets/флажок1.png";

    combinationName.textContent =
        "Флажок пока не задан";

    combinationDescription.textContent =
        "Для этой комбинации пока не задан результат.";

}


// ============================================================
// SELECT
// ============================================================

faithSelect.addEventListener(
    "change",
    updateCombination
);

animalSelect.addEventListener(
    "change",
    updateCombination
);

resourceSelect.addEventListener(
    "change",
    updateCombination
);

loyaltySelect.addEventListener(
    "change",
    updateCombination
);


// ============================================================
// ЗАПУСК
// ============================================================

renderFlags();


// ============================================================
// ПЛАВНОЕ ПОЯВЛЕНИЕ СТРАНИЦЫ
// ============================================================

window.addEventListener(
    "load",
    () => {

        requestAnimationFrame(
            () => {

                requestAnimationFrame(
                    () => {

                        document.body.classList.add(
                            "page-ready"
                        );

                    }
                );

            }
        );

    }
);
