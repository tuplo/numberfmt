import numberfmt from '..';

describe('exponential', () => {
  it.each([
    ['0e', '1E0', 1],
    ['0e', '1E1', 10],
    ['0e', '1E2', 100],
    ['0e', '1E3', 1000],
    ['0e', '1E4', 10000],
    ['0e', '1E6', 1000000],
    ['0.0e', '1.2E7', 12345678],
  ])('exponential (scientific): %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });

  it.each([
    ['0E', '1E0', 1],
    ['0E', '10E0', 10],
    ['0E', '100E0', 100],
    ['0E', '1E3', 1000],
    ['0E', '10E3', 10000],
    ['0E', '100E3', 100000],
    ['0E', '1E6', 1000000],
    ['0.0E', '12.3E6', 12345678],
  ])('exponential (engineering): %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });
});
