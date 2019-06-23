// Your code here
// Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent 
// each side of a shape.
// Use the get keyword to make a getter method countSides that counts the number of sides (each index 
// in the array).
// Use the get keyword to make a getter method perimeter that calculates the sum of each side (each 
// index in the array) of the polygon. This method will become accessible to its child classes.

// Define a Triangle class that inherits from Polygon.

// It will automatically have access to count and perimeter inherited from Polygon.

// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle
 // is valid.

class Polygon {
	constructor(integerArray) {
		this.integerArray = integerArray
		this.count = this.integerArray.length
	}

	get countSides() {
		return this.count
	}

  get perimeter() {
    if (!Array.isArray(this.integerArray)) return;
    let sum = 0;
    for (const int of this.integerArray) {
      sum += int
    }
    return sum
  }
}

class Triangle extends Polygon {

	  get isValid() {
   		 if (!Array.isArray(this.integerArray)) return;
    			if (this.count !== 3) return;
    				let side1 = this.integerArray[0]
    				let side2 = this.integerArray[1]
    				let side3 = this.integerArray[2]
    			return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }

}

class Square extends Polygon {
 
  get isValid() {
    if (!Array.isArray(this.integerArray)) return;
    if (this.count !== 4) return;
    let side1 = this.integerArray[0]
    let side2 = this.integerArray[1]
    let side3 = this.integerArray[2]
    let side4 = this.integerArray[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }

  get area() {
    if (!Array.isArray(this.integerArray)) return;
    if (this.count !== 4) return;
    return this.integerArray[0] * this.integerArray[0]
  }

}
