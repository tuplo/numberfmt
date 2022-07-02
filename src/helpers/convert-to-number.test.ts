import { convertToNumber } from './convert-to-number';

describe('convert to number', () => {
	it.each([
		[undefined, null],
		[null, null],
		[{}, null],
		[[], null],
		[[1_234], 1_234],
		[[1_234, 5_678], null],
		['abc', null],
		['1234', 1_234],
		[1_234, 1_234],
	])('converts from user input to number', (userInput, expected) => {
		const result = convertToNumber(userInput);
		expect(result).toBe(expected);
	});
});
