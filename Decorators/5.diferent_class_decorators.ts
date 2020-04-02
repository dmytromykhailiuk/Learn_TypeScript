
// ---------------------------------------------------------------------

//--------------------Decorators for different entities-----------------

function Logg(target: any, propertyName: string | Symbol) {  // For property
  //console.log('Property decorator!');
  //console.log(target, propertyName); // target === class constructor, "title"
}

function Logg2(target: any, name: string, descriptor: PropertyDescriptor):void {
  console.log('Accessor decorator!');
  //console.log(target); // target === class constructor
  //console.log(name);
  console.log(descriptor); // --------------------WHY UNDEFINED---?
}

function Logg3( // For Method
  target: any,  // target === class constructor
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  //console.log(target);
  //console.log(name);
  console.log(descriptor); // ----------------------WHY UNDEFINED---?
}

function Logg4(target: any, name: string | Symbol, position: number) { // For Method Parameter
  //console.log('Parameter decorator!');
  //console.log(target);
  //console.log(name);
  //console.log(position);
}

class Product5 {
  @Logg // Using before entity
  title: string;
  private _price: number;

  @Logg2 // Using before entity
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Logg3 // Using before entity
  getPriceWithTax(@Logg4 tax: number) { // Using before entity
    return this._price * (1 + tax);
  }
}
