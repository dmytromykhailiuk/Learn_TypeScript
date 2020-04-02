
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
