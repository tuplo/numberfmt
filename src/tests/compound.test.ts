import nf from '..';

describe('compound format', () => {
  it.each([
    ['(0m)', '(1.23km)', -1_234],
    ['(0.000m)', '(1.234km)', -1_234],
  ])('compounds: %s = %s', (format, expected, value) => {
    const result = nf(value, format);
    expect(result).toBe(expected);
  });
});
