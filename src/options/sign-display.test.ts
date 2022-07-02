import { getSignDisplay } from './sign-display';

describe('format sign display', () => {
	it.each([
		['0,0', 'auto'],
		['+0,0', 'exceptZero'],
		['-0,0', 'auto'],
		['(0)', 'never'],
		['0,0.0', 'auto'],
		['+0,0.0', 'exceptZero'],
		['-0,0.0', 'auto'],
		['(0,0.0)', 'never'],
	])('sign display: %s = %s', (format, expected) => {
		const result = getSignDisplay(format);
		expect(result).toBe(expected);
	});
});
