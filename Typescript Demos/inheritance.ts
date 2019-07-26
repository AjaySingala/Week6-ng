class Person {
    firstName: string;
    lastName: string;

    constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }

    show() {
        console.log(this.firstName + " This is great!");
    }
}

class AnotherPerson extends Person {
    show() {
        console.log(this.firstName + " Awesome!!!");
        super.show();
    }
}

var p = new Person("Mary" , "Jane");
var ap = new AnotherPerson("John", "Smith");

p.show();
ap.show();
