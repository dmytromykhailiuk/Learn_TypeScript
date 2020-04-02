
//----------------------------------------------------------------------------

//----------------------When the decorator works------------------------------


function Logger4(logString: string) {
  console.log('LOGGER FACTORY');                                    // log - 1
  return function(constructor: Function) {
    console.log(logString);                                         // log - 5
    console.log(constructor);                                       // log - 6
  };
}

function WithTemplate4(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');                                  // log - 2
  return function(constructor: any) {
    console.log('Rendering template');                              // log - 3
    const hookEl = document.getElementById(hookId);
    const p = new constructor(); //--------------new creating (so call log - 7)
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

// @Logger4('LOGGING - PERSON')
@Logger4('LOGGING')
@WithTemplate4('<h1>My Person Object</h1>', 'app')
class Person4 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');                 // log - 4 and 7
  }
}

const pers4 = new Person4();

console.log(pers4);                                                 // log - 8
