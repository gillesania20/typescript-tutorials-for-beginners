"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
let prop = 'Pizza';
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
console.log(todaysTransactions[prop]);
console.log(todaysNet(todaysTransactions));
// for(const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
logStudentKey(student, 'GPA');
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
