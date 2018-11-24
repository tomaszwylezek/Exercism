const isDivisible = (number, divisor) => number % divisor === 0;

export const isLeap = year => {
  if (isDivisible(year, 100)) {
    return isDivisible(year, 400);
  }

  return isDivisible(year, 4);l
};
