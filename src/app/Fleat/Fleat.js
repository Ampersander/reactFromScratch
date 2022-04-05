import Utils from './Utils.js';

export const FleatDOM = {
	render(elem, container) {
		if (elem && container) {
			container.appendChild(elem);
		}
	}
};

export const Fleat = {
	createElement({ id }, tag, props, ...children) {

		if (typeof tag === 'string') {
			const elem = document.createElement(tag);
			addAttributesToElement(elem, props);
			appendChildren(elem, props, ...children);
			return elem;
		} else {
			let FleatElement = handleComponent(id, tag);
			return FleatElement.display(props);
		}
	}
};

const history = {};
function handleComponent(id, node) {
	if (id in history && node.name in history[id]) {
		return history[id][node.name];
	} else {
		if (history[id] === undefined) history[id] = {};
		if (history[id][node.name] === undefined) history[id][node.name] = [];
		let FleatElement = new node();
		history[id][node.name] = FleatElement;
		return FleatElement;
	}
}

function addAttributesToElement(e, props) {
	for (let key in props) {
		if (key.startsWith('on')) {
			const event = key.substring(2).toLowerCase();
			e.addEventListener(event, props[key]);
		} else {
			e.setAttribute(key, props[key]);
		}
	}
}

function appendChildren(e, props, ...children) {
	for (let child of children) {
		if (child === null) return;
		const isTextChild = typeof child === 'string';
		const isObjectChild = typeof child === 'object';
		if (isTextChild) {
			const txt = document.createTextNode(child.interpolate(props));
			e.appendChild(txt);
		} else if (isObjectChild) {
			e.appendChild(child);
		}
	}
}
