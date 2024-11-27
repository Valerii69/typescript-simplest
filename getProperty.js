"use strict";
function GetProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
GetProperty(x, "a");
// GetProperty(x, "m");//ключа "m" не маэ в масиві 
GetProperty(x, "d");
