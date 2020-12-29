import getUnitDisplay from './unit-display';

describe('unit display', () => {
  it.each([
    ['0.0', 'short'],
    ['0b', 'narrow'],
    ['0 b', 'short'],
    ['0B', 'narrow'],
    ['0 B', 'short'],
    ['0 k', 'short'],
    ['0k', 'narrow'],
  ])('unit display: % = %s', (format, expected) => {
    const result = getUnitDisplay(format);
    expect(result).toBe(expected);
  });
});
