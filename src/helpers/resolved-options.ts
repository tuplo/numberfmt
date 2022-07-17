export interface NumberTimeResolvedOptions {
	locale: string;
	numberingSystem: string;
}

export function getResolvedOptions(
	userOptions?: Partial<NumberTimeResolvedOptions>
) {
	const { locale: userLocale } = userOptions || {};
	const { locale, numberingSystem } = {
		...Intl.DateTimeFormat(userLocale).resolvedOptions(),
		...userOptions,
	};

	return { locale, numberingSystem };
}
