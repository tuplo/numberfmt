import numberfmt from '..';

describe('currency', () => {
  it.each([
    ['0,0GBP', '£1,000', 1000],
    ['GBP', '£1,000', 1000],
    ['0,0USD', 'US$1,000', 1000],
    ['0,0EUR', '€1,000', 1000],
    ['0,0JPY', 'JP¥1,000', 1000],
    ['0,0CAD', 'CA$1,000', 1000],
    ['0,0GBP', '£123,456', 123456],
  ])('currency (symbol): %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });

  it.each([
    ['0,0GBPs', '£1,000', 1000],
    ['0,0USDs', '$1,000', 1000],
    ['0,0EURs', '€1,000', 1000],
    ['0,0JPYs', '¥1,000', 1000],
    ['0,0CADs', '$1,000', 1000],
  ])('currency (narrow symbol): %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });

  it.each([
    ['0,0GBPc', 'GBP 1,000', 1000],
    ['0,0USDc', 'USD 1,000', 1000],
    ['0,0EURc', 'EUR 1,000', 1000],
    ['0,0JPYc', 'JPY 1,000', 1000],
    ['0,0CADc', 'CAD 1,000', 1000],
  ])('currency (code): %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });

  it.each([
    ['0,0GBPn', '1 British pound', 1],
    ['0,0USDn', '1 US dollar', 1],
    ['0,0EURn', '1 euro', 1],
    ['0,0JPYn', '1 Japanese yen', 1],
    ['0,0CADn', '1 Canadian dollar', 1],
    ['0,0GBPn', '1,000 British pounds', 1000],
    ['0,0USDn', '1,000 US dollars', 1000],
    ['0,0EURn', '1,000 euros', 1000],
    ['0,0JPYn', '1,000 Japanese yen', 1000],
    ['0,0CADn', '1,000 Canadian dollars', 1000],
  ])('currency (name): %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });

  it.each([
    ['0,0GBPa', '£1M', 1234567],
    ['0,0GBPsa', '£1M', 1234567],
    ['0,0GBPca', 'GBP 1M', 1234567],
    ['0,0GBPna', '1M British pounds', 1234567],
  ])('currency: %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });
});
