/*
  Статический набор декора.
  Положите PNG в папку assets и добавьте сюда новые элементы.

  category:
    plan = Общий план
    near = Ближняя ветка
    cat  = На коте
    far  = Дальняя ветка
    set  = Сеты

  z — порядок отрисовки:
    Общий план -> Ближняя ветка -> На коте -> Дальняя ветка
*/
const DECOR_DATA = [
  { id: "plan-1", name: "Общий план", price: 20, category: "plan", src: "assets/плашка4.png" },
  { id: "near-1", name: "Ближняя ветка", price: 15, category: "near", src: "assets/плашка3.png" },
  { id: "cat-1", name: "На коте", price: 10, category: "cat", src: "assets/плашка4.png" },
  { id: "far-1", name: "Дальняя ветка", price: 10, category: "far", src: "assets/плашка3.png" },

  // Пример сета. Замените src на собственный PNG.
  { id: "set-1", name: "Базовый сет", price: 50, category: "set", src: "assets/плашка3.png" },

  {
    id: "decor-2",
    name: "Плашка 2",
    price: 20,
    category: "plan",
    src: "assets/плашка4.png"
  },

  {
    id: "decor-3",
    name: "Плашка 3",
    price: 20,
    category: "near",
    src: "assets/плашка3.png"
  }

];
