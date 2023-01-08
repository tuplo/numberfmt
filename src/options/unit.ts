import {
	rgUnitSystem,
	rgBitSystem,
	rgByteSystem,
	rgMetricSystem,
	rgKiloSystem,
} from "../helpers/regex";

type IBit = "bit" | "kilobit" | "megabit" | "gigabit" | "terabit";

type IByte =
	| "byte"
	| "kilobyte"
	| "megabyte"
	| "gigabyte"
	| "terabyte"
	| "petabyte";

type IMetric = "millimeter" | "centimeter" | "meter" | "kilometer";

type IKilo = "gram" | "kilogram";

type IUnit = IBit | IByte | IMetric | IKilo;

export function getUnitFromPowerOfTwo(
	value: number,
	units: (IBit | IByte)[]
): IBit | IByte {
	const idx = Math.floor(Math.log(value) / Math.log(1024));
	return units[idx];
}

export function getMetricUnit(value: number): IMetric {
	const absValue = Math.abs(value);

	if (absValue > 999.9999) return "kilometer";
	if (absValue >= 0.01 && absValue <= 0.0999) return "centimeter";
	if (absValue >= 0.001 && absValue <= 0.00999) return "millimeter";

	return "meter";
}

export function getKiloUnit(value: number): IKilo {
	const absValue = Math.abs(value);

	if (absValue >= 0.001 && absValue <= 0.00999) return "gram";

	return "kilogram";
}

export function getUnit(value: number, format: string): IUnit | undefined {
	if (!rgUnitSystem.test(format)) return undefined;

	if (rgMetricSystem.test(format)) return getMetricUnit(value);
	if (rgKiloSystem.test(format)) return getKiloUnit(value);

	if (rgBitSystem.test(format))
		return getUnitFromPowerOfTwo(value, [
			"bit",
			"kilobit",
			"megabit",
			"gigabit",
			"terabit",
		]);

	if (rgByteSystem.test(format))
		return getUnitFromPowerOfTwo(value, [
			"byte",
			"kilobyte",
			"megabyte",
			"gigabyte",
			"terabyte",
			"petabyte",
		]);

	return undefined;
}
