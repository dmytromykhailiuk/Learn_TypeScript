
//----------------------------------------------------------------------

//----We need to return the function to pass the parameters in decorator

function Logger2(logString: string) { // Take parameters
  return function(constructor: Function) { // Decorator always must accept the class constructor
    console.log(logString);                                  // log-1
    console.log(constructor);                                // log-2
  };
}

@Logger2('LOGGING - PERSON')   // Now we can pass parameters in decorator 
class Person2 {
  name = 'Dimon';

  constructor() {
    console.log('Creating person object...');                // log-3
  }
}

const pers2 = new Person2();

console.log(pers2);                                          // log-4
