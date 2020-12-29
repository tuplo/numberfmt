import convertToNumber from './convert-to-number';

describe('convert to number', () => {
  it.each([
    [undefined, null],
    [null, null],
    [{}, null],
    [[], null],
    [[1234], 1234],
    [[1234, 5678], null],
    ['abc', null],
    ['1234', 1234],
    [1234, 1234],
  ])('converts from user input to number', (userInput, expected) => {
    const result = convertToNumber(userInput);
    expect(result).toBe(expected);
  });
});
