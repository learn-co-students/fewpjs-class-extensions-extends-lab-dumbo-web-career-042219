class Polygon {
  constructor(arr) {
    this.arr = arr
    this.count = this.arr.length
  }

  get countSides() {
    return this.arr.length
  }

  get perimeter() {
    return this.arr.reduce((accu, curr) => accu + curr)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [a, b, c] = this.arr
    return (a + b > c) && (a + c > b) && (b + c > a) ? true : false
  }
}

class Square extends Polygon {
  get isValid() {
    let [a, b, c, d] = this.arr
    return ((a + b + c + d) / this.count === d) ? true : false
  }

  get area() {
    return this.arr[0] * this.arr[1]
  }
}