"use strict";
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
const date = new Date();
date.setFullYear(2022);
logValue(date); // Виведе дату у форматі UTC, наприклад: "Tue, 31 Dec 2023 22:00:00 GMT"
logValue("hello world");
