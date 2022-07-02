import { convertToNumber } from './helpers/convert-to-number';
import { getCompactDisplay } from './options/compact-display';
import { getCurrency } from './options/currency';
import { getCurrencyDisplay } from './options/currency-display';
import { getCurrencySign } from './options/currency-sign';
import { getMaximumFractionDigits } from './options/maximum-fraction-digits';
import { getMinimumFractionDigits } from './options/minimum-fraction-digits';
import { getMinimumIntegerDigits } from './options/minimum-integer-digits';
import { getNotation } from './options/notation';
import { getSignDisplay } from './options/sign-display';
import { getStyle } from './options/style';
import { getUnit } from './options/unit';
import { getUnitDisplay } from './options/unit-display';

import { formatOrdinal } from './formats/ordinal';
import { formatPercentage } from './formats/percentage';

import { getIntegerDigitsOnFormat } from './helpers/integer-digits-on-format';
import { getDigitsFormat } from './helpers/digits-format';
import {
	rgZerosOnTheLeft,
	rgOrdinalFormat,
	rgHasParentheses,
} from './helpers/regex';
import { getValue } from './helpers/value';

function numberfmt(userInput: unknown, userFormat?: string): string {
	const userValue = convertToNumber(userInput);
	if (userValue === null) return '';

	// default format
	const format = userFormat || '0,0';

	const { locale, numberingSystem } = Intl.DateTimeFormat().resolvedOptions();
	const digitsFormat = getDigitsFormat(format);

	// convert user value to computed values (bits, bytes, metric)
	const value = getValue(userValue, format);

	const options = {
		compactDisplay: getCompactDisplay(format),
		currency: getCurrency(format),
		currencyDisplay: getCurrencyDisplay(format),
		currencySign: getCurrencySign(format),
		maximumFractionDigits: getMaximumFractionDigits(value, format),
		minimumFractionDigits: getMinimumFractionDigits(value, format),
		minimumIntegerDigits: getMinimumIntegerDigits(value, format),
		notation: getNotation(format),
		numberingSystem,
		signDisplay: getSignDisplay(format),
		style: getStyle(format),
		useGrouping: digitsFormat.includes(','),
		unit: getUnit(userValue, format),
		unitDisplay: getUnitDisplay(format),
	};

	const nf = new Intl.NumberFormat(locale, options);
	let n = nf.format(value);

	// remove zeros from '0.12'
	if (getIntegerDigitsOnFormat(digitsFormat) === 0) {
		n = n.replace(rgZerosOnTheLeft, '');
	}
	// percentage with spaces before symbol
	if (format.includes('%')) {
		n = formatPercentage({ value, numberFormatter: nf, format });
	}
	// ordinals
	if (rgOrdinalFormat.test(format)) {
		n = formatOrdinal({ value, formatted: n, format, locale });
	}
	// add parentheses when not currency
	if (rgHasParentheses.test(format) && value < 0) {
		n = `(${n})`;
	}

	return n;
}

// Partial application for functional programming
numberfmt.partial = (format: string) => (userValue: number) =>
	numberfmt(userValue, format);

export default numberfmt;
