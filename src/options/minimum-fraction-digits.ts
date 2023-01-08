import { getDigitsFormat } from "../helpers/digits-format";
import { getFractionDigits } from "../helpers/fraction-digits";
import {
	rgFractionDigitsAreaOptional,
	rgOptionalDigits,
} from "../helpers/regex";

function handleOptionalDigits(value: number, digits: [number, number]) {
	const [required] = digits;

	return required;
}

export function getMinimumFractionDigits(value: number, format: string) {
	const digitsFormat = getDigitsFormat(format);
	const [required, optional] = getFractionDigits(digitsFormat);

	if (rgFractionDigitsAreaOptional.test(digitsFormat)) {
		const strNumber = value.toString();
		if (rgOptionalDigits.test(digitsFormat)) {
			return handleOptionalDigits(value, [required, optional]);
		}

		return strNumber.indexOf(".") > -1 ? required : 0;
	}

	return rgOptionalDigits.test(digitsFormat) ? required : required + optional;
}
