import { rgIsCompact, rgIsScientific, rgIsEngineering } from '../helpers/regex';

type Notation = 'standard' | 'scientific' | 'engineering' | 'compact';

export function getNotation(format: string): Notation {
	if (rgIsCompact.test(format)) return 'compact';
	if (rgIsScientific.test(format)) return 'scientific';
	if (rgIsEngineering.test(format)) return 'engineering';

	return 'standard';
}
