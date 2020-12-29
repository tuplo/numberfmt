import { rgIntegerDigitsOnFormat } from './regex';

function getIntegerDigitsOnFormat(format: string): number {
  const [integersInFormat] = rgIntegerDigitsOnFormat.exec(format) || [''];
  return integersInFormat.length;
}

export default getIntegerDigitsOnFormat;
