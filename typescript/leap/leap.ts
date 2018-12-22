const isDivisible = (value: number, divisor: number): boolean =>
  value % divisor === 0;

const isLeapYear = (year: number) => isDivisible(year, 4) && (year % 100 !== 0) || isDivisible(year, 400)

export default isLeapYear;
