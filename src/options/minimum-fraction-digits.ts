import { getDigitsFormat } from '../helpers/digits-format';
import { getFractionDigits } from '../helpers/fraction-digits';
import {
  rgFractionDigitsAreaOptional,
  rgOptionalDigits,
  rgFractionDigits,
} from '../helpers/regex';

function handleOptionalDigits(value: number, digits: [number, number]): number {
  const [required, optional] = digits;
  const strNumber = value.toString();
  const [, fractionDigits] = rgFractionDigits.exec(strNumber) || ['', ''];
  return Math.min(fractionDigits.length, required + optional);
}

export function getMinimumFractionDigits(
  value: number,
  format: string
): number {
  const digitsFormat = getDigitsFormat(format);
  const [required, optional] = getFractionDigits(digitsFormat);
  if (rgFractionDigitsAreaOptional.test(digitsFormat)) {
    const strNumber = value.toString();
    if (rgOptionalDigits.test(digitsFormat)) {
      return handleOptionalDigits(value, [required, optional]);
    }
    return strNumber.indexOf('.') > -1 ? required : 0;
  }
  if (rgOptionalDigits.test(digitsFormat)) {
    return handleOptionalDigits(value, [required, optional]);
  }
  return required + optional;
}
