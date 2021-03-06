import { rgDigitsFormat } from './regex';

function getDigitsFormat(format?: string): string {
  const [digitsFormat] = rgDigitsFormat.exec(format || '') || ['0,000'];

  if (digitsFormat === '0,0') return '0,000';

  return digitsFormat;
}

export default getDigitsFormat;
