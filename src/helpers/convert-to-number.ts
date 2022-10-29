export function convertToNumber(userInput: unknown) {
	if (userInput === null) return null;
	if (Array.isArray(userInput) && userInput.length === 0) return null;
	const userValue = Number(userInput);
	if (Number.isNaN(userValue)) return null;

	return Number(userInput);
}
