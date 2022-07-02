import nf from '..';

describe('percentage', () => {
	it.each([
		['0%', '100%', 1],
		['0.000%', '97.488%', 0.974878234],
		['0%', '-43%', -0.43],
		['(0.000%)', '43.000%', 0.43],
		['0 %', '100 %', 1],
		['(0.000 %)', '43.000 %', 0.43],
	])('percentage: %s = %s', (format, expected, value) => {
		const result = nf(value, format);
		expect(result).toBe(expected);
	});
});
