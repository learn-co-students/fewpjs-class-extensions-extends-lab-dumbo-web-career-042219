// Your code here

class Polygon {
  constructor(array) {
    this.array = array
    this.count = this.array.length
  }

  get countSides() {
    return this.array.length
  }

  get perimeter() {
    return this.array.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0)
  }
}

class Triangle extends Polygon {

  get isValid() {
    let [a, b, c] = this.array
    return (a + b > c) && (a + c > b) && (b + c > a) ? true : false
  }

}

class Square extends Polygon {

  get isValid() {
    let [a, b, c, d] = this.array
    return ((a + b + c + d) / this.count === d) ? true : false
  }

   get area() {
    return this.array[2] * this.array[3]
  }
}
