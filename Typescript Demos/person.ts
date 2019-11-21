class Person {
    public firstName: string;
    public lastName: string;
    private _fullName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._fullName = this.fullName();
    }

    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

var obj = new Person('John', "Smith");
console.log(obj.fullName());
console.log(obj.firstName + " " + obj.lastName);
//console.log(obj._fullName);

