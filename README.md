# TypeScript <code><img height="30" title="TypeScript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code> 
<code> - is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.</code> 

## TypeScript Data types:

<details><summary><b>Objects</b></summary>
<p>
    
```ts
type Obl = {
  name: string;
  age: number;
  isStudent?: boolean;
  position: string
}


let obj: Obl = {
  name: 'Ivan',
  age: 30,
  position: 'sinior'
}
```
</p>
</details>

<details><summary><b>Functions</b></summary>
<p>
    
```ts
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
```
</p>
</details>
