import getCompactDisplay from './compact-display';

describe('compact display', () => {
  it.each([
    ['0.000', undefined],
    ['0.0a', 'short'],
    ['0.0A', 'long'],
  ])('compact display: %s', (format, expected) => {
    expect.assertions(1);
    const result = getCompactDisplay(format);
    expect(result).toBe(expected);
  });
});
