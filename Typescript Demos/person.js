var Person = /** @class */ (function () {
    //private _fullName: string;
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var obj = new Person('John', "Smith");
console.log(obj.fullName());
console.log(obj.firstName + " " + obj.lastName);
