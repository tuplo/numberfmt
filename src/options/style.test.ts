import { getStyle } from "./style";

describe("get style", () => {
	it.each([
		["0.0", "decimal"],
		["0.0GBP", "currency"],
		["0.0GBPs", "currency"],
		["0.0GBPc", "currency"],
		["0.0GBPn", "currency"],
		["0.0%", "percent"],
	])("style: $s = $s", (format, expected) => {
		const result = getStyle(format);
		expect(result).toBe(expected);
	});
});
