// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
class Rectangle {
    width: number;
    height: number
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(width: number, height: number): number{
        return this.width * this.height;
    }
}
//  2. Square - ריבוע
class Square extends Rectangle{
    constructor(width: number) {
        super(width, width);
    }
}
// 3. Shape - צורה

// 4. Method Chaining

// 5. Shape with draw method
