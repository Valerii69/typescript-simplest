function myFunc(someArg: number) {
    return someArg >= 3;
}

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(3));
}


myFunc.description = "default description";

console.log(doSomething(myFunc));