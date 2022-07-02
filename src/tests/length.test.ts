import nf from '..';

describe('length', () => {
	it.each([
		['0m', '1mm', 0.001],
		['0m', '1cm', 0.01],
		['0m', '1m', 1],
		['0m', '1km', 1_000],
		['0m', '1.2km', 1_200],
	])('metric (narrow): %s = %s', (format, expected, value) => {
		const result = nf(value, format);
		expect(result).toBe(expected);
	});

	it.each([
		['0 m', '1 mm', 0.001],
		['0 m', '1 cm', 0.01],
		['0 m', '1 m', 1],
		['0 m', '1 km', 1_000],
	])('metric (short): %s = %s', (format, expected, value) => {
		const result = nf(value, format);
		expect(result).toBe(expected);
	});
});
