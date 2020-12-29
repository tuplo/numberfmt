import { rgDigitalSystem, rgMetricSystem, rgKiloSystem } from './regex';

export function getCompactPowersOfTwo(value: number): number {
  let n = value;
  while (n >= 1024) {
    n /= 1024;
  }
  return n;
}

export function getMetricValue(value: number): number {
  const absValue = Math.abs(value);

  if (absValue > 999.9999) return value / 1000;
  if (absValue >= 0.01 && absValue <= 0.0999) return value * 100;
  if (absValue >= 0.001 && absValue <= 0.00999) return value * 1000;

  return value;
}

export function getKiloValue(value: number): number {
  const absValue = Math.abs(value);

  if (absValue >= 0.001 && absValue <= 0.00999) return value * 1000;

  return value;
}

function getValue(value: number, format: string): number {
  if (rgDigitalSystem.test(format)) return getCompactPowersOfTwo(value);
  if (rgMetricSystem.test(format)) return getMetricValue(value);
  if (rgKiloSystem.test(format)) return getKiloValue(value);

  return value;
}

export default getValue;
