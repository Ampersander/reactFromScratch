class Component {
	constructor() {
		this.id = this.constructor.name;
		this.props = {};
		this.state = {};
		this.previousState = {};
		this.previousProps = {};
		this.previousRender = undefined;
	}

	updateFleat() {
		var event = new Event('updateFleatDom');
		const app = document.getElementById('app');
		app.dispatchEvent(event, this.id);
	}
	
	setState(newState) {
		this.previousState = this.state;
		this.state = { ...this.previousState, ...newState };
		this.updateFleat();
		return this.updateDOM();
	}

	getState() {
		return this.state;
	}

	display(newProps) {
		this.previousProps = this.props;
		this.props = { ...this.previousProps, ...newProps };
		return this.updateDOM();
	}

	updateDOM() {
		const shouldUpdate = this.shouldUpdate();
		if (shouldUpdate || !this.previousRender) this.previousRender = this.render()
		return this.previousRender;
	}

	shouldUpdate() {
		JSON.stringify(this.previousState) === JSON.stringify(this.state);
		JSON.stringify(this.previousProps) === JSON.stringify(this.props);
		return true;
	}

	render() {
		return this;
	}
}

export default Component;
