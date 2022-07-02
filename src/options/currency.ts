import { rgCurrency } from '../helpers/regex';

export function getCurrency(format: string): string | undefined {
	const [, currency] = format.match(rgCurrency) || [''];
	return currency || undefined;
}
