import numberfmt from '.';

describe('numberfmt', () => {
  it('has default format', () => {
    expect.assertions(1);
    const result = numberfmt(123456);
    const expected = '123,456';
    expect(result).toBe(expected);
  });

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
    expect.assertions(1);
    const result = numberfmt(value, '0,0');
    expect(result).toBe(expected);
  });
});
