import nf from '.';

describe('numberfmt', () => {
	it('has default format', () => {
		const result = nf(123_456);
		const expected = '123,456';
		expect(result).toBe(expected);
	});

	it.each([
		[undefined, ''],
		[null, ''],
		[{}, ''],
		[[], ''],
		[[1_234], '1,234'],
		[[1_234, 5_678], ''],
		['abc', ''],
		['1234', '1,234'],
		[1_234, '1,234'],
	])('handles non numeric values: %s', (value, expected) => {
		const result = nf(value, '0,0');
		expect(result).toBe(expected);
	});

	it.each([
		['en-GB', '123,456.79'],
		['id-ID', '123.456,79'],
		['ar-EG', '١٢٣٬٤٥٦٫٧٩'],
	])('accepts a user locale: %s', (locale, expected) => {
		const result = nf(123_456.789, '0,0.00', { locale });
		expect(result).toBe(expected);
	});

	it('accepts a user locale (currencies): %s', () => {
		const result = nf(123_456.789, '0,0.00IDRs', { locale: 'id-ID' });
		const expected = 'Rp 123.456,79';
		expect(result).toBe(expected);
	});
});
