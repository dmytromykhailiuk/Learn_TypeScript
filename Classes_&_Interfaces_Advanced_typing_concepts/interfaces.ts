
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