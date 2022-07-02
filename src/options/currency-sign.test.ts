import { getCurrencySign } from './currency-sign';

describe('currency sign', () => {
	it.each([
		['0.0', 'standard'],
		['(0.0)', 'accounting'],
	])('currency sign: %s = %s', (format, expected) => {
		const result = getCurrencySign(format);
		expect(result).toBe(expected);
	});
});
