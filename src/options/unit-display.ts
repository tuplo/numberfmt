import { rgUnitSystem, rgSpaceBetween } from "../helpers/regex";

type IUnitDisplay = "short" | "narrow" | "long";

export function getUnitDisplay(format: string): IUnitDisplay {
	if (rgUnitSystem.test(format) && !rgSpaceBetween.test(format)) {
		return "narrow";
	}

	return "short";
}
