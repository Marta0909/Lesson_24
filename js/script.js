"use strict"

let someItems = [22, 'Марта', true];
console.log(someItems);
console.log(someItems.length);
console.log(typeof someItems);

//  метод перебору масиву

someItems.forEach((someItem, index) => {
	console.log(someItem);
	console.log(index);
});

// додати елемент в масив

let usersNames = ["Марта", "Роман", "Ярослав"];
usersNames.push("Юля");
console.log(usersNames);

// пошук в масиві і додавання в масив

console.log(usersNames.includes("Марта"));

if (!usersNames.includes("Катерина")) {
	usersNames.push("Катерина");
	console.log(usersNames);
}

//  чи це масив?

console.log(Array.isArray(usersNames));

// сотування чисел

let arrayOne = [6, 12, 45, 1, 34, 54];
console.log(arrayOne.sort());

function compareNumeric(a, b) {
	return a - b;
}
console.log(arrayOne.sort(compareNumeric));

// з масива в рядок

let usersNamesStr = usersNames.join('.');
console.log(usersNamesStr);

// функції

const numOne = 20;
const numTwo = 30;

function calcSum(a, b) {
	console.log(a + b);
}

calcSum(numOne, numTwo);

// видимість

let someVar = 10;

function someFunc() {
	console.log(someVar);
}

someFunc();

// стрілочні функції

let showText = (text) => console.log(text);
showText('Привіт!')


// DOM

// WINDOW

let windowWidth = window.innerWidth;
console.log(windowWidth);

let windowHeight = window.innerHeight;
console.log(windowHeight);
/*

alert("ти вчиш JS!");

let confirmAnswer = confirm("ти вчиш JS?");
console.log(confirmAnswer);

let promptAnswer = prompt("як тобі JS?");
console.log(promptAnswer);

*/

// навігація по документу

const headElement = document.head;
console.log(headElement);

// усі дочірні елементи

const bodyElement = document.body;
const childNodes = bodyElement.children;
console.log(childNodes);


const someObject = document.querySelector('div');
console.log(someObject);

// отримати те, що всередині обєкту

const divItems = document.querySelectorAll('.div__item');
divItems.forEach(divItem => {
	console.log(divItem.innerHTML);
});

// змінити обєкт

/*
const headerItems = document.querySelectorAll('.div__item');
headerItems.forEach((headerItem, index) => {
	headerItem.innerHTML = `${index}`;
});

*/


// Задачі з домашки

/*
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');

*/

showMessage();
function showMessage() {
	console.log('Повідомлення');
}


/*
showMessage();
let showMessage = function () {
	console.log('Message');
}
*/

let showMessagE;  // Відео JS - Функції в Java Script задача 4

if (2 > 1) {
	showMessagE = function () {
		console.log('Сообщение');
	};
}
showMessagE();

let arr = ['Ваня', 'Іштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);


let array = ['Ваня', 'Іштван',];  // Відео JS - Масиви. задача 2
console.log(array);
array.push('Оля');
console.log(array);
array.splice(1, 1, 'Петя');
console.log(array);
let result = array.find(function (item, index, array) {
	return item === 'Петя';
});
console.log(result);
delete array[0];
console.log(array[0]);
array.unshift('Маша', 'Паша');
console.log(array);

let arraY = ['Ваня', 'Іштван', 'Оля',];    // Відео JS - Масиви. задача 3
let removed = arraY.splice(1, 1);
console.log(arraY);
console.log(removed);

let str = 'Ваня, Иштван, Оля';    // Відео JS - Масиви. задача 4
let array1 = str.split(',');
console.log(array1);


const greeting = document.querySelector('[data-say-hi]');  // Відео JS - DOM. задача 1
console.log(greeting);
if (greeting.hasAttribute('data-say-hi')) {
	console.log('yes');
}

const namesList = document.querySelectorAll('li');   // Відео JS - DOM. задача 2
console.log(namesList[1]);


const toDo = document.querySelectorAll('.like');   // Відео JS - DOM. задача 3
console.log(toDo);

const list = document.querySelector('ul');  // Відео JS - DOM. задача 4
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);


const mainElement = document.documentElement;    // Відео JS - Розміри, прокрутка, коорд.  задача 1
const mainElementWidth1 = mainElement.clientWidth;

console.log(mainElementWidth1);

const windowWidth1 = window.innerWidth;

console.log(windowWidth1);

const width = windowWidth1 - mainElementWidth1;
console.log(width);  // не розумію чому в мене полоса прокрутки дорівнює 0


function scroll() {                          // Відео JS - Розміри, прокрутка, коорд.  задача 2
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
}
setTimeout(scroll, 1000);


const item1 = document.querySelector('ul');            // Відео JS - Розміри, прокрутка, коорд.  задача 3
const getItemCoords1 = item1.getBoundingClientRect();
console.log(getItemCoords1);

const item2 = document.querySelector('.div__item1');
const getItemCoords2 = item2.getBoundingClientRect();
console.log(getItemCoords2);

const item3 = document.querySelector('.like');
const getItemCoords3 = item3.getBoundingClientRect();
console.log(getItemCoords3);


