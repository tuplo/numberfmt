import getUnit, { getUnitFromPowerOfTwo, getMetricUnit } from './unit';

describe('get unit', () => {
  it.each([
    ['bit', 1],
    ['kilobit', 1024],
    ['kilobit', 1024 + 100],
    ['kilobit', 1024 * 1024 - 100],
    ['megabit', 1024 * 1024],
    ['gigabit', 1024 * 1024 * 1024],
    ['terabit', 1024 * 1024 * 1024 * 1024],
  ])('unit for power of twos (bits): %s - %s', (expected, value) => {
    expect.assertions(1);
    const result = getUnitFromPowerOfTwo(value, [
      'bit',
      'kilobit',
      'megabit',
      'gigabit',
      'terabit',
    ]);
    expect(result).toBe(expected);
  });

  it.each([
    ['byte', 1],
    ['kilobyte', 1024],
    ['kilobyte', 1024 + 100],
    ['kilobyte', 1024 * 1024 - 100],
    ['megabyte', 1024 * 1024],
    ['gigabyte', 1024 * 1024 * 1024],
    ['terabyte', 1024 * 1024 * 1024 * 1024],
    ['petabyte', 1024 * 1024 * 1024 * 1024 * 1024],
  ])('unit for power of twos (bits): %s - %s', (expected, value) => {
    expect.assertions(1);
    const result = getUnitFromPowerOfTwo(value, [
      'byte',
      'kilobyte',
      'megabyte',
      'gigabyte',
      'terabyte',
      'petabyte',
    ]);
    expect(result).toBe(expected);
  });

  it.each([
    ['millimeter', 0.001],
    ['centimeter', 0.01],
    ['meter', 1],
    ['kilometer', 1000],
  ])('metric value: %s - %s', (expected, value) => {
    expect.assertions(1);
    const result = getMetricUnit(value);
    expect(result).toBe(expected);
  });

  it.each([
    ['0b', 'bit', 1],
    ['0b', 'kilobit', 1024],
    ['0B', 'byte', 1],
    ['0B', 'kilobyte', 1024],
  ])('unit: %s = %s', (format, expected, value) => {
    expect.assertions(1);
    const result = getUnit(value, format);
    expect(result).toBe(expected);
  });
});
