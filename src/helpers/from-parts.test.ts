import { fromParts } from './from-parts';

describe('from parts', () => {
	it.each([
		[
			'percentage',
			[
				{ type: 'integer', value: '100' },
				{ type: 'percentSign', value: '%' },
			],
			{ integer: ['100'], percentSign: '%' },
		],
		[
			'grouped integers',
			[
				{ type: 'integer', value: '2' },
				{ type: 'group', value: ',' },
				{ type: 'integer', value: '000' },
			],
			{ integer: ['2', '000'], group: ',' },
		],
	])('converts from parts to object: %s', (_, parts, expected) => {
		const result = fromParts(parts as Intl.NumberFormatPart[]);
		expect(result).toStrictEqual(expected);
	});
});
