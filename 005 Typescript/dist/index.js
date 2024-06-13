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
let textBox = {
    drag: () => { },
    resize: () => { }
};
let measurement = "cm";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    printCoordinates() {
        console.log("This.x: " + this.x + ", This.y: " + this.y);
    }
    getX() {
        return this.x;
    }
    setX(value) {
        this.x = value;
    }
}
let point = new Point(1, 2);
point.printCoordinates();
class Point2 {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    printCoordinates() {
        console.log("This._x: " + this._x + ", This._y: " + this._y);
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        this._x = value;
    }
    set y(value) {
        this._y = value;
    }
}
let point2 = new Point2(4, 5);
point2.printCoordinates();
point2.x = 10;
point2.y = 10;
point2.printCoordinates();
//# sourceMappingURL=index.js.map