import { rgCurrencyDisplay } from '../helpers/regex';

type CurrencyDisplay = 'symbol' | 'narrowSymbol' | 'code' | 'name';

function getCurrencyDisplay(format: string): CurrencyDisplay {
  const [, display] = format.match(rgCurrencyDisplay) || [''];
  switch (display) {
    case 's':
      return 'narrowSymbol';
    case 'c':
      return 'code';
    case 'n':
      return 'name';
    default:
      return 'symbol';
  }
}

export default getCurrencyDisplay;
