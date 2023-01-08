import { rgSpaceBetween } from "../helpers/regex";
import { fromParts } from "../helpers/from-parts";

interface IFormatPercentageParams {
	format: string;
	numberFormatter: Intl.NumberFormat;
	value: number;
}

export function formatPercentage(params: IFormatPercentageParams) {
	const { value, numberFormatter, format } = params;
	const { minusSign, integer, group, decimal, fraction, percentSign } =
		fromParts(numberFormatter.formatToParts(value));

	return [
		minusSign,
		(integer as string[]).join((group as string) || ""),
		decimal,
		fraction,
		rgSpaceBetween.test(format) && " ",
		percentSign,
	]
		.filter(Boolean)
		.join("");
}
