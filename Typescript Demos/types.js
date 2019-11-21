var Sample = /** @class */ (function () {
    function Sample() {
        this.name = "John"; // Default value.
    }
    return Sample;
}());
var s = new Sample();
console.log(s.name);
s.name = "Mary";
console.log(s.name);
Sample.message = "This is a test message";
console.log(Sample.message);
function foo() {
    console.log('In foo()...');
    var n = 10;
    var name = "John";
    var isValid = true;
    var names = ['John', "Mary", "Neo"];
    var namesAndNumbers = ['John', "Mary", 25];
    var Status;
    (function (Status) {
        Status[Status["Created"] = 0] = "Created";
        Status[Status["Active"] = 1] = "Active";
        Status[Status["Deactivated"] = 2] = "Deactivated";
        Status[Status["Locked"] = 3] = "Locked";
    })(Status || (Status = {}));
    ;
    var doc = Status.Active;
    console.log(n);
    console.log(name);
}
function printName(person) {
    console.log('In printName()...');
    console.log(person.name);
}
printName({ name: "John Smith", age: 10 });
//printName({firstName: "John"});
function greet(name) {
}
foo();
