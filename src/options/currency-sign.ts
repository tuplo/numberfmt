import { rgHasParentheses } from '../helpers/regex';

type CurrencySign = 'standard' | 'accounting';

export function getCurrencySign(format: string): CurrencySign {
	return rgHasParentheses.test(format) ? 'accounting' : 'standard';
}
