import getMinimumIntegerDigits from './minimum-integer-digits';

describe('integer digits configuration', () => {
  it.each([
    ['0', 1, 1],
    ['0.0', 1, 1],
    ['00', 2, 1],
    ['00000', 5, 1],
    ['000', 5, 10000],
    ['0,0', undefined, 1],
    ['.00', undefined, 0.23],
    ['.00', 4, 1000.23],
    ['0a', undefined, 1],
    ['0A', undefined, 1],
    ['0e', undefined, 1000],
    ['0E', undefined, 1000],
  ])('gets minimum integer digits: %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = getMinimumIntegerDigits(value, format);
    expect(result).toBe(expected);
  });
});
