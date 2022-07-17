import { getResolvedOptions } from './resolved-options';

describe('getResolvedOptions', () => {
	it('should return resolved options', () => {
		const actual = getResolvedOptions();
		const expected = {
			locale: 'en-GB',
			numberingSystem: 'latn',
		};
		expect(actual).toStrictEqual(expected);
	});

	it("bases on user's locale", () => {
		const userOptions = { locale: 'ar-EG' };
		const actual = getResolvedOptions(userOptions);
		const expected = {
			locale: 'ar-EG',
			numberingSystem: 'arab',
		};
		expect(actual).toStrictEqual(expected);
	});

	it('user options overrides system defaults', () => {
		const userOptions = {
			numberingSystem: 'arab',
			locale: 'id-ID',
		};
		const actual = getResolvedOptions(userOptions);
		expect(actual).toStrictEqual(userOptions);
	});
});
