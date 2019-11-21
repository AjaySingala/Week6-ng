var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
//console.log(timesTwo(10));
//import { Useful } from './timesTwo';
///<reference path="timesTwo.ts" />
var u = new Utility.Useful();
//console.log(timesTwo(10));
console.log(u.timesTwo(10));
