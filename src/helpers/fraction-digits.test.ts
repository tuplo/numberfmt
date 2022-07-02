import { getFractionDigits } from './fraction-digits';

describe('fraction digits', () => {
	it.each([
		['0,0', [0, 0]],
		['0.0', [1, 0]],
		['0.000', [3, 0]],
		['0,000.00', [2, 0]],
		['0[.]0000', [4, 0]],
		['0.00[0]', [2, 1]],
		['0.0[00]', [1, 2]],
	])('gets fraction digits on format: %s', (format, expected) => {
		const actual = getFractionDigits(format);
		expect(actual).toStrictEqual(expected);
	});
});
