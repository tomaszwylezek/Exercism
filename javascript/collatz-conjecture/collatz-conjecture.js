export const steps = num => {
  const rest = num % 2;
  switch (true) {
    case num <= 0:
      throw new Error("Only positive numbers are allowed");
    case rest === 0:
      return steps(num / 2) + 1;
    case num > 1 && rest === 1:
      return steps(3 * num + 1) + 1;
    default:
      return 0;
  }
};
