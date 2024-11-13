// The parameter's type annotation is an object type
// function printCoord(parameter: { first: number; last?: number }) {
//   console.log("The coordinate's x value is " + parameter.x);
//   console.log("The coordinate's y value is " + parameter.y);
// }
// // printCoord({ first: 3, last: 7 });
// printCoord({ first: 3 });

function printName(obj: { first: string; last?: string }) {

/*   // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
    // 'obj.last' is possibly 'undefined'. */
    
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}