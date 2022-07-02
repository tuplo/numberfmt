import { getCompactPowersOfTwo, getMetricValue, getValue } from './value';

describe('calculates value based on format', () => {
	it.each([
		['0', 1, 1],
		['0.0', 1024, 1024],
		['0b', 1, 1],
		['0b', 1, 1024],
		['0b', 1, 1048576],
		['0b', 1, 1073741824],
	])('value: %s = %s', (format, expected, value) => {
		const result = getValue(value, format);
		expect(result).toBe(expected);
	});

	it.each([
		['meter', 1, 1],
		['meter', 10, 10],
		['meter', 999, 999],
		['millimeter', 0.001, 1],
		['centimeter', 0.01, 1],
		['centimeter', 0.09, 9],
		['centimeter', 0.095, 9.5],
		['kilometer', 1000, 1],
		['kilometer', 1200, 1.2],
	])('get metric value: %s - %s', (_, value, expected) => {
		const result = getMetricValue(value);
		expect(result).toBe(expected);
	});

	it.each([
		[0, 0],
		[1, 1],
		[1024, 1],
		[1500, 1.46484375],
		[1048576, 1],
		[1278541824, 1.19073486328125],
	])('get compact powers of two: %s', (value, expected) => {
		const result = getCompactPowersOfTwo(value);
		expect(result).toBe(expected);
	});
});
