
//---------------------------------------------------------------------

//-----------------Creating custom component structure-----------------

function Logger3(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate3(template: string, hookId: string) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId); // find for IdBlock
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name; // Set class poperty in temlate
    }
  }
}

// @Logger3('LOGGING - PERSON')
@WithTemplate3('<h1>My Person Object</h1>', 'app') // Set template in appId block with class poperty
class Person3 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers3 = new Person3();

console.log(pers3);
