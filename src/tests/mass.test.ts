import numberfmt from '..';

describe('mass', () => {
  it.each([
    ['0k', '1kg', 1],
    ['0k', '1.23kg', 1.23],
    ['0k', '1g', 0.001],
    ['0 k', '1 kg', 1],
    ['0 k', '1 g', 0.001],
  ])('mass: %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });
});
