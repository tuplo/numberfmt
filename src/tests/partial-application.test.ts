import nf from "../index";

describe("partial applications", () => {
	it.each([
		[2, "0.000", "2.000"],
		[3_000, "0,000", "3,000"],
		[5_000, "0B", "4.88kB"],
	])("partially applies format, then values: %s", (value, format, expected) => {
		const fmt = nf.partial(format);
		const result = fmt(value);
		expect(result).toBe(expected);
	});
});
