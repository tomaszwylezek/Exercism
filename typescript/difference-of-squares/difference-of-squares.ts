export default class Squares {
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  constructor(value: number) {
    this.squareOfSum = this.getSquareOfTheSum(value);
    this.sumOfSquares = this.getSumOfSquares(value);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }

  getSquareOfTheSum(value: number): number {
    return (
      this.iterateToValue(
        value,
        (endValue: number, iteratee: number) => endValue + iteratee
      ) ** 2
    );
  }

  getSumOfSquares(value: number): number {
    return this.iterateToValue(
      value,
      (endValue: number, iteratee: number) => endValue + iteratee ** 2
    );
  }

  iterateToValue(
    value: number,
    action: (endValue: number, iteratee: number) => number
  ) {
    let endValue: number = 0;

    for (let i = 1; i <= value; i++) {
      endValue = action(endValue, i);
    }

    return endValue;
  }
}
