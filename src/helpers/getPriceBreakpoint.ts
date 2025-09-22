interface PriceBreakpointType {
  label: string;
  range: [number, number]
}

/**
 * Generates an array of 5 breakpoints by repeatedly halving the given number.
 *
 * @param {number} initialBreakpoint - The starting number for the breakpoints.
 * @returns {number[]} An array of 5 numbers, each half of the previous one.
 */
export function getPriceBreakpoints(initialBreakpoint: number): PriceBreakpointType[] {
  if (initialBreakpoint <= 0) {
    throw new Error("Initial breakpoint must be a positive number.");
  }

  const breakpoints: number[] = [];
  let currentBreakpoint = initialBreakpoint;

  for (let i = 0; i < 5; i++) {
    breakpoints.push(Math.round(currentBreakpoint));
    currentBreakpoint /= 2;
  }

  breakpoints.push(0);

  return breakpoints.reverse().map((price, idx, arr) => ({
    label: `${price}$ to ${arr[idx + 1]}$`,
    range: [price, arr[idx+1]],
  }));
}
