//--------------------Inheritance--------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, canFly) {
        this.name = name;
        this.canFly = canFly;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name, false) || this;
    }
    // public getName():void {
    //   console.log(this.name); // name is Animal private property and Dod does't have name
    // }
    Dog.prototype.isCanFly = function () {
        console.log(this.canFly);
    };
    return Dog;
}(Animal));
var rex = new Dog('Rex');
// rex.isCanFly() // false
//------------------Protrcted Props amd Methods------------------------------
var Animal1 = /** @class */ (function () {
    function Animal1(name, canFly) {
        this.name = name;
        this.canFly = canFly;
    }
    Animal1.prototype.getName = function () {
        console.log(this.name);
    };
    Animal1.prototype.isCanFly = function () {
        console.log(this.canFly);
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        return _super.call(this, name, false) || this;
    }
    return Dog1;
}(Animal1));
var bobic = new Dog1('bobic');
// bobic.getName(); // Works!!!
// bobic.isCanFly(); // Dostn't work!!! Becouse it's child's private method
var animal1 = new Animal('shark', false);
// animal1.isCanFly(); // Dostn't work!!! Becouse it's not your own method
//-------------------------Getters & Setters---------------------------
var Animal2 = /** @class */ (function () {
    function Animal2(_name) {
        this._name = _name;
    }
    Object.defineProperty(Animal2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid name!');
            }
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Animal2;
}());
var fly = new Animal2('bzz');
// console.log(fly.name); // bzz
fly.name = 'Myyy'; // set value like a property
// console.log(fly.name); // Myyy
//------------------Static------We dont need to create instance--------
//------------------------------We can use class metods and properties-
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    Animal3.addNewgenus = function () {
        var _a;
        var newGenus = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newGenus[_i] = arguments[_i];
        }
        (_a = Animal3.genus).push.apply(_a, newGenus);
    };
    Animal3.genus = [];
    return Animal3;
}());
// console.log(Animal3.genus); // []
Animal3.addNewgenus('mammals', 'birds', 'fishes');
//console.log(Animal3.genus); // ["mammals", "birds", "fishes"]
//-----------Abstract Classes-----------------------------------------
var Department5 = /** @class */ (function () {
    function Department5(id, name) {
        this.id = id;
        this.name = name;
    }
    return Department5;
}());
var ITDepartment5 = /** @class */ (function (_super) {
    __extends(ITDepartment5, _super);
    function ITDepartment5(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment5.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment5;
}(Department5));
// const newDepartment5 = new Department5(21, 'l') // we can't create instance of Abstract Class
// Abstract class is used as a pattern !!!!
var newITDepartment5 = new ITDepartment5(21, []);
// newITDepartment5.describe(); // IT Department - ID: 21
//-------------------------Singleton------------------------------------
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someBusinessLogic = function () {
    };
    return Singleton;
}());
function clientCode() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
// clientCode(); // Singleton works, both variables contain the same instance.
