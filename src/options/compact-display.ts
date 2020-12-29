import {
  rgIsShortCompactFormat,
  rgIsLongCompactFormat,
} from '../helpers/regex';

type CompactDisplay = 'short' | 'long' | undefined;

function getCompactDisplay(format: string): CompactDisplay {
  if (rgIsShortCompactFormat.test(format)) return 'short';
  if (rgIsLongCompactFormat.test(format)) return 'long';
  return undefined;
}

export default getCompactDisplay;
