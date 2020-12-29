import { rgCurrencyFormat, rgUnitSystem } from '../helpers/regex';

type Style = 'decimal' | 'currency' | 'percent' | 'unit';

function getStyle(format: string): Style {
  if (rgCurrencyFormat.test(format)) return 'currency';
  if (rgUnitSystem.test(format)) return 'unit';
  if (format.includes('%')) return 'percent';

  return 'decimal';
}

export default getStyle;
