export function getVintageTag() {
	const tag = process.env.VINTAGE_TAG;
	if (!tag) {
		throw new Error(
			'Vintage tag not set! Check your environment variable.'
		);
	}
	return tag;
}

export function getExcludeTag() {
	const excludeTag = process.env.EXCLUDE_TAG;
	if (!excludeTag) {
		throw Error('Exclude tag not found in .env. Please set it!!');
	}
	return excludeTag;
}

export function getDisplayTag() {
	const displayTag = process.env.DISPLAY_TAG;
	if (!displayTag) {
		throw Error('Display tag not set. Check your .env');
	}
	return displayTag;
}
