import { rgSpaceBetween } from "../helpers/regex";

function getSuffixes(locale: string) {
	switch (locale) {
		case "en-GB":
		default:
			return new Map([
				["one", "st"],
				["two", "nd"],
				["few", "rd"],
				["other", "th"],
			]);
	}
}

interface IFormatOrdinalParams {
	value: number;
	formatted: string;
	locale: string;
	format: string;
}

export function formatOrdinal(params: IFormatOrdinalParams) {
	const { value, formatted, locale, format } = params;
	const pluralRules = new Intl.PluralRules(locale, {
		type: "ordinal",
	});

	const rule = pluralRules.select(value);
	const suffix = getSuffixes(locale).get(rule);

	return rgSpaceBetween.test(format)
		? `${formatted} ${suffix}`
		: `${formatted}${suffix}`;
}
