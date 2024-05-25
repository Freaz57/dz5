//Задание 1
function cube(number) {
    return number ** 3;
}

console.log(cube(2) + cube(3)); // Вывод результата 2^3 + 3^3

//Заадание 2

function calculateSalary(input) {
    if (isNaN(input)) {
        console.log("Значение задано неверно");
        return;
    }

    let salary = input * 0.87;
    console.log(`Размер заработной платы за вычетом налогов равен ${salary}`);
}

let userInput = prompt("Введите сумму заработной платы:");
calculateSalary(Number(userInput));

//Задание 3
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

let number1 = +prompt("Введите первое число:");
let number2 = +prompt("Введите второе число:");
let number3 = +prompt("Введите третье число:");

console.log(findMax(number1, number2, number3));

//Задание 4

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a > b ? a - b : b > a ? b - a : 0;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль!';
}

// Примеры использования:
console.log(sum(2, 6)); // Выводит 8
console.log(subtract(10, 5)); // Выводит 5
console.log(multiply(3, 4)); // Выводит 12
console.log(divide(12, 3)); // Выводит 4
