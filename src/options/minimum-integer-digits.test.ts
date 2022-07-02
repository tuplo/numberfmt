import { getMinimumIntegerDigits } from './minimum-integer-digits';

describe('integer digits configuration', () => {
	it.each([
		['0', 1, 1],
		['0.0', 1, 1],
		['00', 2, 1],
		['00000', 5, 1],
		['000', 5, 10_000],
		['0,0', undefined, 1],
		['.00', undefined, 0.23],
		['.00', 4, 1_000.23],
		['0a', undefined, 1],
		['0A', undefined, 1],
		['0e', undefined, 1_000],
		['0E', undefined, 1_000],
	])('gets minimum integer digits: %s = %s', (format, expected, value) => {
		const result = getMinimumIntegerDigits(value, format);
		expect(result).toBe(expected);
	});
});
