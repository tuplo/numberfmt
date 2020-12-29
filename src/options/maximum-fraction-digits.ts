import getDigitsFormat from '../helpers/digits-format';
import getFractionDigits from '../helpers/fraction-digits';
import { rgUnitSystem } from '../helpers/regex';

function getMaximumFractionDigits(value: number, format: string): number {
  const digitsFormat = getDigitsFormat(format);
  const [required, optional] = getFractionDigits(digitsFormat);

  if (rgUnitSystem.test(format)) {
    return Math.max(required + optional, 2);
  }

  return required + optional;
}

export default getMaximumFractionDigits;
