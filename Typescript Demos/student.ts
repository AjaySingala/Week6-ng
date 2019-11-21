class Student {
    fullName: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}

interface IPerson {
    firstName: string;
    lastName: string;
//    city: string;
}

function greeter(person: IPerson): string {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = new Student("Mary", "Jane");

//document.getElementById("greeter").innerHTML = greeter(user);
console.log(greeter(user));
console.log(user.firstName);