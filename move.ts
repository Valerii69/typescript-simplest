type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
const fish: Fish = { swim: () => console.log("Fish is swimming") };
const bird: Bird = { fly: () => console.log("Bird is flying") };

move(fish); // Виведе: "Fish is swimming"
move(bird); // Виведе: "Bird is flying"