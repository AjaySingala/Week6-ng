class Sample {
    name: string = "John";   // Default value.
    static message: string;
}

var s = new Sample();
console.log(s.name);
s.name = "Mary"
console.log(s.name);
Sample.message = "This is a test message";
console.log(Sample.message);

function foo() {
    var n: number = 10;
    var name: string = "John";
    var isValid: Boolean = true;

    var names: string[] = ['John', "Mary", "Neo"];
    var namesAndNumbers: any[] = ['John', "Mary", 25];
    
    enum Status { Created, Active, Deactivated, Locked };
    var doc = Status.Active;

    console.log(n);
    console.log(name);
}

interface Person {
    name: string;
    age: number;
}

function printName(person: Person) {
    console.log(person.name);
}

printName({name: "John Smith", age: 10});
//printName({firstName: "John"});


function greet(name: string) {

}


foo();
