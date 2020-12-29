import formatPercentage from './percentage';

describe('percentage', () => {
  it.each([
    ['0%', '100%', 1, undefined],
    ['0 %', '100 %', 1, undefined],
    ['0.0%', '1.0%', 0.01, 1],
    ['0.0 %', '1.0 %', 0.01, 1],
    ['0.00 %', '1.20 %', 0.012, 2],
    ['0.00 %', '1.23 %', 0.0123, 2],
    ['0,0.0 %', '2,000 %', 20, undefined],
    ['0,0.0 %', '2,000,000 %', 20000, undefined],
    ['0,0.0 %', '2,000,000.00 %', 20000, 2],
  ])(
    'percentage: %s = %s',
    (format, expected, value, minimumFractionDigits) => {
      const nf = new Intl.NumberFormat('en-GB', {
        style: 'percent',
        minimumFractionDigits,
      });
      const params = { format, value, numberFormatter: nf };
      const result = formatPercentage(params);
      expect(result).toBe(expected);
    }
  );
});
