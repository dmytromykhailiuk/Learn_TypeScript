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

<details><summary><b>Literal Types</b></summary>
<p>
    
```ts
let sex: 'men' | 'women';


//sex = 323; ERROR only 'men' | 'women'
sex = 'men'
```
</p>
</details>

<details><summary><b>Aliases & Custom Types</b></summary>
<p>
    
```ts
type Sex = 'men' | 'women';

let person: Sex;

person = 'women';

//----------------------

type Something = string | number;

let something: Something;

something = '';

// something = true; // - can't be
```
</p>
</details>

<details><summary><b>Typles</b></summary>
<p>
    
```ts
let arr:[string, number] = ['author', 2];


//arr = ['dfdfd', 23, true]
arr = ['dfdfd', 23]; //only
```
</p>
</details>

<details><summary><b>Enum</b></summary>
<p>
    
```ts
enum Role {AUTHOR = 'Author', SECOND = 2} // AUTHOR = 'Author' | SECOND = 2

let role = Role[2]; // Second

//console.log(role);

enum SportCar {Ford, Ferrari} // Ford = 0 | Ferrari = 1

let sportCar = SportCar.Ford;

// console.log(sportCar);

enum Car {Mazda = 34, Lada} // Mazda = 34 | Lada = 35

let car = Car.Lada;

console.log(car);
```
</p>
</details>
