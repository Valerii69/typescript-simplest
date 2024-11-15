"use strict";
function myFunc(someArg) {
    return someArg >= 3;
}
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(3));
}
myFunc.description = "default description";
console.log(doSomething(myFunc));
