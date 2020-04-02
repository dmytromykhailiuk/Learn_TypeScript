
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