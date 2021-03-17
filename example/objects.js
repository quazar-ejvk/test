'use strict'

/* let user = {
    name: "Igor",
    age: 45,
};

let key = prompt("Что вывести?", "name");

//доступ к свойству через переменную
alert(user[key]); // Igor(если ввести name); */

// #1 Привет, object
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//console.log(user.name + " " + user.surname);


//#2 Проверка на пустоту
//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
alert(isEmpty(schedule));
schedule["time"] = "04:20!";
alert(isEmpty(schedule));

//#3 Объекты-константы
//Можно ли изменить объект, объявленный с помощью const?

const user = {
    name: "John",
};

user.name = "Mike";

console.log(user.name); // можно.Объявление const защищает только саму переменную от изменений.
//Другими словами, user хранит ссылку на объект. И это не может быть изменено. Но содержимое объекта менять можно.

//#4 Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
//Написать код для суммирования всех зарплат и сохранить результат в переменной sum.
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

//#5 Умножаем все числовые свойства на 2
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    for (let key in obj){
        if (typeof(obj[key]) == 'number') {
            obj[key] = obj[key]*2;
        }
    }
}

multiplyNumeric(menu);

for (let key in menu) {
    console.log(menu[key]);
}