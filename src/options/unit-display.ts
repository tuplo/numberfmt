import { rgUnitSystem, rgSpaceBetween } from '../helpers/regex';

type UnitDisplay = 'short' | 'narrow' | 'long';

function getUnitDisplay(format: string): UnitDisplay {
  if (rgUnitSystem.test(format) && !rgSpaceBetween.test(format)) {
    return 'narrow';
  }

  return 'short';
}

export default getUnitDisplay;
