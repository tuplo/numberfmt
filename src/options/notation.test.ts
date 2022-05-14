import { getNotation } from './notation';

describe('notation', () => {
  it.each([
    ['0.0', 'standard'],
    ['0.0', 'standard'],
    ['0.0a', 'compact'],
    ['0.0A', 'compact'],
    ['(0.0A)', 'compact'],
    ['0.0e', 'scientific'],
    ['(0.0e)', 'scientific'],
    ['0.0E', 'engineering'],
    ['(0.0E)', 'engineering'],
  ])('notation: %s = %s', (format, expected) => {
    const result = getNotation(format);
    expect(result).toBe(expected);
  });
});
