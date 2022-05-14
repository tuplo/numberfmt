import nf from './index';

describe('bug reports', () => {
  it('shows mismatched values between nodejs and browser', () => {
    const value = 47_939;
    const actual = nf(value, '0.0a');

    // 48K on chrome, firefox
    const expected = '47.9K'; // nodejs
    expect(actual).toBe(expected);
  });
});
