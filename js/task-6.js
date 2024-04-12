// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

//     Розміри першого <div> елемента мають бути 30px на 30px.
//     Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
//     Усі елементи повинні мати випадковий колір фону.Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const numberInput = document.querySelector('#controls input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", (event) => {
    const amount = numberInput.value;
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        numberInput.value = "";
    }
});

function createBoxes(amount) {
    let markup = "";
    let size = 30;
    let bgColor;
    boxes.innerHTML = "";

    for (let i = 1; i <= amount; i++) {
        bgColor = getRandomHexColor();
        markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${bgColor}"></div>`;
        size += 10;
    }

    boxes.insertAdjacentHTML("afterbegin", markup);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
    boxes.innerHTML = "";
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
