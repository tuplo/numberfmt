import { rgIsCompact, rgIsScientific, rgIsEngineering } from '../helpers/regex';

type INotation = 'standard' | 'scientific' | 'engineering' | 'compact';

export function getNotation(format: string): INotation {
	if (rgIsCompact.test(format)) return 'compact';
	if (rgIsScientific.test(format)) return 'scientific';
	if (rgIsEngineering.test(format)) return 'engineering';

	return 'standard';
}
