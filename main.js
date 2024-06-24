// 1
let userName = prompt("Имя:");
alert(`Ку, ${userName}!`);

// 2
const currentYear = 2024; // Поточний рік
let birthYear = prompt("В каком году родился?:");
let age = currentYear - birthYear;
alert(`Вам ${age} лет.`);

// 3
let money = prompt("Сколько у вас деняк:");
let chocolatePrice = prompt("Стоимость одной шоколадки:");
let chocolateCount = Math.floor(money / chocolatePrice);
let change = money % chocolatePrice;
alert(`Ты можешь купить хмм... ${chocolateCount} шоколадок и у тебя останется ${change} денег.`);
