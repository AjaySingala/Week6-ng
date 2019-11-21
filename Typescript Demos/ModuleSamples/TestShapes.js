"use strict";
exports.__esModule = true;
//import {IShape } from './IShape'; 
var Circle_1 = require("./Circle");
var Triangle_1 = require("./Triangle");
///<reference path="./IShape.ts" />
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new Circle_1.Circle());
drawAllShapes(new Triangle_1.Triangle());
