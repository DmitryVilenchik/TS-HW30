import { Shape } from "./ShapeInterface";
export class Rectangle implements Shape {
    //height: number;
    //private width: number;
    //private height: number;
    constructor(private width: number, private height: number) {
        //this.width=width;
        //this.height=height;
    }
    getSquare(): number {
        //throw new Error("Method not implemented.");
        return this.width*this.width;
    }
    getPerimeter(): number {
        //throw new Error("Method not implemented.");
        return this.height * 2+ this.width;
    }
    
}