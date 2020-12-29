import { rgCurrency } from '../helpers/regex';

function getCurrency(format: string): string | undefined {
  const [, currency] = format.match(rgCurrency) || [''];
  return currency || undefined;
}

export default getCurrency;
