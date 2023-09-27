"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const firstNumber = Number(prompt("Введите первое число: "));
const secondNumber = Number(prompt("Введите второе число: "));
const thirdNumber = Number(prompt("Введите третье число: "));

const maxNumber = (first, second, third) => {
    // И вот тут начало пахнуть сортировкой пузырьком, ага.
    const numbersArray = [first, second, third];
    let maxNumber = first;
    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] > maxNumber) {
            maxNumber = numbersArray[i];
        }
    }
    // так-то функция должна делать что-то одно. но у нас по условия функция-комбайн.
    console.log(`Максимальное значение среди чисел ${first}, ${second}, ${third} равно ${maxNumber}.`);
}

maxNumber(firstNumber, secondNumber, thirdNumber);