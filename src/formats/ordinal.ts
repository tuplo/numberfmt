import { rgSpaceBetween } from '../helpers/regex';

function getSuffixes(locale: string): Map<string, string> {
  switch (locale) {
    case 'en-GB':
    default:
      return new Map([
        ['one', 'st'],
        ['two', 'nd'],
        ['few', 'rd'],
        ['other', 'th'],
      ]);
  }
}

type FormatOrdinalParams = {
  value: number;
  formatted: string;
  locale: string;
  format: string;
};

function formatOrdinal(params: FormatOrdinalParams): string {
  const { value, formatted, locale, format } = params;
  const pluralRules = new Intl.PluralRules(locale, {
    type: 'ordinal',
  });

  const rule = pluralRules.select(value);
  const suffix = getSuffixes(locale).get(rule);

  return rgSpaceBetween.test(format)
    ? `${formatted} ${suffix}`
    : `${formatted}${suffix}`;
}

export default formatOrdinal;
