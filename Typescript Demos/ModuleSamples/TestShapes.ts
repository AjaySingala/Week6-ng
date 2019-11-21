//import {IShape } from './IShape'; 
import { Circle} from "./Circle"; 
import {Triangle} from "./Triangle";  
///<reference path="./IShape.ts" />


function drawAllShapes(shapeToDraw: Shapes.IShape) {
   shapeToDraw.draw(); 
} 

drawAllShapes(new Circle()); 
drawAllShapes(new Triangle()); 
