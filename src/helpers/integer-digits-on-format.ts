import { rgIntegerDigitsOnFormat } from './regex';

export function getIntegerDigitsOnFormat(format: string): number {
  const [integersInFormat] = rgIntegerDigitsOnFormat.exec(format) || [''];
  return integersInFormat.length;
}
