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
    var event = new Event("updateFleatDom");
    const app = document.getElementById("app");
    app.dispatchEvent(event, this.id);
  }

  setState(newState) {
    this.previousState = this.state;
    this.state = { ...this.previousState, ...newState };
    this.updateFleat();
    return this.updateDOM(null, newState);
  }

  getState() {
    return this.state;
  }

  display(newProps) {
    if (this.shouldUpdate(newProps)) {
      if (newProps !== null) {
        this.props = newProps;
      }
      this.rendered = this.render();

      if (this.props && this.props.children) {
				for (const child in this.props.children) {
					child.display(child.props);
        }
      }
    }
    return this.rendered;
  }

  updateDOM(newState) {
    const shouldUpdate = this.shouldUpdate(newState);
    if (shouldUpdate || !this.previousRender)
      this.previousRender = this.render();
    return this.previousRender;
  }

  shouldUpdate(newProps, newState) {
    console.log(newProps), newState;
    return (
      this.state !== newState || this.props !== newProps
    );
  }

  render() {}
}

export default Component;
