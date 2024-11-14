"use strict";
/* function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");

// Error
// printId(myID: 22342);
 */
function printId(id) {
    //   console.log(id.toUpperCase()); Error!
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
