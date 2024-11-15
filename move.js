"use strict";
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
const fish = { swim: () => console.log("Fish is swimming") };
const bird = { fly: () => console.log("Bird is flying") };
move(fish); // Виведе: "Fish is swimming"
move(bird); // Виведе: "Bird is flying"
