let money = prompt("Ваш бюджет на месяц?", "X в рублях");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let key1 = prompt("Введите обязательную статью расходов в этом месяце");
let key2 = prompt("Во сколько обойдется?");
let key3 = prompt("Введите вторую обязательную статью расходов в этом месяце");
let key4 = prompt("Во сколько обойдется?");

let optionalExpenses = {};
let AppData = {
    money1: money,
    time1: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses.key1 = key2;
appData.expenses.key3 = key4;

alert((money - appData.expenses.key1 - appData.expenses.key3) / 30);