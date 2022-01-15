import { rgSpaceBetween } from '../helpers/regex';
import fromParts from '../helpers/from-parts';

type FormatPercentageParams = {
  format: string;
  numberFormatter: Intl.NumberFormat;
  value: number;
};

function formatPercentage(params: FormatPercentageParams): string {
  const { value, numberFormatter, format } = params;
  const { minusSign, integer, group, decimal, fraction, percentSign } =
    fromParts(numberFormatter.formatToParts(value));

  return [
    minusSign,
    (integer as string[]).join((group as string) || ''),
    decimal,
    fraction,
    rgSpaceBetween.test(format) && ' ',
    percentSign,
  ]
    .filter(Boolean)
    .join('');
}

export default formatPercentage;
