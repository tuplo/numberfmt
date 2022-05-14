import { rgDigitsFormat, rgIsCompact, rgCurrencyFormat } from './regex';

describe('operational regular expressions', () => {
  it.each([
    ['0.0', '0.0'],
    ['0,000.0', '0,000.0'],
    ['0,000[.]0', '0,000[.]0'],
    ['0,0[.]0[0]', '0,0[.]0[0]'],
    ['0.0a', '0.0'],
  ])('extracts digits format: %s', (format, expected) => {
    const [, result] = format.match(rgDigitsFormat) || ['', ''];
    expect(result).toBe(expected);
  });

  it.each([
    ['0.0', false],
    ['0.000a', true],
    ['0.000A', true],
  ])('compact display: %s', (format, expected) => {
    const result = rgIsCompact.test(format);
    expect(result).toBe(expected);
  });

  it.each([
    ['GBP', 'GBP'],
    ['GBPa', 'GBP'],
    ['0.0GBPa', 'GBP'],
    ['CADn', 'CADn'],
    ['USDs', 'USDs'],
    ['EURn', 'EURn'],
  ])('extracts currency format: %s', (format, expected) => {
    const [, result] = format.match(rgCurrencyFormat) || ['', ''];
    expect(result).toBe(expected);
  });
});
