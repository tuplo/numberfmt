import numberfmt from '../index';

describe('partial applications', () => {
  it.each([
    [2, '0.000', '2.000'],
    [3000, '0,000', '3,000'],
    [5000, '0B', '4.88kB'],
  ])('partially applies format, then values: %s', (value, format, expected) => {
    expect.assertions(1);
    const fmt = numberfmt.partial(format);
    const result = fmt(value);
    expect(result).toBe(expected);
  });
});
