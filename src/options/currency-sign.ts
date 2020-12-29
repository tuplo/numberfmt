import { rgHasParentheses } from '../helpers/regex';

type CurrencySign = 'standard' | 'accounting';

function getCurrencySign(format: string): CurrencySign {
  return rgHasParentheses.test(format) ? 'accounting' : 'standard';
}

export default getCurrencySign;
