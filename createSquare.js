"use strict";
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
// ---cut---
let squareOptions = { color: "red" };
let mySquare = createSquare(squareOptions);
