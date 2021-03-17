'use strict'

//2)
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

//4)
let toWriteExpenses = prompt("Введите обязательную статью расходов в этом месяце");
let howMuchExpenses = prompt("Во сколько обойдется?");

let expenses = {
    toWriteExpenses: howMuchExpenses
};

//3)
let appData = {
    money: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: "",
    income: "",
    savings: false

};


//5)

let alarm1 = alert("Бюджет на 1 день: " + appData.money/30);

console.log("2)");
console.log(money);
console.log(time);

console.log("3)");
console.log(appData.money);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenses);
console.log(appData.income);
console.log(appData.savings);

console.log("4)");
console.log(toWriteExpenses);
console.log(howMuchExpenses);

