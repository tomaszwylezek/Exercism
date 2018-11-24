const isDivisible = (value: number, divisor: number): boolean =>
  value % divisor === 0;

function isLeapYear(year: number) {
  if (isDivisible(year, 100)) {
    return isDivisible(year, 400);
  }

  return isDivisible(year, 4);
}

export default isLeapYear;
