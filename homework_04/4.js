"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

// наивная релизация
let stringOfX= "x";
for (let i = 0; i < 5; i++) {
    console.log(stringOfX);
    stringOfX += "x";
}

// власть данной мне Гуглом, призываю мощь Стандартной Библиотеки!
let stringOfY = "y";
for (let i = 1; i <= 5; i++) {
    console.log(stringOfY.repeat(i));
}

// хотя надо отметить, что str.repeat под капотом устроен чуток сложнее, чем кажется на первый взгляд.
