import { rgFractionDigits, rgRequiredDigits, rgOptionalDigits } from './regex';

export function getFractionDigits(format: string): [number, number] {
	const [digits] = rgFractionDigits.exec(format) || [''];
	const [required] = rgRequiredDigits.exec(digits) || [''];
	const [, optional] = rgOptionalDigits.exec(digits) || ['', ''];

	return [required.length, optional.length];
}
