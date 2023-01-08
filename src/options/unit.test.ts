import { getUnitFromPowerOfTwo, getMetricUnit, getUnit } from "./unit";

describe("get unit", () => {
	it.each([
		["bit", 1],
		["kilobit", 1_024],
		["kilobit", 1_024 + 100],
		["kilobit", 1_024 * 1_024 - 100],
		["megabit", 1_024 * 1_024],
		["gigabit", 1_024 * 1_024 * 1_024],
		["terabit", 1_024 * 1_024 * 1_024 * 1_024],
	])("unit for power of twos (bits): %s - %s", (expected, value) => {
		const result = getUnitFromPowerOfTwo(value, [
			"bit",
			"kilobit",
			"megabit",
			"gigabit",
			"terabit",
		]);
		expect(result).toBe(expected);
	});

	it.each([
		["byte", 1],
		["kilobyte", 1_024],
		["kilobyte", 1_024 + 100],
		["kilobyte", 1_024 * 1_024 - 100],
		["megabyte", 1_024 * 1_024],
		["gigabyte", 1_024 * 1_024 * 1_024],
		["terabyte", 1_024 * 1_024 * 1_024 * 1_024],
		["petabyte", 1_024 * 1_024 * 1_024 * 1_024 * 1_024],
	])("unit for power of twos (bits): %s - %s", (expected, value) => {
		const result = getUnitFromPowerOfTwo(value, [
			"byte",
			"kilobyte",
			"megabyte",
			"gigabyte",
			"terabyte",
			"petabyte",
		]);
		expect(result).toBe(expected);
	});

	it.each([
		["millimeter", 0.001],
		["centimeter", 0.01],
		["meter", 1],
		["kilometer", 1_000],
	])("metric value: %s - %s", (expected, value) => {
		const result = getMetricUnit(value);
		expect(result).toBe(expected);
	});

	it.each([
		["0b", "bit", 1],
		["0b", "kilobit", 1_024],
		["0B", "byte", 1],
		["0B", "kilobyte", 1_024],
	])("unit: %s = %s", (format, expected, value) => {
		const result = getUnit(value, format);
		expect(result).toBe(expected);
	});
});
