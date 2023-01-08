import nf from "..";

describe("ordinals", () => {
	it.each([
		["0o", "0th", 0],
		["0o", "1st", 1],
		["0o", "2nd", 2],
		["0o", "3rd", 3],
		["0o", "4th", 4],
		["0,0.000o", "1,234.560th", 1_234.56],
		["0 o", "0 th", 0],
		["0 o", "1 st", 1],
		["0 o", "2 nd", 2],
		["0 o", "3 rd", 3],
		["0 o", "4 th", 4],
		["0,0.000 o", "1,234.560 th", 1_234.56],
	])("ordinals: %s = %s", (format, expected, value) => {
		const result = nf(value, format);
		expect(result).toBe(expected);
	});
});
