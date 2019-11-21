//import { IShape } from './IShape'; 
//import shape = require("./IShape"); 
///<reference path="./IShape.ts" />

export class Circle implements Shapes.IShape { 
   public draw() { 
      console.log("Cirlce is drawn (external module)"); 
   } 
} 
