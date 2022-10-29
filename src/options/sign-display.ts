import { rgHasParentheses, rgStartsWithPlus } from '../helpers/regex';

type ISignDisplay = 'auto' | 'never' | 'exceptZero';

export function getSignDisplay(format: string): ISignDisplay | undefined {
	if (rgHasParentheses.test(format)) return 'never';
	if (rgStartsWithPlus.test(format)) return 'exceptZero';
	return 'auto';
}
