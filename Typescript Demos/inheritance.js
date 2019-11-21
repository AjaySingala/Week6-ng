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
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    Person.prototype.show = function () {
        console.log(this.firstName + " This is great!");
    };
    return Person;
}());
var AnotherPerson = /** @class */ (function (_super) {
    __extends(AnotherPerson, _super);
    function AnotherPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnotherPerson.prototype.show = function () {
        console.log(this.firstName + " Awesome!!!");
        _super.prototype.show.call(this);
    };
    return AnotherPerson;
}(Person));
var p = new Person("Mary", "Jane");
var ap = new AnotherPerson("John", "Smith");
p.show();
ap.show();
