import { rgIntegerDigitsOnFormat } from './regex';

export function getIntegerDigitsOnFormat(format: string) {
	const [integersInFormat] = rgIntegerDigitsOnFormat.exec(format) || [''];
	return integersInFormat.length;
}
