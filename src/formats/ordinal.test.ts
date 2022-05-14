import { formatOrdinal } from './ordinal';

describe('formats ordinals', () => {
  it.each([
    ['0o', 1, '1', 'en-GB', '1st'],
    ['0o', 2, '2', 'en-GB', '2nd'],
  ])('ordinals: %s', (format, value, formatted, locale, expected) => {
    const result = formatOrdinal({ value, formatted, locale, format });
    expect(result).toBe(expected);
  });
});
