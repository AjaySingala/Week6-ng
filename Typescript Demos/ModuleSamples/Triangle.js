"use strict";
//import {IShape } from './IShape'; 
///<reference path="./IShape.ts" />
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Triangle is drawn (external module)");
    };
    return Triangle;
}());
exports.Triangle = Triangle;
