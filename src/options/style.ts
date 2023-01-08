import { rgCurrencyFormat, rgUnitSystem } from "../helpers/regex";

type IStyle = "decimal" | "currency" | "percent" | "unit";

export function getStyle(format: string): IStyle {
	if (rgCurrencyFormat.test(format)) return "currency";
	if (rgUnitSystem.test(format)) return "unit";
	if (format.includes("%")) return "percent";

	return "decimal";
}
