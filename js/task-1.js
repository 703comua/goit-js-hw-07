// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//     Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//     Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log("Number of categories: ", items.length);

items.forEach(item => {
	const header = item.querySelector('h2');
	console.log("Category: ", header.textContent)
	const subCategories = item.querySelector('ul');
	const subCategoryItems = subCategories.querySelectorAll('li');
	console.log("Elements: ", subCategoryItems.length);
});


