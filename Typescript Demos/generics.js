function val1(num) {
    return num;
}
function val2(val) {
    return val;
}
function val3(param) {
    return param;
}
var num = val3(25);
console.log(num);
var msg = val3("Hello there!");
console.log(msg);
var v1 = val1(10);
var v2 = val2("John");
console.log(v1 + " " + v2);
//var v3 = val1("Ajay");  // Does not work!
var v4 = val2(1234);
console.log(v4);
