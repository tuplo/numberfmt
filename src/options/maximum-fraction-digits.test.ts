import { getMaximumFractionDigits } from "./maximum-fraction-digits";

describe("maximum fraction digits", () => {
	it.each([
		[".0", 1, 1],
		["0.0", 1, 1],
		[".00", 1, 2],
		["0.00", 1, 2],
		["0[.]000", 1, 3],
		["0[.]00", 1.001, 2],
		["0[.]00[0]", 1.23, 3],
		["0[.]00[0]", 1.234, 3],
	])("gets maximum fraction digits - %s", (format, value, expected) => {
		const result = getMaximumFractionDigits(value, format);
		expect(result).toBe(expected);
	});

	it.each([
		["0b", 1_200, 2],
		["0B", 1_200, 2],
		["0m", 1_200, 2],
	])("fraction digits on unit systems: %s", (format, value, expected) => {
		const result = getMaximumFractionDigits(value, format);
		expect(result).toBe(expected);
	});
});
