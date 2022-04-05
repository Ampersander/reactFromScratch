function getProp(obj, keys) {
	let value = obj;
	for (keys of keys) { value = value[keys]; }
	return value;
}

export default String.prototype.interpolate = function (props) {
	const tags = { 'start': '{{', 'end': '}}', 'delimiter': '.' , 'escape': '\\' };
	let template = this;
	while (template.indexOf(tags.start) > 0) {
		const start = template.indexOf(tags.start);
		const end = template.indexOf(tags.end);
		const path = template.substring(start + tags.start.length, end);
		const keys = path.trim().split(tags.delimiter);
		const toReplace = template.substring(start, end + tags.end.length);
		const value = getProp(props, keys);
		template = template.replace(toReplace, value);
	}

	return template;
}
