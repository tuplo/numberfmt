import numberfmt from '..';

describe('compact notation', () => {
  it.each([
    ['0a', '123', 123],
    ['0a', '1K', 1234],
    ['0a', '12K', 12345],
    ['0a', '123K', 123456],
    ['0a', '1M', 1234567],
    ['0a', '12M', 12345678],
    ['0a', '123M', 123456789],
    ['0a', '1B', 1234567890],
    ['0a', '12B', 12345678901],
    ['0a', '123B', 123456789012],
    ['0a', '1T', 1234567890123],
    ['0a', '12T', 12345678901234],
    ['0a', '123T', 123456789012345],
    ['0.0a', '1.2M', 1234567],
    ['0.00a', '1.23M', 1234567],
    ['0.000a', '1.235M', 1234567],
    ['0.000a', '1.235M', 1234567],
  ])('short format: %s, %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });

  it.each([
    ['0A', '1', 1],
    ['0A', '123', 123],
    ['0A', '1 thousand', 1234],
    ['0A', '12 thousand', 12345],
    ['0A', '123 thousand', 123456],
    ['0A', '1 million', 1234567],
    ['0A', '12 million', 12345678],
    ['0A', '123 million', 123456789],
    ['0A', '1 billion', 1234567890],
    ['0A', '12 billion', 12345678901],
    ['0A', '123 billion', 123456789012],
    ['0A', '1 trillion', 1234567890123],
    ['0A', '12 trillion', 12345678901234],
    ['0A', '123 trillion', 123456789012345],
    ['0.0A', '1.2 million', 1234567],
    ['0.00A', '1.23 million', 1234567],
  ])('long format: %s, %s', (format, expected, value) => {
    expect.assertions(1);
    const result = numberfmt(value, format);
    expect(result).toBe(expected);
  });
});
