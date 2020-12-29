import numberfmt from '..';

describe('compound format', () => {
  it.each([
    ['(0m)', '(1.23km)', -1234],
    ['(0.000m)', '(1.234km)', -1234],
  ])('compounds: %s = %s', (format, expected, value) => {
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });
});
