import getCurrency from './currency';

describe('currency', () => {
  it.each([
    ['0.0', undefined],
    ['0.0gbp', undefined],
    ['0.0£', undefined],
    ['0.0A', undefined],
    ['0.0GBP', 'GBP'],
    ['0.0[0]GBP', 'GBP'],
    ['0,000.0[0]GBP', 'GBP'],
    ['0GBPa', 'GBP'],
    ['0GBPs', 'GBP'],
    ['0GBPn', 'GBP'],
    ['0GBPn', 'GBP'],
    ['0EUR', 'EUR'],
  ])('currency: %s = %s', (format, expected) => {
    expect.assertions(1);
    const result = getCurrency(format);
    expect(result).toBe(expected);
  });
});
