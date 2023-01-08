import {
	rgIntegerDigits,
	rgNotationFormat,
	rgZerosOnTheLeft,
} from "../helpers/regex";
import { getIntegerDigitsOnFormat } from "../helpers/integer-digits-on-format";
import { getDigitsFormat } from "../helpers/digits-format";

export function getMinimumIntegerDigits(value: number, format: string) {
	const digitsFormat = getDigitsFormat(format);
	if (digitsFormat === "0,000") return undefined;
	if (rgNotationFormat.test(format || "")) return undefined;

	const integersInFormat = getIntegerDigitsOnFormat(digitsFormat);
	const strValue = value.toString();
	const [integersInValue] = rgIntegerDigits.exec(strValue) || [""];
	const [zerosInLeft] = rgZerosOnTheLeft.exec(strValue) || [""];

	return (
		Math.max(integersInFormat, integersInValue.length - zerosInLeft.length) ||
		undefined
	);
}
