import { getCurrencyDisplay } from './currency-display';

describe('currency display', () => {
  it.each([
    ['0GBP', 'symbol'],
    ['0GBPs', 'narrowSymbol'],
    ['0GBPc', 'code'],
    ['0GBPn', 'name'],
  ])('compact display - %s', (format, expected) => {
    const result = getCurrencyDisplay(format);
    expect(result).toBe(expected);
  });
});
