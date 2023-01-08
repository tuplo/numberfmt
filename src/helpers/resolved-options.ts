import type { INumberTimeResolvedOptions } from "src/numberfmt.d";

export function getResolvedOptions(
	userOptions?: Partial<INumberTimeResolvedOptions>
) {
	const { locale: userLocale } = userOptions || {};
	const { locale, numberingSystem } = {
		...Intl.DateTimeFormat(userLocale).resolvedOptions(),
		...userOptions,
	};

	return { locale, numberingSystem };
}
