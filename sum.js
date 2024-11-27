"use strict";
// type ABC = { a: number; b: number; c: number };
// function sum({ a, b, c }: ABC) {
//     console.log(a + b + c);
// }
const src = [1, 2, 3];
const dst = [0];
src.forEach((el) => dst.push(el));
console.log(dst); //[0, 1, 2, 3, 0]
