import nf from '.';

describe('numberfmt', () => {
  it('has default format', () => {
    const result = nf(123_456);
    const expected = '123,456';
    expect(result).toBe(expected);
  });

  it.each([
    [undefined, ''],
    [null, ''],
    [{}, ''],
    [[], ''],
    [[1_234], '1,234'],
    [[1_234, 5_678], ''],
    ['abc', ''],
    ['1234', '1,234'],
    [1_234, '1,234'],
  ])('handles non numeric values: %s', (value, expected) => {
    const result = nf(value, '0,0');
    expect(result).toBe(expected);
  });
});
