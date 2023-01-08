import { rgCurrency } from "../helpers/regex";

export function getCurrency(format: string) {
	const [, currency] = format.match(rgCurrency) || [""];
	return currency || undefined;
}
