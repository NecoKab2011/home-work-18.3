const listElement = document.querySelectorAll("#categories > li");
console.log(`У списку ${listElement.length} категорії.`);

listElement.forEach((list) => {
    const titleElement = list.querySelector("h2").textContent;
    const itemElement = list.querySelectorAll("ul > li").length;
    console.log(`Категорія: ${titleElement}`);
    console.log(`Кількість елементів: ${itemElement}`);
  });


const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const listIngr = document.querySelector("#ingredients");
for (const i of ingredients) {
  listIngr.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
}

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listImg = document.querySelector("#gallery");
for (const { url, alt } of images) {
  listImg.insertAdjacentHTML("beforeend", `<img src="${url}" alt="${alt}">`);
}

let counterValue = 0;
const valueSpan = document.querySelector("#value");
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

const decrement = (counterValue, valueSpan) => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
};

const increment = (counterValue, valueSpan) => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
};
