
//-------------------------------------------------------------------

//-------------Decorator can return other class contents-------------

function Logger7(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate7(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function<T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {  // Returnig new class and change constructor
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger7('LOGGING - PERSON')
@Logger7('LOGGING')
@WithTemplate7('<h1>My Person Object</h1>', 'app')
class Person7 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers7 = new Person7();
