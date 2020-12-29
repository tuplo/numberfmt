import numberfmt from '.';

describe('numberfmt', () => {
  it.each([
    [undefined, ''],
    [null, ''],
    [{}, ''],
    [[], ''],
    [[1234], '1,234'],
    [[1234, 5678], ''],
    ['abc', ''],
    ['1234', '1,234'],
    [1234, '1,234'],
  ])('handles non numeric values: %s', (value, expected) => {
    const result = numberfmt(value, '0,0');
    expect(result).toBe(expected);
  });
});
