import { testNumberfmt } from './main-js';

describe('numberfmt', () => {
  it('is testable with Jest and JavaScript', () => {
    expect.assertions(1);
    const result = testNumberfmt(123456);

    const expected = '123,456';
    expect(result).toBe(expected);
  });
});
