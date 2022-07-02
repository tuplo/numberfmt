import nf from '..';

describe('numeric formatting', () => {
	it.each([
		['0.0', 1, '1.0'],
		['0.00', 1.23, '1.23'],
		['0.00', 1.2345, '1.23'],
		['0.00', 1.2, '1.20'],
		['0.00000', 0.23, '0.23000'],
		['0[.]00', 1.23, '1.23'],
		['0[.]000', 1.23, '1.230'],
		['0[.]0000', 1, '1'],
		['0.00', -1.234, '-1.23'],
		['0[.]00', -1, '-1'],
		['0[.]00', -1.234, '-1.23'],
		['0[.]00', 10_000.1, '10000.10'],
		['0[.]00', 10_000.123, '10000.12'],
		['0[.]00', 10_000.456, '10000.46'],
		['0[.]00', 10_000.001, '10000.00'],
		['0[.]00[0]', 10_000.45, '10000.45'],
		['0[.]00[0]', 10_000.451, '10000.451'],
		['0[.]00[0]', 10_000.456, '10000.456'],
		['0[.]00[00]', 10_000.234, '10000.234'],
		['0[.]00[00]', 10_000.2345, '10000.2345'],
		['0,0.00', 123_456, '123,456.00'],
	])('formats fraction digits: %s', (format, value, expected) => {
		const result = nf(value, format);
		expect(result).toBe(expected);
	});

	it.each([
		['0', 1_000, '1000'],
		['0.0', 1, '1.0'],
		['0,0', 1_000, '1,000'],
		['000', 1, '001'],
		['000', 10_000, '10000'],
		['.00', 0.23, '.23'],
		['.00', 1.23, '1.23'],
		['.00', 1_000.23, '1000.23'],
		['.0', 0, '.0'],
	])('formats integer digits: %s', (format, value, expected) => {
		const result = nf(value, format);
		expect(result).toBe(expected);
	});
});
