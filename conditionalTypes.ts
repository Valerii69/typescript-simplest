interface IdLabel {
    /* some fields */
    id: number;
}
interface NameLabel {
    /* other fields */
    name: string;
}
type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;
// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}

let d = createLabel("typescript");
console.log(a)

let b = createLabel(2.8);
console.log(b)

let c = createLabel(Math.random() ? "hello" : 42);

console.log(createLabel("test"));