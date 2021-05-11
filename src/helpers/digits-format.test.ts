import getDigitsFormat from './digits-format';

describe('digits format', () => {
  it.each([
    [undefined, '0,000'],
    ['0', '0'],
    ['0,0', '0,000'],
    ['0,000[.]00', '0,000[.]00'],
  ])('digits format: %s = %s', (format, expected) => {
    expect.assertions(1);
    const result = getDigitsFormat(format);
    expect(result).toBe(expected);
  });
});
