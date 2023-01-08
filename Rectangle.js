"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    //height: number;
    //private width: number;
    //private height: number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        //this.width=width;
        //this.height=height;
    }
    getSquare() {
        //throw new Error("Method not implemented.");
        return this.width * this.width;
    }
    getPerimeter() {
        //throw new Error("Method not implemented.");
        return this.height * 2 + this.width;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map