import getMinimumFractionDigits from './minimum-fraction-digits';

describe('minimum fraction digits', () => {
  it.each([
    ['.0', 1, 1],
    ['0.0', 1, 1],
    ['.00', 1, 2],
    ['0.00', 1, 2],
    ['0[.]000', 1, 0],
    ['0[.]000', 1.2, 3],
    ['0[.]000', 1.23, 3],
    ['0[.]00', 1.001, 2],
    ['0.00[0]', 1.23, 2],
    ['0.00[0]', 1.234, 3],
    ['0[.]0[0]', 1, 0],
    ['0[.]0[0]', 1.2, 1],
    ['0[.]0[0]', 1.23, 2],
    ['0[.]00[0]', 1.234, 3],
  ])('gets minimum fraction digits - %s', (format, value, expected) => {
    expect.assertions(1);
    const result = getMinimumFractionDigits(value, format);
    expect(result).toBe(expected);
  });
});
