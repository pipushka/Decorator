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

const selectedFlagSection = document.getElementById(
    "selectedFlagSection"
);

const flagsGrid = document.getElementById(
    "flagsGrid"
);

const selectedFlagImage = document.getElementById(
    "selectedFlagImage"
);

const selectedFlagName = document.getElementById(
    "selectedFlagName"
);

const selectedFlagHow = document.getElementById(
    "selectedFlagHow"
);

const selectedFlagDescription = document.getElementById(
    "selectedFlagDescription"
);

const faithSelect = document.getElementById(
    "faithSelect"
);

const animalSelect = document.getElementById(
    "animalSelect"
);

const resourceSelect = document.getElementById(
    "resourceSelect"
);

const loyaltySelect = document.getElementById(
    "loyaltySelect"
);

const combinationImage = document.getElementById(
    "combinationImage"
);

const combinationName = document.getElementById(
    "combinationName"
);

const combinationDescription = document.getElementById(
    "combinationDescription"
);


// ============================================================
// ПОКАЗ ИНФОРМАЦИИ О ФЛАЖКЕ
// ============================================================

function selectFlag(flag) {

    if (!flag) {
        return;
    }

    selectedFlagImage.src = flag.src;
    selectedFlagImage.alt = flag.name;

    selectedFlagName.textContent = flag.name;
    selectedFlagHow.textContent = flag.obtain;
    selectedFlagDescription.textContent = flag.description;
}


// ============================================================
// СОЗДАНИЕ КАРТОЧКИ ФЛАЖКА
// ============================================================

function createFlagCard(flag) {

    const card = document.createElement("article");

    card.className = "flag-card";


    // --------------------------------------------------------
    // НАЗВАНИЕ
    // --------------------------------------------------------

    const name = document.createElement("div");

    name.className = "flag-name";
    name.textContent = flag.name;


    // --------------------------------------------------------
    // КНОПКА С ФЛАЖКОМ
    // --------------------------------------------------------

    const button = document.createElement("button");

    button.type = "button";
    button.className = "flag-button";

    button.setAttribute(
        "aria-label",
        flag.name
    );


    // --------------------------------------------------------
    // ИЗОБРАЖЕНИЕ
    // --------------------------------------------------------

    const image = document.createElement("img");

    image.src = flag.src;
    image.alt = flag.name;


    button.appendChild(image);


    // --------------------------------------------------------
    // КЛИК
    // --------------------------------------------------------

    button.addEventListener(
        "click",
        () => {

            // Убираем выделение со всех остальных
            document
                .querySelectorAll(".flag-card.open")
                .forEach((otherCard) => {

                    otherCard.classList.remove("open");

                });


            // Выделяем выбранный
            card.classList.add("open");


            // Обновляем информацию
            selectFlag(flag);


            // Открываем общий блок
            selectedFlagSection.classList.add("open");


            // Плавно прокручиваем к информации
            setTimeout(() => {

                selectedFlagSection.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

            }, 50);
        }
    );


    // --------------------------------------------------------
    // СОБИРАЕМ КАРТОЧКУ
    // --------------------------------------------------------

    card.appendChild(name);
    card.appendChild(button);


    return card;
}


// ============================================================
// ОТРИСОВКА ФЛАЖКОВ
// ============================================================

function renderFlags() {

    if (!flagsGrid) {
        return;
    }

    flagsGrid.innerHTML = "";


    TYPOLOGY_FLAGS.forEach((flag) => {

        const card = createFlagCard(flag);

        flagsGrid.appendChild(card);

    });
}


// ============================================================
// ДАННЫЕ СОЧЕТАНИЙ
// ============================================================

const COMBINATIONS = {

    "свет|одиночка|сила|себе": {

        name: "Флажок силы",

        src: "assets/флажок1.png",

        description:
            "Тестовый результат сочетания. Здесь будет настоящее описание флажка."

    },


    "тьма|семья|люди|семье": {

        name: "Флажок семьи",

        src: "assets/флажок1.png",

        description:
            "Тестовый результат сочетания. Здесь будет описание соответствующего типа."

    },


    "свет|стая|знания|племени": {

        name: "Флажок племени",

        src: "assets/флажок1.png",

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


    const result = COMBINATIONS[key];


    // --------------------------------------------------------
    // НЕ ВСЕ ПАРАМЕТРЫ ВЫБРАНЫ
    // --------------------------------------------------------

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


    // --------------------------------------------------------
    // ГОТОВАЯ КОМБИНАЦИЯ
    // --------------------------------------------------------

    if (result) {

        combinationImage.src =
            result.src;

        combinationName.textContent =
            result.name;

        combinationDescription.textContent =
            result.description;

        return;
    }


    // --------------------------------------------------------
    // КОМБИНАЦИЯ НЕ ЗАДАНА
    // --------------------------------------------------------

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
// ПЛАВНОЕ ПОЯВЛЕНИЕ
// ============================================================

window.addEventListener(
    "load",
    () => {

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                document.body.classList.add(
                    "page-ready"
                );

            });

        });

    }
);
