function val1(num: number) : number {
    return num;
}
function val2(val: any) : any {
    return val;
}

function val3<T>(param: T) : T {
    return param;
}

function val4<T>(param: T[]) : T[] {
    return param;
}

var num = val3<number>(25);
console.log(num);

var msg = val3<string>("Hello there!");
console.log(msg);

//var msg = val3<string>(10);
//console.log(msg);


var v1 = val1(10);
var v2 = val2("John");
console.log(v1 + " " + v2);

//var v3 = val1("Ajay");  // Does not work!
var v4 = val2(1234);
console.log(v4);
