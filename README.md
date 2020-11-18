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

<hr/>

## Classes & Interfaces:

<details><summary><b>Basic Classes</b></summary>
<p>
    
```ts
class Department {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}





//-------------------SHORT SYNTAX--------------------------------------

class Department1 {
  constructor(private id: string, private name: string) {} // This equal to previous
}





//---------PUBLIC----------This is the default type---------------------

class Department2 {
  constructor(public id: number, public name: string) {}

  public increaseId(val: number) {
    this.id += val;
  }
}

const department2 = new Department2(3, 'IT');
//console.log(department2.id); // 3

department2.id = 6;
// console.log(department2.id); // 6

department2.increaseId(12);
// console.log(department2.id); // 18





//------------PRIVATE-----Can only be called within a class---------------

class Department3 {
  constructor(private id: number, private name: string) {}

  private increaseId(val: number) {
    this.id += val;
  }

  public logName():void {
    console.log(this.name);
  } 
}

const department3 = new Department3(3, 'IT');
//console.log(department3.id); // 3 - Error // can not call private proprty

//department3.id = 6; // Error // can not change private proprty
// console.log(department3.id); // 3 - can not change private property

//console.log(department3.increaseId(12)); // undefined ---- becouse can not call private method

//console.log(department3.name); // IT - Error // can not call private proprty
//department3.logName(); // IT 





//---------------READONLY properties-------------------------------------

class Department4 {
  constructor(public readonly id: number, public readonly name: string) {} 
}

const newDepartment = new Department4(41, "Dimon");


// newDepartment.id = 2 // Cant change readonly property
// console.log(newDepartment.id); // but can read

// newDepartment.name = 'Dmytro' // Cant change readonly property
// console.log(newDepartment.name); // but can read
```
</p>
</details>

<details><summary><b>Inheritance</b></summary>
<p>
    
```ts
//--------------------Inheritance--------------------------------

class Animal {
  constructor(private name: string, public canFly: boolean) {}
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, false)
  }

  // public getName():void {
  //   console.log(this.name); // name is Animal private property and Dod does't have name
  // }

  public isCanFly():void {
    console.log(this.canFly);
  }
}

const rex = new Dog('Rex');
// rex.isCanFly() // false




//------------------Protrcted Props amd Methods------------------------------

class Animal1 {
  constructor(protected name: string, public canFly: boolean) {}

  public getName():void {
    console.log(this.name);
  }

  protected isCanFly():void {
    console.log(this.canFly);
  }
}


class Dog1 extends Animal1 {
  constructor(name: string) {
    super(name, false)
  }
}

const bobic = new Dog1('bobic');
// bobic.getName(); // Works!!!
// bobic.isCanFly(); // Dostn't work!!! Becouse it's child's private method

const animal1 = new Animal('shark', false);
// animal1.isCanFly(); // Dostn't work!!! Becouse it's not your own method





//-------------------------Getters & Setters---------------------------


class Animal2 {
  constructor(public _name: string) {}


  get name() {
    return this._name
  }
  
  set name(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid name!');
    }
    this._name= value;
  }
}

const fly = new Animal2('bzz');
// console.log(fly.name); // bzz

fly.name = 'Myyy'; // set value like a property
// console.log(fly.name); // Myyy





//------------------Static------We dont need to create instance--------
//------------------------------We can use class metods and properties-

class Animal3 {
  static genus: string[] = [];
  
  constructor(public name: string) {}

  static addNewgenus(...newGenus: string[]) {
    Animal3.genus.push(...newGenus);
  }
}

// console.log(Animal3.genus); // []

Animal3.addNewgenus('mammals', 'birds', 'fishes'); 
//console.log(Animal3.genus); // ["mammals", "birds", "fishes"]






//-----------Abstract Classes-----------------------------------------

abstract class Department5 {

  constructor(protected readonly id: number, public name: string) {}

  abstract describe(this: Department): void;
}

class ITDepartment5 extends Department5 {

  admins: string[];

  constructor(id: number, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

// const newDepartment5 = new Department5(21, 'l') // we can't create instance of Abstract Class

// Abstract class is used as a pattern !!!!

const newITDepartment5 = new ITDepartment5(21, []);
// newITDepartment5.describe(); // IT Department - ID: 21





//-------------------------Singleton------------------------------------

class Singleton {
  private static instance: Singleton;

  private constructor() { }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic() {

  }
}


function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

// clientCode(); // Singleton works, both variables contain the same instance.
```
</p>
</details>

<details><summary><b>Interfaces</b></summary>
<p>
    
```ts
//-----------------Interfaces-----------------------

interface Card {
  readonly id: number
  img: string
  title: string
  log(str: string): void  // method interface 
  description?: string
}

const card: Card = {
  id: 1, // readonly pronerty, becouse iterface has
  img: '/',
  title: 'Some card',
  log: (str: string) => console.log(str)
}

//card.id = 12 // id - readonly // We can't change

// class CardClass implements Card{
//   constructor(public id: number, public title: string, private img: string) {}

//   log(str: string){
//     console.log(str);
//   }
  
// } // Class invalid becouse img - private





//------------Interfaces with function--------------------------

interface Log {
  (name: string, surname: string):void
}
let logFullName: Log

logFullName = (name: string, surname: string): void => {
  console.log(name + ' ' + surname);  
}  //  valid

// class LogClass1 implements Log {
//   log(a:string, b:string):void{     // Invalid
//     console.log(a + ' ' + b);       // We can't use function interface for class
//   }
// }




//--------------------Extending Interfaces---------------------------

interface Named {
  name: string
}

interface Aged {
  age?: number
}

interface Gritable extends Named, Aged { 
  // can extends from more than 1 iterfaces
  // but only interface can

  greet(phase: string):void
}

interface WhatAreYouLookingFor {
  whatAreYouLookingFor():void
}


class Consultant implements Gritable, WhatAreYouLookingFor {  
  // can implements from more than 1 iterfaces

  constructor(public name: string, public age: number) {}

  greet(str: string){
    console.log('Hi! Welcome in ours shop');
  }

  whatAreYouLookingFor(){
    console.log("What are you looking for"); 
  }
}
```
</p>
</details>

<hr/>

## Advanced Typing Concepts:

<details><summary><b>Interseption Types</b></summary>
<p>
    
```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
```
</p>
</details>

<details><summary><b>Function Overloads</b></summary>
<p>
    
```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max', ' Schwarz');
result.split(' ');
```
</p>
</details>

<details><summary><b>Optionl Chaning</b></summary>
<p>
    
```ts
const fetchedUserData1 = {
  id: 'u1',
  name: 'Max',
  //job: { title: 'CEO', description: 'My own company' }
};

// console.log(fetchedUserData1?.job?.title); // undefined insted of Error
```
</p>
</details>

<details><summary><b>Nullish Coalescing</b></summary>
<p>
    
```ts
const userInput = undefined;

const storedData = userInput ?? 'DEFAULT'; // Only for null value - ??

console.log(storedData); // DEFAULT
```
</p>
</details>

<details><summary><b>Type Guard</b></summary>
<p>
    
```ts
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car5 {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car5 | Truck;

const v1 = new Car5();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
```
</p>
</details>

<details><summary><b>Discriminated Union</b></summary>
<p>
    
```ts
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal5 = Bird | Horse;

function moveAnimal(animal: Animal5) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});
```
</p>
</details>

<details><summary><b>Type Casting</b></summary>
<p>
    
```ts
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}
```
</p>
</details>

<details><summary><b>Index Properties</b></summary>
<p>
    
```ts
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
};
```
</p>
</details>
