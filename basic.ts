interface Pet {
    name: string;
}
let dog = { name: "Lassie", owner: "Rudd weatherman" };
function greetPet(pet: Pet) {
    console.log("Hello, " + pet.name);
}
console.log(greetPet(dog)); // OK