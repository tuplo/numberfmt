type INumberParts = Record<Intl.NumberFormatPartTypes, string | string[]>;

export function fromParts(parts: Intl.NumberFormatPart[]) {
	return parts.reduce((acc, part) => {
		const { type, value } = part;
		if (type === "integer") {
			acc[type] = acc[type] || [];
			(acc[type] as string[]).push(value);
		} else {
			acc[type] = value;
		}
		return acc;
	}, {} as INumberParts);
}
