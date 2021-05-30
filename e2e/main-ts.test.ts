import { testNumberfmt } from './main-ts';

describe('numberfmt', () => {
  it('is testable with Jest and TypeScript', () => {
    expect.assertions(1);
    const result = testNumberfmt(123456);

    const expected = '123,456';
    expect(result).toBe(expected);
  });
});
