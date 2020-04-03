
//------------------------------------------------------------------------

//------------------Binding This with the help of a decorator-------------


function Autobind7(_: any, _2: string, descriptor: PropertyDescriptor) { 
  const originalMethod = descriptor.value;  
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

class Printer7 {
  message = 'This works!';

  @Autobind7  
  showMessage() {
    console.log(this.message);
  }
}

const p7 = new Printer7();
p7.showMessage();

const button7 = document.querySelector('button')!;
button7.addEventListener('click', p7.showMessage);