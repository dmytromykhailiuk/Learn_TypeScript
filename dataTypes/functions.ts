let sum: (a: number, b: number) => number;

sum = function(a: number, b: number): number {
  return a + b;
}

// console.log(sum(2, 6));

//---------------------------------------

function log(something: number | string):void {
  console.log(something);
}

// log(46);

//------------------------------------------

function throwError():never {
  throw new Error
}

// throwError();

//----------------------------------------

let a: unknown;

a = 2332;
a = 'sdsds'
let b: string
// b = a; // Error

if (typeof a === "string") {
  b = a // Valid
}