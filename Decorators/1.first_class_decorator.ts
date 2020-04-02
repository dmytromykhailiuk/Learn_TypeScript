
//----------------------------------------------------------------

//  Decorator is a simple function that always accept the class constructor.
//  Decorators are using only for classes, classes methods, and properties

function Logger1(constructor: Function) { // Accepting the class constructor
  console.log('Logging...');                      // first log
  console.log(constructor);                       // second log
}

@Logger1   // add decorator to class (always before the declaration)
class Person1 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');     // third log
  }
}

const pers1 = new Person1();                      

console.log(pers1);                               // fourth log