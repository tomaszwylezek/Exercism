const TRIANGLE = {
  isosceles: "isosceles",
  equilateral: "equilateral",
  scalene: "scalene"
};

class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.uniqueSidesAmount = new Set(sides).size;
  }

  kind() {
    if (this.isInvalid()) {
      throw new Error();
    }

    if (this.isEquilateral()) {
      return TRIANGLE.equilateral;
    }

    if (this.isIsosceles()) {
      return TRIANGLE.isosceles;
    }

    return TRIANGLE.scalene;
  }

  isInvalid() {
    return this.hasTriangleInequality() || this.wrongSides();
  }

  hasTriangleInequality() {
    const [a, b, c] = this.sides;
    return a + b < c || a + c < b || b + c < a;
  }

  wrongSides() {
    const [a, b, c] = this.sides;
    return a <= 0 || b <= 0 || c <= 0;
  }

  isEquilateral() {
    return this.uniqueSidesAmount === 1;
  }

  isIsosceles() {
    return this.uniqueSidesAmount === 2;
  }
}

export default Triangle;
