let money = prompt("Ваш бюджет на месяц?", "X в рублях");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let key1 = prompt("Введите обязательную статью расходов в этом месяце");
let key2 = prompt("Во сколько обойдется?");
let key3 = prompt("Введите вторую обязательную статью расходов в этом месяце");
let key4 = prompt("Во сколько обойдется?");
let arr = [];
let expenses = {
    key1: key2,
    key3: key4
};
let optionalExpenses = {};
let AppData = {
    money1: money,
    time1: time,
    expenses,
    optionalExpenses,
    income: arr,
    savings: false
};
let budget = (money - expenses.key1 - expenses.key3) / 30;
alert (budget);
