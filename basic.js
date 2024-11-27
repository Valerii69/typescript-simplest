"use strict";
let dog = { name: "Lassie", owner: "Rudd weatherman" };
function greetPet(pet) {
    console.log("Hello, " + pet.name);
}
console.log(greetPet(dog)); // OK
