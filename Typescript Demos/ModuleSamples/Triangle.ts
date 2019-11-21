//import {IShape } from './IShape'; 
///<reference path="./IShape.ts" />

export class Triangle implements Shapes.IShape { 
   public draw() { 
      console.log("Triangle is drawn (external module)"); 
   } 
}
