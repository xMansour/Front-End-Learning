"use strict";
console.log("Hi");
let age = 20;
let sales = 123456789;
let course;
let isPublished = true;
let level;
let emptyArr = [];
emptyArr[0] = 1;
let numbers = [1, 2, 3];
let user = [1, "Mansour"];
;
let mySize = "L";
console.log(mySize);
function calculateTax(income) {
    if (income < 5000)
        return 0;
    else
        return income * 1.2;
}
let employee = {
    id: 1, name: "Mansour", retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 1, name: "Mansour", retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("20"));
//# sourceMappingURL=index.js.map