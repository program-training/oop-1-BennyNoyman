// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
// class Rectangle {
//     width: number;
//     height: number
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea(width: number, height: number): number{
//         return this.width * this.height;
//     }
// }
//  2. Square - ריבוע
// class Square extends Rectangle{
//     constructor(width: number) {
//         super(width, width);
//     }
// }
// 3. Shape - צורה
// class Shape {
//     info(): string{
//         return "This is a Shape";
//     }
// }
// class Rectangle extends Shape{
//     width: number;
//     height: number
//     constructor(width: number, height: number) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     getArea(width: number, height: number): number{
//         return this.width * this.height;
//     }
//     info(): string {
//         return "This is a rectangle";
//     }
// }
// class ColoredRectangle extends Rectangle{
//     color: string;
//     constructor(width: number, height: number, color: string) {
//         super(width, height);
//         this.color = color;
//     }
//     info(): string {
//         return `This is a rectangle colored ${this.color}`;
//     }
// }
// 4. Method Chaining
// class Rectangle {
//     width: number;
//     height: number
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea(): number{
//         return this.width * this.height;
//     }
//     scale(multiplier: number): this {
//         this.width *= multiplier;
//         this.height *= multiplier;
//         return this;
//     }
// }
// const rec = new Rectangle(2, 3);
// console.log(rec.scale(2).getArea());
// 5. Shape with draw method
abstract class Shape {
    draw(): string {
        return "drawing a shape";
    }
}
class Circle extends Shape {
    draw(): string {
        return "drawing a circle";
    }
}
class Triangle extends Shape {
    draw(): string {
        return "drawing a Triangle";
    }
}
class Square extends Shape {
    draw(): string {
        return "drawing a Square";
    }
}
const renderShapes = (shapes: Shape[]) => {
    shapes.forEach(shape => console.log(shape.draw()));
}
const circle = new Circle();
const triangle = new Triangle();
const square = new Square();
renderShapes([circle, triangle, square]);