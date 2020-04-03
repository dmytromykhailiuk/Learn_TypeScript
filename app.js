// ---------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//--------------------Decorators for different entities-----------------
function Logg(target, propertyName) {
    //console.log('Property decorator!');
    //console.log(target, propertyName); // target === class constructor, "title"
}
function Logg2(target, name, descriptor) {
    console.log('Accessor decorator!');
    //console.log(target); // target === class constructor
    //console.log(name);
    console.log(descriptor); // --------------------WHY UNDEFINED---?
}
function Logg3(// For Method
target, // target === class constructor
name, descriptor) {
    console.log('Method decorator!');
    //console.log(target);
    //console.log(name);
    console.log(descriptor); // ----------------------WHY UNDEFINED---?
}
function Logg4(target, name, position) {
    //console.log('Parameter decorator!');
    //console.log(target);
    //console.log(name);
    //console.log(position);
}
var Product5 = /** @class */ (function () {
    function Product5(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product5.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('Invalid price - should be positive!');
            }
        },
        enumerable: true,
        configurable: true
    });
    Product5.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Logg // Using before entity
    ], Product5.prototype, "title");
    __decorate([
        Logg2 // Using before entity
    ], Product5.prototype, "price");
    __decorate([
        Logg3 // Using before entity
        ,
        __param(0, Logg4)
    ], Product5.prototype, "getPriceWithTax");
    return Product5;
}());
