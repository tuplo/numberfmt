import nf from "./index";

describe("bug reports", () => {
	it("shows mismatched values between nodejs and browser", () => {
		const value = 47_939;
		const actual = nf(value, "0.0a");

		// const expected = '48K'; //  chrome, firefox
		const expected = "47.9K"; // nodejs
		expect(actual).toBe(expected);
	});

	it("respect number of fraction digits", () => {
		const value = 123.4;
		const actual = nf(value, "0.00[0]");

		const expected = "123.40";
		expect(actual).toBe(expected);
	});

	it("respect number of fraction digits using short notation", () => {
		const actual = nf(6_500, "0.0a");

		const expected = "6.5K";
		expect(actual).toBe(expected);
	});
});
