import nf from "..";

describe("exponential", () => {
	it.each([
		["0e", "1E0", 1],
		["0e", "1E1", 10],
		["0e", "1E2", 100],
		["0e", "1E3", 1_000],
		["0e", "1E4", 10_000],
		["0e", "1E6", 1_000_000],
		["0.0e", "1.2E7", 12_345_678],
	])("exponential (scientific): %s = %s", (format, expected, value) => {
		const result = nf(value, format);
		expect(result).toBe(expected);
	});

	it.each([
		["0E", "1E0", 1],
		["0E", "10E0", 10],
		["0E", "100E0", 100],
		["0E", "1E3", 1_000],
		["0E", "10E3", 10_000],
		["0E", "100E3", 100_000],
		["0E", "1E6", 1_000_000],
		["0.0E", "12.3E6", 12_345_678],
	])("exponential (engineering): %s = %s", (format, expected, value) => {
		const result = nf(value, format);
		expect(result).toBe(expected);
	});
});
