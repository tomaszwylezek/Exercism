const isDivisible = (value: number, divisor: number): boolean =>
  value % divisor === 0;

const isLeapYear = (year: number) =>
  (isDivisible(year, 4) && !isDivisible(year, 100)) || isDivisible(year, 400);

export default isLeapYear;
