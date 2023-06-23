
export function isDark(color: string) {
	const c = color.charAt(0) === '#' ? color.substring(1, 7) : color;
	const r = parseInt(c.substring(0, 2), 16); // hexToR
	const g = parseInt(c.substring(2, 4), 16); // hexToG
	const b = parseInt(c.substring(4, 6), 16); // hexToB
	return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? false : true;
}
