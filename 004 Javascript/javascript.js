
createCourse("Javascript");
console.log(a);


function createCourse(courseName) {
    console.log("Creating " + courseName);
}

let sum = function (a, b) {
    return a + b;
}


let diff = (a, b) => a - b;

let operate = (fun, a, b) => fun(a, b);

var a = 10;
console.log(a);
createCourse("DSA");

console.log(operate(sum, 5, 4));
console.log(operate(diff, 5, 3));