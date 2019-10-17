// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.count = this.sides.length;
  }

  get countSides() {
    return this.count;
  }

  get perimeter() {
    return this.sides.reduce((total, current) => total + current);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    let [a, b, c, d] = this.sides;
    return ((a + b + c + d) / this.count === d) ? true : false
  }

  get area() {
    return this.sides[0]**2
  }
}
