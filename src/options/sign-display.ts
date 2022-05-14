import { rgHasParentheses, rgStartsWithPlus } from '../helpers/regex';

type SignDisplay = 'auto' | 'never' | 'exceptZero';

export function getSignDisplay(format: string): SignDisplay | undefined {
  if (rgHasParentheses.test(format)) return 'never';
  if (rgStartsWithPlus.test(format)) return 'exceptZero';
  return 'auto';
}
